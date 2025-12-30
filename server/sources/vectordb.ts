/**
 * Vector Databases
 * - Qdrant, Weaviate, Milvus, Chroma
 */

import { defineRSSSource, defineSource } from "../utils/source"

export default defineSource({
  "vectordb-qdrant": defineRSSSource(
    "https://github.com/qdrant/qdrant/releases.atom",
  ),
  "vectordb-weaviate": defineRSSSource(
    "https://github.com/weaviate/weaviate/releases.atom",
  ),
  "vectordb-milvus": defineRSSSource(
    "https://github.com/milvus-io/milvus/releases.atom",
  ),
  "vectordb-chroma": defineRSSSource(
    "https://github.com/chroma-core/chroma/releases.atom",
  ),
})
