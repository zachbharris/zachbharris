import { useMemo } from 'react'
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { getAnnotationClassName } from '../../lib/blocks'

type TextProps = {
  text: RichTextItemResponse
}

function Text({ text }: TextProps) {
  switch (text.type) {
    default: {
      return null
    }
    case 'text': {
      const { href, plain_text } = text
      let className = useMemo(() => getAnnotationClassName(text), [JSON.stringify(text.annotations)])

      if (href) {
        const linkClassNames = 'text-gray-500 underline'

        if (className) {
          className.concat(linkClassNames)
        } else {
          className = linkClassNames
        }

        return <a href={href} className={className}>{plain_text}</a>
      }

      return <span className={className}>{plain_text}</span>
    }
  }
}

export default Text