import Nav from "../components/Nav";

export const metadata = {
  title: "Code — Valeria Conde",
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  status: "Live" | "In progress" | "Archive";
  href?: string;
};

const projects: Project[] = [
  {
    title: "valeriaconde.com",
    description:
      "This site. A personal space built with Next.js and Tailwind — an ongoing experiment in design and writing.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    status: "Live",
  },
  {
    title: "Legal Tech Explorer",
    description:
      "A research tool for tracking developments at the intersection of law and technology: regulation, AI in the courts, digital rights.",
    tags: ["Research", "Law", "Technology"],
    status: "In progress",
  },
  {
    title: "Pattern Library",
    description:
      "A small collection of knitting patterns I've designed and documented. Inspired by modular code, built with yarn.",
    tags: ["Knitting", "Design"],
    status: "In progress",
  },
  {
    title: "Reading Log",
    description:
      "A personal record of everything I've read since 2020, with notes. Started as a spreadsheet, now lives here.",
    tags: ["Literature", "Data"],
    status: "Archive",
  },
];

const statusColors: Record<Project["status"], string> = {
  Live: "bg-emerald-50 text-emerald-700",
  "In progress": "bg-amber-50 text-amber-700",
  Archive: "bg-foreground/5 text-muted-text",
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />

      <main className="max-w-3xl mx-auto px-8 sm:px-16 pt-16 pb-28">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-text mb-4">Code</p>
        <h1 className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-foreground leading-none mb-4">
          Builds
        </h1>
        <p className="text-base text-muted-text leading-relaxed mb-14 max-w-lg">
          Code, experiments, and things I made to scratch an itch. Spanning law, technology,
          and the occasional craft project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl border border-border bg-white hover:bg-muted-bg transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h2 className="font-heading text-2xl font-medium text-foreground group-hover:text-accent transition-colors duration-200 leading-snug">
                  {project.title}
                </h2>
                <span
                  className={`shrink-0 text-xs tracking-wide px-2.5 py-0.5 rounded-full mt-1 ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-muted-text leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded-full border border-border text-muted-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
