/**
 * NVIDIA Developer Blog
 */

import { defineSource } from "../utils/source"
import { rss2json } from "../utils/rss2json"

export default defineSource(async () => {
  const data = await rss2json("https://developer.nvidia.com/blog/feed")
  if (!data?.items.length) throw new Error("Cannot fetch NVIDIA blog")

  return data.items.map(item => ({
    title: item.title,
    url: item.link,
    id: item.link,
    pubDate: item.created,
  }))
})
