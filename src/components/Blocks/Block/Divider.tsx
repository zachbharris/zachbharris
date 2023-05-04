import { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = {
  block: DividerBlockObjectResponse;
};

export default function Divider({ block }: Props) {
  return (
    <hr className="my-4 w-full block border border-zinc-200 dark:border-zinc-800" />
  );
}
