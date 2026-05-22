"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { LiveDemoModal } from "@/components/live-demo-modal"
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  PieChart,
  Database,
  Brain,
  Target,
  Zap,
  Shield,
  LineChart,
  ArrowUpRight,
  Star,
  Check,
  MonitorPlay
} from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Business Intelligence Dashboards",
    description: "Interactive, real-time dashboards that transform complex data into clear, actionable insights for decision-makers."
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Machine learning models that forecast trends, customer behavior, and market movements to give you a competitive edge."
  },
  {
    icon: Database,
    title: "Data Integration & ETL",
    description: "Seamless data pipelines that extract, transform, and load data from multiple sources into a unified view."
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Advanced AI algorithms that automatically detect patterns, anomalies, and opportunities in your data."
  },
  {
    icon: Target,
    title: "KPI Tracking & Reporting",
    description: "Automated reporting systems that track your key performance indicators and deliver insights to stakeholders."
  },
  {
    icon: Shield,
    title: "Data Governance & Security",
    description: "Enterprise-grade security and compliance frameworks to protect your sensitive business data."
  }
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We analyze your existing data infrastructure, identify key metrics, and understand your business objectives.",
    icon: Target
  },
  {
    step: "02",
    title: "Data Architecture Design",
    description: "Design scalable data models and warehouse architecture optimized for your analytical needs.",
    icon: Database
  },
  {
    step: "03",
    title: "Integration & Pipeline Setup",
    description: "Build robust ETL pipelines to consolidate data from all your sources into a single source of truth.",
    icon: Zap
  },
  {
    step: "04",
    title: "Dashboard Development",
    description: "Create intuitive, interactive dashboards tailored to different stakeholder needs and use cases.",
    icon: BarChart3
  },
  {
    step: "05",
    title: "AI & ML Implementation",
    description: "Deploy machine learning models for predictive analytics, anomaly detection, and automated insights.",
    icon: Brain
  },
  {
    step: "06",
    title: "Training & Optimization",
    description: "Empower your team with training and continuously optimize your analytics for maximum ROI.",
    icon: TrendingUp
  }
]

const caseStudies = [
  {
    title: "Retail Chain Analytics Platform",
    client: "Major African Retail Group",
    image: "/images/case-study-retail-analytics.jpg",
    description: "Built a comprehensive analytics platform tracking sales, inventory, and customer behavior across 50+ stores.",
    results: [
      { metric: "28%", label: "Revenue Increase" },
      { metric: "40%", label: "Inventory Optimization" },
      { metric: "3x", label: "Faster Decisions" }
    ],
    tags: ["Retail Analytics", "Power BI", "Azure"]
  },
  {
    title: "Healthcare Data Intelligence",
    client: "Regional Hospital Network",
    image: "/images/case-study-healthcare-analytics.jpg",
    description: "Implemented patient flow analytics and resource allocation dashboards improving operational efficiency.",
    results: [
      { metric: "35%", label: "Wait Time Reduction" },
      { metric: "22%", label: "Cost Savings" },
      { metric: "95%", label: "Data Accuracy" }
    ],
    tags: ["Healthcare", "Predictive Analytics", "Tableau"]
  },
  {
    title: "Financial Performance Dashboard",
    client: "Investment Firm",
    image: "/images/case-study-financial-analytics.jpg",
    description: "Created real-time financial analytics with automated reporting and investment performance tracking.",
    results: [
      { metric: "50%", label: "Report Time Saved" },
      { metric: "18%", label: "Portfolio Growth" },
      { metric: "Real-time", label: "Market Insights" }
    ],
    tags: ["Finance", "Real-time Analytics", "Custom BI"]
  }
]

const testimonials = [
  {
    quote: "The analytics platform transformed how we make decisions. We now have real-time visibility into every aspect of our operations.",
    author: "Chief Data Officer",
    company: "Retail Group",
    rating: 5
  },
  {
    quote: "Their predictive models helped us anticipate market trends months in advance. The ROI has been exceptional.",
    author: "Director of Strategy",
    company: "Financial Services",
    rating: 5
  }
]

