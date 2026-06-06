import Nav from "../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Life — Valeria Conde",
};

const sections = [
  {
    emoji: "🎾",
    label: "Tennis",
    description:
      "I picked up tennis seriously a few years ago and it quickly became a kind of moving meditation. There is something deeply satisfying about a sport that rewards patience, footwork, and tactical thinking in equal measure.",
  },
  {
    emoji: "🧶",
    label: "Knitting",
    description:
      "Knitting is the hobby I return to whenever I need to think through a problem. The repetition creates space for the kind of slow, wandering thought that is hard to find in front of a screen. I knit mostly sweaters and socks.",
  },
  {
    emoji: "✈️",
    label: "Travel",
    description:
      "I travel whenever I can, with a strong preference for places that force me to be a beginner again — new language, new food, new logic for how the city is laid out. Some favourite trips: Mexico City, Lisbon, Tokyo, Buenos Aires.",
  },
  {
    emoji: "📚",
    label: "Reading",
    description:
      "Reading is the throughline across everything I do. Fiction, mostly — but also legal theory, history of science, and the occasional very long essay. I keep a reading log and am always happy to talk books.",
  },
];

export default function Life() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />

      <main className="max-w-3xl mx-auto px-8 sm:px-16 pt-16 pb-28">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-text mb-4">Life</p>
        <h1 className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-foreground leading-none mb-4">
          Beyond the desk
        </h1>
        <p className="text-base text-muted-text leading-relaxed mb-14 max-w-lg">
          The things I do when I&apos;m not coding, writing, or reading about law.
        </p>

        <div className="flex flex-col gap-10">
          {sections.map(({ emoji, label, description }) => (
            <div key={label} className="flex gap-6 items-start">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-muted-bg border border-border flex items-center justify-center text-xl">
                {emoji}
              </div>
              <div>
                <h2 className="font-heading text-2xl font-medium text-foreground mb-2">{label}</h2>
                <p className="text-base text-muted-text leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-border my-14" />

        <div className="flex flex-col gap-4">
          <Link
            href="/lists"
            className="group flex items-center justify-between gap-6 p-7 rounded-2xl border border-border bg-white hover:bg-muted-bg transition-colors duration-200"
          >
            <div className="flex gap-5 items-center">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-muted-bg border border-border flex items-center justify-center text-xl">
                📝
              </div>
              <div>
                <h2 className="font-heading text-2xl font-medium text-foreground group-hover:text-accent transition-colors">
                  Lists
                </h2>
                <p className="text-sm text-muted-text">Because lists are fun</p>
              </div>
            </div>
            <span className="text-muted-text group-hover:text-accent transition-colors text-lg shrink-0">→</span>
          </Link>

          <Link
            href="/travel"
            className="group flex items-center justify-between gap-6 p-7 rounded-2xl border border-border bg-white hover:bg-muted-bg transition-colors duration-200"
          >
            <div className="flex gap-5 items-center">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-muted-bg border border-border flex items-center justify-center text-xl">
                ✈️
              </div>
              <div>
                <h2 className="font-heading text-2xl font-medium text-foreground group-hover:text-accent transition-colors">
                  Travel
                </h2>
                <p className="text-sm text-muted-text">Trips, stories, and photographs</p>
              </div>
            </div>
            <span className="text-muted-text group-hover:text-accent transition-colors text-lg shrink-0">→</span>
          </Link>

          <Link
            href="/photography"
            className="group flex items-center justify-between gap-6 p-7 rounded-2xl border border-border bg-white hover:bg-muted-bg transition-colors duration-200"
          >
            <div className="flex gap-5 items-center">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-muted-bg border border-border flex items-center justify-center text-xl">
                📷
              </div>
              <div>
                <h2 className="font-heading text-2xl font-medium text-foreground group-hover:text-accent transition-colors">
                  Photography
                </h2>
                <p className="text-sm text-muted-text">Film and digital — scenes I wanted to keep</p>
              </div>
            </div>
            <span className="text-muted-text group-hover:text-accent transition-colors text-lg shrink-0">→</span>
          </Link>
        </div>
      </main>

      <footer className="text-center pb-10 text-xs text-muted-text tracking-wide">
        © 2026 Valeria Conde
      </footer>
    </div>
  );
}
