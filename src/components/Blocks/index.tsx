import { Blocks as TBlocks } from "../../../typings"
import Block from "../Block"

type BlocksProps = {
  blocks: TBlocks
}

export default function Blocks(props: BlocksProps) {
  const { blocks } = props

  return (
    <>
      {blocks.filter(item => "type" in item).map((item, index) => (
        <Block key={index} block={item} />
      ))}
    </>
  )
}