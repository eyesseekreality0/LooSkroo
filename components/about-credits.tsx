"use client"

const filmCredits = [
  {
    title: "The Bogman",
    year: "2023",
    role: "Original Score Composer",
    description: "Horror film featuring atmospheric and tension-building compositions",
  },
  {
    title: "Unknown Strangers",
    year: "2022",
    role: "Original Score Composer",
    description: "Thriller with industrial and electronic score elements",
  },
]

const collaborations = [
  { name: "Various Independent Artists", type: "Beat Production" },
  { name: "Film Directors", type: "Score Composition" },
  { name: "Visual Artists", type: "Music Video Production" },
]

export function AboutCredits() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Film Credits */}
        <div className="mb-16">
          <h2 className="mb-8 font-mono text-3xl font-bold red-glow md:text-4xl">FILM CREDITS</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {filmCredits.map((credit, index) => (
              <div
                key={index}
                className="rounded-3xl border border-primary/35 bg-black/70 p-6 text-foreground shadow-[0_0_35px_rgba(255,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
              >
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="font-mono text-2xl font-bold text-balance">{credit.title}</h3>
                  <span className="font-mono font-bold text-primary">{credit.year}</span>
                </div>
                <div className="mb-3 font-mono text-sm text-accent">{credit.role}</div>
                <p className="leading-relaxed text-foreground/90">{credit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborations */}
        <div>
          <h2 className="mb-8 font-mono text-3xl font-bold red-glow md:text-4xl">COLLABORATIONS</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {collaborations.map((collab, index) => (
              <div
                key={index}
                className="rounded-3xl border border-accent/40 bg-black/70 p-6 text-center text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-accent/70"
              >
                <div className="mb-2 font-mono text-lg font-bold text-balance">{collab.name}</div>
                <div className="font-mono text-sm text-foreground/85">{collab.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-3xl border border-primary/45 bg-black/75 p-8 text-foreground shadow-[0_0_45px_rgba(255,0,0,0.16)] backdrop-blur-sm">
            <h3 className="mb-4 font-mono text-2xl font-bold red-glow">READY TO COLLABORATE?</h3>
            <p className="mb-6 max-w-md text-foreground">
              Whether you need beats, a film score, or a full production, let's create something unforgettable.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-primary px-8 py-4 font-bold tracking-wider text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
