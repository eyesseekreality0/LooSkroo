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

      ctx.fillStyle = "rgba(10, 10, 10, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (Math.random() < 0.3) {
        createParticle()
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life++

        const alpha = 1 - p.life / p.maxLife
        const size = Math.random() * 2 + 1

        ctx.fillStyle = `rgba(255, 28, 28, ${alpha * 0.8})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()

        ctx.shadowBlur = 10
        ctx.shadowColor = "rgba(255, 28, 28, 0.5)"

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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-20 sm:pt-36">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-80" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pulse-red" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center">
        <div className="relative mb-8 w-full max-w-3xl">
          <div className="relative mx-auto inline-block w-full rounded-3xl border border-primary/30 bg-black/60 p-2 backdrop-blur-sm">
            <Image
              src="/images/looskroo-logo.jpg"
              alt="LooSkroo Logo"
              width={640}
              height={220}
              className="h-auto w-full max-w-full rounded-2xl border border-primary/40 bg-black/60 object-contain p-4 shadow-[0_0_45px_rgba(255,0,0,0.28)]"
              priority
            />
            <div
              className="absolute -top-4 -right-4 w-2 h-2 bg-primary rounded-full spark"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-2 h-2 bg-primary rounded-full spark"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute top-1/2 -right-6 w-2 h-2 bg-accent rounded-full spark"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>

        <h1 className="mb-6 font-mono text-3xl font-bold tracking-wider text-balance sm:text-5xl lg:text-6xl">
          <span className="glitch red-glow text-balance">FORGED IN SOUND.</span>
          <br />
          <span className="metallic text-balance">BUILT TO BREAK LIMITS.</span>
        </h1>

        <p className="mb-10 max-w-2xl text-pretty text-base tracking-wide text-muted-foreground sm:text-lg md:text-xl">
          Justin Lewis | Music Producer & Score Composer
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/beats"
            className="w-full max-w-xs rounded border border-primary/60 bg-primary px-8 py-4 font-bold tracking-wider text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            EXPLORE BEATS
          </a>
          <a
            href="/contact"
            className="w-full max-w-xs rounded border border-border bg-secondary px-8 py-4 font-bold tracking-wider text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary"
          >
            BOOK A SESSION
          </a>
        </div>

        <div className="mt-14 text-sm text-muted-foreground">
          <p className="mb-2 tracking-[0.3em] text-xs text-primary/80">FILM CREDITS</p>
          <p className="font-mono text-pretty text-base">"Unknown Strangers" (2022) • "The Bogman" (2023)</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary/80 bg-black/40 p-2">
          <div className="h-3 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
