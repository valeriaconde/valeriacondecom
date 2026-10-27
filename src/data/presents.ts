/**
 * Presents (wish list) — shown at /presents.
 *
 * Each present needs a `title` and a `url`. For the picture, either:
 *   - put a photo in src/assets/presents/ and set `image` to its filename, or
 *   - leave `image` out and the site will try to use the store's own preview
 *     picture (some stores, like Amazon, block this — then add your own photo).
 * `note` and `price` are optional.
 */
export type Present = {
  title: string;
  url: string;
  image?: string;
  note?: string;
  price?: string;
};

/** Set to false to hide the presents section from the homepage when the season is over. */
export const showPresentsOnHomepage = true;

/** The three presents shown on the homepage card, left to right. Use each one's exact `title` from the list below. */
export const homepagePresents = [
  'What Am I, A Deer? by Polly Barton',
  'Tecnifibre TFight 300S racquet',
  'Songmont Medium Song Bag in Lucky Red',
];

/** The presents card on the homepage. The title's question marks (¿ in Spanish, and ?) are added in pink automatically. */
export const presentsHome = {
  title: { en: 'Wondering what to get me', es: 'No sabes qué regalarme' },
  teaser: {
    en: "Presents, because Christmas is coming (and so is the queen's birthday).",
    es: 'Se viene Navidad y, más importantemente, mi cumpleaños.',
  },
  button: { en: 'Get ideas', es: 'Aquí hay ideas' },
};

/** The line at the top of the /presents page */
export const presentsIntro =
  "Christmas and my birthday are coming up. If you'd like to get me something, here are a few things I'd love.";

export const presents: Present[] = [
  {
    title: 'Tecnifibre TFight 300S racquet',
    url: 'https://www.tennis-warehouse.com/Tecnifibre_TFight_300S/descpageRCTFUSA-TF300S.html',
    image: 'tecnifibre-tfight-300s.webp',
    price: '$269',
  },
  {
    title: 'Oura Ring 5 in gold',
    url: 'https://ouraring.com/store/rings/oura-ring-5/gold',
    image: 'oura-ring-5-gold.webp',
    price: '$499',
  },
  {
    title: 'Songmont Medium Song Bag in Lucky Red',
    url: 'https://songmontofficial.com/products/medium-song-bag-lucky-red',
    image: 'songmont-medium-song-bag-lucky-red.webp',
    price: '$429',
  },
  {
    title: 'ChiaoGoo Twist Shorties needle set, blue (2 & 3 inch)',
    url: 'https://www.amazon.com/dp/B085RCRBX2',
    image: 'chiaogoo-twist-shorties.webp',
    price: '$128',
  },
  {
    title: 'ChiaoGoo Twist Shorties needle set, yellow (3 inch)',
    url: 'https://www.amazon.com/dp/B0BLCMCLNF',
    image: 'chiaogoo-twist-shorties-yellow.webp',
    price: '$86.40',
  },
  {
    title: 'Homedics 2-in-1 portable steam sauna + red light wands',
    url: 'https://www.costco.com/p/-/homedics-2-in-1-portable-steam-sauna-red-light-wands/4201023343',
    image: 'homedics-steam-sauna-red-light.webp',
    price: '$299.99',
  },
  {
    title: 'Any Aritzia mini dress',
    url: 'https://www.aritzia.com/us/en/clothing/dresses/mini-dresses',
    image: 'aritzia-dollop-dress.webp',
  },
  {
    title: 'Any lululemon mini dress',
    url: 'https://shop.lululemon.com/c/women-athletic-dresses/n1mk31zsklf',
    image: 'lululemon-align-dress.webp',
  },
  {
    title: 'DOYO wireless guitar controllers for Clone Hero, black & white pair',
    url: 'https://www.amazon.com/dp/B0H3V7XFFB?smid=A12DOY7DI3UZVP&psc=1',
    image: 'doyo-guitar-controller.webp',
    price: '$160.18',
  },
  {
    title: "Audrey Hobert, Who's the Clown? on vinyl",
    url: 'https://www.amazon.com/dp/B0FQVVYK6C?smid=ATVPDKIKX0DER&psc=1',
    image: 'audrey-hobert-whos-the-clown-vinyl.webp',
    price: '$24.98',
  },
  {
    title: 'JOOFO dimmable LED floor lamp with remote, black',
    url: 'https://www.amazon.com/dp/B07WFC14VR?smid=A2OK2KVT5DUPLV&psc=1',
    image: 'led-torchiere-floor-lamp.webp',
    price: '$49.98',
  },
  {
    title: 'What Am I, A Deer? by Polly Barton',
    url: 'https://fitzcarraldoeditions.com/books/what-am-i-a-deer/',
    image: 'what-am-i-a-deer.webp',
    price: '£14.99',
  },
  {
    title: 'Maison Francis Kurkdjian Baccarat Rouge 540 eau de parfum, 70 ml',
    url: 'https://www.franciskurkdjian.com/us-en/p/baccarat-rouge-540-eau-de-parfum-RA12232.html',
    image: 'baccarat-rouge-540.webp',
    price: '$360',
  },
];
