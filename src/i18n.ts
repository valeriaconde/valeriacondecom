/**
 * English lives at the normal addresses (/about), Spanish under /es (/es/about).
 *
 * Any text can be written as { en: '…', es: '…' } and shown with tr(text, lang).
 * If the Spanish version is missing, the English one is used, so pages can be
 * translated a bit at a time.
 */
export type Lang = 'en' | 'es';
export type Text = string | { en: string; es?: string };

export const langOf = (url: URL): Lang => (url.pathname === '/es' || url.pathname.startsWith('/es/') ? 'es' : 'en');

export const tr = (text: Text, lang: Lang): string => (typeof text === 'string' ? text : (text[lang] ?? text.en));

/** The same page in the other language. */
export function otherLangPath(url: URL): string {
  const path = url.pathname;
  if (langOf(url) === 'es') return path.replace(/^\/es(?=\/|$)/, '') || '/';
  return `/es${path === '/' ? '/' : path}`;
}

/** Path without the /es prefix, for comparing against nav links. */
export const basePath = (url: URL): string => url.pathname.replace(/^\/es(?=\/|$)/, '') || '/';

/**
 * Points every internal link in a Spanish page at the Spanish version (/about → /es/about),
 * so pages don't each need to know which language they're in. Links marked
 * data-lang-switch are left alone.
 */
export function localizeLinks(html: string): string {
  return html.replace(/<a\b[^>]*>/g, (tag) =>
    tag.includes('data-lang-switch') ? tag : tag.replace(/\shref="\/(?!\/|_astro\/|es(?:\/|"))([^"]*)"/, ' href="/es/$1"'),
  );
}
