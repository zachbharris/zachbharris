'use client'

import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/app/providers";
import {
  getPagePublishedDate,
  getPageSlug,
  getPageTitle
} from "@/lib/getProperties";

async function fetchPost(slug: string) {
  const url = new URL(`/api/notion/posts/${slug}`, window.location.origin)

  return fetch(url.toString()).then(res => res.json())
}

function handleInitialData(slug: string) {
  const pageData: any = queryClient.getQueryData(['posts'])

  if (pageData?.pages) {
    let title
    let publishedAt

    for (const infiniteQueryPage of pageData.pages) {
      for (const page of infiniteQueryPage.results) {
        if (getPageSlug(page) === slug) {
          title = getPageTitle(page)
          publishedAt = getPagePublishedDate(page)
          break
        }
      }
    }

    return { title, publishedAt }
  }
}

export default function usePost({ slug }: { slug: string }) {
  return useQuery({
    queryKey: ['posts', slug],
    queryFn: async () => await fetchPost(slug),
    initialData: () => handleInitialData(slug),
    refetchOnWindowFocus: false,
  })
}