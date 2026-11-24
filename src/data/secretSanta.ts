/**
 * Intercambio (Secret Santa): the page at /intercambio. Spanish only, not in the menu,
 * hidden from search engines.
 *
 * Who gifts whom lives in secretSanta.json, which `node scripts/secret-santa.mjs <names…>` writes.
 * The texts below are what the page says around it.
 */
export const secretSantaText = {
  title: 'Intercambio Condes',
  intro: 'Ingresa tu clave (te la mandó Valeria!)',
  /** Shown as "Hola Ana!" */
  greeting: 'Hola',
  youGift: 'Te toca regalarle a:',
  label: 'Tu clave',
  checking: 'Revisando la lista…',
  wrong: 'Mmm, esa clave no está en la lista. Revisa tu mensaje e intenta otra vez.',
  shh: 'Shh. Es secreto.',
  hide: 'Volver a envolver',
  noscript: 'Esta página necesita JavaScript para abrir tu regalo.',
  /** The card at the bottom, always visible. `pink` is the part of `question` in pink. */
  wishList: { label: 'Psst!', question: 'Te tocó Valeria?', pink: 'Valeria', link: 'Checa su wish list', href: '/es/presents' },
};

/**
 * Everyone else's wish lists, shown as a table under Valeria's card. One row per person,
 * in this order. For each gift, put its photo in src/assets/intercambio/ and set `image` to the filename
 * (without one, the square shows the store's name). `note` is optional, shown under the square.
 * A gift with no `url` is shown as plain text, no square.
 *
 *   { name: 'Ana', gifts: [{ title: 'Taza', url: 'https://…', image: 'ana-taza.jpg' }] },
 */
export const wishLists: { name: string; gifts: { title: string; url?: string; image?: string; note?: string }[] }[] = [
  {
    name: 'Elias',
    gifts: [
      {
        title: 'Bleu de Chanel Eau de Parfum, 100 ml',
        url: 'https://www.elpalaciodehierro.com/chanel-eau-de-parfum-vaporizador-100-ml-31531703.html',
        image: 'elias-bleu-de-chanel.jpg',
        note: 'Perfume',
      },
      {
        title: 'Suéter polo Rag & Bone',
        url: 'https://www.elpalaciodehierro.com/rag-bone-sueter-polo-hombre-45392724.html',
        image: 'elias-rag-bone-polo.jpg',
        note: 'Talla L',
      },
      {
        title: 'Polo Porsche x BOSS de algodón con estampado jacquard',
        url: 'https://www.elpalaciodehierro.com/boss-polo-porsche-x-boss-de-algodon-con-estampado-jacquard-hombre-45116298.html',
        image: 'elias-porsche-boss-polo.jpg',
        note: 'Talla L',
      },
    ],
  },
  {
    name: 'Marisol',
    gifts: [
      {
        title: 'Tenis para tennis Yonex de mujer',
        url: 'https://www.liverpool.com.mx/tienda/pdp/Tenis-para-tennis-Yonex-de-mujer/1185452114',
        image: 'marisol-yonex-tenis.jpg',
        note: 'tenis',
      },
      {
        title: 'Lentes de sol Bronson, TOM FORD Eyewear',
        url: 'https://www.farfetch.com/mx/shopping/women/tom-ford-eyewear-bronson-sunglasses-item-19447832.aspx',
        image: 'marisol-tom-ford-bronson.jpg',
      },
    ],
  },
  {
    name: 'Diego',
    gifts: [
      {
        title: 'Umber Dormeuil Flow Pant',
        url: 'https://www.glorydaysclo.com/products/the-umber-dormeuil-flow-pant?variant=57702465274238',
        image: 'diego-umber-flow-pant.jpg',
        note: 'color cafe talla M',
      },
      {
        title: 'Mochila Cruiser 26L',
        url: 'https://www.lululemon.mx/es-mx/p/mochila-cruiser-26l-actualizada/prod20005787.html?dwvar_prod20005787_color=043646',
        note: 'mochila',
      },
    ],
  },
  {
    name: 'Oscar',
    gifts: [
      {
        title: 'MYLEUS envases portátiles apilables para proteína',
        url: 'https://www.amazon.com.mx/dp/B0FSRJVY22?psc=1',
        image: 'oscar-envase-creatina.jpg',
        note: 'ESTE envase para creatina',
      },
      {
        title: 'Almohada cervical de mariposa',
        url: 'https://vt.tiktok.com/ZSsYrj5Gn/',
        image: 'oscar-almohada-cervical.jpg',
        note: 'quiero dos',
      },
      {
        title: 'TwoPackBag',
        url: 'https://www.facebook.com/share/v/1Jk3ihg9oc/',
        image: 'oscar-twopackbag.jpg',
      },
      {
        title: 'Funda ergonómica 4 en 1 para laptop Casena',
        url: 'https://www.instagram.com/p/DfStXqjgWcM/',
        image: 'oscar-funda-casena.jpg',
        note: 'color gris o negra, no colores llamativos',
      },
      {
        title: 'Almohada CerviFlex',
        url: 'https://www.facebook.com/share/v/19t2HjvB9E/',
        image: 'oscar-cerviflex.jpg',
      },
      {
        title: 'Modern Classic Flat Cap, Damon & West',
        url: 'https://www.facebook.com/share/1MfqJfgaqX/',
        image: 'oscar-boina.jpg',
      },
    ],
  },
  { name: 'Antonella', gifts: [{ title: 'una inscripcion a un internado militar' }] },
  { name: 'Alessia', gifts: [{ title: 'un libro sobre adolescencia' }] },
  { name: 'Bertha', gifts: [{ title: 'marihuana' }] },
  { name: 'Luis', gifts: [{ title: 'unas sesiones de terapia' }] },
];
