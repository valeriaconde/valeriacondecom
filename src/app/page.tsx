import Link from "next/link";
import Nav from "./components/Nav";
import Poll from "./components/Poll";
import NotesPreview from "./components/NotesPreview";

// ── Edit these to update your currentlies ──────────────────────────
const currentlies = [
  { emoji: "📖", label: "Reading", value: "My Brilliant Friend - Elena Ferrante" },
  { emoji: "🎬", label: "Watching", value: "The Sopranos" },
  { emoji: "🎵", label: "Listening", value: "Fuerza Regida" },
];
// ────────────────────────────────────────────────────────────────────

const sections = [
  { href: "/writing",  label: "Writing",  description: "Fiction, essays, and words in progress" },
  { href: "/projects", label: "Projects", description: "Code, builds, and experiments" },
  { href: "/life",     label: "Life",     description: "Tennis, knitting, and everything else" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-8 pt-20 pb-28 sm:px-16">
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
      </section>

      {/* Three-column layout */}
      <div className="max-w-6xl mx-auto px-8 sm:px-12 pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_240px] gap-10">

          {/* Left — Right now + Recommendations */}
          <aside className="order-2 lg:order-1 flex flex-col gap-8">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-muted-text mb-5">Right now</p>
              <div className="flex flex-col gap-4">
                {currentlies.map(({ emoji, label, value }) => (
                  <div key={label} className="flex gap-3 items-start">
                    <span className="text-base shrink-0 mt-0.5">{emoji}</span>
                    <div>
                      <p className="text-[11px] tracking-wide uppercase text-muted-text leading-none mb-1">
                        {label}
                      </p>
                      <p className="text-sm text-foreground leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/recommendations"
              className="group block p-5 rounded-2xl border border-border bg-white hover:bg-muted-bg transition-colors duration-200"
            >
              <h2 className="font-heading text-lg font-medium mb-1 group-hover:text-accent transition-colors duration-200">
                My recommendations
              </h2>
              <p className="text-xs text-muted-text leading-relaxed">
                Books, films, music, and more
              </p>
            </Link>

            <Link
              href="/guestbook"
              className="group block p-5 rounded-2xl border border-border bg-white hover:bg-muted-bg transition-colors duration-200"
            >
              <h2 className="font-heading text-lg font-medium mb-1 group-hover:text-accent transition-colors duration-200">
                Guestbook
              </h2>
              <p className="text-xs text-muted-text leading-relaxed">
                Leave your mark
              </p>
            </Link>

            <Poll />
          </aside>

          {/* Center — sections hub */}
          <main className="order-1 lg:order-2 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map(({ href, label, description }) => (
                <Link
                  key={href}
                  href={href}
                  className="group p-6 rounded-2xl border border-border bg-white hover:bg-muted-bg transition-colors duration-200"
                >
                  <h2 className="font-heading text-xl font-medium mb-1.5 group-hover:text-accent transition-colors duration-200">
                    {label}
                  </h2>
                  <p className="text-xs text-muted-text leading-relaxed">{description}</p>
                </Link>
              ))}
              {/* Problem Solver — full width */}
              <Link
                href="/problem-solver"
                className="group sm:col-span-2 lg:col-span-3 p-6 rounded-2xl border border-border bg-white hover:bg-muted-bg transition-colors duration-200 flex items-center justify-between gap-6"
              >
                <div>
                  <h2 className="font-heading text-xl font-medium mb-1.5 group-hover:text-accent transition-colors duration-200">
                    Problem Solver
                  </h2>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Tell me what you&apos;re dealing with. I&apos;ll think it through and publish a solution.
                  </p>
                </div>
                <span className="shrink-0 text-xl text-muted-text group-hover:text-accent transition-colors">→</span>
              </Link>
            </div>
          </main>

          {/* Right — Notes preview */}
          <aside className="order-3 lg:order-3">
            <NotesPreview />
          </aside>

        </div>
      </div>

      <footer className="text-center pb-10 text-xs text-muted-text tracking-wide">
        © 2026 Valeria Conde
      </footer>
    </div>
  );
}
