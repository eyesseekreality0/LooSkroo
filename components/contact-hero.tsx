"use client"

const MailIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />

      {/* Red Ambient Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pulse-red" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-center gap-3">
          <MailIcon />
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded text-primary text-sm font-mono tracking-wider">
            GET IN TOUCH
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6 tracking-wider">
          <span className="glitch red-glow text-balance">LET'S CREATE.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Ready to forge something extraordinary? Whether you need beats, a film score, or a full production, let's
          collaborate.
        </p>
      </div>
    </section>
  )
}
