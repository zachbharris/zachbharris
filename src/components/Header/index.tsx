import Link from "next/link"

type HeaderProps = {}

export default function Header(props: HeaderProps) {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  )
}