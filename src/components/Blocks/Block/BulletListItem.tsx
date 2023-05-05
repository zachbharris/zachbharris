import {
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";

type Props = {
  block:
    | BulletedListItemBlockObjectResponse
    | NumberedListItemBlockObjectResponse;
};

export default function BulletListItem({ block }: Props) {
  if (
    block.type !== "bulleted_list_item" &&
    block.type !== "numbered_list_item"
  )
    return null;

  const target =
    block.type === "bulleted_list_item"
      ? block.bulleted_list_item
      : block.numbered_list_item;

  return (
    <li className="text-zinc-800 dark:text-zinc-300 list-item my-2">
      {target.rich_text.map((item) => {
        const key = `${block.id}-${block.type}-${item.type}`;
        if (item.href) {
          return (
            <Link
              href={item.href}
              className="text-blue-500 hover:text-blue-400 dark:hover:text-blue-600"
              key={key}
            >
              {item.plain_text}
            </Link>
          );
        }

        return <span key={key}>{item.plain_text}</span>;
      })}
    </li>
  );
}
