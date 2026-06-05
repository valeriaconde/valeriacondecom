import Nav from "../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Contact — Valeria Conde",
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/valeriaconde",
    description: "Code and projects",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/valeriaconde",
    description: "Professional background",
  },
  {
    label: "Twitter / X",
    href: "https://x.com/valeriaconde",
    description: "Occasional thoughts",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />

      <main className="max-w-2xl mx-auto px-8 sm:px-16 pt-16 pb-28">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-text mb-4">Contact</p>
        <h1 className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-foreground leading-none mb-6">
          Get in touch
        </h1>
        <p className="text-base text-muted-text leading-relaxed mb-14 max-w-md">
          I am always happy to hear from people who are curious about the same things I am —
          law and technology, writing, or just a good book recommendation.
        </p>

        {/* Email */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-text mb-3">Email</p>
          <a
            href="mailto:valeriaconde.96@gmail.com"
            className="font-heading text-2xl font-medium text-foreground hover:text-accent transition-colors duration-200"
          >
            valeriaconde.96@gmail.com
          </a>
        </div>

        <hr className="border-border mb-10" />

        {/* Socials */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-text mb-5">Elsewhere</p>
          <div className="flex flex-col gap-3">
            {socials.map(({ label, href, description }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl border border-border bg-white hover:bg-muted-bg transition-colors duration-200"
              >
                <div>
                  <span className="font-heading text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-200">
                    {label}
                  </span>
                  <p className="text-sm text-muted-text mt-0.5">{description}</p>
                </div>
                <span className="text-muted-text group-hover:text-accent transition-colors duration-200 text-lg">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="text-center pb-10 text-xs text-muted-text tracking-wide">
        © 2026 Valeria Conde
      </footer>
    </div>
  );
}
