/**
 * Meta AI Sources
 * - LlamaIndex: LlamaIndex framework releases
 * - PyTorch: PyTorch GitHub releases
 */

import { defineRSSSource, defineSource } from "../utils/source"

export default defineSource({
  "meta-llamaindex": defineRSSSource(
    "https://github.com/run-llama/llama_index/releases.atom",
  ),
  "meta-pytorch": defineRSSSource(
    "https://github.com/pytorch/pytorch/releases.atom",
  ),
})
