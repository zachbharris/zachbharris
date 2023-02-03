import { Client } from '@notionhq/client'
import { PageObjectResponse, TitlePropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { notFound } from 'next/navigation'
import Heading from '../../../components/Block/Heading'
import Blocks from '../../../components/Blocks'
import Text from '../../../components/Text'
import { getBlocks } from '../../../lib/blocks'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

const fetchPost = async (slug: string): Promise<PageObjectResponse> => {
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
  }) as PageObjectResponse

  return post
}

async function Page({ params }) {
  const { slug } = params

  const post = await fetchPost(slug)
  const blocks = await getBlocks(post.id)
  
  const coverURL = post.cover && post.cover.type === 'external' ? post.cover.external.url : undefined

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {coverURL ? <PostCover url={coverURL} /> : null}

      <div className='flex flex-col w-full max-w-lg justify-center'>
        <Blocks blocks={blocks} />
      </div>
    </div>
  )
}

export default Page

type PostCoverProps = {
  url: string
  alt?: string
}

function PostCover({ url, alt }: PostCoverProps) {
  return <img src={url} alt={alt} className="rounded-lg w-full max-w-2xl h-64 z-1 object-cover" />
}