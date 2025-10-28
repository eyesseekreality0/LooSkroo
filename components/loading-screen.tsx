"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 10
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 red-glow glitch">LOOSKROO™</h1>

        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-primary transition-all duration-300 red-glow-box"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 text-sm font-mono text-muted-foreground">LOADING... {progress}%</p>
      </div>
    </div>
  )
}
