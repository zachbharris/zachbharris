'use client'

import { QueryKey, useInfiniteQuery } from '@tanstack/react-query'

async function fetchPosts({ pageParam }: { pageParam?: string | undefined, queryKey: QueryKey }) {
  const url = new URL(`/api/notion/posts`, window.location.origin)
  const params = new URLSearchParams()

  if (pageParam) {
    params.append('cursor', pageParam)
  }

  url.search = params.toString()

  return fetch(url.toString()).then(res => res.json())
}

export default function usePosts({ initialData } = {} as { initialData?: any }) {
  return useInfiniteQuery({ queryKey: ['posts'], queryFn: fetchPosts, getNextPageParam: lastPage => lastPage.next_cursor, initialData: initialData && { pageParams: [], pages: [initialData] } })
}