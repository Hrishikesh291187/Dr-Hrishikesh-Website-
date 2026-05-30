"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, Mail, User, MessageSquare, FileText } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 rounded-full bg-green-100 p-3">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          Message Sent!
        </h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="transition-all duration-200 focus:scale-[1.01]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="transition-all duration-200 focus:scale-[1.01]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-muted-foreground" />
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          placeholder="How can we help you?"
          value={formData.subject}
          onChange={handleChange}
          required
          className="transition-all duration-200 focus:scale-[1.01]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us more about your inquiry..."
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-[150px] transition-all duration-200 focus:scale-[1.005]"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
