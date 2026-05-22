"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discover & Plan",
    description: "We start by understanding your goals and mapping out a strategic plan for your digital solution. Every great product begins with deep understanding.",
  },
  {
    number: "02",
    title: "Design & Develop",
    description: "Our team creates bespoke designs and develops robust solutions using agile methodologies. Clean code, modern frameworks, and user-centered design.",
  },
  {
    number: "03",
    title: "Test & Deploy",
    description: "We rigorously test for quality, performance, and security before deploying your solution seamlessly to production environments.",
  },
  {
    number: "04",
    title: "Support & Grow",
    description: "We provide ongoing support and partnership to help you scale and evolve. Your success is our long-term commitment.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            From Concept to Creation.
            <br />
            <span className="text-muted-foreground">Our proven approach.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Our approach is designed to be collaborative, transparent, and efficient, ensuring your vision comes to life with precision and speed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border bg-card p-6 hover:border-accent/50 transition-colors group"
            >
              <div className="text-5xl font-bold text-accent/30 group-hover:text-accent/60 transition-colors mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
