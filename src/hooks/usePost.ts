'use client'

import { useQuery } from "@tanstack/react-query";

async function fetchPost(slug: string) {
  const url = new URL(`/api/notion/posts/${slug}`, window.location.origin)

  return fetch(url.toString()).then(res => res.json())
}

export default function usePost(slug: string) {
  return useQuery({ queryKey: ['posts', slug], queryFn: async () => await fetchPost(slug) })
}