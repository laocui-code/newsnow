/**
 * arXiv Academic Research Papers
 * - AI, ML, CL (NLP), CV, Statistics ML
 */

import { defineRSSSource, defineSource } from "../utils/source"

export default defineSource({
  "arxiv-ai": defineRSSSource(
    "http://arxiv.org/rss/cs.AI",
  ),
  "arxiv-ml": defineRSSSource(
    "http://arxiv.org/rss/cs.LG",
  ),
  "arxiv-cl": defineRSSSource(
    "http://arxiv.org/rss/cs.CL",
  ),
  "arxiv-cv": defineRSSSource(
    "http://arxiv.org/rss/cs.CV",
  ),
  "arxiv-statml": defineRSSSource(
    "http://arxiv.org/rss/stat.ML",
  ),
})
