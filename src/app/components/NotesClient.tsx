"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Note = { id: string; content: string; created_at: string };

export default function NotesClient() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    supabase
      .from("notes")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setNotes(data ?? []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 animate-pulse rounded-2xl bg-muted-bg" />
        ))}
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="font-heading text-2xl font-light text-muted-text">Nothing here yet.</p>
        <p className="mt-2 text-sm text-muted-text">Check back soon.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-px border border-border rounded-2xl overflow-hidden">
      {notes.map((note) => (
        <div key={note.id} className="group px-7 py-6 bg-white">
          <p className="text-base text-foreground leading-relaxed whitespace-pre-wrap">{note.content}</p>
          <p className="mt-3 text-xs text-muted-text">
            {new Date(note.created_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      ))}
    </div>
  );
}
