"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { motion } from "framer-motion"

const contactMethods = [
  {
    icon: Phone,
    label: "Call or WhatsApp",
    value: "+263 789 158 334",
    href: "https://wa.me/263789158334",
    description: "Mon - Fri, 8am - 5pm CAT",
  },
  {
    icon: Phone,
    label: "Call or WhatsApp",
    value: "+263 78 682 9884",
    href: "https://wa.me/263786829884",
    description: "Mon - Fri, 8am - 5pm CAT",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "sales@synaptix.co.zw",
    href: "mailto:sales@synaptix.co.zw",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Harare, Zimbabwe",
    href: "https://maps.google.com/?q=Harare+Zimbabwe",
    description: "Southern Africa & remote worldwide",
  },
]

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
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/synaptixinnovationlabs",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/synaptixinnovationlabs",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-accent/15 text-accent mb-4 uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {"Let's Build Something Great Together"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {"Ready to transform your business with smart digital solutions? Reach out and let's discuss your vision. We respond within 24 hours."}
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block rounded-2xl border border-border bg-card p-6 hover:border-accent/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground mb-1">{method.label}</p>
                      <p className="text-base font-semibold text-foreground break-all mb-1">{method.value}</p>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {method.description}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA + Social Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-3xl border border-border bg-card p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left - CTA Text */}
            <div className="text-center md:text-left max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
                Start your project today
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {"Whether it's a website, mobile app, data platform, or full digital transformation -- we're ready to help you build it right."}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link href="https://wa.me/263789158334" target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-5 text-sm">
                    <Send className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </Link>
                <Link href="mailto:sales@synaptix.co.zw">
                  <Button variant="outline" className="rounded-full bg-transparent border-border text-foreground hover:bg-secondary px-6 py-5 text-sm">
                    <Mail className="mr-2 h-4 w-4" />
                    Send an Email
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Social & Info */}
            <div className="flex flex-col items-center md:items-end gap-5">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="h-11 w-11 rounded-full border border-border bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all hover:scale-105"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
              <div className="text-center md:text-right">
                <p className="text-xs text-muted-foreground">
                  Harare, Zimbabwe
                </p>
                <p className="text-xs text-muted-foreground">
                  Mon - Fri, 8:00 AM - 5:00 PM CAT
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
