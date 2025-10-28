import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Russo_One, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LoadingScreen } from "@/components/loading-screen"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

export const metadata: Metadata = {
  title: "LooSkroo™ - Forged in Sound",
  description:
    "Justin Lewis | Music Producer & Score Composer. Industrial sound forge creating cinematic beats and scores.",
  openGraph: {
    title: "LooSkroo™ - Forged in Sound",
    description: "Justin Lewis | Music Producer & Score Composer",
    images: ["/images/looskroo-logo.jpg"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${russoOne.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
