import Item, { Item as TItem } from "./Item";

type Props = {
  data: TItem[];
};

const Items = ({ data }: Props) => {
  return (
    <div className="hidden md:flex gap-4 ml-4">
      {data.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Items;
