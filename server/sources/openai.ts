/**
 * OpenAI Sources
 * - News: Official OpenAI news and announcements
 * - Platform: Platform changelog (requires scraping)
 */

import * as cheerio from "cheerio"
import type { NewsItem } from "@shared/types"
import { defineRSSSource, defineSource } from "../utils/source"
import { myFetch } from "../utils/fetch"

// OpenAI News RSS
const news = defineRSSSource("https://openai.com/news/rss.xml")

// OpenAI Platform Changelog (scraping)
const platform = defineSource(async () => {
  const baseURL = "https://platform.openai.com"
  const html: any = await myFetch(`${baseURL}/docs/changelog`)
  const $ = cheerio.load(html)
  const news: NewsItem[] = []

  // Parse changelog entries
  $("article h2, article h3").each((_, el) => {
    const $el = $(el)
    const title = $el.text().trim()
    const id = $el.attr("id")

    if (id && title) {
      news.push({
        url: `${baseURL}/docs/changelog#${id}`,
        title,
        id,
      })
    }
  })

  return news.slice(0, 30)
})

export default defineSource({
  "openai-news": news,
  "openai-platform": platform,
})
