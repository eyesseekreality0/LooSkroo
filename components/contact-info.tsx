"use client"

import { Mail, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "looskroo@example.com",
    link: "mailto:looskroo@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Los Angeles, CA",
    link: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "24-48 hours",
    link: null,
  },
]

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@looskroo",
    link: "https://instagram.com/looskroo",
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "/looskroo",
    link: "https://facebook.com/looskroo",
  },
  {
    icon: Youtube,
    label: "YouTube",
    handle: "/looskroo",
    link: "https://youtube.com/@looskroo",
  },
]

const services = [
  "Custom Beat Production",
  "Film Score Composition",
  "Music Video Production",
  "Sound Design",
  "Mixing & Mastering",
  "Beat Licensing",
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div>
        <h2 className="text-3xl font-bold font-mono mb-6 red-glow">CONTACT INFO</h2>
        <div className="space-y-4">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon
            const content = (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 bg-primary/20 rounded-full">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-mono mb-1">{detail.label}</div>
                  <div className="font-mono">{detail.value}</div>
                </div>
              </div>
            )

            return detail.link ? (
              <a key={index} href={detail.link} className="block">
                {content}
              </a>
            ) : (
              content
            )
          })}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-2xl font-bold font-mono mb-4 text-accent">FOLLOW</h3>
        <div className="space-y-3">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-mono mb-1">{social.label}</div>
                  <div className="font-mono text-accent">{social.handle}</div>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-2xl font-bold font-mono mb-4">SERVICES</h3>
        <div className="grid grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-3 bg-card border border-border rounded text-center text-sm font-mono hover:border-primary/50 transition-all duration-300"
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      {/* Availability Notice */}
      <div className="p-6 bg-primary/10 border border-primary/50 rounded-lg">
        <h3 className="text-lg font-bold font-mono mb-2 red-glow">CURRENTLY AVAILABLE</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Taking on new projects for beat production, film scoring, and collaborations. Let's create something
          unforgettable.
        </p>
      </div>
    </div>
  )
}
