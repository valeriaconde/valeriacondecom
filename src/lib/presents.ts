import { presents, type Present } from '@/data/presents';

export type ResolvedPresent = Present & {
  domain: string;
  /** A photo from src/assets/presents/ */
  localImage?: ImageMetadata;
  /** The store's own preview picture, found at build time */
  remoteImage?: string;
};

const localImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/presents/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
});

/** Reads a page's og:image / twitter:image. Gives up quietly after a few seconds. */
async function previewImage(url: string): Promise<string | undefined> {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(6000),
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; valeriaconde.com link preview)' },
    });
    if (!res.ok) return undefined;
    const html = await res.text();
    const tag =
      html.match(/<meta[^>]+(?:property|name)=["'](?:og:image|og:image:url|twitter:image)["'][^>]*>/i)?.[0] ?? '';
    const content = tag.match(/content=["']([^"']+)["']/i)?.[1];
    return content ? new URL(content.replace(/&amp;/g, '&'), res.url).href : undefined;
  } catch {
    return undefined;
  }
}

let cache: Promise<ResolvedPresent[]> | undefined;

/** Every present with its picture worked out (fetched once per build). */
export function getPresents(): Promise<ResolvedPresent[]> {
  cache ??= Promise.all(
    presents.map(async (p) => {
      const domain = new URL(p.url).hostname.replace(/^www\./, '');
      if (p.image) {
        const localImage = localImages[`/src/assets/presents/${p.image}`]?.default;
        if (!localImage) throw new Error(`Present image "${p.image}" not found in src/assets/presents/`);
        return { ...p, domain, localImage };
      }
      return { ...p, domain, remoteImage: await previewImage(p.url) };
    }),
  );
  return cache;
}
