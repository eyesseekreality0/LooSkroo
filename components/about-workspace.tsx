export function AboutWorkspace() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-mono font-bold red-glow">INSIDE THE WORKSHOP</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Take a quick look inside the creative space where industrial soundscapes are forged. From analog grit to
              digital precision, every beat and score is crafted with intention.
            </p>
            <p className="text-sm text-muted-foreground/80">
              🎛️ Glimpse of the studio environment and the energy that goes into every project.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[267px] overflow-hidden rounded-xl border border-primary/40 bg-black/60 shadow-[0_0_35px_rgba(255,0,0,0.2)]">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F333812832050051%2F&show_text=false&width=267&t=0"
                width="267"
                height="476"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Inside the LooSkroo workspace"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
