import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  // type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    url: z.string().optional(),
  }),
});

export enum CollectionsTags {
  projects = "projects",
}

export const collections = {
  projects: projectsCollection,
};
