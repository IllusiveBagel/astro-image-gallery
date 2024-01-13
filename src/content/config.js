import { z, defineCollection } from "astro:content";

const imageSchema = z.object({
  title: z.string(),
  src: z.string(),
  tag: z.string(),
});

const galleryCollection = defineCollection({
  type: "data",
  schema: z.array(imageSchema),
});

export const collections = {
  gallery: galleryCollection,
};
