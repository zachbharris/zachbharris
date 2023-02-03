import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import Text from '../Text'

type ImageProps = {
  block: ImageBlockObjectResponse
}

export default function NotionImage({ block }: ImageProps) {
  if (block.image.type !== 'file') {
    return null
  }

  const src = block.image.file.url
  const alt = '100'

  console.log(block)

  if (block.image.caption.length) {
    return <figure>
      <img loading="lazy" className="h-auto max-w-full rounded-lg" src={src} alt={alt} />
      <figcaption>{block.image.caption.map((caption) => caption.plain_text)}</figcaption>
    </figure>
  }

  return <img className="rounded-md" src={src} alt={alt} />
}