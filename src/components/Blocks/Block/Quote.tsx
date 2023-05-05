import { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";

type Props = {
  block: QuoteBlockObjectResponse;
};

export default function QuoteBlock({ block }: Props) {
  return (
    <blockquote className="p-4 my-4 border-l-4 border-zinc-300 bg-zinc-50 dark:border-zinc-500 dark:bg-zinc-800">
      {block.quote.rich_text.map((item, index) => {
        const key = `${block.id}-${block.type}-${item.type}-${index}`;

        if (item.href) {
          return (
            <Link key={key} href={item.href}>
              {item.plain_text}
            </Link>
          );
        }

        return <span key={key}>{item.plain_text}</span>;
      })}
    </blockquote>
  );
}
