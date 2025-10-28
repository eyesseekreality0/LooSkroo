"use client"

import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"
import { AnimatedCounter } from "./animated-counter"

export function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />

      {/* Red Ambient Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pulse-red" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollReveal className="animate-slide-in-left">
            <div className="relative">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-lg blur-xl" />
                <Image
                  src="/industrial-music-producer-in-studio-with-red-light.jpg"
                  alt="Justin Lewis - LooSkroo"
                  width={500}
                  height={600}
                  className="relative rounded-lg border-2 border-primary/50 red-glow-box"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={200} className="animate-slide-in-right">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded text-primary text-sm font-mono tracking-wider">
                  THE ARTIST
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold font-mono mb-6 tracking-wider">
                <span className="glitch red-glow text-balance">JUSTIN LEWIS</span>
                <br />
                <span className="metallic text-balance">AKA LOOSKROO™</span>
              </h1>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Music producer and score composer forging industrial soundscapes that push the boundaries of hip-hop,
                  electronic, and cinematic music.
                </p>
                <p>
                  From the gritty streets to the silver screen, LooSkroo crafts beats and scores that resonate with raw
                  energy and emotional depth.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold font-mono text-primary mb-2">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-mono text-primary mb-2">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Tracks Produced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-mono text-primary mb-2">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Film Scores</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
