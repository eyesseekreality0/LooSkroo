export function VideoSection() {
  return (
    <section id="sushi-video" className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Video Container */}
        <div className="group relative">
          {/* Red Glow Frame */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative overflow-hidden rounded-lg border-2 border-primary/50 bg-black/60 backdrop-blur-sm shadow-[0_0_35px_rgba(255,0,0,0.2)]">
            {/* Facebook Video Embed */}
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/tgboI44BBH0?si=mavlRyFZSL2hfzNN`}
                width="100%"
                height="100%"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full absolute inset-0"
              />
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-8">
          <p className="text-lg font-mono text-foreground">
            🎥 <span className="text-primary">SUSHI</span> — Official Visual
          </p>
          <p className="text-sm text-foreground/80 mt-2">Directed & Produced by LooSkroo™</p>
        </div>
      </div>
    </section>
  )
}
