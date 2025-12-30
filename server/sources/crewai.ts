/**
 * CrewAI - Multi-agent collaboration framework
 */

import { defineSource } from "../utils/source"
import { rss2json } from "../utils/rss2json"

export default defineSource(async () => {
  const data = await rss2json("https://github.com/CrewAIInc/crewAI/releases.atom")
  if (!data?.items.length) throw new Error("Cannot fetch CrewAI releases")

  return data.items.map(item => ({
    title: item.title,
    url: item.link,
    id: item.link,
    pubDate: item.created,
  }))
})
