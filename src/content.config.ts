import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    description: z.string(),
    period: z.string(),
    organization: z.string(),
    role: z.string(),
    impact: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    repo: z.url().optional(),
    paper: z.url().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { writing, work };
