type Post = {
  title: string
  date: string
  thumbnail?: string
}

type PostProps = {
  loading?: boolean
  post?: Post
}

export default function Post({ loading }: PostProps) {
  if (loading) {
    return (
      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    </div>
    )
  }

  return null
}