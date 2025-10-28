"use client"

export function MusicPresence() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-foreground red-glow">LISTEN & CONNECT</h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-foreground/80">
            Immerse yourself in the latest releases and connect with LooSkroo™ across every platform.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-primary/40 bg-black/60 p-6 shadow-[0_0_45px_rgba(255,0,0,0.12)] backdrop-blur-sm">
            <h3 className="text-lg font-mono font-bold text-primary">Run For Your Life - Horror Movie Trailer Music</h3>
            <iframe
              src="//www.beatstars.com/embed/track/?id=22596414"
              width="100%"
              height="140"
              style={{ border: "none" }}
              loading="lazy"
              title="Run For Your Life - Horror Movie Trailer Music"
              allow="autoplay"
            />
          </div>

          <div className="space-y-4 rounded-3xl border border-primary/40 bg-black/60 p-6 shadow-[0_0_45px_rgba(255,0,0,0.12)] backdrop-blur-sm">
            <h3 className="text-lg font-mono font-bold text-primary">Let Me In (Chris Webby Boom-Bap Type Beat)</h3>
            <iframe
              src="//www.beatstars.com/embed/track/?id=22618266"
              width="100%"
              height="140"
              style={{ border: "none" }}
              loading="lazy"
              title="Let Me In (Chris Webby Boom-Bap Type Beat)"
              allow="autoplay"
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-primary/50 bg-black/70 p-6 backdrop-blur-sm shadow-[0_0_35px_rgba(255,0,0,0.18)]">
            <h3 className="text-lg font-mono font-bold text-primary">Spotify</h3>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/3CP7K4Sq0lFr3nxg4qbT9F?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="LooSkroo Spotify"
            />
          </div>

          <div className="space-y-6 rounded-3xl border border-primary/40 bg-black/70 p-6 backdrop-blur-sm shadow-[0_0_35px_rgba(255,0,0,0.14)]">
            <div className="space-y-4">
              <h3 className="text-lg font-mono font-bold text-primary">Deezer</h3>
              <iframe
                title="Deezer Widget"
                src="https://widget.deezer.com/widget/dark/artist/278722101/top_tracks"
                width="100%"
                height="300"
                frameBorder="0"
                allow="encrypted-media; clipboard-write"
                loading="lazy"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-mono font-bold text-primary">TikTok</h3>
              <a
                href="https://www.tiktok.com/@looskroo"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-full border border-accent/40 bg-accent/15 px-6 py-3 font-mono text-sm font-semibold tracking-wide text-accent transition-transform duration-300 hover:-translate-y-0.5 hover:bg-accent/25"
              >
                Follow on TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
