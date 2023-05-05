import notion from "./notion";

export default async function getBlocks(id: string) {
  const pageBlocks = await notion.blocks.children.list({
    block_id: id
  })

  return pageBlocks
}