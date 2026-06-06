"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Note = { id: string; content: string; created_at: string };

export default function NotesPreview() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    supabase
      .from("notes")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10)
      .then(({ data }) => {
        setNotes(data ?? []);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <p className="text-xs tracking-[0.25em] uppercase text-muted-text mb-4">Thoughts</p>

      {loading ? (
        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 animate-pulse rounded-xl bg-muted-bg" />
          ))}
        </div>
      ) : notes.length === 0 ? (
        <p className="text-sm text-muted-text italic">Nothing here yet.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {notes.map((note) => (
            <div key={note.id} className="p-3 rounded-xl border border-border bg-white">
              <p className="text-xs text-foreground leading-relaxed line-clamp-3">
                {note.content}
              </p>
              <p className="mt-2 text-xs text-muted-text">
                {new Date(note.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      )}

      {notes.length > 0 && (
        <Link
          href="/notes"
          className="mt-3 inline-block text-xs text-accent hover:underline"
        >
          See all thoughts →
        </Link>
      )}
    </div>
  );
}
