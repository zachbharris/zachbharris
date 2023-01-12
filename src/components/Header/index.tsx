import Link from "next/link"

type HeaderProps = {}

export default function Header(props: HeaderProps) {
  return (
    <div className="flex w-full bg-slate-200/50 dark:bg-slate-800/50 justify-center sticky dark:backdrop-blur-md backdrop-blur-md top-0 z-10">
      <div className="p-4 flex gap-4 w-full max-w-lg items-center">
        <Link className="font-bold text-xl dark:text-white" href="/">zachbharris</Link>

        <nav className="flex gap-2">
          <Link href="/blog" className="dark:text-white">Thoughts</Link>
        </nav>
      </div>
    </div>
  )
}