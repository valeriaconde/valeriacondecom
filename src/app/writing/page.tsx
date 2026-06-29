import Nav from "../components/Nav";
import QuotesLyrics from "../components/QuotesLyrics";

export const metadata = {
  title: "Literature — Valeria Conde",
};

type Piece = {
  title: string;
  date: string;
  category: "Essay" | "Fiction" | "Criticism";
  description: string;
};

const pieces: Piece[] = [
  {
    title: "On Reading Contracts Like Novels",
    date: "March 2026",
    category: "Essay",
    description:
      "What happens when you bring a literary sensibility to legal documents — and vice versa.",
  },
  {
    title: "The Witness",
    date: "January 2026",
    category: "Fiction",
    description:
      "A short story about testimony, memory, and what courts ask us to believe.",
  },
  {
    title: "Precision as Style",
    date: "November 2025",
    category: "Essay",
    description:
      "Why the most important decision in any piece of writing is also the smallest: word choice.",
  },
  {
    title: "The Algorithm and the Judge",
    date: "September 2025",
    category: "Essay",
    description:
      "A reflection on automated decision-making in the legal system and what it reveals about judgment itself.",
  },
  {
    title: "First Frost",
    date: "August 2025",
    category: "Fiction",
    description: "A quiet story set at the end of a long summer.",
  },
  {
    title: "On Knitting and Code",
    date: "June 2025",
    category: "Essay",
    description:
      "Both knitting and programming are about pattern recognition, error-correction, and patience.",
  },
];

const categoryColors: Record<Piece["category"], string> = {
  Essay: "bg-muted-bg text-accent",
  Fiction: "bg-accent/10 text-accent",
  Criticism: "bg-foreground/5 text-muted-text",
};

export default function Writing() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />

      <main className="max-w-3xl mx-auto px-8 sm:px-16 pt-16 pb-28">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-text mb-4">Literature</p>
        <h1 className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-foreground leading-none mb-4">
          Literature
        </h1>
        <p className="text-base text-muted-text leading-relaxed mb-14 max-w-lg">
          Fiction, essays, and criticism. Work in progress — everything here is something I
          actually wanted to say.
        </p>

        <div className="flex flex-col gap-px border border-border rounded-2xl overflow-hidden">
          {pieces.map((piece, i) => (
            <div
              key={i}
              className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 px-7 py-6 bg-white hover:bg-muted-bg transition-colors duration-200 cursor-pointer"
            >
              <div className="shrink-0 pt-0.5">
                <span
                  className={`inline-block text-xs tracking-wide px-2.5 py-0.5 rounded-full font-sans ${categoryColors[piece.category]}`}
                >
                  {piece.category}
                </span>
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-200 leading-snug mb-1">
                  {piece.title}
                </h2>
                <p className="text-sm text-muted-text leading-relaxed">{piece.description}</p>
              </div>
              <div className="shrink-0 text-xs text-muted-text pt-0.5 whitespace-nowrap">
                {piece.date}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-text mb-8">Words I love</p>
          <QuotesLyrics />
        </div>
      </main>

      <footer className="text-center pb-10 text-xs text-muted-text tracking-wide">
        © 2026 Valeria Conde
      </footer>
    </div>
  );
}
