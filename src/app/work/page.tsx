import Image from "next/image";

import { NOTION_WORK_DATABASE_ID, notion } from "@/lib/notion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Properties = {
  Name: any;
  Tags: any;
  Timeline: any;
  Published: any;
  Slug: any;
};

const WorkPage = async () => {
  const blocks = await notion.databases.query({
    database_id: NOTION_WORK_DATABASE_ID,
    sorts: [{ property: "Timeline", direction: "descending" }],
  });

  const getPageTags = (block: any) => {
    const properties = block.properties as Properties;

    return properties.Tags.multi_select;
  };

  return (
    <div className="flex flex-col max-w-sm justify-center mx-auto gap-4">
      {blocks.results.map((block: any) => {
        const properties = block.properties as Properties;

        const slug = properties.Slug.rich_text[0].plain_text;
        const tags = getPageTags(block);
        const name = block.properties.Name.title[0].plain_text;
        const date = properties.Timeline.date.start;

        return (
          <Link key={block.id} href={`/work/${slug}`}>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{date}</CardDescription>
              </CardHeader>
              <CardFooter>
                {tags.map((tag: any) => {
                  return (
                    <Badge
                      variant="outline"
                      className="pointer-events-none"
                      key={tag.id}
                    >
                      {tag.name}
                    </Badge>
                  );
                })}
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default WorkPage;
