import type { NewsItem, SourceID, SourceResponse } from "@shared/types"
import { FilterFromMonday } from "@shared/consts"
import { getters } from "#/getters"
import { getCacheTable } from "#/database/cache"
import type { CacheInfo } from "#/types"

/**
 * Get the start of the most recent Monday at 00:00:00
 * @returns Timestamp of the most recent Monday
 */
function getMostRecentMonday(): number {
  const now = new Date()
  const dayOfWeek = now.getDay() // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  // Calculate days to subtract to get to Monday
  // If today is Sunday (0), go back 6 days
  // If today is Monday (1), go back 0 days
  // If today is Tuesday (2), go back 1 day, etc.
  const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1

  const monday = new Date(now)
  monday.setDate(now.getDate() - daysToSubtract)
  monday.setHours(0, 0, 0, 0) // Set to 00:00:00

  return monday.getTime()
}

/**
 * Filter news items to only show those from the current week (starting Monday)
 * @param items - Array of news items to filter
 * @returns Filtered array of news items
 */
function filterByDate(items: NewsItem[]): NewsItem[] {
  if (!FilterFromMonday) return items // No filtering if disabled

  const mondayTimestamp = getMostRecentMonday()

  return items.filter((item) => {
    // Get the date from either pubDate or extra.date
    const itemDate = item.pubDate || item.extra?.date

    // Keep items without a date (some sources may not have dates)
    if (!itemDate) return true

    // Convert to timestamp if it's a string
    const timestamp = typeof itemDate === "string"
      ? new Date(itemDate).getTime()
      : itemDate

    // Keep items from Monday onwards
    return timestamp >= mondayTimestamp
  })
}

export default defineEventHandler(async (event): Promise<SourceResponse> => {
  try {
    const query = getQuery(event)
    const latest = query.latest !== undefined && query.latest !== "false"
    let id = query.id as SourceID
    const isValid = (id: SourceID) => !id || !sources[id] || !getters[id]

    if (isValid(id)) {
      const redirectID = sources?.[id]?.redirect
      if (redirectID) id = redirectID
      if (isValid(id)) throw new Error("Invalid source id")
    }

    const cacheTable = await getCacheTable()
    // Date.now() in Cloudflare Worker will not update throughout the entire runtime.
    const now = Date.now()
    let cache: CacheInfo | undefined
    if (cacheTable) {
      cache = await cacheTable.get(id)
      if (cache) {
      // if (cache) {
        // interval 刷新间隔，对于缓存失效也要执行的。本质上表示本来内容更新就很慢，这个间隔内可能内容压根不会更新。
        // 默认 10 分钟，是低于 TTL 的，但部分 Source 的更新间隔会超过 TTL，甚至有的一天更新一次。
        // 但如果用户主动请求最新数据(latest)且已登录，应该跳过这个检查
        if (now - cache.updated < sources[id].interval) {
          // 如果有 latest 参数且用户已登录，跳过 interval 检查，继续往下走
          if (latest && (event.context.disabledLogin || event.context.user)) {
            // 继续往下执行，不返回缓存
          } else {
            return {
              status: "success",
              id,
              updatedTime: now,
              items: cache.items,
            }
          }
        }

        // 而 TTL 缓存失效时间，在时间范围内，就算内容更新了也要用这个缓存。
        // 复用缓存是不会更新时间的。
        if (now - cache.updated < TTL) {
          // 有 latest
          // 没有 latest，但服务器禁止登录

          // 没有 latest
          // 有 latest，服务器可以登录但没有登录
          if (!latest || (!event.context.disabledLogin && !event.context.user)) {
            return {
              status: "cache",
              id,
              updatedTime: cache.updated,
              items: cache.items,
            }
          }
        }
      }
    }

    try {
      const rawData = await getters[id]()
      const filteredData = filterByDate(rawData)
      const newData = filteredData.slice(0, 30)
      if (cacheTable && newData.length) {
        if (event.context.waitUntil) event.context.waitUntil(cacheTable.set(id, newData))
        else await cacheTable.set(id, newData)
      }
      logger.success(`fetch ${id} latest`)
      return {
        status: "success",
        id,
        updatedTime: now,
        items: newData,
      }
    } catch (e) {
      if (cache!) {
        return {
          status: "cache",
          id,
          updatedTime: cache.updated,
          items: cache.items,
        }
      } else {
        throw e
      }
    }
  } catch (e: any) {
    logger.error(e)
    throw createError({
      statusCode: 500,
      message: e instanceof Error ? e.message : "Internal Server Error",
    })
  }
})
