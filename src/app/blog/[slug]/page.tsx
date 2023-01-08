import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

const fetchPost = async (slug: string) => {
  const database_id = process.env.NOTION_DATABASE_ID
  const page = await notion.databases.query({
    database_id,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug
      }
    }
  })

  const post = await notion.pages.retrieve({
    page_id: page.results[0].id
  })

  return post
}

async function Page({ params }) {
  const { slug } = params

  const post = await fetchPost(slug)

  console.log(JSON.stringify(post, null, 2))

  return <p>Post</p>
}

export default Page