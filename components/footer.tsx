"use client"

const ArrowUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
)

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border bg-black/75 backdrop-blur-sm text-foreground">
      {/* Animated Red Beam */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm font-mono text-foreground">
            © 2025 <span className="text-primary">LooSkroo™</span> — Forged in Sound.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-foreground transition-colors duration-300 hover:text-primary"
            aria-label="Scroll to top"
          >
            <span className="font-mono tracking-wider">BACK TO TOP</span>
            <div className="rounded-full border border-border p-2 transition-colors duration-300 group-hover:border-primary pulse-red">
              <ArrowUpIcon />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
