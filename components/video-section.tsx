export function VideoSection() {
  return (
    <section id="sushi-video" className="relative py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-black/35 p-3 shadow-[0_0_55px_rgba(255,70,70,0.28)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(255,80,80,0.35),transparent_70%)] opacity-70" />

          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black/30">
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
