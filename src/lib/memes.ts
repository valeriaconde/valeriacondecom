import { memes, type Meme } from '@/data/memes';

export type ResolvedMeme = Meme & { image?: ImageMetadata; video?: string };

const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/memes/*.{jpg,jpeg,png,webp,avif,gif}', {
  eager: true,
});
const videos = import.meta.glob<string>('/src/assets/memes/*.{mp4,webm,mov}', {
  eager: true,
  query: '?url',
  import: 'default',
});

/** The memes in src/data/memes.ts with their files from src/assets/memes/. */
export function getMemes(): ResolvedMeme[] {
  return memes.map((meme) => {
    if (!meme.file) return meme;
    const path = `/src/assets/memes/${meme.file}`;
    const image = images[path]?.default;
    const video = videos[path];
    if (!image && !video) throw new Error(`Meme "${meme.file}" not found in src/assets/memes/`);
    return { ...meme, image, video };
  });
}
