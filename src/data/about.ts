import type { Text } from '@/i18n';

/** Shown next to the portrait on /about until the bio is written */
export const bio: Text = { en: 'Under construction', es: 'En construcción' };

/**
 * The About page timeline, newest first. To turn part of an event into a link,
 * add `link` with the exact words to link (`text`) and where they go (`href`).
 */
export type TimelineEvent = { year: string; event: string; link?: { text: string; href: string } };

export const timeline: TimelineEvent[] = [
  { year: '2026', event: 'Launched valeriaconde.com.' },
  { year: '2024', event: 'Married Elias.', link: { text: 'Elias', href: 'https://eliasmera.com/' } },
  { year: '2023', event: 'Graduated law school.' },
  { year: '2023', event: 'Graduated in Computer Science.' },
  { year: '2023', event: 'Moved to CDMX.' },
  { year: '2022', event: 'Moved to Seattle.' },
  { year: '2018', event: 'Moved to Amsterdam.' },
  { year: '2018', event: 'Learned to code.' },
  { year: '2016', event: 'Moved to Belgium.' },
  { year: '2013', event: 'Met Elias.' },
  { year: '2005', event: 'Started playing tennis.' },
];
