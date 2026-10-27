import type { Text } from '@/i18n';

export const site = {
  name: 'Valeria Conde',
  url: 'https://valeriaconde.com',
  description: 'Software engineer, lawyer, writer, reader, tennis player, & friend.',
};

export const nav = [
  { label: 'Lately', href: '/lately' },
  { label: 'About', href: '/about' },
  { label: 'Code', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

/** The words that cycle through the homepage hero and marquee. */
export const roles: Text[] = [
  { en: 'software engineer', es: 'ingeniera' },
  { en: 'lawyer', es: 'abogada' },
  { en: 'writer', es: 'escritora' },
  { en: 'reader', es: 'lectora' },
  { en: 'tennis player', es: 'tenista' },
  { en: 'friend', es: 'amiga' },
];

/** Links shown under "Elsewhere". One with an empty `href` stays hidden until it has one. */
const allSocials = [
  { label: 'GitHub', href: 'https://github.com/valeriaconde', description: 'Code and projects' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/valeriaconde', description: 'Professional background' },
  { label: 'Instagram', href: '', description: 'Photos and life' },
];
export const socials = allSocials.filter((s) => s.href);
