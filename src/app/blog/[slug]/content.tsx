"use client";

import Blocks from "@/components/Blocks";
import usePost from "@/hooks/usePost";
import dayjs from "dayjs";

type Props = {
  slug: string;
};

export default function Content({ slug }: Props) {
  const { data, isLoading } = usePost(slug);

  if (isLoading) {
    return (
      <div className="block h-72">
        <div className="animate-pulse flex h-4 w-32 bg-zinc-300 mb-2" />
        <div className="animate-pulse flex h-10 w-64 bg-zinc-300 mb-4" />
        <div className="animate-pulse flex h-4 w-full bg-zinc-300 mb-2" />
        <div className="animate-pulse flex h-4 w-full bg-zinc-300 mb-2" />
        <div className="animate-pulse flex h-4 w-2/3 bg-zinc-300 mb-2" />
      </div>
    );
  }

  return (
    <div>
      {data.publishedAt ? (
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {dayjs(data.publishedAt).format("MMM D YYYY")}
        </time>
      ) : null}
      <h1 className="font-sans font-bold text-4xl">{data.title}</h1>

      <Blocks blocks={data.blocks} />
    </div>
  );
}
