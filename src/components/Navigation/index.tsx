"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Item as TItem } from "./Menu/Item";
import { Items, MenuIcon } from "./Menu/";

const items: TItem[] = [
  { id: "blog", label: "blog", href: "/blog" },
  { id: "work", label: "work", href: "/work" },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex fixed top-0 w-full backdrop-blur-sm bg-white/80 dark:bg-zinc-900/80 h-16 p-4 items-center justify-center">
      <nav className="flex relative w-full max-w-4xl">
        <Link href="/" className="font-sans font-bold">
          zachbharris
        </Link>

        <Items data={items} />
      </nav>

      <MenuIcon />
    </div>
  );
};

export default Navigation;
