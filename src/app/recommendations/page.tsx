import Nav from "../components/Nav";

export const metadata = { title: "Recommendations — Valeria Conde" };

type Item = { title: string; creator: string; note: string; year?: string };

const books: Item[] = [
  { title: "The Goldfinch", creator: "Donna Tartt", note: "A heist novel disguised as a meditation on beauty and loss. One of the great ones." },
  { title: "Lincoln in the Bardo", creator: "George Saunders", note: "Formally unlike anything else. Heartbreaking in the best possible way." },
  { title: "The Remains of the Day", creator: "Kazuo Ishiguro", note: "About repression and regret told through the quietest possible narrator." },
  { title: "Gilead", creator: "Marilynne Robinson", note: "A letter from a dying father to his young son. The writing is devastating." },
  { title: "A Little Life", creator: "Hanya Yanagihara", note: "Enormous and brutal and unlike anything I've read. Not for everyone." },
];

const films: Item[] = [
  { title: "Certified Copy", creator: "Abbas Kiarostami", year: "2010", note: "A film about authenticity that is itself a copy of nothing." },
  { title: "Portrait of a Lady on Fire", creator: "Céline Sciamma", year: "2019", note: "Perfect in almost every frame. About looking and being looked at." },
  { title: "Arrival", creator: "Denis Villeneuve", year: "2016", note: "The best science fiction film about language ever made." },
  { title: "Paterson", creator: "Jim Jarmusch", year: "2016", note: "A film about the poetry in ordinary life. Nothing happens and everything does." },
  { title: "The Favourite", creator: "Yorgos Lanthimos", year: "2018", note: "Vicious and funny and impeccably designed." },
];

const music: Item[] = [
  { title: "Fetch the Bolt Cutters", creator: "Fiona Apple", year: "2020", note: "The album I return to most. Dense, furious, completely original." },
  { title: "Punisher", creator: "Phoebe Bridgers", year: "2020", note: "Quiet devastation. I've cried to this more than I care to admit." },
  { title: "abysskiss", creator: "Adrianne Lenker", year: "2018", note: "Solo folk at its most intimate. Like reading someone's diary." },
  { title: "Norman Fucking Rockwell!", creator: "Lana Del Rey", year: "2019", note: "Surprisingly literary. Sublimely Californian." },
  { title: "Carrie & Lowell", creator: "Sufjan Stevens", year: "2015", note: "Grief as a sound. Not easy listening but deeply necessary." },
];

const shows: Item[] = [
  { title: "Succession", creator: "Jesse Armstrong", note: "The best writing on television in years. Shakespearean in disguise." },
  { title: "The Bear", creator: "Christopher Storer", note: "Season one is a masterclass in sustained tension." },
  { title: "Fleabag", creator: "Phoebe Waller-Bridge", note: "Two series. Perfect from start to finish." },
  { title: "I May Destroy You", creator: "Michaela Coel", note: "Formally daring and emotionally ruthless. One of the bravest things made for TV." },
  { title: "Severance", creator: "Dan Erickson", note: "The best metaphor for work-life balance ever committed to screen." },
];

function Section({ title, items }: { title: string; items: Item[] }) {
  return (
    <section>
      <h2 className="font-heading text-3xl font-medium text-foreground mb-6">{title}</h2>
      <div className="flex flex-col gap-px border border-border rounded-2xl overflow-hidden mb-14">
        {items.map((item, i) => (
          <div key={i} className="group px-7 py-5 bg-white hover:bg-muted-bg transition-colors duration-200">
            <div className="flex items-baseline gap-3 flex-wrap mb-1">
              <span className="font-heading text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                {item.title}
              </span>
              <span className="text-sm text-muted-text">{item.creator}{item.year ? `, ${item.year}` : ""}</span>
            </div>
            <p className="text-sm text-muted-text leading-relaxed">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Recommendations() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />
      <main className="max-w-3xl mx-auto px-8 sm:px-16 pt-16 pb-28">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-text mb-4">Recommendations</p>
        <h1 className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-foreground leading-none mb-4">
          Things I love
        </h1>
        <p className="text-base text-muted-text leading-relaxed mb-14 max-w-lg">
          Books, films, music, and shows I find myself recommending constantly. Updated when
          something new earns a place here.
        </p>
        <Section title="Books" items={books} />
        <Section title="Films" items={films} />
        <Section title="Music" items={music} />
        <Section title="Shows" items={shows} />
      </main>
      <footer className="text-center pb-10 text-xs text-muted-text tracking-wide">
        © 2026 Valeria Conde
      </footer>
    </div>
  );
}
