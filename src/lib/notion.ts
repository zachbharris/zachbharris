import { Client } from '@notionhq/client'

const auth = process.env.NOTION_API_KEY

if (!auth) {
  throw new Error('Notion token is required')
}

// Notion IDs
export const NOTION_WORK_DATABASE_ID = process.env.NOTION_WORK_DATABASE_ID ?? ""
export const NOTION_BLOG_DATABASE_ID = process.env.NOTION_DATABASE_ID ?? ""

// Notion Client
export const notion = new Client({ auth })
export default notion
