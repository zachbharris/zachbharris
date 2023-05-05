"use client";

import Blocks from "@/components/Blocks";
import usePost from "@/hooks/usePost";
import dayjs from "dayjs";

type Props = {
  slug: string;
  initialData?: any;
};

export default function Content({ slug }: Props) {
  const { data, isLoading } = usePost({ slug });
  const { title, publishedAt, blocks } = data || {};

  return (
    <div>
      {!isLoading && publishedAt ? (
        <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {dayjs(publishedAt).format("MMM D YYYY")}
        </time>
      ) : (
        <div className="animate-pulse flex h-4 w-32 bg-zinc-300" />
      )}

      {!isLoading && title ? (
        <h1 className="font-sans font-bold text-4xl mb-4 mt-2">{title}</h1>
      ) : (
        <div className="animate-pulse flex h-10 w-2/3 bg-zinc-300 mb-4 mt-2" />
      )}

      {blocks ? (
        <Blocks blocks={blocks} />
      ) : (
        <div>
          <div className="animate-pulse flex h-4 w-full bg-zinc-300 mt-2 mb-2" />
          <div className="animate-pulse flex h-4 w-full bg-zinc-300 mb-2" />
          <div className="animate-pulse flex h-4 w-2/3 bg-zinc-300 mb-2" />
        </div>
      )}
    </div>
  );
}
