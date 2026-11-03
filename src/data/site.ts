import type { Text } from '@/i18n';

export const site = {
  name: 'Valeria Conde',
  url: 'https://valeriaconde.com',
  description: 'Software engineer, lawyer, writer, reader, tennis player, & friend.',
};

/** `es` is the Spanish name, shown in the menu and footer on the Spanish site. */
export const nav: { label: string; es?: string; href: string }[] = [
  { label: 'Lately', href: '/lately' },
  { label: 'About', es: 'Sobre mí', href: '/about' },
  // Hidden for now: to bring Code back, rename src/pages/_projects.astro to projects.astro and uncomment.
  // { label: 'Code', href: '/projects' },
  { label: 'Lists', es: 'Listas', href: '/lists' },
  { label: 'Recommendations', es: 'Recomendaciones', href: '/recommendations' },
  { label: 'Contact', es: 'Contacto', href: '/contact' },
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
  { label: 'GitHub', href: 'https://github.com/valeriaconde' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/valeriaconde' },
  { label: 'Instagram', href: 'https://www.instagram.com/coooonde/' },
  { label: 'Goodreads', href: 'https://www.goodreads.com/user/show/15983942-val' },
  { label: 'Letterboxd', href: 'https://letterboxd.com/princessval/' },
];
export const socials = allSocials.filter((s) => s.href);
