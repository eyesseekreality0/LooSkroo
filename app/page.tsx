import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <VideoSection />
      <Footer />
    </main>
  )
}
