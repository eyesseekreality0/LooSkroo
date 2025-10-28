"use client"

import { Music, Film, Zap, Award } from "lucide-react"

const milestones = [
  {
    icon: Music,
    year: "2014",
    title: "THE BEGINNING",
    description: "Started producing beats in a home studio, experimenting with industrial and electronic sounds.",
  },
  {
    icon: Zap,
    year: "2018",
    title: "SIGNATURE SOUND",
    description: "Developed the distinctive LooSkroo sound - a fusion of industrial hip-hop and cinematic elements.",
  },
  {
    icon: Film,
    year: "2022",
    title: "FILM SCORING",
    description: 'Composed original score for "Unknown Strangers", marking entry into film composition.',
  },
  {
    icon: Award,
    year: "2023",
    title: "CRITICAL ACCLAIM",
    description: 'Score for "The Bogman" received recognition, establishing reputation in independent cinema.',
  },
]

export function AboutStory() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6 red-glow">THE JOURNEY</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From bedroom producer to film composer, the LooSkroo story is one of relentless creativity and sonic
            innovation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0

              return (
                <div key={index} className="relative">
                  <div
                    className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                      <div className="inline-block p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 red-glow-box">
                        <div className="flex items-center gap-3 mb-3">
                          {isEven ? (
                            <>
                              <div>
                                <div className="text-2xl font-bold font-mono text-primary">{milestone.year}</div>
                                <h3 className="text-xl font-bold font-mono">{milestone.title}</h3>
                              </div>
                              <div className="p-3 bg-primary/20 rounded-full">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="p-3 bg-primary/20 rounded-full">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold font-mono text-primary">{milestone.year}</div>
                                <h3 className="text-xl font-bold font-mono">{milestone.title}</h3>
                              </div>
                            </>
                          )}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-background pulse-red z-10" />

                    {/* Spacer */}
                    <div className="flex-1" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
