import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: image().refine( img=> img.width < 1200, {
      message: 'Image width must be less than 1200px',
    }),
    
    //relacion
    author: z.string(),
    //relacion
    tags: z.array(z.string()),
  }),
});

export const collections = {
    blog: blogCollection,
}