import { forwardRef } from "react";
import classNames from "classnames";

import Icon, { IconName } from "../Icon";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  iconSize?: number;
}

export type Ref = HTMLButtonElement;

const IconButton = forwardRef<Ref, Props>(function IconButton(
  { type, icon, iconSize = 14, className, ...props },
  ref
) {
  const primary = "hover:bg-slate-200 active:bg-slate-300";
  const classes = classNames(
    "rounded-full bg-transparent p-2",
    "transition ease-in-out",
    "fill-slate-800",
    primary,
    className
  );

  return (
    <button className={classes} ref={ref} {...props}>
      <Icon name={icon} size={iconSize} />
    </button>
  );
});

export default IconButton;
