import { Client } from "@notionhq/client"
import { ListBlockChildrenResponse, TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints"
import { Blocks } from "../../../typings"

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export const getBlocks = async (blockId: string) => {
  const blocks: Blocks = []
  
  let has_more = true
  let start_cursor: string | undefined = undefined

  while (has_more) {
    const res: ListBlockChildrenResponse = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
      start_cursor
    })

    has_more = res.has_more
    start_cursor = res.next_cursor ? res.next_cursor : undefined
    blocks.push(...res.results)
  }

  return blocks
}

export const getAnnotationClassName = (text: TextRichTextItemResponse) => {
  const { annotations } = text

  const className = []
  const keys = Object.keys(annotations).filter(key => annotations[key])

  for (const key of keys) {
    switch (key) {
      default:
        continue
      case 'bold':
        className.push('font-bold')
        break
      case 'italic':
      case 'underline':
        className.push(key)
        break
      case 'strikethrough':
        className.push('line-through')
        break
      case 'color': {
        const value = annotations[key]
        const isBackground = value.includes('background')

        if (value === 'default') {
          break
        }

        if (isBackground) {
          const [color] = value.split('_')

          className.push(`bg-${color}-200`)
        } else {
          className.push(`text-${value}-500`)
        }

        break
      }
    }
  }

  if (className.length === 0) {
    return undefined
  }

  return className.toString().replaceAll(',', ' ')
}