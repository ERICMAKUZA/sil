"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Code,
  Database,
  Server,
  Cloud,
  Lock,
  Layers,
  GitBranch,
  Cpu,
  CheckCircle,
  Star,
  Quote,
  Workflow,
  Settings,
} from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Enterprise Web Applications",
    description:
      "Scalable web apps built with modern frameworks like Next.js, React, and Node.js for complex business needs.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Optimized database design with PostgreSQL, MongoDB, or cloud-native solutions for high performance.",
  },
  {
    icon: Server,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs designed for seamless integration with third-party services and microservices.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Deployment on AWS, Google Cloud, or Azure with auto-scaling, load balancing, and high availability.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with encryption, authentication, and compliance with industry standards.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline",
    description:
      "Automated testing, deployment pipelines, and version control for continuous delivery and reliability.",
  },
]

const process = [
  {
    step: "01",
    title: "Requirements Analysis",
    description:
      "We conduct in-depth discovery sessions to understand your business processes, pain points, and technical requirements.",
    icon: Settings,
  },
  {
    step: "02",
    title: "Architecture Design",
    description:
      "Our architects design scalable system architecture, database schemas, and API structures tailored to your needs.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "We build in sprints with regular demos, allowing you to see progress and provide feedback throughout development.",
    icon: Code,
  },
  {
    step: "04",
    title: "Testing & QA",
    description:
      "Rigorous automated and manual testing ensures your application is robust, secure, and performs under load.",
    icon: Cpu,
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "We deploy to production with zero downtime strategies, monitoring, and automated backup systems.",
    icon: Cloud,
  },
  {
    step: "06",
    title: "Ongoing Support",
    description:
      "Post-launch maintenance, feature updates, and 24/7 support to keep your application running smoothly.",
    icon: Workflow,
  },
]

const caseStudies = [
  {
    name: "Enterprise Resource Planner",
    client: "Manufacturing Company",
    description:
      "A comprehensive ERP system that unified inventory, HR, finance, and production management into a single platform, reducing operational costs by 35%.",
    image: "/images/case-study-enterprise.jpg",
    results: ["35% cost reduction", "50% faster reporting", "100+ users"],
    tags: ["ERP", "Enterprise", "Automation"],
  },
  {
    name: "SaaS Subscription Platform",
    client: "Tech Startup",
    description:
      "A multi-tenant SaaS platform with subscription billing, user management, and API access for B2B clients serving 10,000+ end users.",
    image: "/images/case-study-saas.jpg",
    results: ["10,000+ users", "99.9% uptime", "API integrations"],
    tags: ["SaaS", "B2B", "Billing"],
  },
  {
    name: "Inventory Management System",
    client: "Retail Chain",
    description:
      "Real-time inventory tracking across 15 locations with barcode scanning, automatic reordering, and analytics dashboard.",
    image: "/images/case-study-inventory.jpg",
    results: ["15 locations", "Real-time sync", "40% less stockouts"],
    tags: ["Inventory", "Retail", "Analytics"],
  },
]

const testimonials = [
  {
    quote:
      "Synaptix built our entire operations platform from scratch. The system handles millions of transactions daily without a hitch.",
    author: "Michael T.",
    role: "CTO",
    company: "FinServe Solutions",
    rating: 5,
  },
  {
    quote:
      "Their agile approach meant we could see progress weekly and adjust priorities. The final product exceeded our expectations.",
    author: "Grace N.",
    role: "Product Manager",
    company: "Logistics Pro",
    rating: 5,
  },
  {
    quote:
      "We needed a complex integration with legacy systems. Synaptix delivered a solution that works seamlessly with our existing infrastructure.",
    author: "David K.",
    role: "IT Director",
    company: "Healthcare Corp",
    rating: 5,
  },
]

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "GraphQL", category: "API" },
]

export default function CustomSoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/30 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
                <Code className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  Custom Software Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
                Bespoke Software
                <br />
                <span className="text-accent">Built for You</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                From enterprise platforms to internal tools, we build custom software solutions using modern frameworks and agile methods tailored to your unique business needs.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="#contact">
                  <Button
                    size="lg"
                    className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#case-studies">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full bg-transparent border-border text-foreground hover:bg-muted px-8"
                  >
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/images/custom-software-hero.jpg"
                  alt="Custom Software Development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-transparent" />
              </div>
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Build
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade software solutions designed for scalability, security, and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="h-14 w-14 rounded-xl bg-accent/15 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="h-7 w-7 text-accent" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A battle-tested methodology that delivers quality software on time and on budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="rounded-2xl border border-border bg-card p-6 h-full hover:border-accent/40 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="text-5xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.step}
                    </motion.div>
                    <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center mt-2">
                      <step.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Case Studies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world examples of custom software we have built for clients across various industries.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-border bg-card overflow-hidden hover:border-accent/40 hover:shadow-xl transition-all duration-300"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`aspect-[16/10] lg:aspect-auto relative overflow-hidden bg-muted ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={study.image}
                      alt={study.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-card/50 via-transparent to-transparent lg:hidden" />
                  </div>
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-xs bg-accent/15 text-accent font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{study.client}</p>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {study.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      {study.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* CTA Section */}
      <section id="contact" className="py-24 bg-accent">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8">
              {"Let's discuss your project requirements and create software that drives your business forward."}
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
                  Chat on WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="mailto:sales@synaptix.co.zw">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/50 text-accent-foreground bg-transparent hover:bg-white/10 px-8"
                >
                  Send an Email
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
