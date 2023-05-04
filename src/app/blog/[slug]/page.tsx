import getPost from "@/lib/getPost";
import Blocks from "@/components/Blocks";
import Link from "next/link";
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const page = (await getPost("page", params.slug)) as any;

  const title = page.properties.Name.title[0].plain_text;

  return {
    title,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const blocks = (await getPost(
    "blocks",
    params.slug
  )) as ListBlockChildrenResponse;

  return (
    <div className="py-8 max-w-xl mx-auto">
      <Link href="/blog" className="inline-flex items-center gap-2">
        <span className="h-4 w-4 fill-zinc-800 dark:fill-zinc-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
          </svg>
        </span>

        <span>All Posts</span>
      </Link>

      <Blocks blocks={blocks} />
    </div>
  );
}
