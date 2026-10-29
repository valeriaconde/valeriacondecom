import type { Text } from '@/i18n';

/**
 * "Get inspired": the mysterious card on the homepage and the page at /get-inspired.
 *
 * Each entry is a quote or a picture (or both), shown in this order.
 * - A quote: `quote`, and optionally who said it (`by`) and where (`source`).
 * - A picture: put it in src/assets/inspiration/ and write its filename as `image`.
 *   Add `alt` to describe it for people who can't see it.
 * Any text can be { en: '…', es: '…' } once you have the Spanish version.
 */
export type Inspiration = { quote?: Text; by?: string; source?: Text; image?: string; alt?: Text };

export const inspirationText = {
  title: { en: 'Get inspired', es: 'Inspiración' } as Text,
  /** Subtitle at the top of the page */
  lead: { en: 'Words I think about sometimes.', es: 'Palabras en las que pienso a veces.' } as Text,
};

export const inspiration: Inspiration[] = [
  { quote: 'Eventually I must be dealt with.' },
];
