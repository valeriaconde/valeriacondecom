import Link from "next/link";
import Nav from "./components/Nav";
import Poll from "./components/Poll";

// ── Edit these to update your currentlies ──────────────────────────
const currentlies = [
  { emoji: "📖", label: "Reading", value: "The Corrections — Jonathan Franzen" },
  { emoji: "🎬", label: "Watching", value: "Succession (rewatch)" },
  { emoji: "🎵", label: "Listening", value: "Adrianne Lenker" },
  { emoji: "✈️", label: "Planning", value: "Porto, Portugal" },
];
// ────────────────────────────────────────────────────────────────────

const sections = [
  { href: "/writing",        label: "Writing",        description: "Fiction, essays, and words in progress" },
  { href: "/projects",       label: "Projects",       description: "Code, builds, and experiments" },
  { href: "/travel",         label: "Travel",         description: "Trips, stories, and photographs" },
  { href: "/life",           label: "Life",           description: "Tennis, knitting, and everything else" },
  { href: "/photography",    label: "Photography",    description: "Film and digital" },
  { href: "/notes",          label: "Notes",          description: "Short thoughts and links" },
  { href: "/recommendations",label: "Recommendations",description: "Books, films, music, shows" },
  { href: "/lists",          label: "Lists",          description: "Because lists are fun" },
  { href: "/guestbook",      label: "Guestbook",      description: "Leave your mark" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />

      {/* Hero */}
      <main className="flex flex-col items-center text-center px-8 pt-20 pb-16 sm:px-16">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-text mb-8">
          Law · Code · Literature
        </p>
        <h1 className="font-heading text-6xl sm:text-8xl font-light tracking-tight text-foreground leading-none mb-6">
          Valeria Conde
        </h1>
        <p className="font-heading text-xl sm:text-2xl italic text-muted-text font-light max-w-lg leading-relaxed">
          Navigating the intersection of law, technology, and literature.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/about"
            className="px-7 py-3 bg-accent text-white text-sm tracking-wide rounded-full hover:bg-[#a84f70] transition-colors duration-200"
          >
            About me
          </Link>
          <Link
            href="/writing"
            className="px-7 py-3 border border-border text-foreground text-sm tracking-wide rounded-full hover:bg-muted-bg transition-colors duration-200"
          >
            My writing
          </Link>
        </div>
      </main>

      {/* Currentlies */}
      <section className="px-8 pb-12 sm:px-16 max-w-4xl mx-auto w-full">
        <p className="text-xs tracking-[0.25em] uppercase text-muted-text mb-4">Right now</p>
        <div className="flex flex-wrap gap-3">
          {currentlies.map(({ emoji, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border bg-white text-sm"
            >
              <span>{emoji}</span>
              <span className="text-muted-text">{label}:</span>
              <span className="text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sections hub */}
      <section className="px-8 pb-12 sm:px-16 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {sections.map(({ href, label, description }) => (
            <Link
              key={href}
              href={href}
              className="group p-7 rounded-2xl border border-border bg-white hover:bg-muted-bg transition-colors duration-200"
            >
              <h2 className="font-heading text-2xl font-medium mb-2 group-hover:text-accent transition-colors duration-200">
                {label}
              </h2>
              <p className="text-sm text-muted-text leading-relaxed">{description}</p>
            </Link>
          ))}
          {/* Problem Solver — full width */}
          <Link
            href="/problem-solver"
            className="group sm:col-span-3 p-7 rounded-2xl border border-border bg-white hover:bg-muted-bg transition-colors duration-200 flex items-center justify-between gap-6"
          >
            <div>
              <h2 className="font-heading text-2xl font-medium mb-2 group-hover:text-accent transition-colors duration-200">
                Problem Solver
              </h2>
              <p className="text-sm text-muted-text leading-relaxed">
                Tell me what you&apos;re dealing with. I&apos;ll think it through and publish a solution.
              </p>
            </div>
            <span className="shrink-0 text-2xl text-muted-text group-hover:text-accent transition-colors">→</span>
          </Link>
        </div>
      </section>

      {/* Poll */}
      <section className="px-8 pb-20 sm:px-16 max-w-4xl mx-auto w-full">
        <Poll />
      </section>

      <footer className="text-center pb-10 text-xs text-muted-text tracking-wide">
        © 2026 Valeria Conde
      </footer>
    </div>
  );
}
