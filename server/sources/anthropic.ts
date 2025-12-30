/**
 * Anthropic (Claude) Sources
 * - Status: Service status updates
 *
 * Note: Anthropic blog doesn't have an official RSS feed
 * Consider using a web scraping solution or RSS generator service
 */

import { defineRSSSource, defineSource } from "../utils/source"

export default defineSource({
  "anthropic-status": defineRSSSource(
    "https://status.claude.com/history.atom",
  ),
})
