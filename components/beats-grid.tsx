"use client"

import { Play, Pause, Download } from "lucide-react"
import { useState, useRef } from "react"
import { ScrollReveal } from "./scroll-reveal"

interface Beat {
  id: string
  title: string
  bpm: number
  key: string
  genre: string
  audioUrl: string
  waveform: string
}

const beats: Beat[] = [
  {
    id: "1",
    title: "IRON FORGE",
    bpm: 140,
    key: "Am",
    genre: "Industrial Hip-Hop",
    audioUrl: "/audio/iron-forge.mp3",
    waveform: "industrial",
  },
  {
    id: "2",
    title: "NEON SHADOWS",
    bpm: 128,
    key: "Dm",
    genre: "Cinematic Trap",
    audioUrl: "/audio/neon-shadows.mp3",
    waveform: "cinematic",
  },
  {
    id: "3",
    title: "STEEL RAIN",
    bpm: 150,
    key: "Em",
    genre: "Industrial Metal",
    audioUrl: "/audio/steel-rain.mp3",
    waveform: "aggressive",
  },
  {
    id: "4",
    title: "DARK MATTER",
    bpm: 85,
    key: "Cm",
    genre: "Ambient Score",
    audioUrl: "/audio/dark-matter.mp3",
    waveform: "ambient",
  },
  {
    id: "5",
    title: "VOLTAGE",
    bpm: 160,
    key: "F#m",
    genre: "Electronic Industrial",
    audioUrl: "/audio/voltage.mp3",
    waveform: "electronic",
  },
  {
    id: "6",
    title: "CRIMSON TIDE",
    bpm: 95,
    key: "Gm",
    genre: "Cinematic Drama",
    audioUrl: "/audio/crimson-tide.mp3",
    waveform: "dramatic",
  },
]

export function BeatsGrid() {
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState<{ [key: string]: number }>({})
  const [duration, setDuration] = useState<{ [key: string]: number }>({})
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({})

  const togglePlay = (id: string) => {
    const audio = audioRefs.current[id]
    if (!audio) return

    if (playingId === id) {
      audio.pause()
      setPlayingId(null)
    } else {
      // Pause any currently playing audio
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause()
      }
      audio.play()
      setPlayingId(id)
    }
  }

  const handleTimeUpdate = (id: string) => {
    const audio = audioRefs.current[id]
    if (audio) {
      setCurrentTime((prev) => ({ ...prev, [id]: audio.currentTime }))
    }
  }

  const handleLoadedMetadata = (id: string) => {
    const audio = audioRefs.current[id]
    if (audio) {
      setDuration((prev) => ({ ...prev, [id]: audio.duration }))
    }
  }

  const handleEnded = (id: string) => {
    setPlayingId(null)
    setCurrentTime((prev) => ({ ...prev, [id]: 0 }))
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const getProgress = (id: string) => {
    const current = currentTime[id] || 0
    const total = duration[id] || 1
    return (current / total) * 100
  }

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="mb-4 font-mono text-3xl font-bold red-glow md:text-4xl">AVAILABLE BEATS</h2>
          <p className="text-foreground">Click to preview. Contact for licensing.</p>
        </div>

        <div className="mb-12 space-y-6">
          <h3 className="text-2xl font-mono font-bold text-foreground">Featured Releases</h3>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-primary/40 bg-black/70 p-6 shadow-[0_0_35px_rgba(255,0,0,0.14)] backdrop-blur-sm">
              <h4 className="text-lg font-mono font-semibold text-primary">Run For Your Life - Horror Movie Trailer Music</h4>
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
            <div className="space-y-3 rounded-2xl border border-primary/40 bg-black/70 p-6 shadow-[0_0_35px_rgba(255,0,0,0.14)] backdrop-blur-sm">
              <h4 className="text-lg font-mono font-semibold text-primary">Let Me In (Chris Webby Boom-Bap Type Beat)</h4>
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
        </div>

        {/* Beats Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beats.map((beat, index) => (
            <ScrollReveal key={beat.id} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-primary/25 bg-black/75 text-foreground shadow-[0_0_40px_rgba(255,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
                {/* Glow Effect on Hover */}
                <div className="pointer-events-none absolute -inset-0.5 rounded-[22px] bg-gradient-to-r from-primary/0 via-primary/45 to-primary/0 opacity-0 blur group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative rounded-[22px] bg-black/60 p-6 backdrop-blur-sm">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="mb-2 font-mono text-xl font-bold text-balance">{beat.title}</h3>
                    <p className="text-sm text-foreground/90">{beat.genre}</p>
                  </div>

                  {/* Beat Info */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/80">BPM:</span>
                      <span className="font-mono font-bold text-primary">{beat.bpm}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/80">Key:</span>
                      <span className="font-mono font-bold text-accent">{beat.key}</span>
                    </div>
                  </div>

                  {/* Waveform Visualization (Decorative) */}
                  <div className="mb-4 flex h-16 items-end justify-around gap-1 overflow-hidden rounded bg-foreground/10 p-2">
                    {Array.from({ length: 40 }).map((_, i) => {
                      const height = Math.random() * 100
                      const isActive = playingId === beat.id
                      return (
                        <div
                          key={i}
                          className={`w-1 rounded-full transition-all duration-300 ${
                            isActive ? "bg-primary animate-pulse" : "bg-foreground/30"
                          }`}
                          style={{
                            height: `${height}%`,
                            animationDelay: `${i * 0.05}s`,
                          }}
                        />
                      )
                    })}
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="h-1 overflow-hidden rounded-full bg-foreground/10">
                      <div
                        className="h-full bg-primary transition-all duration-100"
                        style={{ width: `${getProgress(beat.id)}%` }}
                      />
                    </div>
                    <div className="mt-1 flex justify-between font-mono text-xs text-foreground/80">
                      <span>{formatTime(currentTime[beat.id] || 0)}</span>
                      <span>{formatTime(duration[beat.id] || 0)}</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => togglePlay(beat.id)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-bold tracking-wider text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                    >
                      {playingId === beat.id ? (
                        <>
                          <Pause className="w-5 h-5" />
                          <span>PAUSE</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5" />
                          <span>PLAY</span>
                        </>
                      )}
                    </button>

                    <button
                      className="rounded-full border border-secondary/60 bg-secondary px-3 py-3 text-secondary-foreground transition-colors duration-300 hover:border-primary hover:bg-secondary/80"
                      aria-label="Download beat"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Hidden Audio Element */}
                  <audio
                    ref={(el) => {
                      if (el) audioRefs.current[beat.id] = el
                    }}
                    src={beat.audioUrl}
                    onTimeUpdate={() => handleTimeUpdate(beat.id)}
                    onLoadedMetadata={() => handleLoadedMetadata(beat.id)}
                    onEnded={() => handleEnded(beat.id)}
                    preload="metadata"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={300}>
          <div className="mt-16 text-center">
            <div className="inline-block rounded-3xl border border-primary/45 bg-black/75 p-8 text-foreground shadow-[0_0_45px_rgba(255,0,0,0.16)] backdrop-blur-sm">
              <h3 className="mb-4 font-mono text-2xl font-bold red-glow">NEED A CUSTOM BEAT?</h3>
              <p className="mb-6 max-w-md text-foreground">
                Get a personalized industrial beat or cinematic score crafted specifically for your project.
              </p>
              <a
                href="/contact"
                className="inline-block rounded-full bg-primary px-8 py-4 font-bold tracking-wider text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
