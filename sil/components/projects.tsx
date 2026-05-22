"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    name: "SkillCircuit LMS",
    description: "Cloud-based learning management for training institutions, corporates, and certification providers. 50+ students, 8 courses, 95% pass rate.",
    tags: ["LMS", "EdTech", "SaaS"],
    image: "/images/project-skillcircuit.jpg",
    url: "https://skillcircuit.co.zw/",
  },
  {
    name: "VeriCred Platform",
    description: "Secure digital certification and credential verification with tamper-proof validation.",
    tags: ["Certification", "Blockchain", "Security"],
    image: "/images/project-vericred.jpg",
    url: "#",
  },
  {
    name: "FlowMatic Automation",
    description: "Digital forms and workflow automation to eliminate paperwork and optimize business processes.",
    tags: ["Automation", "Workflows", "Enterprise"],
    image: "/images/project-flowmatic.jpg",
    url: "#",
  },
  {
    name: "Data Analytics Solutions",
    description: "Actionable business intelligence dashboards and data pipelines that turn raw data into strategic decisions. Real-time KPIs, trend analysis, and predictive insights for enterprises across Africa.",
    tags: ["BI Dashboards", "Data Pipelines", "Predictive Analytics"],
    image: "/images/project-data-analytics.jpg",
    url: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Products &
            <br />
            <span className="text-muted-foreground">Solutions in Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            From concept to creation, we deliver digital products that solve real problems for businesses and institutions across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-border bg-card overflow-hidden hover:border-foreground/30 transition-all"
            >
              {/* Project Image Area */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-xs bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={project.url} target={project.url !== "#" ? "_blank" : undefined} rel={project.url !== "#" ? "noopener noreferrer" : undefined}>
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full bg-transparent border-border hover:bg-accent hover:text-accent-foreground hover:border-accent flex-shrink-0"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="https://wa.me/263789158334" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full bg-transparent border-border text-foreground hover:bg-secondary px-8">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
