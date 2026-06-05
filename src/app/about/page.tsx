import Nav from "../components/Nav";

export const metadata = {
  title: "About — Valeria Conde",
};

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />

      <main className="max-w-3xl mx-auto px-8 sm:px-16 pt-16 pb-28">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-text mb-10">
          About
        </p>

        <div className="flex flex-col sm:flex-row gap-12 items-start">
          {/* Photo placeholder */}
          <div className="shrink-0">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-muted-bg border border-border flex items-center justify-center">
              <span className="font-heading text-5xl text-accent font-light">VC</span>
            </div>
          </div>

          <div>
            <h1 className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-foreground leading-none mb-4">
              Valeria Conde
            </h1>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-text mb-6">
              Law · Code · Literature
            </p>
            <p className="text-base text-foreground leading-relaxed mb-4">
              I&apos;m a lawyer, developer, and writer drawn to the places where these three worlds
              overlap. My work sits at the edge of legal systems and technology, and my writing
              explores what it means to live in both.
            </p>
            <p className="text-base text-foreground leading-relaxed mb-4">
              By training I studied law, which gave me a way of reading the world closely and
              arguing precisely. Along the way I taught myself to code — first out of curiosity,
              then out of necessity, now out of genuine love. I find that both disciplines demand
              the same thing: the ability to hold complexity without flinching.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              Literature has always been the third thread. I write fiction and essays, mostly in
              the margins of everything else. I believe good writing and good code share a
              grammar: clarity, economy, surprise.
            </p>
          </div>
        </div>

        <hr className="border-border my-14" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <h2 className="font-heading text-2xl font-medium text-foreground mb-3">Law</h2>
            <p className="text-sm text-muted-text leading-relaxed">
              Legal research, tech regulation, and the intersection of law with emerging
              technology. I am particularly interested in how legal frameworks adapt — or
              fail to adapt — to new digital realities.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-medium text-foreground mb-3">Code</h2>
            <p className="text-sm text-muted-text leading-relaxed">
              Full-stack development, with a preference for clean interfaces and thoughtful
              architecture. This very site is one of my ongoing experiments in building things
              I actually want to use.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-medium text-foreground mb-3">Literature</h2>
            <p className="text-sm text-muted-text leading-relaxed">
              Fiction, personal essays, and literary criticism. Drawn to writers who take ideas
              seriously and sentences even more so.
            </p>
          </div>
        </div>
      </main>

      <footer className="text-center pb-10 text-xs text-muted-text tracking-wide">
        © 2026 Valeria Conde
      </footer>
    </div>
  );
}
