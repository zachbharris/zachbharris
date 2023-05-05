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

export function getPageSlug(page: GetPageResponse) {
  let slug

  if (isFullPage(page)) {
    if ('rich_text' in page.properties.Slug && page.properties.Slug.rich_text.length > 0) {
      slug = page.properties.Slug.rich_text[0].plain_text
    }
  }

  return slug
}

export function getPagePublishedDate(page: GetPageResponse) {
  let publishedAt

  if (isFullPage(page)) {
    if ('date' in page.properties.Published && page.properties.Published.date) {
      publishedAt = page.properties.Published.date.start
    } else {
      publishedAt = page.created_time
    }
  }

  return publishedAt
}