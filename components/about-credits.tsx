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
    <section className="relative py-20 px-4 bg-black/30">
      <div className="container mx-auto max-w-6xl">
        {/* Film Credits */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-8 red-glow">FILM CREDITS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {filmCredits.map((credit, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold font-mono text-balance">{credit.title}</h3>
                  <span className="text-primary font-mono font-bold">{credit.year}</span>
                </div>
                <div className="text-accent font-mono text-sm mb-3">{credit.role}</div>
                <p className="text-muted-foreground leading-relaxed">{credit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborations */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-8 red-glow">COLLABORATIONS</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {collaborations.map((collab, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg text-center hover:border-accent/50 transition-all duration-300"
              >
                <div className="text-lg font-bold font-mono mb-2 text-balance">{collab.name}</div>
                <div className="text-sm text-accent font-mono">{collab.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-card border border-primary/50 rounded-lg red-glow-box">
            <h3 className="text-2xl font-bold font-mono mb-4 red-glow">READY TO COLLABORATE?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Whether you need beats, a film score, or a full production, let's create something unforgettable.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold tracking-wider rounded hover:bg-primary/90 transition-all duration-300"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
