import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Life updates ("Lately"). Each post is a folder:
 *   src/content/lately/<post-name>/index.md   ← the post
 *   src/content/lately/<post-name>/*.jpg      ← its photos (and/or a video)
 * The folder name becomes the post's URL: /lately/<post-name>.
 * See src/content/lately/README.md for examples of every kind of post.
 */
const lately = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/lately',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      date: z.coerce.date(),
      title: z.string().optional(),
      /** Photo files in the post's folder, in the order they should appear */
      photos: z.array(image()).default([]),
      /** A video file in the post's folder (mp4 or webm), e.g. "clip.mp4" */
      video: z.string().optional(),
      /** Optional still image shown before the video plays */
      poster: image().optional(),
      /** Optional place tag, e.g. "Bern, Switzerland". Opens in Google Maps from the post */
      location: z.string().optional(),
      /** For song posts: a Spotify link. The song name, artist and cover are read from Spotify when the site is built */
      spotify: z.string().regex(/^https:\/\/open\.spotify\.com\//, 'Use an https://open.spotify.com/… link').optional(),
      /** Optional: overrides the song name or artist that Spotify gives */
      song: z.string().optional(),
      artist: z.string().optional(),
      /** For quote posts: the quote itself, and who said it */
      quote: z.string().optional(),
      source: z.string().optional(),
      /** true = hidden from the site */
      draft: z.boolean().default(false),
    }),
});

export const collections = { lately };
