/**
 * LangChain Ecosystem Sources
 * - Framework: LangChain releases
 * - LangGraph: LangGraph releases
 */

export default defineSource({
  "langchain-framework": defineRSSSource(
    "https://github.com/langchain-ai/langchain/releases.atom",
  ),
  "langchain-langgraph": defineRSSSource(
    "https://github.com/langchain-ai/langgraph/releases.atom",
  ),
})
