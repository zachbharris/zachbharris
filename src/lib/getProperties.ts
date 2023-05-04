import { isFullPage } from "@notionhq/client";
import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";

export function getPageTitle(page: GetPageResponse) {
  let title

  if (isFullPage(page)) {
    if ('title' in page.properties.Name) {
      title = page.properties.Name.title[0].plain_text
    }
  }

  return title
}

export function getPageDescription(page: GetPageResponse) {
  let description

  if (isFullPage(page)) {
    if ('rich_text' in page.properties.Description && page.properties.Description.rich_text.length > 0) {
      description = page.properties.Description.rich_text[0].plain_text
    }
  }

  return description
}