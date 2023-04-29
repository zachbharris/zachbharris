import { notion, NOTION_WORK_DATABASE_ID } from "@/utils/notion";
import dayjs from "dayjs";
import Link from "next/link";

const WorkPage = async ({ params: { slug = "" } }) => {
  const query = await notion.databases.query({
    database_id: NOTION_WORK_DATABASE_ID,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  const page_id = query.results[0].id;

  const page: any = await notion.pages.retrieve({ page_id });

  const date = dayjs(page.properties.Timeline.date.start).format("MMM D YYYY");

  return (
    <div>
      <h1>{page.properties.Name.title[0].plain_text}</h1>
      <span>{date}</span>
    </div>
  );
};

export default WorkPage;
