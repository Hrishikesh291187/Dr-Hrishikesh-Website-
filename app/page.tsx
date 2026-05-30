import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Have a question or want to work together? We&apos;d love to hear from you.
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">
                      hello@example.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      123 Main Street
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="mt-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Response time:</span>{" "}
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
