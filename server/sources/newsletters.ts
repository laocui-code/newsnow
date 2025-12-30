/**
 * AI Newsletters
 * - Import AI (Jack Clark), ChinAI
 */

import { defineRSSSource, defineSource } from "../utils/source"

export default defineSource({
  "newsletters-importai": defineRSSSource(
    "https://importai.substack.com/feed",
  ),
  "newsletters-chinai": defineRSSSource(
    "https://chinai.substack.com/feed",
  ),
})
