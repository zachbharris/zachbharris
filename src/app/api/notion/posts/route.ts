import { NextRequest, NextResponse } from "next/server"
import getBlogPosts from "./getPosts"

export async function GET(req: NextRequest) {
  const start_cursor = req.nextUrl.searchParams.get('cursor')

  const posts = await getBlogPosts({ start_cursor })

  return NextResponse.json(posts)
}