"use client"

export function BeatsHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Effects */}
      
      {/* Red Ambient Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pulse-red" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded text-primary text-sm font-mono tracking-wider">
            MUSIC PRODUCTION
          </span>
        </div>

        <h1 className="mb-6 font-mono text-4xl font-bold tracking-wider text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="glitch red-glow text-balance">INDUSTRIAL BEATS.</span>
          <br />
          <span className="metallic text-balance">CINEMATIC SCORES.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          From hard-hitting industrial tracks to atmospheric film scores, each beat is forged with precision and raw
          energy.
        </p>

        {/* Decorative Line */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-16 h-0.5 bg-primary" />
          <div className="w-2 h-2 bg-primary rounded-full pulse-red" />
          <div className="w-16 h-0.5 bg-primary" />
        </div>
      </div>
    </section>
  )
}
