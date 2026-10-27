import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'lately'>;
export type PostKind = 'video' | 'photo' | 'quote' | 'text';

/** All published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('lately', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || b.id.localeCompare(a.id));
}

/** One page per post, each knowing its newer and older neighbours. */
export async function postPaths() {
  const posts = await getPosts();
  return posts.map((post, i) => ({
    params: { id: post.id },
    props: { post, newer: posts[i - 1], older: posts[i + 1] },
  }));
}

/** A post's kind comes from what it contains, so there's nothing extra to fill in. */
export function kindOf(post: Post): PostKind {
  if (post.data.video) return 'video';
  if (post.data.photos.length) return 'photo';
  if (post.data.quote) return 'quote';
  return 'text';
}

export const kindLabel: Record<PostKind, string> = {
  video: 'Video',
  photo: 'Photos',
  quote: 'Quote',
  text: 'Thought',
};

export function formatDate(date: Date, style: 'short' | 'long' = 'short') {
  return date.toLocaleDateString('en-US', {
    month: style === 'short' ? 'short' : 'long',
    day: 'numeric',
    ...(style === 'long' && { year: 'numeric' }),
    timeZone: 'UTC',
  });
}

// Videos are files next to the post. Vite copies each one into the build and gives back its URL.
const videoFiles = import.meta.glob<string>('/src/content/lately/*/*.{mp4,webm,mov,m4v}', {
  query: '?url',
  import: 'default',
  eager: true,
});

export function videoUrl(post: Post): string | undefined {
  if (!post.data.video) return undefined;
  const url = videoFiles[`/src/content/lately/${post.id}/${post.data.video.replace(/^\.\//, '')}`];
  if (!url) throw new Error(`Video "${post.data.video}" not found in src/content/lately/${post.id}/`);
  return url;
}

/** Plain-text preview of a post's written part, for the grid tiles. */
export function excerpt(post: Post, max = 220): string {
  const text = (post.body ?? '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > max ? `${text.slice(0, max).replace(/\s+\S*$/, '')}…` : text;
}
