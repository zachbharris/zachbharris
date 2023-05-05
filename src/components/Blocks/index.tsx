import type { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

import {
  Paragraph,
  Heading,
  BulletListItem,
  Code,
  Quote,
  ImageBlock,
  Divider,
} from "./Block";
import { isFullBlock } from "@notionhq/client";

export default function Blocks({
  blocks,
}: {
  blocks: ListBlockChildrenResponse;
}) {
  return (
    <>
      {blocks.results.map((block) => {
        if (!isFullBlock(block)) return null;

        switch (block.type) {
          case "heading_1":
          case "heading_2":
          case "heading_3":
            return <Heading key={block.id} block={block} />;
          case "paragraph":
            return <Paragraph key={block.id} block={block} />;
          case "bulleted_list_item":
          case "numbered_list_item":
            return <BulletListItem key={block.id} block={block} />;
          case "code":
            return <Code key={block.id} block={block} />;
          case "quote":
            return <Quote key={block.id} block={block} />;
          case "image":
            return <ImageBlock key={block.id} block={block} />;
          case "divider":
            return <Divider key={block.id} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
