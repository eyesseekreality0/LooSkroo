import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { Footer } from "@/components/footer"
import { MusicPresence } from "@/components/music-presence"

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <VideoSection />
      <MusicPresence />
      <Footer />
    </main>
  )
}
