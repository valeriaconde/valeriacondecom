import Link from "next/link";
import Nav from "./components/Nav";

const sections = [
  { href: "/writing", label: "Writing", description: "Fiction, essays, and words in progress" },
  { href: "/projects", label: "Projects", description: "Code, builds, and experiments" },
  { href: "/life", label: "Life", description: "Tennis, knitting, travel, and more" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />

      <main className="flex flex-col items-center text-center px-8 pt-20 pb-28 sm:px-16">
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

      <section className="px-8 pb-28 sm:px-16 max-w-4xl mx-auto w-full">
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
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-muted-text tracking-wide">
        © 2026 Valeria Conde
      </footer>
    </div>
  );
}
