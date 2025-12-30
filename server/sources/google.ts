/**
 * Google AI Sources
 * - DeepMind: DeepMind blog
 * - Research: Google Research blog
 */

import { defineRSSSource, defineSource } from "../utils/source"

export default defineSource({
  "google-deepmind": defineRSSSource(
    "https://deepmind.google/blog/rss.xml",
  ),
  "google-research": defineRSSSource(
    "https://research.google/blog/rss/",
  ),
})
