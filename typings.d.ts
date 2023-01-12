import { BlockObjectResponse, Heading1BlockObjectResponse, Heading2BlockObjectResponse, Heading3BlockObjectResponse, PartialBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type Block = PartialBlockObjectResponse | BlockObjectResponse
export type Blocks = Array<Block>

export type Heading = Heading1BlockObjectResponse | Heading2BlockObjectResponse | Heading3BlockObjectResponse