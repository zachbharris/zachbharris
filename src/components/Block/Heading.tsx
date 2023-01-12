import { createElement, useMemo } from "react"
import { Heading as THeading } from "../../../typings"
import Text from "../Text"

type Props = {
  block: THeading
}

export default function Heading({ block }: Props) {
  const { type } = block

  const tag = useMemo(() => `h${type.slice(-1)}`, [type])
  const className = useMemo(() => {
    switch (type) {
      case 'heading_1':
        return 'text-3xl'
      case 'heading_2':
        return 'text-2xl'
      case 'heading_3':
        return 'text-xl'
    }
  }, [type])

  return createElement(tag, { className }, block[type].rich_text.map((item, index) => (
    <Text key={`${block.id}-${index}`} text={item} />
  )))
}