"use client";

import dayjs from "dayjs";
import Link from "next/link";
import usePosts from "@/hooks/usePosts";
import { Fragment } from "react";

type Props = {
  enableInfiniteScroll?: boolean;
};

export default function BlogPostList({ enableInfiniteScroll }: Props) {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePosts();

  function usePostsAnimation() {}

  if (isLoading) {
    return null;
  }

  if (data?.pages.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-lg p-8 border border-gray-200/90 dark:border-zinc-900">
        <p className="text-zinc-500 dark:text-zinc-400">
          No posts found. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div>
      {data?.pages?.map((page: any, index) => {
        return (
          <Fragment key={`page=${index}`}>
            {page?.results?.map((post: any) => {
              const name = post.properties?.Name.title[0].plain_text;
              const description =
                post.properties?.Description.rich_text[0]?.plain_text;

              const publishedDate = post.properties?.Published.date?.start;
              const createdDate = post.created_time;

              const date = dayjs(publishedDate ?? createdDate).format(
                "MMM D YYYY"
              );
              const slug = post.properties?.Slug.rich_text[0]?.plain_text;

              return (
                <Link key={post.id} href={`/blog/${slug}`}>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {date}
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {name}
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {description}
                  </p>
                </Link>
              );
            })}
          </Fragment>
        );
      })}

      {enableInfiniteScroll && hasNextPage ? (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          className={`relative flex w-full border border-zinc-900 rounded-lg p-4 items-center justify-center`}
        >
          {isFetchingNextPage ? (
            <span className="absolute animate-spin h-4 w-4 fill-zinc-900 dark:fill-zinc-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M224 32c0-17.7 14.3-32 32-32 141.4 0 256 114.6 256 256 0 46.6-12.5 90.4-34.3 128-8.8 15.3-28.4 20.5-43.7 11.7s-20.5-28.4-11.7-43.7c16.3-28.2 25.7-61 25.7-96 0-106-86-192-192-192-17.7 0-32-14.3-32-32z"></path>
              </svg>
            </span>
          ) : null}

          <span className={`${isFetchingNextPage ? "opacity-25" : ""}`}>
            Load More
          </span>
        </button>
      ) : null}
    </div>
  );
}
