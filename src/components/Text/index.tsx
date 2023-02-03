import { useMemo } from 'react'
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

function color(annotations: RichTextItemResponse['annotations']) {
  const [color, isBackground] = annotations.color.split('_')

  switch (color) {
    default:
      return isBackground ? 'bg-black' : 'text-black'
    case 'blue':
      return isBackground ? 'bg-blue-300' : 'text-blue-500'
    case 'brown':
      return isBackground ? 'bg-brown-300' : 'text-brown-500'
    case 'gray':
      return isBackground ? 'bg-gray-300' : 'text-gray-500'
    case 'green':
      return isBackground ? 'bg-green-300' : 'text-green-500'
    case 'orange':
      return isBackground ? 'bg-orange-300' : 'text-orange-500'
    case 'pink':
      return isBackground ? 'bg-pink-300' : 'text-pink-500'
    case 'purple':
      return isBackground ? 'bg-purple-300' : 'text-purple-500'
    case 'red':
      return isBackground ? 'bg-red-300' : 'text-red-500'
    case 'yellow':
      return isBackground ? 'bg-yellow-300' : 'text-yellow-500'
  }
}

type TextProps = {
  text: RichTextItemResponse
}

function Text({ text }: TextProps) {
  switch (text?.type) {
    default:
    case 'text': {
      const { href, plain_text, annotations } = text
      
      const className = useMemo(() => {
        const style = []

        if (annotations.bold) {
          style.push('font-semibold')
        }
  
        if (annotations.italic) {
          style.push('italic')
        }
  
        if (annotations.color) {
          if (href) {
            style.push('text-gray-500 underline')
          } else if (annotations.color.includes('background')) {
            style.push(`${color(annotations)} text-black dark:text-gray-500`)
          } else {
            if (annotations.color === 'default') {
              style.push(`text-black dark:text-gray-100`)
            } else {
              style.push(color(annotations))
            }
          }
        } else {
          style.push('font-light text-gray-500 dark:text-gray-400')
        }
  
        if (annotations.strikethrough) {
          style.push('line-through')
        }

        return style.join(' ')
      }, [])

      if (href) {
        return <a href={href} target="_blank" rel="nofollow noreferrer" className={className}>{plain_text}</a>
      }

      return <span className={className}>{plain_text}</span>
    }
  }
}

export default Text