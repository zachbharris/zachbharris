"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import classNames from "classnames";

import Icon, { IconName } from "../Icon";

type Page = {
  label?: string;
  href: string;
  id: string;
  icon?: IconName;
};

const pages: Page[] = [
  { id: "home", label: "zachbharris", href: "/", icon: "bolt-solid" },
  { id: "blog", label: "blog", href: "/blog" },
  { id: "work", label: "work", href: "/work" },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <motion.div className="flex content-center items-center w-full bg-slate-100 px-6 py-4">
      {pages.map(({ label, href, id, icon }) => {
        const paths = String(pathname).split("/").filter(Boolean);
        const routeName = href.split("/");

        const isActive =
          paths.length === 0 ? href === "/" : paths[0] === routeName[1];

        const linkClasses = classNames(
          "h-9 inline-flex gap-2 items-center relative rounded-full px-3 py-1.5 text-sm font-medium transition"
        );

        return (
          <Link
            key={id}
            href={href}
            className={linkClasses}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {icon ? <Icon name={icon} size={14} /> : null}
            {label}
            {isActive ? (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white  mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            ) : null}
          </Link>
        );
      })}
    </motion.div>
  );
};

export default Navigation;
