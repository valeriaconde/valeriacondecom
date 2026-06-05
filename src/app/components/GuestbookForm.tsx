"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Entry = { id: string; name: string; message: string; created_at: string };

export default function GuestbookForm() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  useEffect(() => {
    if (!supabase) return;
    supabase
      .from("guestbook_entries")
      .select("id, name, message, created_at")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => setEntries(data ?? []));
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    setStatus("loading");
    const { error } = await supabase
      .from("guestbook_entries")
      .insert({ name: name.trim(), message: message.trim() });
    if (error) { setStatus("error"); return; }
    setStatus("done");
    setName("");
    setMessage("");
  }

  return (
    <div className="flex flex-col gap-10">
      {/* Form */}
      <div className="p-7 rounded-2xl border border-border bg-white">
        {status === "done" ? (
          <div className="text-center py-4">
            <p className="font-heading text-2xl font-light text-foreground mb-2">Thanks for signing!</p>
            <p className="text-sm text-muted-text">Your message will appear once I approve it.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 text-sm text-accent hover:underline"
            >
              Leave another message
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-text mb-1.5">
                Name
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-text focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-text mb-1.5">
                Message
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Say hello, share a thought, leave a recommendation…"
                rows={3}
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
              {status === "loading" ? "Sending…" : "Sign the guestbook"}
            </button>
          </form>
        )}
      </div>

      {/* Entries */}
      {entries.length > 0 && (
        <div className="flex flex-col gap-px border border-border rounded-2xl overflow-hidden">
          {entries.map((entry) => (
            <div key={entry.id} className="px-7 py-5 bg-white">
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <span className="font-heading text-lg font-medium text-foreground">{entry.name}</span>
                <span className="text-xs text-muted-text shrink-0">
                  {new Date(entry.created_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                </span>
              </div>
              <p className="text-sm text-muted-text leading-relaxed">{entry.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
