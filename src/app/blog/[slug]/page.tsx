import { Client } from '@notionhq/client'
import { notFound } from 'next/navigation'
import Blocks from '../../../components/Blocks'
import { getBlocks } from '../../../lib/blocks'

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

  if (!page.results.length) {
    notFound()
  }

  const post = await notion.pages.retrieve({
    page_id: page.results[0].id
  })

  return post
}

async function Page({ params }) {
  const { slug } = params

  const post = await fetchPost(slug)
  const blocks = await getBlocks(post.id)

  return (
    <>
      <Blocks blocks={blocks} />
    </>
  )
}

export default Page