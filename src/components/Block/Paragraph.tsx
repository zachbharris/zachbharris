import { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import Text from '../Text'

type ParagraphProps = {
  block: ParagraphBlockObjectResponse
}

export default function Paragraph({ block }: ParagraphProps) {
  return <p>{block.paragraph.rich_text.map((item, index) => (
    <Text key={`${block.id}-${index}`} text={item} />
  ))}</p>
}