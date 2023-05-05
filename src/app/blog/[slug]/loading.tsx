"use client";

import usePost from "@/hooks/usePost";
import { useParams } from "next/navigation";
import dayjs from "dayjs";

export default function BlogPostLoadingPage() {
  const params = useParams();
  const { data } = usePost({ slug: params.slug });
  const { title, publishedAt } = data || {};

  return (
    <div>
      {publishedAt ? (
        <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {dayjs(publishedAt).format("MMM D YYYY")}
        </time>
      ) : (
        <div className="animate-pulse flex h-4 w-32 bg-zinc-300" />
      )}

      {title ? (
        <h1 className="font-sans font-bold text-4xl mb-4 mt-2">{title}</h1>
      ) : (
        <div className="animate-pulse flex h-10 w-2/3 bg-zinc-300 mb-4 mt-2" />
      )}

      <div>
        <div className="animate-pulse flex h-4 w-full bg-zinc-300 mt-2 mb-2" />
        <div className="animate-pulse flex h-4 w-full bg-zinc-300 mb-2" />
        <div className="animate-pulse flex h-4 w-2/3 bg-zinc-300 mb-2" />
      </div>
    </div>
  );
}
