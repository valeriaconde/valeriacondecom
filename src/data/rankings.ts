import type { Text } from '@/i18n';

/**
 * Rankings — shown on the homepage and at /rankings.
 *
 * Each category is one list, best first. Add as many categories and items as you like;
 * the homepage shows a card for every category with its #1.
 * `slug` is the category's address on the page (/rankings#books), so keep it short
 * and lowercase. `image` is the homepage card's picture: put it in src/assets/rankings/
 * and write its filename. Until it has one, the card uses the `tint` color.
 * Any text can be { en: '…', es: '…' } once you have the Spanish version.
 */
export type Ranking = {
  slug: string;
  title: Text;
  tint: string;
  image?: string;
  items: { name: Text; note?: Text }[];
};

export const rankingsText = {
  title: { en: 'Rankings' } as Text,
  intro: {
    en: 'Find the best of the best, according to me.',
    es: 'Lo mejor de lo mejor, una compilación completamente objetiva e imparcial, hecha por mí.',
  } as Text,
  button: { en: 'See all rankings', es: 'Ver más rankings' } as Text,
  /** Subtitle at the top of the /rankings page, and where it links to */
  pageLead: { en: 'Wanna fight me about it?', es: '¿Difieres? Peleemos.' } as Text,
  pageLeadHref: '/contact',
};

// These are placeholders — replace them with your own rankings.
export const rankings: Ranking[] = [
  {
    slug: 'books',
    title: { en: 'Books', es: 'Libros' },
    tint: '#fbe2eb',
    image: 'books.webp',
    items: [
      { name: 'Milkman', note: 'Anna Burns' },
      { name: 'Drive Your Plow Over the Bones of the Dead', note: 'Olga Tokarczuk' },
      { name: 'Dogs of Summer', note: 'Andrea Abreu' },
      { name: 'My Brilliant Friend', note: 'Elena Ferrante' },
      { name: 'I Who Have Never Known Men', note: 'Jacqueline Harpman' },
    ],
  },
  {
    slug: 'movies',
    title: { en: 'Movies', es: 'Películas' },
    tint: '#e3d5e6',
    items: [{ name: 'Your #1 movie' }, { name: 'Your #2 movie' }, { name: 'Your #3 movie' }, { name: 'Your #4 movie' }, { name: 'Your #5 movie' }],
  },
  {
    slug: 'dishes',
    title: { en: 'Dishes', es: 'Platillos' },
    tint: '#f1e6c4',
    items: [{ name: 'Your #1 dish' }, { name: 'Your #2 dish' }, { name: 'Your #3 dish' }, { name: 'Your #4 dish' }, { name: 'Your #5 dish' }],
  },
  {
    slug: 'cities',
    title: { en: 'Cities', es: 'Ciudades' },
    tint: '#d3e0ec',
    items: [{ name: 'Your #1 city' }, { name: 'Your #2 city' }, { name: 'Your #3 city' }, { name: 'Your #4 city' }, { name: 'Your #5 city' }],
  },
];
