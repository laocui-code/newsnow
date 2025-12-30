/**
 * 缓存过期时间
 */
import packageJSON from "../package.json"

export const TTL = 30 * 60 * 1000
/**
 * 默认刷新间隔, 10 min
 */
export const Interval = 10 * 60 * 1000

/**
 * Enable filtering to show only items from the current week (starting Monday)
 * Set to false to disable filtering
 */
export const FilterFromMonday = true

export const Homepage = packageJSON.homepage

export const Version = packageJSON.version
export const Author = packageJSON.author
