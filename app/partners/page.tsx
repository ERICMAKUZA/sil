"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ArrowUpRight, Handshake, Shield, Globe, TrendingUp, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const partners = [


  {
    name: "Brookrise Construction",
    tagline: "Where Nature Meets Innovation",
    description:
      "A corporate website for Zimbabwe's premier civil engineering and construction company — showcasing road construction, land development, dam construction, and heavy machinery fleet.",
    url: "https://www.brookriseconstruction.com/",
    industry: "Construction & Engineering",
    color: "from-yellow-500/10 to-orange-500/10",
    borderColor: "hover:border-yellow-500/30",
  },
  {
    name: "The Conservation Compass",
    tagline: "Driving Impact Through Environmental Storytelling",
    description:
      "A premium editorial platform connecting communities, amplifying conservation voices, and inspiring action for a changing planet. Features in-depth stories, analysis, and an action calendar.",
    url: "https://www.theconservationcompass.org",
    industry: "Conservation & Media",
    color: "from-green-500/10 to-emerald-500/10",
    borderColor: "hover:border-green-500/30",
  },
  {
    name: "The Property Marketer",
    tagline: "Premium Real Estate & Marketing",
    description:
      "A personal brand website for a senior real estate marketing professional with 8+ years of expertise in Airbnb, land development, brand building, and marketing strategy in Zimbabwe.",
    url: "https://www.thepropertymarketer.co.zw",
    industry: "Real Estate",
    color: "from-violet-500/10 to-purple-500/10",
    borderColor: "hover:border-violet-500/30",
  },

  {
    name: "SANREALTECH",
    tagline: "Smart Infrastructure & Metal Fabrication",
    description:
      "Zimbabwe's premier partner for smart automation, metal fabrication, and security infrastructure. Featuring gate automation, CCTV systems, intercoms, and custom metalwork.",
    url: "https://www.sanrealtech.co.zw",
    industry: "Manufacturing & Security",
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "hover:border-blue-500/30",
  },
  {
    name: "Synaptix Relay",
    tagline: "Real-Time Communication Infrastructure",
    description:
      "A robust relay and communication platform built by Synaptix Innovation Labs, enabling seamless real-time data exchange and connectivity for businesses across Africa.",
    url: "https://relay.synaptix.co.zw",
    industry: "Technology",
    color: "from-orange-500/10 to-amber-500/10",
    borderColor: "hover:border-orange-500/30",
  },
  {
    name: "Miss Advisor",
    tagline: "Your Gateway to Global Education",
    description:
      "An international student recruitment agency helping students from Southern Africa study at top universities across 8 countries. Complete web presence with destination guides and application flow.",
    url: "https://www.missadvisor.co.zw",
    industry: "Education",
    color: "from-rose-500/10 to-pink-500/10",
    borderColor: "hover:border-rose-500/30",
  },
  {
    name: "SkillCircuit",
    tagline: "Empowering Future Tech Experts",
    description:
      "A full-featured learning management system offering industry-recognized certifications in Data Analysis, Database Administration, and Cloud Data Engineering.",
    url: "https://skillcircuit.co.zw",
    industry: "EdTech",
    color: "from-teal-500/10 to-emerald-500/10",
    borderColor: "hover:border-teal-500/30",
  },
]

const trustSignals = [
  {
    icon: Shield,
    title: "End-to-End Delivery",
    description: "From concept to launch — every partner receives a fully deployed, production-ready product.",
  },
  {
    icon: Globe,
    title: "Diverse Industries",
    description: "Trusted across education, real estate, construction, conservation, security, and technology.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Partnerships",
    description: "We don't just build and leave. Our partners continue to grow with ongoing support and iteration.",
  },
]

function BrowserFrame({ url, name, color }: { url: string; name: string; color: string }) {
  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "")

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b border-border">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400/60" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
          <div className="h-3 w-3 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-2">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-background/80 border border-border text-xs text-muted-foreground truncate">
            <Globe className="h-3 w-3 flex-shrink-0" />
            <span className="truncate">{displayUrl}</span>
          </div>
        </div>
      </div>
      {/* Iframe Container */}
      <div className={`relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br ${color}`}>
        <iframe
          src={url}
          title={`${name} website preview`}
          className="absolute top-0 left-0 border-0 pointer-events-none"
          style={{
            width: "1440px",
            height: "900px",
            transform: "scale(0.375)",
            transformOrigin: "top left",
          }}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  )
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm mb-8 shadow-sm">
              <Handshake className="h-4 w-4 text-accent" />
              <span className="text-sm text-foreground font-medium">Our Partners</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              22+ Projects Delivered —
              <br />
              <span className="text-accent">Some of Our Best</span> Work
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              We have delivered 22+ projects across multiple industries. These are some of the businesses and organisations
              that chose us to bring their digital vision to life — and continue to rely on us as they grow.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <span className="font-bold text-foreground text-lg">22+</span>
                <span>Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <span className="font-bold text-foreground text-lg">6</span>
                <span>Industries</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <span className="font-bold text-foreground text-lg">100%</span>
                <span>Delivery Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-20">
            {partners.map((partner, index) => {
              const isReversed = index % 2 === 1
              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? "lg:[direction:rtl]" : ""}`}>
                    {/* Website Preview */}
                    <div className={isReversed ? "lg:[direction:ltr]" : ""}>
                      <BrowserFrame
                        url={partner.url}
                        name={partner.name}
                        color={partner.color}
                      />
                    </div>

                    {/* Partner Details */}
                    <div className={isReversed ? "lg:[direction:ltr]" : ""}>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/15 text-accent mb-4 uppercase tracking-wider">
                        {partner.industry}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {partner.name}
                      </h2>
                      <p className="text-lg text-muted-foreground font-medium mb-4">
                        {partner.tagline}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {partner.description}
                      </p>
                      <Link
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                          Visit Website
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-14">
            <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-3">
              Why They Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Built on Trust,<br />
              <span className="text-muted-foreground">Delivered with Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card p-8 text-center hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-5">
                  <signal.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {signal.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {signal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Ready to Join These Brands?
            </h2>
            <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8">
              Whether you need a website, a platform, or a full digital product — we are ready to make it happen.
              Your brand could be next on this page.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://wa.me/263789158334"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full bg-white text-accent hover:bg-white/90 px-8"
                >
                  Start a Conversation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/50 text-accent-foreground bg-transparent hover:bg-white/10 px-8"
                >
                  Send an Enquiry
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
