"use client"

export function MusicPresence() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-14">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Listen &amp; Connect</h2>
          <p className="mx-auto max-w-2xl text-sm text-white/70 sm:text-base">
            Stream the latest drops and lock in with every platform where the LooSkroo™ sound hits.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/15 bg-black/35 p-6 shadow-[0_0_45px_rgba(255,70,70,0.22)] backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between text-xs font-mono uppercase tracking-[0.3em] text-white/60">
                <span>Highlighted Beat</span>
                <span className="text-primary/80">BeatStars</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Run For Your Life — Horror Movie Trailer Music</h3>
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

            <div className="rounded-3xl border border-white/15 bg-black/35 p-6 shadow-[0_0_45px_rgba(255,70,70,0.22)] backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between text-xs font-mono uppercase tracking-[0.3em] text-white/60">
                <span>Highlighted Beat</span>
                <span className="text-primary/80">BeatStars</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Let Me In — Chris Webby Boom-Bap Type Beat</h3>
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

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/15 bg-black/35 p-6 shadow-[0_0_55px_rgba(255,70,70,0.28)] backdrop-blur-xl">
              <div className="mb-4 text-xs font-mono uppercase tracking-[0.35em] text-white/60">Spotify</div>
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

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/15 bg-black/35 p-6 text-white shadow-[0_0_35px_rgba(255,70,70,0.18)] backdrop-blur-xl">
                <div className="mb-4 text-xs font-mono uppercase tracking-[0.35em] text-white/60">Deezer</div>
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

              <div className="flex flex-col justify-between rounded-3xl border border-white/15 bg-[radial-gradient(circle_at_top,rgba(255,80,80,0.55),rgba(0,0,0,0.4))] p-6 text-center text-white shadow-[0_0_30px_rgba(255,80,80,0.24)] backdrop-blur-xl">
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-[0.35em] text-white/70">TikTok</div>
                  <p className="text-sm text-white/80">Behind-the-scenes looks and quick drops straight from the lab.</p>
                </div>
                <a
                  href="https://www.tiktok.com/@looskroo"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Follow on TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
