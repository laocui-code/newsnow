import { Interval } from "./consts"
import type { OriginSource } from "./types"

const Time = {
  Test: 1,
  Realtime: 2 * 60 * 1000,
  Fast: 5 * 60 * 1000,
  Default: Interval, // 10min
  Common: 30 * 60 * 1000,
  Slow: 60 * 60 * 1000,
}

/**
 * AI Agent & News Information Sources
 *
 * Note: This configuration file defines the metadata for AI-related sources.
 * The actual data fetching logic should be implemented in corresponding files
 * under server/sources/ directory.
 *
 * Source types and RSS URLs are documented in docs/sources.md
 */
export const aiSources = {
  // 1. LangChain Ecosystem
  langchain: {
    name: "LangChain",
    column: "release",
    color: "green",
    home: "https://github.com/langchain-ai/langchain",
    desc: "Framework for developing applications powered by language models",
    interval: Time.Common,
    sub: {
      framework: {
        title: "Framework",
        home: "https://github.com/langchain-ai/langchain",
      },
      langgraph: {
        title: "LangGraph",
        home: "https://github.com/langchain-ai/langgraph",
      },
    },
  },

  // 2. OpenAI
  openai: {
    name: "OpenAI",
    column: "tech",
    color: "emerald",
    home: "https://openai.com",
    desc: "OpenAI platform updates and news",
    interval: Time.Common,
    sub: {
      news: {
        title: "News",
        home: "https://openai.com/news",
      },
      platform: {
        title: "Platform",
        home: "https://platform.openai.com/docs/changelog",
      },
    },
  },

  // 3. Anthropic
  anthropic: {
    name: "Anthropic",
    column: "tech",
    color: "orange",
    home: "https://www.anthropic.com",
    desc: "Claude AI and research",
    interval: Time.Common,
    sub: {
      status: {
        title: "Service Status",
        home: "https://status.claude.com",
      },
    },
  },

  // 4. Google AI
  google: {
    name: "Google AI",
    column: "tech",
    color: "blue",
    home: "https://ai.google",
    desc: "Google AI research and products",
    interval: Time.Common,
    sub: {
      deepmind: {
        title: "DeepMind",
        home: "https://deepmind.google",
      },
      research: {
        title: "Research",
        home: "https://research.google",
      },
    },
  },

  // 5. Microsoft AI
  microsoft: {
    name: "Microsoft AI",
    column: "tech",
    color: "cyan",
    home: "https://www.microsoft.com/ai",
    desc: "Microsoft AI products and research",
    interval: Time.Common,
    sub: {
      autogen: {
        title: "AutoGen",
        home: "https://github.com/microsoft/autogen",
      },
      blog: {
        title: "AI Blog",
        home: "https://www.microsoft.com/en-us/ai/blog/",
      },
    },
  },

  // 6. Meta AI
  meta: {
    name: "Meta AI",
    column: "tech",
    color: "blue",
    home: "https://ai.meta.com",
    desc: "Meta AI products and research",
    interval: Time.Common,
    sub: {
      llamaindex: {
        title: "LlamaIndex",
        home: "https://github.com/run-llama/llama_index",
      },
      pytorch: {
        title: "PyTorch",
        home: "https://github.com/pytorch/pytorch",
      },
    },
  },

  // 7. Hugging Face
  huggingface: {
    name: "Hugging Face",
    column: "tech",
    color: "yellow",
    home: "https://huggingface.co",
    desc: "Machine learning model hub and blog",
    interval: Time.Common,
  },

  // 8. Apple
  apple: {
    name: "Apple ML",
    column: "tech",
    color: "gray",
    home: "https://machinelearning.apple.com",
    desc: "Apple Machine Learning Research",
    interval: Time.Common,
  },

  // 9. NVIDIA
  nvidia: {
    name: "NVIDIA",
    column: "tech",
    color: "green",
    home: "https://developer.nvidia.com",
    desc: "NVIDIA Developer Blog",
    interval: Time.Common,
  },

  // 10. Alibaba
  alibaba: {
    name: "Alibaba AI",
    column: "tech",
    color: "orange",
    home: "https://qwenlm.github.io",
    desc: "QwenLM and Alibaba AI",
    interval: Time.Common,
  },

  // 11. CrewAI
  crewai: {
    name: "CrewAI",
    column: "release",
    color: "purple",
    home: "https://github.com/CrewAIInc/crewAI",
    desc: "Multi-agent collaboration framework",
    interval: Time.Common,
  },

  // 12. Vector Databases
  vectordb: {
    name: "Vector DB",
    column: "release",
    color: "violet",
    home: "https://qdrant.tech",
    desc: "Vector database updates",
    interval: Time.Common,
    sub: {
      qdrant: {
        title: "Qdrant",
        home: "https://github.com/qdrant/qdrant",
      },
      weaviate: {
        title: "Weaviate",
        home: "https://github.com/weaviate/weaviate",
      },
      milvus: {
        title: "Milvus",
        home: "https://github.com/milvus-io/milvus",
      },
      chroma: {
        title: "Chroma",
        home: "https://github.com/chroma-core/chroma",
      },
    },
  },

  // 13. Observability & Evaluation
  observability: {
    name: "AI Observability",
    column: "release",
    color: "pink",
    home: "https://langfuse.com",
    desc: "AI observability and evaluation tools",
    interval: Time.Common,
    sub: {
      langfuse: {
        title: "Langfuse",
        home: "https://github.com/langfuse/langfuse",
      },
      trulens: {
        title: "TruLens",
        home: "https://github.com/truera/trulens",
      },
      phoenix: {
        title: "Arize Phoenix",
        home: "https://github.com/Arize-ai/phoenix",
      },
      promptfoo: {
        title: "promptfoo",
        home: "https://github.com/promptfoo/promptfoo",
      },
    },
  },

  // 14. Tech Media
  techmedia: {
    name: "Tech Media",
    column: "tech",
    color: "slate",
    home: "https://www.technologyreview.com",
    desc: "Technology news and coverage",
    interval: Time.Common,
    sub: {
      mittr: {
        title: "MIT Tech Review",
        home: "https://www.technologyreview.com",
      },
      theverge: {
        title: "The Verge",
        home: "https://www.theverge.com",
      },
      techcrunch: {
        title: "TechCrunch",
        home: "https://techcrunch.com",
      },
      venturebeat: {
        title: "VentureBeat",
        home: "https://venturebeat.com",
      },
    },
  },

  // 15. Academic & Research (arXiv)
  arxiv: {
    name: "arXiv",
    column: "tech",
    color: "red",
    home: "https://arxiv.org",
    desc: "Academic research papers",
    interval: Time.Slow,
    sub: {
      ai: {
        title: "Artificial Intelligence",
        home: "https://arxiv.org/list/cs.AI/recent",
      },
      ml: {
        title: "Machine Learning",
        home: "https://arxiv.org/list/cs.LG/recent",
      },
      cl: {
        title: "Comp & Language",
        home: "https://arxiv.org/list/cs.CL/recent",
      },
      cv: {
        title: "Computer Vision",
        home: "https://arxiv.org/list/cs.CV/recent",
      },
      statml: {
        title: "Statistics ML",
        home: "https://arxiv.org/list/stat.ML/recent",
      },
    },
  },

  // 16. Newsletters
  newsletters: {
    name: "AI Newsletters",
    column: "tech",
    color: "indigo",
    home: "https://importai.substack.com",
    desc: "Quality AI newsletters",
    interval: Time.Common,
    sub: {
      importai: {
        title: "Import AI",
        home: "https://importai.substack.com",
      },
      chinai: {
        title: "ChinAI",
        home: "https://chinai.substack.com",
      },
    },
  },

  // 17. Chinese/Localized Sources
  solidot: {
    name: "Solidot",
    column: "tech",
    color: "lime",
    home: "https://www.solidot.org",
    desc: "Technology and AI news",
    interval: Time.Common,
  },

  // 18. GitHub Discovery
  github: {
    name: "GitHub Discovery",
    column: "release",
    color: "gray",
    home: "https://github.com/topics/agents?l=python",
    desc: "Trending AI agent repositories",
    interval: Time.Common,
    sub: {
      updated: {
        title: "Recently Updated",
        home: "https://github.com/topics/agents?l=python&o=desc&s=updated",
      },
      created: {
        title: "Recently Created",
        home: "https://github.com/topics/agents?l=python&o=desc&s=",
      },
    },
  },
} as const satisfies Record<string, OriginSource>
