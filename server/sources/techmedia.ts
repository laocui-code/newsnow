/**
 * Tech Media Sources
 * - MIT Technology Review, The Verge, TechCrunch, VentureBeat
 */

import { defineRSSSource, defineSource } from "../utils/source"

export default defineSource({
  "techmedia-mittr": defineRSSSource(
    "https://www.technologyreview.com/feed",
  ),
  "techmedia-theverge": defineRSSSource(
    "https://www.theverge.com/rss/index.xml",
  ),
  "techmedia-techcrunch": defineRSSSource(
    "https://techcrunch.com/feed/",
  ),
  "techmedia-venturebeat": defineRSSSource(
    "https://venturebeat.com/feed/",
  ),
})
