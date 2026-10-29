import type { Text } from '@/i18n';

/**
 * The "Lists" cards on the homepage. The section's button goes to /lists.
 *
 * `list` is the `id` of a list in src/data/life.ts: the card then links straight to that
 * list (/lists#best-books). Without it the card just links to /lists.
 * `image` is the card's picture: put it in src/assets/lists/ and write its filename.
 * Until it has one, the card uses the `tint` color.
 * Any text can be { en: '…', es: '…' } once you have the Spanish version.
 */
export type ListCard = {
  title: Text;
  tint: string;
  image?: string;
  list?: string;
};

export const listCardsText = {
  title: { en: 'Lists', es: 'Listas' } as Text,
  intro: {
    en: 'Find the best of the best, according to me.',
    es: 'Lo mejor de lo mejor, una compilación completamente objetiva e imparcial, hecha por mí.',
  } as Text,
  button: { en: 'See all lists', es: 'Ver todas las listas' } as Text,
};

export const listCards: ListCard[] = [
  { title: { en: 'My favorite books ever', es: 'Mis libros favoritos' }, tint: '#fbe2eb', image: 'books.webp', list: 'best-books' },
  { title: { en: "Best documentaries I've seen", es: 'Los mejores documentales que he visto' }, tint: '#e3d5e6', list: 'best-documentaries' },
  { title: { en: 'Best places to eat in Seattle', es: 'Los mejores lugares para comer en Seattle' }, tint: '#f1e6c4', list: 'seattle-eats' },
  { title: { en: 'Films that were robbed of the Oscar', es: 'Películas a las que les robaron el Óscar' }, tint: '#d3e0ec', list: 'robbed-of-the-oscar' },
];
