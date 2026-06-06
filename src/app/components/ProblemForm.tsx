"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Solution = { id: string; problem: string; solution: string; created_at: string };

export default function ProblemForm() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  useEffect(() => {
    if (!supabase) return;
    supabase
      .from("problems")
      .select("id, problem, solution, created_at")
      .eq("published", true)
      .not("solution", "is", null)
      .order("created_at", { ascending: false })
      .then(({ data }) => setSolutions(data ?? []));
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    setStatus("loading");
    const { error } = await supabase
      .from("problems")
      .insert({ email: email.trim(), problem: problem.trim() });
    if (error) { setStatus("error"); return; }
    setStatus("done");
    setEmail("");
    setProblem("");
  }

  return (
    <div className="flex flex-col gap-14">
      {/* Form */}
      <div className="p-7 rounded-2xl border border-border bg-white">
        {status === "done" ? (
          <div className="text-center py-4">
            <p className="font-heading text-2xl font-light text-foreground mb-2">Got it.</p>
            <p className="text-sm text-muted-text max-w-xs mx-auto">
              I&apos;ll think it through and publish a solution here. Keep an eye out.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 text-sm text-accent hover:underline"
            >
              Submit another
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-text mb-1.5">
                Your email
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-text focus:outline-none focus:border-accent transition-colors"
              />
              <p className="mt-1 text-xs text-muted-text">
                Only used to notify you when your solution is published. Never shared.
              </p>
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-text mb-1.5">
                The problem
              </label>
              <textarea
                required
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Describe what you're dealing with. The more specific, the better."
                rows={5}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-text focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            {status === "error" && (
              <p className="text-sm text-red-500">Something went wrong. Try again?</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="self-start px-6 py-2.5 bg-accent text-white text-sm tracking-wide rounded-full hover:bg-[#a84f70] transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Sending…" : "Send it in"}
            </button>
          </form>
        )}
      </div>

      {/* Published solutions */}
      {solutions.length > 0 && (
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-text mb-6">Published solutions</p>
          <div className="flex flex-col gap-6">
            {solutions.map((s) => (
              <div key={s.id} className="p-7 rounded-2xl border border-border bg-white">
                <p className="text-xs tracking-[0.15em] uppercase text-muted-text mb-3">The problem</p>
                <p className="text-sm text-foreground leading-relaxed mb-5 italic">&ldquo;{s.problem}&rdquo;</p>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-text mb-3">My thinking</p>
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{s.solution}</p>
                <p className="mt-4 text-xs text-muted-text">
                  {new Date(s.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
