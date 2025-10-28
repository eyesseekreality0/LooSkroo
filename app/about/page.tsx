import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { AboutCredits } from "@/components/about-credits"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About - LooSkroo™",
  description: "Learn about Justin Lewis and the LooSkroo sound",
}

export default function AboutPage() {
  return (
    <main className="relative">
      <Navigation />
      <AboutHero />
      <AboutStory />
      <AboutCredits />
      <Footer />
    </main>
  )
}
