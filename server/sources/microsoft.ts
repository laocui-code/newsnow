/**
 * Microsoft AI Sources
 * - AutoGen: Multi-agent framework releases
 * - Blog: Microsoft AI Blog
 */

import { defineRSSSource, defineSource } from "../utils/source"

export default defineSource({
  "microsoft-autogen": defineRSSSource(
    "https://github.com/microsoft/autogen/releases.atom",
  ),
  "microsoft-blog": defineRSSSource(
    "https://www.microsoft.com/en-us/ai/blog/feed/",
  ),
})
