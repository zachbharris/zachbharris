import type { CollectionEntry } from "astro:content";

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);
}

export type Post = CollectionEntry<"posts">;

export function splitPostsByYear(posts: Post[]): Record<number, Post[]> {
  return posts.reduce((acc: Record<number, Post[]>, post) => {
    const year = post.data.published_date.getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});
}

export function postsInYearOrder(
  posts: Post[],
  order: "asc" | "desc" = "desc",
) {
  const postsByYear = splitPostsByYear(posts);
  return Object.keys(postsByYear)
    .map((year) => parseInt(year))
    .sort((a, b) => (order === "desc" ? b - a : a - b))
    .map((year) => ({
      year,
      posts: postsByYear[year].sort((a, b) => {
        const dateA = a.data.published_date;
        const dateB = b.data.published_date;
        return order === "desc"
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime();
      }),
    }));
}

// table of contents
import type { MarkdownHeading } from "astro";
export interface TocItem extends MarkdownHeading {
  children: TocItem[];
}

function diveChildren(item: TocItem, depth: number): TocItem[] {
  if (depth === 1) {
    return item.children;
  } else {
    // e.g., 2
    return diveChildren(item.children[item.children.length - 1], depth - 1);
  }
}

export function generateToc(headings: MarkdownHeading[], title = "Overview") {
  const overview = { depth: 2, slug: "overview", text: title };
  headings = [
    overview,
    ...headings.filter(({ depth }) => depth > 1 && depth < 4),
  ];
  const toc: Array<TocItem> = [];

  for (const heading of headings) {
    if (toc.length === 0) {
      toc.push({
        ...heading,
        children: [],
      });
    } else {
      const lastItemInToc = toc[toc.length - 1];
      if (heading.depth < lastItemInToc.depth) {
        throw new Error(`Orphan heading found: ${heading.text}.`);
      }

      if (heading.depth === lastItemInToc.depth) {
        toc.push({
          ...heading,
          children: [],
        });
      } else {
        // higher depth
        // push into children, or children' children alike
        const gap = heading.depth - lastItemInToc.depth;
        const target = diveChildren(lastItemInToc, gap);
        target.push({
          ...heading,
          children: [],
        });
      }
    }
  }
  return toc;
}
