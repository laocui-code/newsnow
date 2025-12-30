/**
 * Apple Machine Learning Research
 */

import { defineSource } from "../utils/source"
import { rss2json } from "../utils/rss2json"

export default defineSource(async () => {
  const data = await rss2json("https://machinelearning.apple.com/rss.xml")
  if (!data?.items.length) throw new Error("Cannot fetch Apple ML research")

  return data.items.map(item => ({
    title: item.title,
    url: item.link,
    id: item.link,
    pubDate: item.created,
  }))
})
