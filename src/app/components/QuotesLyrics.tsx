const quotes = [
  {
    text: "You could rattle the stars. You could do anything, if only you dared.",
    source: "Sarah J. Maas",
    work: "Throne of Glass",
  },
  {
    text: "I am not afraid of storms, for I am learning how to sail my ship.",
    source: "Louisa May Alcott",
    work: "Little Women",
  },
  {
    text: "She was a girl who knew how to be happy even when she was sad. And that's important.",
    source: "Marilyn Monroe",
    work: "",
  },
];

export default function QuotesLyrics() {
  return (
    <div className="flex flex-col gap-2">
      {quotes.map((q, i) => (
        <div key={i} className="p-3 rounded-xl border border-border bg-white">
          <p className="text-xs text-foreground leading-relaxed">
            &ldquo;{q.text}&rdquo;
          </p>
          <p className="mt-2 text-xs text-muted-text">
            {q.source}{q.work ? ` — ${q.work}` : ""}
          </p>
        </div>
      ))}
    </div>
  );
}
