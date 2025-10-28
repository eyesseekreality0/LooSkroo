"use client"

import { useState } from "react"

const Volume2Icon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
)

const VolumeXIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
)

export function VideoSection() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <section id="sushi-video" className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 red-glow">FEATURED VISUAL</h2>
          <div className="mx-auto h-1 w-24 bg-primary" />
        </div>

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

            {/* Mute Toggle Button */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-4 right-4 p-3 bg-black/60 backdrop-blur-sm border border-primary/50 rounded-full hover:bg-primary/20 transition-all duration-300 z-10"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeXIcon /> : <Volume2Icon />}
            </button>
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-8">
          <p className="text-lg font-mono text-muted-foreground">
            🎥 <span className="text-primary">SUSHI</span> — Official Visual
          </p>
          <p className="text-sm text-muted-foreground mt-2">Directed & Produced by LooSkroo™</p>
        </div>
      </div>
    </section>
  )
}
