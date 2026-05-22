"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Globe, Code, Smartphone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  {
    icon: BarChart3,
    title: "Digital Transformation & Analytics",
    shortTitle: "Digital Transformation",
    description:
      "We help organizations reduce paperwork, optimize workflows, and unlock productivity through smart integration systems, data analytics, and strategic consulting. From legacy system modernization to real-time business intelligence dashboards, we guide your transition to a fully digital operation.",
    features: [
      "Business process analysis & workflow optimization",
      "Data analytics dashboards & real-time reporting",
      "Legacy system modernization & cloud migration",
      "Strategic digital roadmap consulting",
    ],
    image: "/images/service-digital-transformation.jpg",
  },
  {
    icon: Globe,
    title: "Website Development",
    shortTitle: "Web Development",
    description:
      "We design and develop stunning, conversion-driven websites that represent your brand with clarity and impact. From corporate sites and e-commerce platforms to landing pages and portals, every pixel is crafted for performance, SEO, and user experience.",
    features: [
      "Custom responsive design & development",
      "E-commerce platforms & payment integration",
      "SEO optimization & performance tuning",
      "Content management systems (CMS)",
    ],
    image: "/images/service-web-development.jpg",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    description:
      "From enterprise platforms to internal tools, we build bespoke software solutions using modern frameworks and agile methods tailored to your unique business needs. Our team delivers scalable, secure, and maintainable systems that grow with your organization.",
    features: [
      "Enterprise web applications & SaaS platforms",
      "API design, integration & microservices",
      "Database architecture & cloud infrastructure",
      "Agile development with continuous delivery",
    ],
    image: "/images/service-custom-software.jpg",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    description:
      "We create intuitive, high-performance mobile applications for iOS and Android. Whether you need a customer-facing app, internal tool, or cross-platform solution, we deliver polished experiences that users love and businesses rely on.",
    features: [
      "Cross-platform apps (React Native / Flutter)",
      "Native iOS & Android development",
      "Push notifications & offline-first design",
      "App Store submission & post-launch support",
    ],
    image: "/images/service-mobile-app.jpg",
  },
]

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = services[activeIndex]

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What We Do Best.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We offer focused, high-impact digital services that help businesses automate, scale, and make smarter decisions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start gap-10">
          {/* Left Side - Dynamic Detail Panel */}
          <div className="lg:w-1/2 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm"
              >
                {/* Animated Image */}
                <motion.div
                  className="relative aspect-[16/10] w-full overflow-hidden bg-muted"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </motion.div>

                {/* Detail Content */}
                <div className="p-6 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-accent/15">
                      <activeService.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{activeService.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {activeService.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-2.5 mb-6">
                    {activeService.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.3 }}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {activeService.title === "Website Development" ? (
                    <Link href="/services/website-development">
                      <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  ) : activeService.title === "Custom Software Development" ? (
                    <Link href="/services/custom-software-development">
                      <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  ) : activeService.title === "Mobile App Development" ? (
                    <Link href="/services/mobile-app-development">
                      <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  ) : activeService.title === "Digital Transformation & Analytics" ? (
                    <Link href="/services/data-analytics">
                      <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Link href="https://wa.me/263789158334" target="_blank" rel="noopener noreferrer">
                      <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                        Discuss This Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Service Selector Tabs */}
          <div className="lg:w-1/2 space-y-3">
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = index === activeIndex
              return (
                <motion.div
                  key={index}
                  layout
                  className={`rounded-2xl border p-5 transition-all cursor-pointer ${
                    isActive
                      ? "border-accent bg-card shadow-sm"
                      : "border-border bg-card/50 hover:border-foreground/20 hover:bg-card"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) => e.key === "Enter" && setActiveIndex(index)}
                  role="button"
                  tabIndex={0}
                  whileHover={!isActive ? { scale: 1.01 } : {}}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl flex-shrink-0 ${isActive ? "bg-accent/15" : "bg-secondary"}`}>
                      <Icon className={`h-6 w-6 ${isActive ? "text-accent" : "text-muted-foreground"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-semibold ${isActive ? "text-foreground" : "text-foreground/80"}`}>
                        {service.title}
                      </h3>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-muted-foreground text-sm mt-1.5 line-clamp-2 leading-relaxed"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </div>
                    <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                      isActive ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"
                    }`}>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Bottom CTA Card */}
            <div className="rounded-2xl border border-border bg-card p-5 mt-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 rounded-lg bg-accent/15 flex items-center justify-center">
                  <span className="text-accent text-sm font-bold">ZW</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Locally Rooted, Globally Standard</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                As a Zimbabwean-born company, we deeply understand local market needs while adhering to world-class standards of engineering and design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
