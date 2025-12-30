# AI Sources RSS & Source Type Mapping

This document maps each AI source defined in `shared/ai-sources.ts` to its source type and RSS/API endpoint.

## Source Type Categories

- **rss**: RSS feed source
- **scraping**: Web scraping required
- **github**: GitHub repository/changelog
- **github-search**: GitHub search API

---

## 1. LangChain

### langchain-framework
- **Type**: `rss`
- **RSS**: `https://github.com/langchain-ai/langchain/releases.atom`

### langchain-langgraph
- **Type**: `rss`
- **RSS**: `https://github.com/langchain-ai/langgraph/releases.atom`

### langchain-langfuse
- **Type**: `rss`
- **RSS**: `https://github.com/langfuse/langfuse/releases.atom`

---

## 2. OpenAI

### openai-news
- **Type**: `rss`
- **RSS**: `https://openai.com/news/rss.xml`

### openai-platform
- **Type**: `scraping`
- **URL**: `https://platform.openai.com/docs/changelog`

---

## 3. Anthropic

### anthropic-engineering
- **Type**: `rss`
- **RSS**: `https://rsshub.app/anthropic/engineering`

### anthropic-status
- **Type**: `rss`
- **RSS**: `https://status.claude.com/history.atom`

### anthropic-code
- **Type**: `github`
- **URL**: `https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md`

---

## 4. Google AI

### google-deepmind
- **Type**: `rss`
- **RSS**: `https://deepmind.google/blog/rss.xml`

### google-research
- **Type**: `rss`
- **RSS**: `https://research.google/blog/rss/`

---

## 5. Microsoft AI

### microsoft-autogen
- **Type**: `rss`
- **RSS**: `https://github.com/microsoft/autogen/releases.atom`

### microsoft-blog
- **Type**: `rss`
- **RSS**: `https://www.microsoft.com/en-us/ai/blog/feed/`

---

## 6. Meta AI

### meta-llamaindex
- **Type**: `rss`
- **RSS**: `https://github.com/run-llama/llama_index/releases.atom`

### meta-pytorch
- **Type**: `rss`
- **RSS**: `https://pytorch.org/feed.xml`

---

## 7. Hugging Face

### huggingface
- **Type**: `rss`
- **RSS**: `https://huggingface.co/blog/feed.xml`

---

## 8. Apple

### apple
- **Type**: `rss`
- **RSS**: `https://machinelearning.apple.com/rss.xml`

---

## 9. NVIDIA

### nvidia
- **Type**: `rss`
- **RSS**: `https://developer.nvidia.com/blog/feed`

---

## 10. Alibaba

### alibaba
- **Type**: `rss`
- **RSS**: `https://qwenlm.github.io/blog/index.xml`

---

## 11. CrewAI

### crewai
- **Type**: `rss`
- **RSS**: `https://github.com/CrewAIInc/crewAI/releases.atom`

---

## 12. Vector Databases

### vectordb-qdrant
- **Type**: `rss`
- **RSS**: `https://github.com/qdrant/qdrant/releases.atom`

### vectordb-weaviate
- **Type**: `rss`
- **RSS**: `https://github.com/weaviate/weaviate/releases.atom`

### vectordb-milvus
- **Type**: `rss`
- **RSS**: `https://github.com/milvus-io/milvus/releases.atom`

### vectordb-chroma
- **Type**: `rss`
- **RSS**: `https://github.com/chroma-core/chroma/releases.atom`

---

## 13. Observability & Evaluation

### observability-trulens
- **Type**: `rss`
- **RSS**: `https://github.com/truera/trulens/releases.atom`

### observability-phoenix
- **Type**: `rss`
- **RSS**: `https://github.com/Arize-ai/phoenix/releases.atom`

### observability-promptfoo
- **Type**: `rss`
- **RSS**: `https://github.com/promptfoo/promptfoo/releases.atom`

---

## 14. Tech Media

### techmedia-mittr
- **Type**: `rss`
- **RSS**: `https://www.technologyreview.com/feed`

### techmedia-theverge
- **Type**: `rss`
- **RSS**: `https://www.theverge.com/rss/index.xml`

### techmedia-techcrunch
- **Type**: `rss`
- **RSS**: `https://techcrunch.com/feed/`

### techmedia-venturebeat
- **Type**: `rss`
- **RSS**: `https://feeds.venturebeat.com/VentureBeat`

---

## 15. Academic & Research (arXiv)

### arxiv-ai
- **Type**: `rss`
- **RSS**: `http://arxiv.org/rss/cs.AI`

### arxiv-ml
- **Type**: `rss`
- **RSS**: `http://arxiv.org/rss/cs.LG`

### arxiv-cl
- **Type**: `rss`
- **RSS**: `http://arxiv.org/rss/cs.CL`

### arxiv-cv
- **Type**: `rss`
- **RSS**: `http://arxiv.org/rss/cs.CV`

### arxiv-statml
- **Type**: `rss`
- **RSS**: `http://arxiv.org/rss/stat.ML`

---

## 16. Newsletters

### newsletters-importai
- **Type**: `rss`
- **RSS**: `https://importai.substack.com/feed`

### newsletters-chinai
- **Type**: `rss`
- **RSS**: `https://chinai.substack.com/feed`

---

## 17. Chinese/Localized Sources

### solidot
- **Type**: `rss`
- **RSS**: `https://www.solidot.org/index.rss`

---

## 18. GitHub Discovery

### github-updated
- **Type**: `github-search`
- **API**: `https://api.github.com/search/repositories?q=topic:agents+language:Python+pushed:>{one_week_ago}&sort=updated&order=desc`
- **Description**: AI Agent repositories updated in the last week

### github-created
- **Type**: `github-search`
- **API**: `https://api.github.com/search/repositories?q=topic:agents+language:Python+created:>{one_week_ago}&sort=stars&order=desc`
- **Description**: AI Agent repositories created in the last week

---

## Implementation Notes

1. **RSS Sources**: Use `defineRSSSource()` helper from `server/utils/source.ts`
2. **Scraping Sources**: Implement custom fetcher with proper error handling
3. **GitHub Sources**: Can use GitHub API or parse changelog markdown
4. **GitHub Search**: Uses GitHub Search API with custom implementation (see `server/sources/github.ts`)

## Example Implementation

### RSS Source
```typescript
// In server/sources/langchain.ts
export default defineSource({
  "langchain-framework": defineRSSSource(
    "https://github.com/langchain-ai/langchain/releases.atom"
  ),
  "langchain-langgraph": defineRSSSource(
    "https://github.com/langchain-ai/langgraph/releases.atom"
  ),
})
```

### GitHub Search API Source
```typescript
// In server/sources/github.ts
import type { NewsItem } from "@shared/types"
import { defineSource } from "../utils/source"
import { myFetch } from "../utils/fetch"

const repositories = defineSource(async () => {
  const query = "topic:agents+language:Python"
  const url = `https://api.github.com/search/repositories?q=${query}&sort=updated&order=desc&per_page=20`

  const data = await myFetch(url, {
    headers: { Accept: "application/vnd.github.v3+json" },
  })

  return data.items.map(repo => ({
    id: `github-repo-${repo.id}`,
    title: `${repo.full_name} (⭐${repo.stargazers_count})`,
    url: repo.html_url,
    extra: { info: repo.description || repo.name },
    pubDate: new Date(repo.updated_at).getTime(),
  }))
})

export default defineSource({
  "github-repositories": repositories,
})
```
