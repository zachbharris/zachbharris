import Link from "next/link";
import { BaseBlockProps } from ".";

interface ParagraphBlockProps extends BaseBlockProps {}

export default function Paragraph({ block }: ParagraphBlockProps) {
  if (block.type !== "paragraph") {
    return null;
  }

  return (
    <p className="text-zinc-700 dark:text-zinc-300 my-4">
      {block.paragraph.rich_text.map((text, index) => {
        const key = `${block.id}-${block.type}-${index}`;

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
      })}
    </p>
  );
}
