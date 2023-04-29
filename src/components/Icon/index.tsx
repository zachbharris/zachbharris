import BoltSolid from "public/icons/bolt-solid.svg";
import BookmarkSolid from "public/icons/bookmark-solid.svg";
import FlaskSolid from "public/icons/flask-solid.svg";

const availableIcons = ["bolt-solid", "bookmark-solid", "flask-solid"] as const;

export type IconName = (typeof availableIcons)[number];

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

const icons: { [key in IconName]: React.FC<any> } = {
  "bolt-solid": BoltSolid,
  "bookmark-solid": BookmarkSolid,
  "flask-solid": FlaskSolid,
};

const Icon = ({ name, size = 20, className }: IconProps) => {
  const IconComponent = icons[name];
  return <IconComponent className={className} width={size} height={size} />;
};

export default Icon;
