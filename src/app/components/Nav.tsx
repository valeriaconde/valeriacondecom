import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Literature", href: "/writing" },
  { label: "Code", href: "/projects" },
  { label: "Life", href: "/life" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 sm:px-16">
      <Link href="/" className="font-heading text-2xl font-medium tracking-wide text-foreground hover:text-accent transition-colors duration-200">
        VC
      </Link>
      <div className="hidden sm:flex gap-8 text-sm tracking-wide text-muted-text">
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="hover:text-foreground transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
