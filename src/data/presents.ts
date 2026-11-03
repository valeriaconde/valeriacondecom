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
    title: '4 bed, 6 bath in Seattle, WA',
    url: 'https://www.zillow.com/homedetails/2222-Waverly-Way-E-Seattle-WA-98112/48706378_zpid/',
    image: 'seattle-house.jpg',
    price: '$4,950,000',
  },
  {
    title: 'Vain Saint Metal Nails 01 in Chrome',
    url: 'https://www.vainsaint.com/products/metal-nails-01-chrome',
    price: '$160',
  },
  {
    title: 'Songmont Medium Song Bag in Lucky Red',
    url: 'https://songmontofficial.com/products/medium-song-bag-lucky-red',
    image: 'songmont-medium-song-bag-lucky-red.webp',
    price: '$429',
  },
  {
    title: 'Onitsuka Tiger Mexico 66 TGRS',
    url: 'https://www.onitsukatiger.com/jp/en-gl/product/mexico-66-tgrs/1182a678_001.html',
    image: 'onitsuka-mexico-66-tgrs.jpg',
    price: '$190',
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
    title: 'iPhone Duo 256GB in Star White, unlocked',
    url: 'https://www.apple.com/shop/buy-iphone/iphone-duo/7.6-inch-display-256gb-star-white-unlocked',
    image: 'iphone-duo-star-white.png',
    price: '$1,999',
  },
  {
    title: 'Wilson Marta Dress',
    url: 'https://au.wilson.com/pages/the-marta-dress',
    image: 'wilson-marta-dress.avif',
    price: '$160',
  },
  {
    title: "Oasis (What's the Story) Morning Glory? vinyl",
    url: 'https://www.target.com/p/oasis-whats-the-story-morning-glory-vinyl/-/A-1004107038',
    image: 'oasis-morning-glory-vinyl.jpg',
    price: '$37.04',
  },
  {
    title: 'DOYO wireless guitar controllers for Clone Hero, black & white pair',
    url: 'https://www.amazon.com/dp/B0H3V7XFFB?smid=A12DOY7DI3UZVP&psc=1',
    image: 'doyo-guitar-controller.webp',
    price: '$160.18',
  },
  {
    title: 'Maison Francis Kurkdjian Baccarat Rouge 540 eau de parfum, 70 ml',
    url: 'https://www.franciskurkdjian.com/us-en/p/baccarat-rouge-540-eau-de-parfum-RA12232.html',
    image: 'baccarat-rouge-540.webp',
    price: '$360',
  },
  {
    title: 'Lunya washable silk tulip back set in Deep Blue',
    url: 'https://lunya.co/products/womens-washable-silk-tulip-back-set-deep-blue?variant=40977534550059',
    image: 'lunya-silk-tulip-back-set-deep-blue.jpg',
    price: '$188',
  },
  {
    title: 'Dior Reversible CD Icon belt',
    url: 'https://www.dior.com/en_us/fashion/products/B1012GWJB_M62I_85',
    image: 'dior-reversible-cd-icon-belt.webp',
    price: '$740',
  },
  {
    title: 'Aritzia Choreo satin dress',
    url: 'https://www.aritzia.com/us/en/product/choreo-satin-dress/136381.html?color=37622',
    image: 'aritzia-choreo-satin-dress.avif',
    price: '$168',
  },
  {
    title: 'lululemon Flow Y dress',
    url: 'https://shop.lululemon.com/p/flow-y-dress-light-support-bc-cup/aqcs9fl2io?color=74110',
    image: 'lululemon-flow-y-dress.png',
    price: '$148',
  },
  {
    title: 'MAM Originals Atlantis gold liquid earrings that hook around the ears',
    url: 'https://mamoriginals.com/products/gold-liquid-earrings-that-hook-around-the-ears-atlantis-784',
    image: 'mam-atlantis-earrings-worn.jpg',
    price: '$274',
  },
  {
    title: 'MAM Originals Orbit large round gold ring',
    url: 'https://mamoriginals.com/products/ring-large-round-gold-orbit-163',
    image: 'mam-orbit-ring-worn.jpg',
    price: '$221',
  },
  {
    title: 'MAM Originals Butterfly gold liquid ring set',
    url: 'https://mamoriginals.com/products/liquid-rings-set-gold-butterfly-154',
    image: 'mam-butterfly-ring-set.jpg',
    price: '$295',
  },
  {
    title: 'MAM Originals Sixnfive gold statement ring',
    url: 'https://mamoriginals.com/products/statement-ring-gold-sixnfive-324',
    image: 'mam-sixnfive-ring.jpg',
    price: '$295',
  },
  {
    title: "Taylor Swift, Red (Taylor's Version) on vinyl",
    url: 'https://www.amazon.com/dp/B09J99PKDF',
    image: 'red-taylors-version-vinyl.jpg',
    price: '$46.99',
  },
  {
    title: 'Aritzia Confession satin dress',
    url: 'https://www.aritzia.com/us/en/product/confession-satin-dress/132078.html?color=1274',
    image: 'aritzia-confession-satin-dress.avif',
    price: '$128',
  },
  {
    title: 'SMISKI Hippers blind box figure',
    url: 'https://smiski.com/e/products/hippers-series/',
    image: 'smiski-hippers.png',
    price: '$14',
  },
  {
    title: 'Casio Baby-G BG-169CM-4 watch',
    url: 'https://www.casio.com/us/watches/babyg/product.BG-169CM-4/',
    image: 'casio-baby-g-bg-169cm-4.avif',
    price: '$145',
  },
  {
    title: 'Dyson Airstrait straightener in Ceramic Pink/Rose Gold',
    url: 'https://www.dyson.com/hair-care/hair-straighteners/airstrait/ceramic-pink-rose-gold',
    image: 'dyson-airstrait-pink-rose-gold.png',
    price: '$499',
  },
  {
    title: 'Aritzia Prose dress',
    url: 'https://www.aritzia.com/us/en/product/prose-dress/135363.html?color=1274',
    image: 'aritzia-prose-dress.avif',
    price: '$168',
  },
  {
    title: 'MAM Originals Comet gold spiked bracelet',
    url: 'https://mamoriginals.com/products/spiked-bracelet-gold-comet-265',
    image: 'mam-comet-bracelet.jpg',
    price: '$341',
  },
  {
    title: 'MAM Originals Pleiadians two-drop ear cuff, gold',
    url: 'https://mamoriginals.com/products/two-drop-ear-cuff-gold-pleiadians-142',
    image: 'mam-pleiadians-ear-cuff.jpg',
    price: '$274',
  },
  {
    title: 'MAM Originals Butterfly gold dangle liquid earring',
    url: 'https://mamoriginals.com/products/dangle-liquid-earring-gold-butterfly-938',
    image: 'mam-butterfly-earring.jpg',
    price: '$265',
  },
  {
    title: 'Shark ChillPill 3-in-1 fan, mist and cooling plate, rose gold',
    url: 'https://www.amazon.com/dp/B0GGTPYPGZ',
    image: 'shark-chillpill.jpg',
    price: '$149.99',
  },
  {
    title: 'Aritzia Unison dress',
    url: 'https://www.aritzia.com/us/en/product/unison-dress/133960.html?color=1274',
    image: 'aritzia-unison-dress.avif',
    price: '$148',
  },
  {
    title: 'Lightahead LED fake fish aquarium lamp',
    url: 'https://www.amazon.com/dp/B010MVJZ8E',
    image: 'fish-aquarium-lamp.jpg',
    price: '$23.99',
  },
  {
    title: 'Aritzia Liaison dress',
    url: 'https://www.aritzia.com/us/en/product/liaison-dress/135243.html?color=1274',
    image: 'aritzia-liaison-dress.avif',
    price: '$148',
  },
  {
    title: 'MAM Originals Amulet gold drop earrings with pearl',
    url: 'https://mamoriginals.com/products/gold-long-earrings-pearl-amulet-951',
    image: 'mam-amulet-earrings.jpg',
    price: '$177',
  },
  {
    title: 'Aritzia Technique linen mini dress',
    url: 'https://www.aritzia.com/us/en/product/technique-linen-mini-dress/131190.html?color=10230',
    image: 'aritzia-technique-linen-mini-dress.avif',
    price: '$148',
  },
  {
    title: 'Aritzia Priscilla dress',
    url: 'https://www.aritzia.com/us/en/product/priscilla-dress/132434.html?color=1274',
    image: 'aritzia-priscilla-dress.avif',
    price: '$128',
  },
  {
    title: 'Homedics 2-in-1 portable steam sauna + red light wands',
    url: 'https://www.costco.com/p/-/homedics-2-in-1-portable-steam-sauna-red-light-wands/4201023343',
    image: 'homedics-steam-sauna-red-light.webp',
    price: '$299.99',
  },
  {
    title: 'Lana Del Rey, NFR! on vinyl',
    url: 'https://www.amazon.com/dp/B07ZW9Y339?smid=ATVPDKIKX0DER&psc=1',
    image: 'lana-del-rey-nfr-vinyl.jpg',
    price: '$39.97',
  },
  {
    title: 'Lana Del Rey, Born to Die on vinyl',
    url: 'https://www.amazon.com/dp/B006ZWLXZ8?smid=ATVPDKIKX0DER&psc=1',
    image: 'lana-del-rey-born-to-die-vinyl.jpg',
    price: '$32.99',
  },
  {
    title: "Audrey Hobert, Who's the Clown? on vinyl",
    url: 'https://www.amazon.com/dp/B0FQVVYK6C?smid=ATVPDKIKX0DER&psc=1',
    image: 'audrey-hobert-whos-the-clown-vinyl.webp',
    price: '$24.98',
  },
  {
    title: 'Birkenstock Amsterdam in wrapped suede',
    url: 'https://www.birkenstock.com/us/amsterdam-wrapped-suede-leather/amsterdamwrapped-suede-suedeleather-S005650-eva-u_01729.html',
    image: 'birkenstock-amsterdam-suede.jpg',
    price: '$134.95',
  },
  {
    title: 'HOKA Ora Recovery Slide 3',
    url: 'https://www.hoka.com/en/us/all-gender-footwear/ora-recovery-slide-3/1135061.html',
    image: 'hoka-ora-recovery-slide-3.png',
    price: '$60',
  },
  {
    title: 'MAM Originals Pleiadians gold drop face jewelry',
    url: 'https://mamoriginals.com/products/drop-face-jewelry-gold-pleiadians-280',
    image: 'mam-pleiadians-face-jewelry.jpg',
    price: '$333',
  },
  {
    title: 'Mirakel heated shiatsu neck massager',
    url: 'https://www.amazon.com/dp/B07WJSY2G8',
    image: 'mirakel-neck-massager.jpg',
    price: '$29.99',
  },
  {
    title: 'What Am I, A Deer? by Polly Barton',
    url: 'https://fitzcarraldoeditions.com/books/what-am-i-a-deer/',
    image: 'what-am-i-a-deer.webp',
    price: '£14.99',
  },
  {
    title: 'The Count of Monte Cristo by Alexandre Dumas (Penguin Classics)',
    url: 'https://www.amazon.com/dp/0140449264?smid=ATVPDKIKX0DER&psc=1',
    image: 'count-of-monte-cristo.jpg',
    price: '$11',
  },
  {
    title: 'JOOFO dimmable LED floor lamp with remote, black',
    url: 'https://www.amazon.com/dp/B07WFC14VR?smid=A2OK2KVT5DUPLV&psc=1',
    image: 'led-torchiere-floor-lamp.webp',
    price: '$49.98',
  },
  {
    title: 'Alesis Recital Play 88-key piano keyboard bundle',
    url: 'https://www.amazon.com/dp/B0CLVRL7YW',
    image: 'alesis-recital-play-keyboard.jpg',
    price: '$189',
  },
  {
    title: 'BENECREAT clear numbered stitch markers, 30 pack',
    url: 'https://www.amazon.com/dp/B0FQJV1475?smid=AVJPLU36BXHT5&psc=1',
    image: 'numbered-stitch-markers.jpg',
    price: '$9.99',
  },
  {
    title: 'Nogent Super Kim safety can opener, red',
    url: 'https://www.amazon.com/dp/B001E05WQM?smid=A3FFT9NR69D1NI&psc=1',
    image: 'nogent-super-kim-can-opener.jpg',
    price: '$29',
  },
  {
    title: 'Lola Blankets Original in Red Check',
    url: 'https://lolablankets.com/products/rhubarb-check-original?variant=54706315133300',
    image: 'lola-blanket-red-check.jpg',
    price: '$275',
  },
  {
    title: 'Royal Craft Wood bamboo bathtub tray',
    url: 'https://www.amazon.com/dp/B01C4IS4Q2',
    image: 'royal-craft-wood-bath-tray.jpg',
    price: '$46.96',
  },
  {
    title: 'Oura Ring 5 in gold',
    url: 'https://ouraring.com/store/rings/oura-ring-5/gold',
    image: 'oura-ring-5-gold.webp',
    price: '$499',
  },
];
