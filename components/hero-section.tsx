"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
    }> = []

    function createParticle() {
      const x = Math.random() * canvas!.width
      const y = canvas!.height + 10
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 2 - 1,
        life: 0,
        maxLife: Math.random() * 100 + 50,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(8, 8, 8, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (Math.random() < 0.32) {
        createParticle()
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life++

        const alpha = 1 - p.life / p.maxLife
        const size = Math.random() * 2 + 1.5

        ctx.fillStyle = `rgba(255, 60, 60, ${alpha * 0.85})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()

        ctx.shadowBlur = 14
        ctx.shadowColor = "rgba(255, 60, 60, 0.5)"

        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-24 sm:pt-32">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-80" />

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,90,90,0.55),rgba(70,0,0,0.3)55%,transparent_75%)] blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,280px)_1fr]">
        <div className="relative flex justify-center">
          <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,80,80,0.9),rgba(255,80,80,0.25)60%,transparent)] blur-3xl" />
          <div className="relative flex aspect-square max-w-[220px] items-center justify-center rounded-full border border-primary/50 bg-black/10 p-6 shadow-[0_0_70px_rgba(255,75,75,0.45)] backdrop-blur-xl">
            <Image
              src="/images/looskroo-logo.jpg"
              alt="LooSkroo Logo"
              width={240}
              height={240}
              className="h-auto w-full max-w-[180px] object-contain"
              priority
            />
          </div>
        </div>

        <div className="space-y-6 text-center text-foreground lg:text-left">
          <span className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/15 px-5 py-2 font-mono text-xs font-semibold tracking-[0.3em] text-primary">
            MUSIC PRODUCER • COMPOSER
          </span>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Industrial energy for film scores, trailers, and dark hip-hop.
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:mx-0">
            Justin "LooSkroo" Lewis blends cinematic grit with hard-hitting drums to build soundtracks that cut through the noise and amplify every scene.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="/beats"
              className="w-full max-w-xs rounded-full bg-primary px-8 py-4 text-center text-sm font-semibold tracking-[0.25em] text-primary-foreground shadow-[0_0_35px_rgba(255,80,80,0.45)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              EXPLORE BEATS
            </a>
            <a
              href="/contact"
              className="w-full max-w-xs rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center text-sm font-semibold tracking-[0.25em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-black/30"
            >
              BOOK A SESSION
            </a>
          </div>

          <div className="flex flex-col gap-1 text-xs font-mono uppercase tracking-[0.35em] text-white/60 sm:flex-row sm:items-center sm:justify-start">
            <span className="text-primary/80">Film Credits</span>
            <span className="tracking-[0.2em] text-white/70">"Unknown Strangers" (2022) • "The Bogman" (2023)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
