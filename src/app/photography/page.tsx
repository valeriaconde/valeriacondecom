import Nav from "../components/Nav";

export const metadata = { title: "Photography — Valeria Conde" };

type Photo = {
  bg: string;
  label: string;
  location: string;
  size: "normal" | "wide" | "tall";
};

const photos: Photo[] = [
  { bg: "bg-stone-200", label: "Morning light", location: "Lisbon", size: "wide" },
  { bg: "bg-rose-100", label: "Street scene", location: "Tokyo", size: "normal" },
  { bg: "bg-amber-100", label: "Market", location: "Mexico City", size: "normal" },
  { bg: "bg-sky-100", label: "Waterfront", location: "Buenos Aires", size: "tall" },
  { bg: "bg-emerald-100", label: "Park", location: "Tokyo", size: "normal" },
  { bg: "bg-violet-100", label: "Architecture", location: "Lisbon", size: "normal" },
  { bg: "bg-pink-100", label: "Dusk", location: "Mexico City", size: "wide" },
  { bg: "bg-teal-100", label: "Alley", location: "Tokyo", size: "normal" },
  { bg: "bg-yellow-100", label: "Tiles", location: "Lisbon", size: "normal" },
  { bg: "bg-indigo-100", label: "Faces", location: "Buenos Aires", size: "normal" },
  { bg: "bg-orange-100", label: "Food", location: "Tokyo", size: "normal" },
  { bg: "bg-lime-100", label: "Garden", location: "Lisbon", size: "wide" },
];

export default function Photography() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />
      <main className="max-w-4xl mx-auto px-8 sm:px-16 pt-16 pb-28">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-text mb-4">Photography</p>
        <h1 className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-foreground leading-none mb-4">
          Photographs
        </h1>
        <p className="text-base text-muted-text leading-relaxed mb-14 max-w-lg">
          Mostly film. Scenes I wanted to keep — light, texture, moments that looked like
          something I&apos;d read about.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`rounded-xl border border-border ${photo.bg} flex items-end p-3 ${
                photo.size === "wide" ? "col-span-2" : ""
              } ${photo.size === "tall" ? "row-span-2" : ""} ${
                photo.size === "normal" ? "aspect-square" : ""
              } ${photo.size === "wide" ? "aspect-video" : ""} ${
                photo.size === "tall" ? "aspect-[3/4]" : ""
              }`}
            >
              <div>
                <p className="text-xs font-medium text-foreground/70">{photo.label}</p>
                <p className="text-xs text-muted-text">{photo.location}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-text">
          Real photographs coming soon. These are placeholders.
        </p>
      </main>
      <footer className="text-center pb-10 text-xs text-muted-text tracking-wide">
        © 2026 Valeria Conde
      </footer>
    </div>
  );
}
