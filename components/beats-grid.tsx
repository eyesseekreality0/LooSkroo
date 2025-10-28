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
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 red-glow">AVAILABLE BEATS</h2>
          <p className="text-muted-foreground">Click to preview. Contact for licensing.</p>
        </div>

        {/* Beats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beats.map((beat, index) => (
            <ScrollReveal key={beat.id} delay={index * 100}>
              <div className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover-lift">
                {/* Glow Effect on Hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

                <div className="relative bg-card p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold font-mono mb-2 text-balance">{beat.title}</h3>
                    <p className="text-sm text-muted-foreground">{beat.genre}</p>
                  </div>

                  {/* Beat Info */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">BPM:</span>
                      <span className="text-primary font-mono font-bold">{beat.bpm}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Key:</span>
                      <span className="text-accent font-mono font-bold">{beat.key}</span>
                    </div>
                  </div>

                  {/* Waveform Visualization (Decorative) */}
                  <div className="mb-4 h-16 bg-muted/30 rounded flex items-end justify-around gap-1 p-2 overflow-hidden">
                    {Array.from({ length: 40 }).map((_, i) => {
                      const height = Math.random() * 100
                      const isActive = playingId === beat.id
                      return (
                        <div
                          key={i}
                          className={`w-1 rounded-full transition-all duration-300 ${
                            isActive ? "bg-primary animate-pulse" : "bg-muted-foreground/50"
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
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-100"
                        style={{ width: `${getProgress(beat.id)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1 font-mono">
                      <span>{formatTime(currentTime[beat.id] || 0)}</span>
                      <span>{formatTime(duration[beat.id] || 0)}</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => togglePlay(beat.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-bold tracking-wider rounded hover:bg-primary/90 transition-all duration-300 red-glow-box"
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
                      className="p-3 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 transition-colors duration-300 border border-border hover:border-primary"
                      aria-label="Download beat"
                    >
                      <Download className="w-5 h-5" />
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
            <div className="inline-block p-8 bg-card border border-primary/50 rounded-lg red-glow-box hover-lift">
              <h3 className="text-2xl font-bold font-mono mb-4 red-glow">NEED A CUSTOM BEAT?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Get a personalized industrial beat or cinematic score crafted specifically for your project.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold tracking-wider rounded hover:bg-primary/90 transition-all duration-300"
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
