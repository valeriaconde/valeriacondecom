import Nav from "../components/Nav";
import ProblemForm from "../components/ProblemForm";

export const metadata = { title: "Problem Solver — Valeria Conde" };

export default function ProblemSolver() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />
      <main className="max-w-2xl mx-auto px-8 sm:px-16 pt-16 pb-28">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-text mb-4">Problem Solver</p>
        <h1 className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-foreground leading-none mb-4">
          Tell me your problem
        </h1>
        <p className="text-base text-muted-text leading-relaxed mb-4 max-w-md">
          Work, relationships, creative blocks, philosophical tangles — whatever it is, describe
          it. I&apos;ll think it through carefully and publish my response here.
        </p>
        <p className="text-sm text-muted-text leading-relaxed mb-14 max-w-md">
          Your email is only used to notify you when your solution goes live. The problem will be
          published anonymously unless you say otherwise.
        </p>
        <ProblemForm />
      </main>
      <footer className="text-center pb-10 text-xs text-muted-text tracking-wide">
        © 2026 Valeria Conde
      </footer>
    </div>
  );
}
