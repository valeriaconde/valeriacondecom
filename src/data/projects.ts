export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: 'Live' | 'In progress' | 'Archive';
  href?: string;
};

export const projects: Project[] = [
  {
    title: 'valeriaconde.com',
    description:
      'This site. A personal space built with Astro, Tailwind and GSAP — an ongoing experiment in design and writing.',
    tags: ['Astro', 'TypeScript', 'Tailwind', 'GSAP'],
    status: 'Live',
  },
  {
    title: 'Legal Tech Explorer',
    description:
      'A research tool for tracking developments at the intersection of law and technology: regulation, AI in the courts, digital rights.',
    tags: ['Research', 'Law', 'Technology'],
    status: 'In progress',
  },
  {
    title: 'Pattern Library',
    description:
      "A small collection of knitting patterns I've designed and documented. Inspired by modular code, built with yarn.",
    tags: ['Knitting', 'Design'],
    status: 'In progress',
  },
  {
    title: 'Reading Log',
    description:
      "A personal record of everything I've read since 2020, with notes. Started as a spreadsheet, now lives here.",
    tags: ['Literature', 'Data'],
    status: 'Archive',
  },
];
