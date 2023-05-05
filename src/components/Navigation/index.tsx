"use client";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex fixed top-0 w-full backdrop-blur-sm bg-white/80 dark:bg-zinc-950/80 h-16 p-4 items-center justify-center z-50 border-zinc-100/90 dark:border-zinc-900/90 border-b">
      <nav className="flex w-full max-w-4xl">
        <Link href="/" className="font-sans font-bold">
          zachbharris
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
