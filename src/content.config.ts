import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['article', 'guide', 'curated', 'video', 'audio', 'framework']),
    date: z.coerce.date(),
    readTime: z.string(),
    featured: z.boolean().optional().default(false),
    topics: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { resources };
