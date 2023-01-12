import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"

type ImageProps = {
  block: ImageBlockObjectResponse
}

export default function NotionImage({ block }: ImageProps) {
  if (block.image.type !== 'file') {
    return null
  }

  const src = block.image.file.url
  const alt = '100'

  return <img src={src} alt={alt} />
}