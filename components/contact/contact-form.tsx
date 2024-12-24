"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Form submission logic would go here
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <Card className="p-6 bg-gray-900 border-gray-800">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-200" htmlFor="name">
            Name
          </label>
          <Input
            id="name"
            placeholder="Your name"
            required
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-200" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            required
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-200" htmlFor="message">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Your message"
            required
            className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  )
}