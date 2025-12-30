# AI Agent & News Information Sources

## 1. LangChain
### LangChain Framework
```
RSS: https://github.com/langchain-ai/langchain/releases.atom
```

### LangGraph
```
RSS: https://github.com/langchain-ai/langgraph/releases.atom
```

### Langfuse (Observability)
```
RSS: https://github.com/langfuse/langfuse/releases.atom
```

---

## 2. OpenAI
### Platform Updates (Assistants/Tools/Realtime)
```
Docs:  https://platform.openai.com/docs/changelog
```

### OpenAI News & Blog
```
RSS: https://openai.com/news/rss.xml
```

---

## 3. Anthropic
### Code Repository Changelog
```
Docs: https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md
```

### Engineering Blog
```
RSS: https://rsshub.app/anthropic/engineering
```

### Service Status
```
RSS: https://status.claude.com/history.atom
```

---

## 4. Google
### DeepMind Blog
```
RSS: https://deepmind.google/blog/rss.xml
```

### Google Research Blog
```
RSS: https://research.google/blog/rss/
```

---

## 5. Microsoft
### AutoGen (Multi-Agent Framework)
```
RSS: https://github.com/microsoft/autogen/releases.atom
```

### Microsoft AI Blog
```
RSS: https://www.microsoft.com/en-us/ai/blog/feed/
```

---

## 6. Meta
### LlamaIndex (Agents/Memory/RAG)
```
RSS: https://github.com/run-llama/llama_index/releases.atom
```

### PyTorch
```
RSS: https://pytorch.org/feed.xml
```

---

## 7. Hugging Face
### Blog
```
RSS: https://huggingface.co/blog/feed.xml
```

---

## 8. Apple
### Machine Learning Research
```
RSS: https://machinelearning.apple.com/rss.xml
```

---

## 9. NVIDIA
### Developer Blog
```
RSS: https://developer.nvidia.com/blog/feed
```

---

## 10. Alibaba
### QwenLM Blog
```
RSS: https://qwenlm.github.io/blog/index.xml
```

---

## 11. CrewAI
### Multi-Agent Collaboration Framework
```
RSS: https://github.com/CrewAIInc/crewAI/releases.atom
```

---

## 12. Vector Databases

### Qdrant
```
RSS: https://github.com/qdrant/qdrant/releases.atom
```

### Weaviate
```
RSS: https://github.com/weaviate/weaviate/releases.atom
```

### Milvus
```
RSS: https://github.com/milvus-io/milvus/releases.atom
```

### Chroma
```
RSS: https://github.com/chroma-core/chroma/releases.atom
```

---

## 13. Observability & Evaluation Tools

### TruLens (TruEra)
```
RSS: https://github.com/truera/trulens/releases.atom
```

### Arize Phoenix
```
RSS: https://github.com/Arize-ai/phoenix/releases.atom
```

### promptfoo
```
RSS: https://github.com/promptfoo/promptfoo/releases.atom
```

---

## 14. Tech Media

### MIT Technology Review
```
RSS: https://www.technologyreview.com/feed
```

### The Verge (AI Coverage)
```
RSS: https://www.theverge.com/rss/index.xml
```

### TechCrunch (AI Keyword)
```
RSS: https://techcrunch.com/feed/
```

### VentureBeat
```
RSS: https://feeds.venturebeat.com/VentureBeat
```

---

## 15. Academic & Research

### arXiv - Artificial Intelligence
```
RSS: http://arxiv.org/rss/cs.AI
```

### arXiv - Machine Learning
```
RSS: http://arxiv.org/rss/cs.LG
```

### arXiv - Computation & Language (NLP)
```
RSS: http://arxiv.org/rss/cs.CL
```

### arXiv - Computer Vision
```
RSS: http://arxiv.org/rss/cs.CV
```

### arXiv - Statistics (Machine Learning)
```
RSS: http://arxiv.org/rss/stat.ML
```

---

## 16. Newsletters

### Import AI (Jack Clark)
```
RSS: https://importai.substack.com/feed
```

### ChinAI (China AI Ecosystem)
```
RSS: https://chinai.substack.com/feed
```

**Note:** Most Substack publications support RSS by appending `/feed` to their domain.

---

## 17. Chinese/Localized Sources

### Solidot (Tech & AI News)
```
RSS: https://www.solidot.org/index.rss
```

---

## 18. GitHub Discovery

### Repository & Release Search
Fast updates, low noise, recommended for email alerts or periodic fetching:

```
# Repository Search API
https://api.github.com/search/repositories?q=topic:agents+language:Python&sort=updated&order=desc

# Release Search API
https://api.github.com/search/repositories?q=topic:agent+in:topics+stars:%3E500&pushed:%3E2025-12-01&sort=updated

# Web Alternative
https://github.com/topics/agents?l=python&o=desc&s=stars
```

---

## Appendix: RSS Tools & Code Examples

### RSS Fetching Example (Python)

```python
import feedparser

FEED_URL = "https://github.blog/changelog/feed/"

def fetch_copilot_updates():
    feed = feedparser.parse(FEED_URL)

    print(f"Feed Title: {feed.feed.get('title', 'N/A')}")
    print(f"Total Entries: {len(feed.entries)}\n")

    keyword = "copilot"

    for entry in feed.entries:
        title = entry.get("title", "")
        link = entry.get("link", "")
        if keyword in title.lower():
            print(f"- {title}")
            print(f"  {link}\n")

if __name__ == "__main__":
    fetch_copilot_updates()
```

### Useful Tools
- **RSSHub**: https://docs.rsshub.app/ - Third-party aggregator for sites without official RSS
- **Kill-the-newsletter**: https://kill-the-newsletter.com/ - Convert email newsletters to RSS

### Notes
1. Some websites no longer offer public RSS feeds. Consider using RSSHub or similar tools for such cases.
2. RSS feeds are subject to change. Verify URLs periodically.
3. For newsletters without RSS, consider using Kill-the-newsletter or similar services.
4. GitHub releases can be monitored via `https://github.com/{owner}/{repo}/releases.atom`
