import Link from "next/link";

const navLinks = ["About", "Writing", "Projects", "Life", "Contact"];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 sm:px-16">
      <Link href="/" className="font-heading text-2xl font-medium tracking-wide text-foreground hover:text-accent transition-colors duration-200">
        VC
      </Link>
      <div className="hidden sm:flex gap-8 text-sm tracking-wide text-muted-text">
        {navLinks.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="hover:text-foreground transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
