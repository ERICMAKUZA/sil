"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "100%",
    title: "Client Satisfaction",
    description: "Every project we deliver is built on close collaboration, transparent communication, and a commitment to exceeding expectations.",
  },
  {
    value: "22+",
    title: "Successful Projects",
    description: "From web apps and LMS platforms to workflow automation and digital certification systems, we have delivered 22+ projects that drive real results.",
  },
  {
    value: "3x",
    title: "Productivity Increase",
    description: "Our clients see measurable gains in efficiency by replacing paper-based processes with intelligent, streamlined digital workflows.",
  },
]

export function Stats() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Transforming How Organizations
            <br />
            <span className="text-muted-foreground">Interact with Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            Synaptix Innovation Labs is a Zimbabwean-born digital solutions company specializing in custom software development, enterprise digital transformation, and the automation of business processes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border bg-card p-8 hover:border-foreground/30 transition-colors"
            >
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                <span className="text-accent">{stat.value}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {stat.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
