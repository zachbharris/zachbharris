import notion, { NOTION_BLOG_DATABASE_ID } from "./notion";

type Props = {
  slug?: string
  id?: string
}

export default async function getPage({ slug, id }: Props) {
  if (id) {
    const page = await notion.pages.retrieve({
      page_id: id,
    })

    return page
  } else if (slug) {
    const page = await notion.databases.query({
      database_id: NOTION_BLOG_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug
        },
      }
    })

    return page.results[0]
  } else {
    throw new Error('No slug or id provided')
  }
}