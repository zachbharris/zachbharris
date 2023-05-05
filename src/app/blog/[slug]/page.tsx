import Content from "./content";
import getPage from "@/lib/getPage";
import { getPageDescription, getPageTitle } from "@/lib/getProperties";

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
  const page = await getPage({ slug: params.slug });

  const title = getPageTitle(page);
  const description = getPageDescription(page);

  return {
    title,
    description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  return (
    <div className="py-8 max-w-xl mx-auto">
      <Content slug={params.slug} />
    </div>
  );
}
