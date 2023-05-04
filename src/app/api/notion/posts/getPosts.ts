import notion, { NOTION_BLOG_DATABASE_ID } from "@/lib/notion"

export default async function getBlogPosts({ start_cursor, page_size = 5 }: { start_cursor?: string | null, page_size?: number } = {}) {
  const db = await notion.databases.query({
    database_id: NOTION_BLOG_DATABASE_ID,
    filter: {
      property: 'Active',
      checkbox: {
        equals: true
      }
    },
    sorts: [{ property: 'Published', direction: 'descending' }],
    page_size,
    start_cursor: start_cursor ?? undefined
  })

  return db
}