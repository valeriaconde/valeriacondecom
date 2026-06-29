import Link from "next/link";
import Nav from "./components/Nav";
import Poll from "./components/Poll";
import HeroAnnotations from "./components/HeroAnnotations";

const currentlies = [
  { emoji: "📖", label: "Reading", value: "My Brilliant Friend — Elena Ferrante" },
  { emoji: "🎬", label: "Watching", value: "The Sopranos" },
  { emoji: "🎵", label: "Listening", value: "Fuerza Regida" },
];

const sections = [
  {
    href: "/writing",
    index: "01",
    label: "Literature",
    description: "Writing, reading, and important words.",
  },
  {
    href: "/projects",
    index: "02",
    label: "Code",
    description: "Making things exist.",
  },
];

export default function Home() {
  return (
    <div className="bg-background font-sans">
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-8 sm:px-16 pb-24">
        <p className="text-xs tracking-[0.35em] uppercase text-muted-text mb-10">
          random parts of myself
        </p>
        <h1 className="font-heading text-[clamp(3rem,7vw,6rem)] font-light tracking-tight text-foreground leading-none mb-8 whitespace-nowrap">
          Valeria Conde
        </h1>
        <p className="font-heading text-xl sm:text-3xl italic text-muted-text font-light max-w-xl leading-relaxed mb-14">
          Software engineer, lawyer, writer, reader, tennis player, tea enjoyer, dog owner, & lover
        </p>
        <HeroAnnotations currentlies={currentlies} />
      </section>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div className="w-full h-px bg-border" />

      {/* ── Sections ─────────────────────────────────────────── */}
      {sections.map(({ href, index, label, description }, i) => (
        <Link key={href} href={href} className="group block">
          <div
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-8 sm:px-20 lg:px-32 py-24 transition-colors duration-300 hover:bg-muted-bg ${
              i < sections.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex items-start gap-8 sm:gap-14">
              <span className="text-xs tracking-[0.25em] text-muted-text mt-2 shrink-0">{index}</span>
              <div>
                <h2 className="font-heading text-[clamp(3rem,8vw,7rem)] font-light tracking-tight text-foreground leading-none mb-4 group-hover:text-accent transition-colors duration-300">
                  {label}
                </h2>
                <p className="text-base text-muted-text max-w-md leading-relaxed">{description}</p>
              </div>
            </div>
            <span className="text-3xl text-muted-text group-hover:text-accent group-hover:translate-x-2 transition-all duration-300 shrink-0">
              →
            </span>
          </div>
        </Link>
      ))}

      {/* ── Divider ──────────────────────────────────────────── */}
      <div className="w-full h-px bg-border" />

      {/* ── Recommendations ──────────────────────────────────── */}
      <section className="relative overflow-hidden px-8 sm:px-20 lg:px-32 py-40 flex flex-col items-center text-center">
        {/* Stickers — drop images into /public/stickers/ and list them here */}
        {[
          { src: "/stickers/sticker1.png", className: "absolute top-10 left-[6%] w-20 rotate-[-12deg]" },
          { src: "/stickers/sticker2.png", className: "absolute top-16 right-[8%] w-16 rotate-[8deg]" },
          { src: "/stickers/sticker3.png", className: "absolute bottom-12 left-[12%] w-14 rotate-[6deg]" },
          { src: "/stickers/sticker4.png", className: "absolute bottom-10 right-[14%] w-18 rotate-[-9deg]" },
          { src: "/stickers/sticker5.png", className: "absolute top-1/2 left-[3%] w-12 -translate-y-1/2 rotate-[4deg]" },
          { src: "/stickers/sticker6.png", className: "absolute top-1/2 right-[3%] w-14 -translate-y-1/2 rotate-[-6deg]" },
        ].map(({ src, className }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt="" className={`${className} pointer-events-none select-none`} />
        ))}

        <p className="text-xs tracking-[0.35em] uppercase text-muted-text mb-8 relative z-10">Curated</p>
        <h2 className="font-heading text-[clamp(3rem,8vw,6.5rem)] font-light tracking-tight text-foreground leading-none mb-6 relative z-10">
          Recommendations
        </h2>
        <p className="font-heading text-xl sm:text-2xl italic text-muted-text font-light mb-12 relative z-10">
          Stuff I loved and I think you will too 💕
        </p>
        <Link
          href="/recommendations"
          className="relative z-10 px-8 py-3.5 border border-border text-foreground text-sm tracking-widest uppercase rounded-full hover:bg-muted-bg transition-colors duration-200"
        >
          See recommendations
        </Link>
      </section>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div className="w-full h-px bg-border" />

      {/* ── Poll + Guestbook ─────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
        <div className="px-8 sm:px-20 lg:px-16 xl:px-24 py-32">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-text mb-12">Community</p>
          <Poll />
        </div>
        <div className="px-8 sm:px-20 lg:px-16 xl:px-24 py-32 flex flex-col justify-between">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-muted-text mb-12">Say hello</p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-light text-foreground leading-tight mb-6">
              Leave your<br />mark
            </h2>
            <p className="text-base text-muted-text leading-relaxed max-w-sm">
              Sign the guestbook. Tell me where you found this, what you think, or just say hi.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/guestbook"
              className="px-8 py-3.5 bg-accent text-white text-sm tracking-widest uppercase rounded-full hover:bg-[#a84f70] transition-colors duration-200"
            >
              Guestbook
            </Link>
            <Link
              href="/recommendations"
              className="px-8 py-3.5 border border-border text-foreground text-sm tracking-widest uppercase rounded-full hover:bg-muted-bg transition-colors duration-200"
            >
              Recommendations
            </Link>
          </div>
        </div>
      </section>

      {/* ── Fun ──────────────────────────────────────────────── */}
      <Link href="/life" className="group block">
        <div className="relative overflow-hidden flex flex-col items-center justify-center text-center px-8 sm:px-20 lg:px-32 py-16 bg-foreground transition-colors duration-700 hover:bg-[#1a1a1a]">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(180,80,110,0.12) 0%, transparent 70%)" }}
          />
          <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-light tracking-[0.2em] text-background leading-none relative z-10
            opacity-40 group-hover:opacity-100 transition-opacity duration-500
            [text-shadow:0_0_80px_rgba(255,255,255,0.05)] group-hover:[text-shadow:0_0_120px_rgba(180,80,110,0.3)]">
            fun
          </h2>
          <span className="mt-4 text-xs tracking-[0.5em] uppercase text-muted-text opacity-0 group-hover:opacity-60 transition-opacity duration-500 relative z-10">
            enter
          </span>
        </div>
      </Link>

      {/* ── Footer ───────────────────────────────────────────── */}
      <div className="w-full h-px bg-border" />
      <footer className="flex items-center justify-between px-8 sm:px-20 lg:px-32 py-10 text-xs text-muted-text tracking-wide">
        <span>© 2026 Valeria Conde</span>
        <span>Law · Code · Literature</span>
      </footer>
    </div>
  );
}
