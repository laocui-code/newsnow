/* eslint-disable */

declare module 'glob:./sources/{*.ts,**/index.ts}' {
  export const alibaba: typeof import('./sources/alibaba')
  export const anthropic: typeof import('./sources/anthropic')
  export const apple: typeof import('./sources/apple')
  export const arxiv: typeof import('./sources/arxiv')
  export const crewai: typeof import('./sources/crewai')
  export const github: typeof import('./sources/github')
  export const google: typeof import('./sources/google')
  export const huggingface: typeof import('./sources/huggingface')
  export const langchain: typeof import('./sources/langchain')
  export const meta: typeof import('./sources/meta')
  export const microsoft: typeof import('./sources/microsoft')
  export const newsletters: typeof import('./sources/newsletters')
  export const nvidia: typeof import('./sources/nvidia')
  export const observability: typeof import('./sources/observability')
  export const openai: typeof import('./sources/openai')
  export const solidot: typeof import('./sources/solidot')
  export const techmedia: typeof import('./sources/techmedia')
  export const vectordb: typeof import('./sources/vectordb')
}
