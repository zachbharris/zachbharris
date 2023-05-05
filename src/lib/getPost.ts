import notion, { NOTION_BLOG_DATABASE_ID } from "@/lib/notion";

export default async function getPost(type: 'page' | 'blocks', slug: string) {
  const page = await notion.databases.query({
    database_id: NOTION_BLOG_DATABASE_ID,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug
      },
    }
  })

  if (!page.results.length) {
    return null
  }

  const id = page.results[0].id

  if (type === 'blocks') {
    const post = await notion.blocks.children.list({
      block_id: id,
    })

    return post
  }

  const post = await notion.pages.retrieve({
    page_id: id
  })

  return post
}