"use client";
import { useEffect, useState, useCallback } from "react";
import { supabase } from "../../lib/supabase";

type Option = { id: string; option_text: string; vote_count: number; display_order: number };
type Question = { id: string; question: string; options: Option[] };

export default function Poll() {
  const [question, setQuestion] = useState<Question | null>(null);
  const [voted, setVoted] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPoll = useCallback(async () => {
    if (!supabase) { setLoading(false); return; }
    const { data: q } = await supabase
      .from("poll_questions")
      .select("*")
      .eq("is_active", true)
      .limit(1)
      .single();
    if (!q) { setLoading(false); return; }
    const { data: opts } = await supabase
      .from("poll_options")
      .select("*")
      .eq("question_id", q.id)
      .order("display_order");
    setQuestion({ ...q, options: opts ?? [] });
    setLoading(false);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("poll_voted_option");
    if (stored) setVoted(stored);
    fetchPoll();
  }, [fetchPoll]);

  async function vote(optionId: string) {
    if (voted || !supabase) return;
    await supabase.rpc("vote_for_option", { p_option_id: optionId });
    localStorage.setItem("poll_voted_option", optionId);
    setVoted(optionId);
    fetchPoll();
  }

  if (loading) return <div className="h-48 animate-pulse rounded-2xl bg-muted-bg" />;
  if (!question) return null;

  const total = question.options.reduce((s, o) => s + o.vote_count, 0);

  return (
    <div className="p-7 rounded-2xl border border-border bg-white">
      <p className="text-xs tracking-[0.2em] uppercase text-muted-text mb-3">Quick poll</p>
      <h3 className="font-heading text-xl font-medium text-foreground mb-5">{question.question}</h3>
      <div className="flex flex-col gap-2">
        {question.options.map((opt) => {
          const pct = total > 0 ? Math.round((opt.vote_count / total) * 100) : 0;
          const isChosen = voted === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => vote(opt.id)}
              disabled={!!voted}
              className={`relative text-left px-4 py-3 rounded-xl border overflow-hidden transition-all duration-200 ${
                voted
                  ? isChosen
                    ? "border-accent"
                    : "border-border opacity-60"
                  : "border-border hover:border-accent hover:bg-muted-bg cursor-pointer"
              }`}
            >
              {voted && (
                <span
                  className="absolute inset-y-0 left-0 bg-accent/10 transition-all duration-700"
                  style={{ width: `${pct}%` }}
                />
              )}
              <span className="relative flex items-center justify-between gap-3">
                <span className={`text-sm ${isChosen ? "text-accent font-medium" : "text-foreground"}`}>
                  {opt.option_text}
                </span>
                {voted && <span className="text-xs text-muted-text">{pct}%</span>}
              </span>
            </button>
          );
        })}
      </div>
      {voted && (
        <p className="mt-4 text-center text-xs text-muted-text">
          {total} {total === 1 ? "vote" : "votes"} total
        </p>
      )}
    </div>
  );
}
