"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    metric: "100%",
    metricLabel: "client satisfaction rate",
    quote: "Synaptix delivered a full LMS platform that transformed our training delivery. The team was responsive, professional, and deeply invested in our success from day one.",
    author: "Tariro Moyo",
    role: "Director, Training Institute",
  },
  {
    metric: "60%",
    metricLabel: "reduction in manual workflows",
    quote: "FlowMatic eliminated hours of repetitive paperwork each week. Our approval processes that took days now take minutes. The ROI was immediate and measurable.",
    author: "Kuda Mhembere",
    role: "Operations Manager, Corporate Partner",
  },
  {
    metric: "3x",
    metricLabel: "increase in productivity",
    quote: "The digital certification system VeriCred built for us made credential validation seamless. Our students can now share verified certificates instantly. Outstanding quality.",
    author: "Ruvimbo Nzenza",
    role: "Head of Academics",
  },
  {
    metric: "50+",
    metricLabel: "successful projects delivered",
    quote: "Working with Synaptix felt like having an in-house tech team. They understood our business challenges in the Zimbabwean market and built solutions that actually work for our context.",
    author: "Tinashe Chikara",
    role: "CEO, Enterprise Client",
  },
]

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Real Stories of
            <br />
            <span className="text-muted-foreground">Success & Satisfaction</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border bg-card p-8 hover:border-accent/40 transition-colors"
            >
              <div className="mb-6">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {item.metric}
                </div>
                <p className="text-sm text-muted-foreground font-medium">{item.metricLabel}</p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {item.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">{item.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.author}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 rounded-3xl border border-border bg-card p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-2 text-balance">
            You focus on your business.
          </h3>
          <h3 className="text-2xl md:text-4xl font-bold text-muted-foreground mb-2 text-balance">
            We build the technology.
          </h3>
          <h3 className="text-2xl md:text-4xl font-bold text-accent mb-8 text-balance">
            Together, Unstoppable Growth.
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="https://wa.me/263789158334" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Book A Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#projects">
              <Button variant="outline" className="rounded-full bg-transparent border-border text-foreground hover:bg-secondary px-8">
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Reviews Badge */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-background bg-accent/20 flex items-center justify-center"
                >
                  <span className="text-accent font-bold text-xs">{["T", "K", "R", "C"][i - 1]}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Trusted across Africa</span>
          </div>
        </div>
      </div>
    </section>
  )
}
