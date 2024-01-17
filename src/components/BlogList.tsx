import { Button } from "@/components/ui/button";
import type { CollectionEntry } from "astro:content";

type BlogListProps = {
  posts: CollectionEntry<"posts">[];
  url: URL;
};

export function BlogList({ posts, url }: BlogListProps) {
  const slug = url.pathname.split("/")[2];

  return posts.map((post) => {
    const date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(post.data.pubDate));

    const isActive = post.slug === slug;

    return (
      <Button
        key={post.id}
        asChild
        variant={isActive ? "secondary" : "ghost"}
        className="flex px-2 py-2 h-fit"
      >
        <a href={`/blog/${post.slug}`}>
          <div className="flex flex-col flex-1">
            <span className="font-bold">{post.data.title}</span>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
        </a>
      </Button>
    );
  });
}
