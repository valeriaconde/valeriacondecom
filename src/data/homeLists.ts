import type { Text } from '@/i18n';

/**
 * The "Lists" section on the homepage: these titles get typed out one per line, like a
 * typewriter, when the section scrolls into view. The section's button goes to /lists.
 *
 * `list` is the `id` of a list in src/data/life.ts; its title links straight to it
 * (/lists#best-books).
 * Any text can be { en: '…', es: '…' } once you have the Spanish version.
 */
export type HomeList = { title: Text; list: string };

export const homeListsText = {
  title: { en: 'Lists', es: 'Listas' } as Text,
  intro: {
    en: 'Find the best of the best, according to me.',
    es: 'Lo mejor de lo mejor, una compilación completamente objetiva e imparcial, hecha por mí.',
  } as Text,
  button: { en: 'See all lists', es: 'Ver todas las listas' } as Text,
};

export const homeLists: HomeList[] = [
  { title: { en: 'My favorite books all time', es: 'Mis libros favoritos' }, list: 'best-books' },
  { title: { en: 'Craziest documentaries ever', es: 'Los documentales más locos que he visto' }, list: 'best-documentaries' },
  { title: { en: 'Best places to eat in Seattle', es: 'Mejores lugares para comer en Seattle' }, list: 'seattle-eats' },
  { title: { en: 'Films that were robbed of the Oscar', es: 'Películas a las que les robaron el Óscar' }, list: 'robbed-of-the-oscar' },
];
