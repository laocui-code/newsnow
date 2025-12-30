/**
 * AI Observability & Evaluation Tools
 * - Langfuse: LLM observability platform
 * - TruLens: TruEra's evaluation tool
 * - Arize Phoenix: Arize's observability
 * - promptfoo: Prompt testing framework
 */

import { defineRSSSource, defineSource } from "../utils/source"

export default defineSource({
  "observability-langfuse": defineRSSSource(
    "https://github.com/langfuse/langfuse/releases.atom",
  ),
  "observability-trulens": defineRSSSource(
    "https://github.com/truera/trulens/releases.atom",
  ),
  "observability-phoenix": defineRSSSource(
    "https://github.com/Arize-ai/phoenix/releases.atom",
  ),
  "observability-promptfoo": defineRSSSource(
    "https://github.com/promptfoo/promptfoo/releases.atom",
  ),
})
