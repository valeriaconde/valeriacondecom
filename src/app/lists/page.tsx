import Nav from "../components/Nav";

export const metadata = { title: "Lists — Valeria Conde" };

type List = { title: string; items: string[] };

const lists: List[] = [
  {
    title: "Books that changed how I think",
    items: [
      "The Order of Things — Foucault",
      "Thinking, Fast and Slow — Kahneman",
      "The Master and His Emissary — Iain McGilchrist",
      "How to Write a Sentence — Stanley Fish",
      "A Room of One's Own — Virginia Woolf",
      "The Shock Doctrine — Naomi Klein",
    ],
  },
  {
    title: "Things I want to learn before I'm 35",
    items: [
      "Play the piano — properly, not just 'Für Elise'",
      "Speak Portuguese fluently",
      "Sail a small boat",
      "Develop my own film photographs",
      "Cook a proper French tart",
      "Finish a novel",
    ],
  },
  {
    title: "Places I still need to go",
    items: [
      "Kyoto in cherry blossom season",
      "Oaxaca, Mexico",
      "Porto, Portugal",
      "The Lofoten Islands, Norway",
      "Istanbul",
      "Tbilisi, Georgia",
      "Patagonia",
    ],
  },
  {
    title: "Films I want to rewatch every year",
    items: [
      "Certified Copy — Kiarostami",
      "Mulholland Drive — Lynch",
      "Portrait of a Lady on Fire — Sciamma",
      "Stalker — Tarkovsky",
      "The Grand Budapest Hotel — Anderson",
    ],
  },
  {
    title: "Sentences I keep coming back to",
    items: [
      '"The only way out is through." — Robert Frost',
      '"We are all just walking each other home." — Ram Dass',
      '"In the middle of difficulty lies opportunity." — Einstein (possibly apocryphal)',
      '"Not all those who wander are lost." — Tolkien',
      '"Tell me, what is it you plan to do / with your one wild and precious life?" — Mary Oliver',
    ],
  },
  {
    title: "Albums I'd put on a desert island",
    items: [
      "Fetch the Bolt Cutters — Fiona Apple",
      "Blue — Joni Mitchell",
      "Carrie & Lowell — Sufjan Stevens",
      "Dummy — Portishead",
      "Illinois — Sufjan Stevens",
      "Rumours — Fleetwood Mac",
    ],
  },
];

export default function Lists() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />
      <main className="max-w-3xl mx-auto px-8 sm:px-16 pt-16 pb-28">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-text mb-4">Lists</p>
        <h1 className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-foreground leading-none mb-4">
          Lists
        </h1>
        <p className="text-base text-muted-text leading-relaxed mb-14 max-w-lg">
          Because lists are a perfectly valid form of writing. Updated whenever I feel like it.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {lists.map((list) => (
            <div key={list.title} className="p-7 rounded-2xl border border-border bg-white">
              <h2 className="font-heading text-xl font-medium text-foreground mb-5 leading-snug">
                {list.title}
              </h2>
              <ol className="flex flex-col gap-2.5">
                {list.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-text leading-relaxed">
                    <span className="shrink-0 font-heading text-accent font-medium w-4">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </main>
      <footer className="text-center pb-10 text-xs text-muted-text tracking-wide">
        © 2026 Valeria Conde
      </footer>
    </div>
  );
}
