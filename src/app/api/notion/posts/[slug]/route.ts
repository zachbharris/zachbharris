import { NextRequest, NextResponse } from "next/server"
import getBlogPost from "@/lib/getPost"

import type { BaseContext } from "next/dist/shared/lib/utils"

export async function GET(req: NextRequest, context: BaseContext) {
  const slug = context.params.slug as string

  const post = await getBlogPost('blocks', slug)

  return NextResponse.json(post)
}