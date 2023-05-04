import getBlogPosts from "../getPosts"


export default async function getBlogPost(slug: string) {
  const db = await getBlogPosts()

  const post = db.results.find((post: any) => post.properties?.Slug.rich_text[0].plain_text === slug)

  return post
}