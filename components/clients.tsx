"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ArrowRight, GraduationCap, Cpu, BookOpen, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const clients = [
  {
    id: "missadvisor",
    name: "Miss Advisor",
    tagline: "Your Gateway to Global Education",
    description:
      "A trusted international student recruitment agency helping students from Southern Africa study at top universities across 8 countries. We designed and built a complete web presence with pricing, destination guides, and an end-to-end application flow.",
    url: "https://www.missadvisor.co.zw/",
    icon: GraduationCap,
    tags: ["Web Design", "Education", "Student Recruitment"],
    stats: [
      { label: "Countries", value: "8" },
      { label: "Universities", value: "20+" },
      { label: "Students Placed", value: "400+" },
    ],
    color: "from-rose-500/15 to-orange-500/15",
  },
  {
    id: "sanrealtech",
    name: "SanReal Tech",
    tagline: "Security & Fabrication Services",
    description:
      "Zimbabwe's premier partner for Home Construction & Smart Automation. Delivering precision metalwork and intelligent security solutions.",
    url: "https://www.sanrealtech.co.zw/",
    icon: Cpu,
    tags: ["Corporate Website", "IT Services", "Tech"],
    stats: [
      { label: "Services", value: "10+" },
      { label: "Clients", value: "50+" },
      { label: "Uptime", value: "99.9%" },
    ],
    color: "from-blue-500/15 to-cyan-500/15",
  },
  {
    id: "skillcircuit",
    name: "SkillCircuit",
    tagline: "Empowering Future Tech Experts",
    description:
      "An online learning platform offering industry-recognized certifications in Data Analysis, Database Administration, and Cloud Data Engineering. We built the complete LMS platform and marketing site with course enrolment, progress tracking, and certificate issuance.",
    url: "https://skillcircuit.co.zw/",
    icon: BookOpen,
    tags: ["LMS Platform", "EdTech", "SaaS"],
    stats: [
      { label: "Students", value: "50+" },
      { label: "Pass Rate", value: "95%" },
      { label: "Courses", value: "8" },
    ],
    color: "from-emerald-500/15 to-teal-500/15",
  }, {
    id: "theconservationcompass",
    name: "The Conservation Compass",
    tagline: "Driving Impact Through Environmental Storytelling",
    description:
      "A premium editorial platform connecting communities, amplifying conservation voices, and inspiring action for a changing planet.",
    url: "https://www.theconservationcompass.org/",
    icon: Lightbulb,
    tags: ["Community-Driven Conservation Stories", "Trusted News for a Changing Planet", "Insightful Analysis on Climate & Biodiversity"],
    stats: [
      { label: "Countries", value: "3" },
      { label: "Communities Reached", value: "20+" },
      { label: "Stories Published", value: "400+" },
    ],
    color: "from-rose-500/15 to-orange-500/15",
  },
]

export function Clients() {
  const [active, setActive] = useState(0)
  const current = clients[active]

  return (
    <section id="work" className="py-24 border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-3">
            Our Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            22+ Projects Delivered
            <br />
            <span className="text-muted-foreground">Here Are a Few We&apos;re Proud Of</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
            We have delivered 22+ projects across multiple industries. These are just some of the digital products and platforms we have built for our clients.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full border border-border bg-card">
            {clients.map((client, i) => (
              <button
                key={client.id}
                onClick={() => setActive(i)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all ${active === i
                  ? "text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="activetab"
                    className="absolute inset-0 bg-accent rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <client.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{client.name}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-border bg-card overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left: Visual */}
              <div
                className={`relative p-8 md:p-12 bg-gradient-to-br ${current.color} flex flex-col justify-between min-h-[340px]`}
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur border border-border mb-6">
                    <current.icon className="h-4 w-4 text-accent" />
                    <span className="text-xs font-medium text-foreground">
                      {current.tags[0]}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {current.name}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    {current.tagline}
                  </p>
                </div>

                {/* Stats Row */}
                <div className="flex gap-6 mt-8">
                  {current.stats.map((s, i) => (
                    <div key={i}>
                      <p className="text-2xl font-bold text-foreground">{s.value}</p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Details */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {current.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {current.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-secondary text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 w-fit">
                    Visit Website
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <Link href="/partners">
            <Button variant="outline" className="rounded-full bg-transparent border-border text-foreground hover:bg-secondary px-8">
              View All Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
