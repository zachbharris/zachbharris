import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    published: z.boolean(),
    published_date: z.date(),
    description: z.string(),
    image: z.string(),
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

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
