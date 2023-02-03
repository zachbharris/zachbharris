import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Link from 'next/link'
import { getFileURL } from '../../lib/files'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

const fetchPosts = async () => {
  const database_id = process.env.NOTION_DATABASE_ID
  const response = await notion.databases.query({
    database_id,
    filter: {
      property: 'Slug',
      rich_text: {
        is_not_empty: true
      }
    }
  })

  return response
}

async function Page() {
  const posts = await fetchPosts()

  return (
    <div className="flex justify-center">
      <div className="flex p-4 w-full max-w-lg flex-col">
      {posts.results.map((post: PageObjectResponse) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default Page

type PostProps = {
  post: PageObjectResponse
}

function Post({ post }: PostProps) {
  const slug = post.properties['Slug'].type === 'rich_text'
    ? post.properties['Slug'].rich_text[0].plain_text
    : undefined

  if (!slug) return null

  const title = post.properties['Name'].type === 'title'
    ? post.properties['Name'].title[0].plain_text
    : undefined

  if (!title) return null

  return (
    <Link href={`/blog/${slug}`} className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </Link>
  )
}
