import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
    repo: z.string(),
    tags: z.array(z.string()),
  }),
});

const keyboardCollection = defineCollection({
  type: "content",
  schema: z.object({
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    body: z.string(),
    bodyURL: z.string(),
    keycaps: z.string(),
    keycapsURL: z.string(),
    switches: z.string(),
    switchesURL: z.string(),
    pcb: z.string().nullable(),
    pcbURL: z.string().nullable(),
    plate: z.string().nullable(),
    plateURL: z.string().nullable(),
    stabs: z.string().nullable(),
    stabsURL: z.string().nullable(),
  }),
});

const socialsCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    }),
  ),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
  keyboards: keyboardCollection,
  socials: socialsCollection,
};
