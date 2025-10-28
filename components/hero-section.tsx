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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80 z-0" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pulse-red" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 relative">
          <div className="relative inline-block">
            <Image
              src="/images/looskroo-logo.jpg"
              alt="LooSkroo Logo"
              width={600}
              height={200}
              className="w-full max-w-2xl h-auto red-glow-box rounded-lg"
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

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-6 tracking-wider">
          <span className="glitch red-glow text-balance">FORGED IN SOUND.</span>
          <br />
          <span className="metallic text-balance">BUILT TO BREAK LIMITS.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 tracking-wide">
          Justin Lewis | Music Producer & Score Composer
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/beats"
            className="px-8 py-4 bg-primary text-primary-foreground font-bold tracking-wider rounded hover:bg-primary/90 transition-all duration-300 red-glow-box"
          >
            EXPLORE BEATS
          </a>
          <a
            href="/visuals"
            className="px-8 py-4 bg-secondary text-secondary-foreground font-bold tracking-wider rounded border border-border hover:border-primary transition-all duration-300"
          >
            WATCH VISUALS
          </a>
        </div>

        <div className="mt-16 text-sm text-muted-foreground">
          <p className="mb-2">FILM CREDITS</p>
          <p className="font-mono">"Unknown Strangers" (2022) • "The Bogman" (2023)</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
