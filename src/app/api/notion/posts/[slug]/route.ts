import { NextRequest, NextResponse } from "next/server"
import getBlogPost from "@/lib/getPost"

import type { BaseContext } from "next/dist/shared/lib/utils"
import getBlocks from "@/lib/getBlocks"
import getPage from "@/lib/getPage"
import { isFullPage } from "@notionhq/client"
import { getPageDescription, getPageTitle } from "@/lib/getProperties"

export async function GET(req: NextRequest, context: BaseContext) {
  const slug = context.params.slug as string
  const id = context.params.id as string

  if (id) {
    const blocks = await getBlocks(id)

    return NextResponse.json({ blocks: blocks })
  } else if (slug) {
    const page = await getPage({ slug })
    const blocks = await getBlocks(page.id)

    let title = getPageTitle(page)
    let description = getPageDescription(page)
    let publishedAt

    if (isFullPage(page)) {
      if ('date' in page.properties.Published && page.properties.Published.date?.start) {
        publishedAt = page.properties.Published.date.start
      }
    }

    return NextResponse.json({ blocks: blocks, title, description, publishedAt })
  }
}