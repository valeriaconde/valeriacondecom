import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'lately'>;
export type PostKind = 'video' | 'photo' | 'song' | 'quote' | 'text';

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
  if (post.data.spotify) return 'song';
  if (post.data.quote) return 'quote';
  return 'text';
}

export const kindLabel: Record<PostKind, string> = {
  video: 'Video',
  photo: 'Photos',
  song: 'Song',
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

/** A Google Maps search for a post's location tag. */
export function mapsUrl(location: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
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

export interface Song {
  url: string;
  title: string;
  artist?: string;
  cover?: string;
}

// Each Spotify page is fetched once per build, however many components ask for it
const spotifyPages = new Map<string, Promise<Partial<Song>>>();

/** A song post's name, artist and album art, read from its Spotify page. Anything written in the post wins. */
export async function songOf(post: Post): Promise<Song | undefined> {
  const { spotify, song, artist } = post.data;
  if (!spotify) return undefined;
  if (!spotifyPages.has(spotify)) spotifyPages.set(spotify, readSpotify(spotify));
  const found = await spotifyPages.get(spotify)!;
  return { url: spotify, title: song ?? found.title ?? 'Spotify', artist: artist ?? found.artist, cover: found.cover };
}

async function readSpotify(url: string): Promise<Partial<Song>> {
  try {
    const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const meta = (name: string) => decodeEntities(html.match(new RegExp(`<meta (?:property|name)="${name}" content="([^"]*)"`))?.[1]);
    return { title: meta('og:title'), artist: meta('music:musician_description'), cover: meta('og:image') };
  } catch (err) {
    // A failed lookup shouldn't stop the site from building; the post just shows less
    console.warn(`[lately] Couldn't read ${url} (${err}). Add song: and artist: to the post to fill them in.`);
    return {};
  }
}

const namedEntities: Record<string, string> = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' };

function decodeEntities(text?: string) {
  return text?.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (match, code: string) =>
    code.startsWith('#') ? String.fromCodePoint(Number(code.replace(/^#x/i, '0x').replace(/^#/, ''))) : (namedEntities[code.toLowerCase()] ?? match),
  );
}