const technologies = [
  { name: "Power BI", category: "Visualization" },
  { name: "Tableau", category: "Visualization" },
  { name: "Python", category: "Analysis" },
  { name: "R", category: "Statistics" },
  { name: "SQL", category: "Database" },
  { name: "Azure", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
  { name: "Snowflake", category: "Data Warehouse" },
  { name: "Apache Spark", category: "Big Data" },
  { name: "TensorFlow", category: "ML" },
  { name: "Looker", category: "BI" },
  { name: "dbt", category: "Transform" }
]

export default function DataAnalyticsPage() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {demoOpen && <LiveDemoModal onClose={() => setDemoOpen(false)} />}
      <Header />

      {/* Hero Section with Center-Aligned Analytics Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          {/* Animated data points */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-accent/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-accent/15 text-accent mb-6 uppercase tracking-wider">
                Data & Analytics Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Turn Data Into Your
              <br />
              <span className="text-accent">Competitive Advantage</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              We transform raw data into strategic insights with custom dashboards,
              predictive analytics, and AI-powered intelligence that drive real business results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link href="https://wa.me/263789158334" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  Start Your Analytics Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setDemoOpen(true)}
                className="rounded-full border-accent text-accent hover:bg-accent/10 px-8"
              >
                <MonitorPlay className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
              <Link href="#case-studies">
                <Button size="lg" variant="outline" className="rounded-full border-border px-8">
                  View Case Studies
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Center-Aligned Hero Image with Animated Overlays */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Main Dashboard Image */}
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="/images/data-analytics-hero.jpg"
                alt="Data Analytics Dashboard"
                width={1200}
                height={700}
                className="w-full h-auto"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-1/4 hidden lg:block"
            >
              <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-green-500/15 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+47%</p>
                    <p className="text-xs text-muted-foreground">Revenue Growth</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-10, 0, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/3 hidden lg:block"
            >
              <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center">
                    <PieChart className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">98.5%</p>
                    <p className="text-xs text-muted-foreground">Data Accuracy</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-1/4 hidden lg:block"
            >
              <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/15 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">Real-time</p>
                    <p className="text-xs text-muted-foreground">Data Processing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-accent/15 text-accent mb-4 uppercase tracking-wider">
              Our Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              End-to-End Analytics Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From data collection to actionable insights, we provide comprehensive analytics services
              tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-border bg-card p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                  <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-accent/15 text-accent mb-4 uppercase tracking-wider">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Data-Driven Methodology
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven six-step process that transforms your raw data into strategic business intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="rounded-2xl border border-border bg-card p-6 hover:border-accent/40 transition-colors h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-accent">{step.step}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-accent/15 text-accent mb-4 uppercase tracking-wider">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our analytics solutions have transformed operations and driven growth for our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/40 hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">{study.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{study.description}</p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <p className="text-lg font-bold text-accent">{result.metric}</p>
                          <p className="text-xs text-muted-foreground">{result.label}</p>
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

      {/* Technology Stack */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-accent/15 text-accent mb-4 uppercase tracking-wider">
              Technology Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industry-Leading Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage the best analytics platforms and technologies to deliver exceptional results.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-3 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-md transition-all cursor-default"
              >
                <p className="font-medium text-foreground">{tech.name}</p>
                <p className="text-xs text-muted-foreground">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-accent/15 text-accent mb-4 uppercase tracking-wider">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="rounded-2xl border border-border bg-card p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    {`"${testimonial.quote}"`}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/15 flex items-center justify-center">
                      <span className="text-accent font-bold">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-3xl border border-border bg-card p-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent mb-6">
                <LineChart className="h-4 w-4" />
                <span className="text-sm font-medium">Ready to Transform Your Data?</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Unlock the Power of Your Data
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us help you build analytics capabilities that drive real business value.
                Schedule a consultation to discuss your data challenges.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://wa.me/263789158334" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#case-studies">
                  <Button size="lg" variant="outline" className="rounded-full border-border px-8">
                    View More Case Studies
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
