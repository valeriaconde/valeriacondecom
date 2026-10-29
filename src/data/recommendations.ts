import type { Text } from '@/i18n';

/**
 * Things shown on /recommendations, in this order.
 * `image` is the item's picture: put it in src/assets/recommendations/ and write its filename
 * (a cut-out PNG with a transparent background looks best). `note` is optional and can be { en: '…', es: '…' }.
 */
export type Recommendation = { name: string; maker: string; image: string; note?: Text };

/** Subtitle at the top of /recommendations */
export const recommendationsText = {
  lead: { en: 'Dump of things you need to try', es: 'Dump de cosas que tienes que probar' } as Text,
};

export const recommendations: Recommendation[] = [
  { name: 'Smoked salmon', maker: 'Kirkland Signature', image: 'kirkland-salmon.png', note: { en: 'This salmon changed the way I eat entirely.', es: 'Este salmón cambió toda mi dieta.' } },
  { name: 'Heavy Merino yarn', maker: 'Knitting for Olive', image: 'knitting-for-olive.png', note: { en: 'Soft, cheap, 100% merino wool.', es: 'Suave, barato, 100% lana merino.' } },
  { name: 'Age Proteom Advanced Serum', maker: 'Institut Esthederm', image: 'esthederm-serum.png', note: { en: "I've been using this for years.", es: 'Llevo años usándolo.' } },
  { name: 'Gel ink pen', maker: 'MUJI', image: 'muji-pen.png', note: { en: 'The best journaling pen ever.', es: 'La mejor pluma.' } },
  { name: 'Air purifier', maker: 'Levoit', image: 'levoit-purifier.png', note: { en: 'How did I live without this?', es: '¿Cómo viví sin esto?' } },
  { name: 'Drive Your Plow Over the Bones of the Dead', maker: 'Olga Tokarczuk', image: 'drive-your-plow.png', note: { en: 'One of my favorite books last year.', es: 'Uno de mis libros favoritos del año pasado.' } },
];
