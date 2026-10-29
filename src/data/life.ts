import type { Text } from '@/i18n';

/**
 * Content for the Lists, Photography and Travel pages.
 * A list's `id` is its address on the page (/lists#best-books); homepage cards in
 * src/data/homeLists.ts use it to link to the list. A list with no items yet shows
 * "Under construction".
 */
export type List = { id?: string; title: string; items: string[] };

/** Subtitle at the top of the /lists page, and where it links to */
export const listsText = {
  lead: { en: 'Wanna fight me about it?', es: '¿Difieres? Peleemos.' } as Text,
  leadHref: '/contact',
  /** Shown in place of a list that has no items yet */
  empty: { en: 'Under construction', es: 'En construcción' } as Text,
};

export const lists: List[] = [
  {
    id: 'best-books',
    title: 'My favorite books all time',
    items: [
      'Milkman — Anna Burns',
      'Drive Your Plow Over the Bones of the Dead — Olga Tokarczuk',
      'Dogs of Summer — Andrea Abreu',
      'My Brilliant Friend — Elena Ferrante',
      'I Who Have Never Known Men — Jacqueline Harpman',
      'My Husband — Maud Ventura',
    ],
  },
  { id: 'best-documentaries', title: 'Craziest documentaries ever', items: [] },
  { id: 'seattle-eats', title: 'Best places to eat in Seattle', items: [] },
  { id: 'robbed-of-the-oscar', title: 'Films that were robbed of the Oscar', items: [] },
  {
    title: 'Books that changed how I think',
    items: [],
  },
  {
    title: 'Places I still need to go',
    items: [],
  },
  { title: 'Best days of the week', items: [] },
  { title: 'My bucket list', items: [] },
];

/**
 * Placeholder swatches stand in for photos. To use a real photo, put it in
 * src/assets/photos/ and set `image` to its filename (e.g. 'lisbon-morning.jpg').
 */
export type Photo = { label: string; location: string; tint: string; size?: 'wide' | 'tall'; image?: string };

export const photos: Photo[] = [
  { label: 'Morning light', location: 'Lisbon', tint: '#e9dccb', size: 'wide' },
  { label: 'Street scene', location: 'Tokyo', tint: '#f3d6dc' },
  { label: 'Market', location: 'Mexico City', tint: '#f4e2b8' },
  { label: 'Waterfront', location: 'Buenos Aires', tint: '#d3e3ee', size: 'tall' },
  { label: 'Park', location: 'Tokyo', tint: '#d5e8d6' },
  { label: 'Architecture', location: 'Lisbon', tint: '#e2d9f1' },
  { label: 'Dusk', location: 'Mexico City', tint: '#f6d3e4', size: 'wide' },
  { label: 'Alley', location: 'Tokyo', tint: '#cfe7e3' },
  { label: 'Tiles', location: 'Lisbon', tint: '#f5ecc0' },
  { label: 'Faces', location: 'Buenos Aires', tint: '#d9dcf3' },
  { label: 'Food', location: 'Tokyo', tint: '#f6dcc4' },
  { label: 'Garden', location: 'Lisbon', tint: '#e1eccb', size: 'wide' },
];

export type Trip = {
  destination: string;
  dates: string;
  description: string;
  photos: { label: string; tint: string; image?: string }[];
};

export const trips: Trip[] = [
  {
    destination: 'Tokyo, Japan',
    dates: 'October 2025',
    description:
      'Three weeks that felt like three years. Tokyo is a city designed for obsessives — every neighborhood a different city, every street something to notice. I ate ramen for breakfast four times. I visited every bookshop I could find. I watched the city from a hill in Yanaka and felt very small in the best possible way.',
    photos: [
      { label: 'Yanaka', tint: '#f3d6dc' },
      { label: 'Shibuya at dusk', tint: '#f4e2b8' },
      { label: 'Tsukiji', tint: '#d5e8d6' },
      { label: 'Ueno Park', tint: '#d3e3ee' },
    ],
  },
  {
    destination: 'Lisbon, Portugal',
    dates: 'April 2025',
    description:
      "A city that rewards slowness. I spent most of my time walking, getting lost, and sitting in tascas I found by accident. The light in Lisbon is unlike anywhere else — golden and slightly melancholy, which suits the fado perfectly. I'd move there tomorrow if I could.",
    photos: [
      { label: 'Alfama', tint: '#f5ecc0' },
      { label: 'Trams', tint: '#f6dcc4' },
      { label: 'Miradouros', tint: '#d3e0f3' },
      { label: 'Belém', tint: '#e1eccb' },
    ],
  },
  {
    destination: 'Mexico City, Mexico',
    dates: 'January 2025',
    description:
      'Overwhelming in the best sense — art, food, history, noise, and incredible kindness from everyone I met. The Museo Tamayo, the Mercado de Jamaica, tacos at 11pm on a Tuesday. A city I think about more than almost any other.',
    photos: [
      { label: 'Condesa', tint: '#f6d3e4' },
      { label: 'Frida Kahlo Museum', tint: '#e2d9f1' },
      { label: 'Zócalo', tint: '#cfe7e3' },
      { label: 'Mercado', tint: '#f3cfcb' },
    ],
  },
  {
    destination: 'Buenos Aires, Argentina',
    dates: 'August 2024',
    description:
      'Felt immediately like somewhere I understood. The bookshops (so many bookshops), the steaks, the long dinners that start at midnight. Buenos Aires has a slightly melancholy grandeur — beautiful buildings showing their age, a city that remembers being the most important city in the world.',
    photos: [
      { label: 'Recoleta', tint: '#d9dcf3' },
      { label: 'San Telmo', tint: '#cde8f0' },
      { label: 'Palermo', tint: '#f0d3ee' },
      { label: 'La Boca', tint: '#e7e1da' },
    ],
  },
];
