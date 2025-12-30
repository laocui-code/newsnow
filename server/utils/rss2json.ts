import { XMLParser } from "fast-xml-parser"
import type { RSSInfo } from "../types"

export async function rss2json(url: string): Promise<RSSInfo | undefined> {
  if (!/^https?:\/\/[^\s$.?#].\S*/i.test(url)) return

  // Fetch as text to avoid auto-parsing
  const data = await myFetch(url, {
    responseType: "text",
  })

  // Debug: check what we got
  if (!data || (typeof data === "string" && data.length === 0)) {
    console.error(`Failed to fetch RSS feed from ${url}: Empty response`)
    return undefined
  }

  // Debug: log data type and length
  const dataType = typeof data
  const dataLength = typeof data === "string" ? data.length : JSON.stringify(data).length
  console.log(`Fetched RSS from ${url}: type=${dataType}, length=${dataLength}`)

  const xml = new XMLParser({
    attributeNamePrefix: "",
    textNodeName: "$text",
    ignoreAttributes: false,
  })

  const result = xml.parse(data as string)

  let channel = result.rss && result.rss.channel ? result.rss.channel : result.feed
  if (Array.isArray(channel)) channel = channel[0]

  // Validate channel exists
  if (!channel) {
    console.error(`Failed to parse RSS feed from ${url}:`)
    console.error("Result structure:", JSON.stringify(result, null, 2).substring(0, 500))
    return undefined
  }

  const rss = {
    title: channel.title ?? "",
    description: channel.description ?? "",
    link: channel.link && channel.link.href ? channel.link.href : channel.link,
    image: channel.image ? channel.image.url : channel["itunes:image"] ? channel["itunes:image"].href : "",
    category: channel.category || [],
    updatedTime: channel.lastBuildDate ?? channel.updated,
    items: [],
  }

  let items = channel.item || channel.entry || []
  if (items && !Array.isArray(items)) items = [items]

  for (let i = 0; i < items.length; i++) {
    const val = items[i]
    if (!val) continue // Skip invalid items

    const media = {}

    // Helper function to safely get title
    const getTitle = () => {
      if (!val.title) return ""
      if (typeof val.title === "string") return val.title
      if (val.title.$text) return val.title.$text
      return ""
    }

    const obj = {
      id: val.guid && val.guid.$text ? val.guid.$text : val.id,
      title: getTitle(),
      description: val.summary && val.summary.$text ? val.summary.$text : val.description,
      link: val.link && val.link.href ? val.link.href : val.link,
      author: val.author && val.author.name ? val.author.name : val["dc:creator"],
      created: val.updated ?? val.pubDate ?? val.created,
      category: val.category || [],
      content: val.content && val.content.$text ? val.content.$text : val["content:encoded"],
      enclosures: val.enclosure ? (Array.isArray(val.enclosure) ? val.enclosure : [val.enclosure]) : [],
    };

    ["content:encoded", "podcast:transcript", "itunes:summary", "itunes:author", "itunes:explicit", "itunes:duration", "itunes:season", "itunes:episode", "itunes:episodeType", "itunes:image"].forEach((s) => {
      // @ts-expect-error TODO
      if (val[s]) obj[s.replace(":", "_")] = val[s]
    })

    if (val["media:thumbnail"]) {
      Object.assign(media, { thumbnail: val["media:thumbnail"] })
      obj.enclosures.push(val["media:thumbnail"])
    }

    if (val["media:content"]) {
      Object.assign(media, { thumbnail: val["media:content"] })
      obj.enclosures.push(val["media:content"])
    }

    if (val["media:group"]) {
      if (val["media:group"]["media:title"]) obj.title = val["media:group"]["media:title"]

      if (val["media:group"]["media:description"]) obj.description = val["media:group"]["media:description"]

      if (val["media:group"]["media:thumbnail"]) obj.enclosures.push(val["media:group"]["media:thumbnail"].url)

      if (val["media:group"]["media:content"]) obj.enclosures.push(val["media:group"]["media:content"])
    }

    Object.assign(obj, { media })

    // @ts-expect-error TODO
    rss.items.push(obj)
  }

  return rss
}
