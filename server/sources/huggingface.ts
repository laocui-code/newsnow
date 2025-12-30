/**
 * Hugging Face Blog
 */

import { defineSource } from "../utils/source"
import { rss2json } from "../utils/rss2json"

export default defineSource(async () => {
  const data = await rss2json("https://huggingface.co/blog/feed.xml")
  if (!data?.items.length) throw new Error("Cannot fetch Hugging Face blog")

  return data.items.map(item => ({
    title: item.title,
    url: item.link,
    id: item.link,
    pubDate: item.created,
  }))
})
