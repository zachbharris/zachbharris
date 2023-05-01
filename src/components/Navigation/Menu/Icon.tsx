import { Bars3Icon } from "@heroicons/react/20/solid";

type Props = {
  onClick?: () => void;
};

const Icon = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      className="h-5 w-5 border-2 border-transparent visible md:hidden"
      onClick={onClick}
    >
      <Bars3Icon className="h-4 w-4" />
    </button>
  );
};

export default Icon;
