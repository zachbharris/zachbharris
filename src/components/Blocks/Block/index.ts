import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export interface BaseBlockProps {
  block: BlockObjectResponse
}

export { default as Paragraph } from './Paragraph'
export { default as Heading } from './Heading'
export { default as Code } from './Code'
export { default as BulletListItem } from './BulletListItem'
export { default as NumberListItem } from './NumberListItem'
export { default as Quote } from './Quote'
export { default as ImageBlock } from './Image'
export { default as Divider } from './Divider'