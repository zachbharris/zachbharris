'use client'
import Paragraph from './Paragraph'
import { Block as TBlock } from '../../../typings'
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Heading from './Heading'

type BlockProps = {
  block: TBlock 
}

export default function Block({ block }: BlockProps) {
  if (block.hasOwnProperty('type')) {
    const blockObj = block as BlockObjectResponse

    switch (blockObj.type) {
      default: {
        return null
      }
      case 'paragraph': {
        return <Paragraph block={blockObj} />
      }
      case 'heading_1':
      case 'heading_2':
      case 'heading_3':
        return <Heading block={blockObj} />
    }
  }
}
