"use client"

export function BeatsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />

      {/* Red Ambient Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pulse-red" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded text-primary text-sm font-mono tracking-wider">
            MUSIC PRODUCTION
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6 tracking-wider">
          <span className="glitch red-glow text-balance">INDUSTRIAL BEATS.</span>
          <br />
          <span className="metallic text-balance">CINEMATIC SCORES.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
