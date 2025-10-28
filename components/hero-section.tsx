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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-24 sm:pt-32">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-80" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[780px] w-[780px] rounded-full bg-primary/18 blur-[160px] pulse-red" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-4">
        <div className="relative flex w-full max-w-xl justify-center">
          <div className="relative flex w-full max-w-md items-center justify-center rounded-3xl border border-primary/55 bg-black/80 p-4 shadow-[0_0_45px_rgba(255,0,0,0.25)] backdrop-blur-md">
            <Image
              src="/images/looskroo-logo.jpg"
              alt="LooSkroo Logo"
              width={360}
              height={160}
              className="h-auto w-full max-w-[280px] rounded-2xl object-contain"
              priority
            />
          </div>
        </div>

        <div className="w-full max-w-3xl rounded-[32px] border border-primary/35 bg-black/75 p-8 text-center shadow-[0_0_60px_rgba(255,0,0,0.2)] backdrop-blur-sm">
          <h1 className="mb-6 font-mono text-3xl font-extrabold tracking-[0.3em] text-balance text-foreground sm:text-5xl lg:text-6xl">
            <span className="glitch red-glow text-balance">FORGED IN SOUND.</span>
            <br />
            <span className="metallic text-balance">BUILT TO BREAK LIMITS.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-pretty text-base tracking-[0.1em] text-foreground sm:text-lg md:text-xl">
            Justin Lewis | Music Producer & Score Composer
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/beats"
              className="w-full max-w-xs rounded-full border border-primary bg-primary px-8 py-4 font-bold tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              EXPLORE BEATS
            </a>
            <a
              href="/contact"
              className="w-full max-w-xs rounded-full border border-primary/60 bg-secondary px-8 py-4 font-bold tracking-[0.25em] text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary"
            >
              BOOK A SESSION
            </a>
          </div>

          <div className="mt-10 text-sm text-foreground">
            <p className="mb-2 font-mono tracking-[0.35em] text-xs text-primary/90">FILM CREDITS</p>
            <p className="font-mono text-pretty text-base">"Unknown Strangers" (2022) • "The Bogman" (2023)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
