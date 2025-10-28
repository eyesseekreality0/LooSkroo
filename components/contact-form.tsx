"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        projectType: "",
        message: "",
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="text-center p-8 bg-card border border-primary/50 rounded-lg red-glow-box">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold font-mono mb-2 red-glow">MESSAGE SENT!</h3>
          <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-3xl font-bold font-mono mb-6 red-glow">SEND A MESSAGE</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-mono tracking-wider mb-2 text-muted-foreground">
            NAME *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-mono tracking-wider mb-2 text-muted-foreground">
            EMAIL *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
            placeholder="your@email.com"
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-mono tracking-wider mb-2 text-muted-foreground">
            PROJECT TYPE *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
          >
            <option value="">Select a project type</option>
            <option value="beat-production">Beat Production</option>
            <option value="film-score">Film Score</option>
            <option value="music-video">Music Video</option>
            <option value="collaboration">Collaboration</option>
            <option value="licensing">Licensing</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-mono tracking-wider mb-2 text-muted-foreground">
            SUBJECT *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
            placeholder="Brief subject line"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-mono tracking-wider mb-2 text-muted-foreground">
            MESSAGE *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-card border border-border rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold tracking-wider rounded hover:bg-primary/90 transition-all duration-300 red-glow-box disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              <span>SENDING...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>SEND MESSAGE</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}
