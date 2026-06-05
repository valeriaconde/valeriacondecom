import Nav from "../components/Nav";

export const metadata = { title: "Travel — Valeria Conde" };

type Trip = {
  destination: string;
  dates: string;
  description: string;
  photos: { bg: string; label: string }[];
};

const trips: Trip[] = [
  {
    destination: "Tokyo, Japan",
    dates: "October 2025",
    description:
      "Three weeks that felt like three years. Tokyo is a city designed for obsessives — every neighborhood a different city, every street something to notice. I ate ramen for breakfast four times. I visited every bookshop I could find. I watched the city from a hill in Yanaka and felt very small in the best possible way.",
    photos: [
      { bg: "bg-rose-100", label: "Yanaka" },
      { bg: "bg-amber-100", label: "Shibuya at dusk" },
      { bg: "bg-emerald-100", label: "Tsukiji" },
      { bg: "bg-sky-100", label: "Ueno Park" },
    ],
  },
  {
    destination: "Lisbon, Portugal",
    dates: "April 2025",
    description:
      "A city that rewards slowness. I spent most of my time walking, getting lost, and sitting in tascas I found by accident. The light in Lisbon is unlike anywhere else — golden and slightly melancholy, which suits the fado perfectly. I'd move there tomorrow if I could.",
    photos: [
      { bg: "bg-yellow-100", label: "Alfama" },
      { bg: "bg-orange-100", label: "Trams" },
      { bg: "bg-blue-100", label: "Miradouros" },
      { bg: "bg-lime-100", label: "Belém" },
    ],
  },
  {
    destination: "Mexico City, Mexico",
    dates: "January 2025",
    description:
      "Overwhelming in the best sense — art, food, history, noise, and incredible kindness from everyone I met. The Museo Tamayo, the Mercado de Jamaica, tacos at 11pm on a Tuesday. A city I think about more than almost any other.",
    photos: [
      { bg: "bg-pink-100", label: "Condesa" },
      { bg: "bg-violet-100", label: "Frida Kahlo Museum" },
      { bg: "bg-teal-100", label: "Zócalo" },
      { bg: "bg-red-100", label: "Mercado" },
    ],
  },
  {
    destination: "Buenos Aires, Argentina",
    dates: "August 2024",
    description:
      "Felt immediately like somewhere I understood. The bookshops (so many bookshops), the steaks, the long dinners that start at midnight. Buenos Aires has a slightly melancholy grandeur — beautiful buildings showing their age, a city that remembers being the most important city in the world.",
    photos: [
      { bg: "bg-indigo-100", label: "Recoleta" },
      { bg: "bg-cyan-100", label: "San Telmo" },
      { bg: "bg-fuchsia-100", label: "Palermo" },
      { bg: "bg-stone-100", label: "La Boca" },
    ],
  },
];

export default function Travel() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />
      <main className="max-w-3xl mx-auto px-8 sm:px-16 pt-16 pb-28">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-text mb-4">Travel</p>
        <h1 className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-foreground leading-none mb-4">
          Places
        </h1>
        <p className="text-base text-muted-text leading-relaxed mb-16 max-w-lg">
          Trips I&apos;ve taken and the notes I brought back. More photographs than words,
          more questions than answers.
        </p>

        <div className="flex flex-col gap-20">
          {trips.map((trip) => (
            <article key={trip.destination}>
              <div className="mb-5">
                <h2 className="font-heading text-3xl sm:text-4xl font-medium text-foreground leading-tight">
                  {trip.destination}
                </h2>
                <p className="text-sm text-muted-text mt-1">{trip.dates}</p>
              </div>
              <p className="text-base text-foreground leading-relaxed mb-7">{trip.description}</p>
              {/* Photo grid placeholder */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trip.photos.map(({ bg, label }) => (
                  <div
                    key={label}
                    className={`aspect-square rounded-xl ${bg} border border-border flex items-end p-3`}
                  >
                    <span className="text-xs text-muted-text">{label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
      <footer className="text-center pb-10 text-xs text-muted-text tracking-wide">
        © 2026 Valeria Conde
      </footer>
    </div>
  );
}
