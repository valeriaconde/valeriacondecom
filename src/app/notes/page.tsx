import Nav from "../components/Nav";
import NotesClient from "../components/NotesClient";

export const metadata = { title: "Notes — Valeria Conde" };

export default function Notes() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />
      <main className="max-w-2xl mx-auto px-8 sm:px-16 pt-16 pb-28">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-text mb-4">latest</p>
        <h1 className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-foreground leading-none mb-4">
          Shower thoughts
        </h1>
        <p className="text-base text-muted-text leading-relaxed mb-14 max-w-md">
          r.i.p. twitter
        </p>
        <NotesClient />
      </main>
      <footer className="text-center pb-10 text-xs text-muted-text tracking-wide">
        © 2026 Valeria Conde
      </footer>
    </div>
  );
}
