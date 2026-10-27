export type Item = { title: string; creator: string; note: string; year?: string };

export const recommendations: { title: string; items: Item[] }[] = [
  {
    title: 'Books',
    items: [
      { title: 'The Goldfinch', creator: 'Donna Tartt', note: 'A heist novel disguised as a meditation on beauty and loss. One of the great ones.' },
      { title: 'Lincoln in the Bardo', creator: 'George Saunders', note: 'Formally unlike anything else. Heartbreaking in the best possible way.' },
      { title: 'The Remains of the Day', creator: 'Kazuo Ishiguro', note: 'About repression and regret told through the quietest possible narrator.' },
      { title: 'Gilead', creator: 'Marilynne Robinson', note: 'A letter from a dying father to his young son. The writing is devastating.' },
      { title: 'A Little Life', creator: 'Hanya Yanagihara', note: "Enormous and brutal and unlike anything I've read. Not for everyone." },
    ],
  },
  {
    title: 'Films',
    items: [
      { title: 'Certified Copy', creator: 'Abbas Kiarostami', year: '2010', note: 'A film about authenticity that is itself a copy of nothing.' },
      { title: 'Portrait of a Lady on Fire', creator: 'Céline Sciamma', year: '2019', note: 'Perfect in almost every frame. About looking and being looked at.' },
      { title: 'Arrival', creator: 'Denis Villeneuve', year: '2016', note: 'The best science fiction film about language ever made.' },
      { title: 'Paterson', creator: 'Jim Jarmusch', year: '2016', note: 'A film about the poetry in ordinary life. Nothing happens and everything does.' },
      { title: 'The Favourite', creator: 'Yorgos Lanthimos', year: '2018', note: 'Vicious and funny and impeccably designed.' },
    ],
  },
  {
    title: 'Music',
    items: [
      { title: 'Fetch the Bolt Cutters', creator: 'Fiona Apple', year: '2020', note: 'The album I return to most. Dense, furious, completely original.' },
      { title: 'Punisher', creator: 'Phoebe Bridgers', year: '2020', note: "Quiet devastation. I've cried to this more than I care to admit." },
      { title: 'abysskiss', creator: 'Adrianne Lenker', year: '2018', note: "Solo folk at its most intimate. Like reading someone's diary." },
      { title: 'Norman Fucking Rockwell!', creator: 'Lana Del Rey', year: '2019', note: 'Surprisingly literary. Sublimely Californian.' },
      { title: 'Carrie & Lowell', creator: 'Sufjan Stevens', year: '2015', note: 'Grief as a sound. Not easy listening but deeply necessary.' },
    ],
  },
  {
    title: 'Shows',
    items: [
      { title: 'Succession', creator: 'Jesse Armstrong', note: 'The best writing on television in years. Shakespearean in disguise.' },
      { title: 'The Bear', creator: 'Christopher Storer', note: 'Season one is a masterclass in sustained tension.' },
      { title: 'Fleabag', creator: 'Phoebe Waller-Bridge', note: 'Two series. Perfect from start to finish.' },
      { title: 'I May Destroy You', creator: 'Michaela Coel', note: 'Formally daring and emotionally ruthless. One of the bravest things made for TV.' },
      { title: 'Severance', creator: 'Dan Erickson', note: 'The best metaphor for work-life balance ever committed to screen.' },
    ],
  },
];
