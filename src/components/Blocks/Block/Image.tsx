import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import NextImage from "next/image";

type Props = {
  block: ImageBlockObjectResponse;
};

export default function Image({ block }: Props) {
  const src =
    block.image.type === "external"
      ? block.image.external.url
      : block.image.file.url;

  return (
    <NextImage
      src={src}
      height={432}
      width={432}
      alt="hi"
      className="w-full md:w-3/4 rounded-xl mx-auto my-4"
    />
  );
}
