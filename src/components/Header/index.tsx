import Link from "next/link"

type HeaderProps = {}

export default function Header(props: HeaderProps) {
  return (
    <div className="flex w-full bg-black/5 dark:bg-white/5 justify-center sticky dark:backdrop-blur-md backdrop-blur-md top-0 z-10">
      <div className="p-4 flex gap-6 w-full max-w-lg items-center">
        <Link className="font-bold text-xl dark:text-white" href="/">zachbharris</Link>
      </div>
    </div>
  )
}