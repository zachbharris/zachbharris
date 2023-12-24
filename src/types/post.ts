import type { MarkdownInstance } from 'astro' 

type PostFrontmatter = {
  title: string
  description: string
  publishDate: string
  tags: string[]
}

export type Post = MarkdownInstance<PostFrontmatter>

