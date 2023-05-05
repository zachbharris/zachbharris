import { createElement } from "react";
import { BaseBlockProps } from ".";
import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";

interface HeadingBlockProps extends BaseBlockProps {
  block:
    | Heading1BlockObjectResponse
    | Heading2BlockObjectResponse
    | Heading2BlockObjectResponse
    | Heading3BlockObjectResponse;
}

type BlockContent = {
  rich_text: RichTextItemResponse[];
};

export default function Heading({ block }: HeadingBlockProps) {
  const handleHeadingBlock = (content: BlockContent) => {
    return content.rich_text.map((text, index) => {
      const key = `${block.id}-${block.type}-${text.type}-${index}`;

      if (text.href) {
        return (
          <Link
            className="text-blue-500 hover:text-blue-400 dark:hover:text-blue-600"
            key={key}
            href={text.href}
          >
            {text.plain_text}
          </Link>
        );
      }

      return <span key={key}>{text.plain_text}</span>;
    });
  };

  switch (block.type) {
    default:
    case "heading_1": {
      const content = block[block.type];

      return (
        <h1 className="text-4xl font-bold font-sans mt-4 mb-8">
          {handleHeadingBlock(content)}
        </h1>
      );
    }
    case "heading_2": {
      const content = block[block.type];

      return (
        <h2 className="text-2xl font-semibold font-sans my-4">
          {handleHeadingBlock(content)}
        </h2>
      );
    }
    case "heading_3": {
      const content = block[block.type];

      return (
        <h3 className="text-xl font-semibold font-sans my-2">
          {handleHeadingBlock(content)}
        </h3>
      );
    }
  }
}
