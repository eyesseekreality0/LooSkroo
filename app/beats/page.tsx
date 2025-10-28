import { Navigation } from "@/components/navigation"
import { BeatsHero } from "@/components/beats-hero"
import { BeatsGrid } from "@/components/beats-grid"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Beats - LooSkroo™",
  description: "Explore industrial beats and cinematic scores by Justin Lewis",
}

export default function BeatsPage() {
  return (
    <main className="relative">
      <Navigation />
      <BeatsHero />
      <BeatsGrid />
      <Footer />
    </main>
  )
}
