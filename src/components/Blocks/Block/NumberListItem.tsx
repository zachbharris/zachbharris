import { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = {
  block: NumberedListItemBlockObjectResponse;
};

export default function NumberListItem({ block }: Props) {
  return (
    <ol className="list-item my-2">
      <li>
        {block.numbered_list_item.rich_text.map((item, index) => {
          const key = `${block.id}-${block.type}-${item.type}-${index}`;

          return <span key={key}>{item.plain_text}</span>;
        })}
      </li>
    </ol>
  );
}
