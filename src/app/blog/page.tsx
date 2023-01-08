import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Link from 'next/link'
import { Suspense } from 'react'

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

  return (<>
  <p>Blog Posts</p>


    <Suspense fallback={<p>Loading...</p>}>
      {posts.results.map((post: PageObjectResponse) => {
        const properties = {
          title: '',
          slug: ''
        }

        for (const [key, value] of Object.entries(post.properties)) {
          switch (value.type) {
            case 'title': {
              properties.title = value.title[0].plain_text
              break
            }
            case 'rich_text': {
              if (key.toLowerCase() === 'slug' && value.rich_text.length > 0) {
                properties.slug = value.rich_text[0].plain_text
              }
              break
            }

          }
        }

        return (
          <Link href={`/blog/${properties.slug}`}>{properties.title}</Link>
        )
      })}
    </Suspense>
  </>)
}

export default Page