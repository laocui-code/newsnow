/**
 * GitHub Discovery
 * - Repository Search for AI Agents
 *
 * Uses GitHub Search API to discover trending AI agent repositories
 * Focuses on repos with specific topics, high stars, and recent activity
 */

import type { NewsItem } from "@shared/types"
import { defineSource } from "../utils/source"
import { myFetch } from "../utils/fetch"

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  stargazers_count: number
  updated_at: string
  created_at: string
  language: string
  topics: string[]
}

interface GitHubSearchResponse {
  total_count: number
  items: GitHubRepo[]
}

function getOneWeekAgo(): string {
  const date = new Date()
  date.setDate(date.getDate() - 7)
  return date.toISOString().split("T")[0]
}

// Recently Updated - AI Agents repos updated in the last week
const updated = defineSource(async () => {
  const oneWeekAgo = getOneWeekAgo()
  const query = `topic:agents+language:Python+pushed:>${oneWeekAgo}+stars:>500`
  const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`

  const data: GitHubSearchResponse = await myFetch(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })

  const news: NewsItem[] = data.items.map((repo, index) => ({
    id: `github-updated-${repo.id}`,
    title: `${repo.full_name} (⭐${repo.stargazers_count})`,
    url: repo.html_url,
    extra: {
      info: repo.description || repo.name,
    },
    // Use index to maintain the star-based order from API
    pubDate: Date.now() - index,
  }))

  return news.slice(0, 15)
})

// Recently Created - AI Agents repos created in the last week
const created = defineSource(async () => {
  const oneWeekAgo = getOneWeekAgo()
  const query = `topic:agents+language:Python+created:>${oneWeekAgo}+stars:>500`
  const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`

  const data: GitHubSearchResponse = await myFetch(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })

  const news: NewsItem[] = data.items.map((repo, index) => ({
    id: `github-created-${repo.id}`,
    title: `${repo.full_name} (⭐${repo.stargazers_count})`,
    url: repo.html_url,
    extra: {
      info: repo.description || repo.name,
    },
    // Use index to maintain the star-based order from API
    pubDate: Date.now() - index,
  }))

  return news.slice(0, 15)
})

export default defineSource({
  "github-updated": updated,
  "github-created": created,
})
