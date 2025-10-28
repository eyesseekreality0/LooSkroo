export function VideoSection() {
  return (
    <section id="sushi-video" className="relative py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="relative rounded-3xl border border-primary/45 bg-black/70 p-4 shadow-[0_0_45px_rgba(255,0,0,0.2)] backdrop-blur-sm">
          <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-r from-primary/40 via-transparent to-primary/40 opacity-60 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-primary/50 bg-black/80">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/tgboI44BBH0?si=mavlRyFZSL2hfzNN"
                width="100%"
                height="100%"
                title="Official visual showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
