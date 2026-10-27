/**
 * Presents (wish list) — shown at /presents.
 *
 * Each present needs a `title` and a `url`. For the picture, either:
 *   - put a photo in src/assets/presents/ and set `image` to its filename, or
 *   - leave `image` out and the site will try to use the store's own preview
 *     picture (some stores, like Amazon, block this — then add your own photo).
 * `note` and `price` are optional.
 */
export type Present = {
  title: string;
  url: string;
  image?: string;
  note?: string;
  price?: string;
};

/** Set to false to hide the presents section from the homepage when the season is over. */
export const showPresentsOnHomepage = true;

/** The presents card on the homepage. The title's question marks (¿ in Spanish, and ?) are added in pink automatically. */
export const presentsHome = {
  title: { en: 'Wondering what to get me', es: 'No sabes qué regalarme' },
  teaser: {
    en: "Presents, because Christmas is coming (and so is the queen's birthday).",
    es: 'Se viene Navidad y, más importantemente, mi cumpleaños.',
  },
  button: { en: 'Get ideas', es: 'Aquí hay ideas' },
};

/** The line at the top of the /presents page */
export const presentsIntro =
  "Christmas and my birthday are coming up. If you'd like to get me something, here are a few things I'd love.";

// These are examples — replace them with your own.
export const presents: Present[] = [
  { title: 'Example present', url: 'https://example.com', image: 'example-1.svg', note: 'Replace me in src/data/presents.ts', price: '$00' },
  { title: 'Another example', url: 'https://example.com', image: 'example-2.svg', note: 'Any size is fine' },
  { title: 'One more', url: 'https://example.com', image: 'example-3.svg' },
];
