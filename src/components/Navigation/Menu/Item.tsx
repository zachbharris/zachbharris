import Link from "next/link";

type Props = {
  href: Item["href"];
  label: Item["label"];
};

export type Item = {
  id: string;
  label: string;
  href: string;
};

const Item = ({ href, label }: Props) => {
  return <Link href={href}>{label}</Link>;
};

export default Item;
