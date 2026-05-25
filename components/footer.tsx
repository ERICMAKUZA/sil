"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, Phone, Mail, MapPin, Send } from "lucide-react"

const services = [
  { value: "digital-transformation", label: "Digital Transformation & Analytics" },
  { value: "website-development", label: "Website Development" },
  { value: "custom-software", label: "Custom Software Development" },
  { value: "mobile-app", label: "Mobile App Development" },
  { value: "lms-elearning", label: "LMS & E-Learning Solutions" },
  { value: "consultation", label: "General Consultation" },
]

const footerLinks = {
  solutions: [
    { label: "Digital Transformation", href: "#services" },
    { label: "Website Development", href: "#services" },
    { label: "Custom Software", href: "#services" },
    { label: "Mobile App Development", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Pricing", href: "#pricing" },
  ],
  resources: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/263789158334",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/synaptixinnovationlabs?igsh=YmYyZWMzdDhpYXVo&utm_source=qr",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  // {
  //   label: "LinkedIn",
  //   href: "https://linkedin.com/company/synaptixinnovationlabs",
  //   icon: (
  //     <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
  //       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  //     </svg>
  //   ),
  // },
  // {
  //   label: "Facebook",
  //   href: "https://facebook.com/synaptixinnovationlabs",
  //   icon: (
  //     <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
  //       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  //     </svg>
  //   ),
  // },
  // {
  //   label: "Twitter",
  //   href: "https://twitter.com/synaptixlabs",
  //   icon: (
  //     <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
  //       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  //     </svg>
  //   ),
  // },
]

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const selectedService = services.find(s => s.value === formData.service)
    const serviceName = selectedService?.label || "General Inquiry"

    const subject = encodeURIComponent(`Inquiry: ${serviceName}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${serviceName}\n\nMessage:\n${formData.message}`
    )

    const mailtoLink = `mailto:sales@synaptix.co.zw?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            Your Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="rounded-lg bg-secondary border-border focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="rounded-lg bg-secondary border-border focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">
          Service of Interest
        </label>
        <Select
          value={formData.service}
          onValueChange={(value) => setFormData({ ...formData, service: value })}
          required
        >
          <SelectTrigger className="rounded-lg bg-secondary border-border focus:border-accent">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.value} value={service.value}>
                {service.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Your Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your project or inquiry..."
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="rounded-lg bg-secondary border-border focus:border-accent resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 py-5"
      >
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        This will open your email client with the message pre-filled.
      </p>
    </form>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      {/* Contact Section with Form */}
      <div className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Info */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-accent/15 text-accent mb-4 uppercase tracking-wider">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Ready to build something great?
              </h2>
              <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
                {"Let's create high-performance digital products together. Fill out the form or reach us directly via WhatsApp or email."}
              </p>

              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                <Link
                  href="https://wa.me/263789158334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call or WhatsApp</p>
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors">+263 789 158 334</p>
                  </div>
                </Link>

                <Link
                  href="https://wa.me/263786829884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call or WhatsApp</p>
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors">+263 78 682 9884</p>
                  </div>
                </Link>

                <Link
                  href="mailto:sales@synaptix.co.zw"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors break-all">sales@synaptix.co.zw</p>
                  </div>
                </Link>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">Harare, Zimbabwe</p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="h-10 w-10 rounded-full border border-border bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors"
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-1">Send us a message</h3>
              <p className="text-sm text-muted-foreground mb-6">Fill out the form and we will get back to you within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo-light.png"
                  alt="Synaptix Innovation Labs"
                  width={200}
                  height={56}
                  className="h-12 md:h-14 w-auto"
                />
              </Link>
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                Smart, scalable, and accessible digital solutions. We build intelligent products that help businesses grow, automate, and make smarter decisions.
              </p>
            </div>

            {/* Solutions */}
            <div className="lg:col-span-3">
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2.5">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources + Client Sites */}
            <div className="lg:col-span-3">
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2.5 mb-6">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Client Sites</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="https://www.missadvisor.co.zw/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Miss Advisor
                  </Link>
                </li>
                <li>
                  <Link href="https://www.sanrealtech.co.zw/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    SanReal Tech
                  </Link>
                </li>
                <li>
                  <Link href="https://skillcircuit.co.zw/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    SkillCircuit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {"© 2026 Synaptix InnovationLabs. All rights reserved."}
            </p>
            <p className="text-sm text-muted-foreground">
              Smart, Scalable, and Accessible Digital Solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
