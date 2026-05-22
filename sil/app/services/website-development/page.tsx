"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Globe,
  Code,
  Smartphone,
  Search,
  Zap,
  Shield,
  CheckCircle,
  Star,
  Quote,
} from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Custom Responsive Design",
    description:
      "Pixel-perfect designs that adapt seamlessly across all devices and screen sizes.",
  },
  {
    icon: Code,
    title: "Modern Development",
    description:
      "Built with the latest technologies like Next.js, React, and TypeScript for optimal performance.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Search engine optimized from the ground up to improve visibility and organic traffic.",
  },
  {
    icon: Zap,
    title: "Performance Tuning",
    description:
      "Lightning-fast load times with optimized assets, caching, and CDN integration.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Enterprise-grade security with SSL, secure forms, and protection against vulnerabilities.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Approach",
    description:
      "Designed for mobile users first, ensuring the best experience on any device.",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your business goals, target audience, and competitive landscape to develop a strategic roadmap.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Our designers create wireframes and high-fidelity mockups, iterating based on your feedback until the design is perfect.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "We build your website using modern frameworks, conducting rigorous testing across devices and browsers.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "After deployment, we provide ongoing maintenance, updates, and support to keep your site running smoothly.",
  },
]

const portfolio = [
  {
    name: "Miss Advisor",
    description:
      "Professional consultancy website with appointment booking and service showcase.",
    image: "/images/project-missadvisor.jpg",
    url: "https://www.missadvisor.co.zw/",
    tags: ["Corporate", "Consulting", "Booking"],
  },
  {
    name: "SanReal Tech",
    description:
      "Technology solutions company website with modern design and service portfolio.",
    image: "/images/project-sanrealtech.jpg",
    url: "https://www.sanrealtech.co.zw/",
    tags: ["Technology", "B2B", "Portfolio"],
  },
  {
    name: "SkillCircuit",
    description:
      "Learning management system platform with course catalog and student portal.",
    image: "/images/project-skillcircuit.jpg",
    url: "https://skillcircuit.co.zw/",
    tags: ["EdTech", "LMS", "E-commerce"],
  },
]

const testimonials = [
  {
    quote:
      "Synaptix delivered a website that exceeded our expectations. The design is stunning and our conversion rates have increased by 40%.",
    author: "Sarah M.",
    role: "Marketing Director",
    company: "TechStart Inc.",
    rating: 5,
  },
  {
    quote:
      "Professional, responsive, and delivered on time. Our new website has transformed how clients perceive our brand.",
    author: "James K.",
    role: "CEO",
    company: "Ventures Africa",
    rating: 5,
  },
  {
    quote:
      "The team understood our vision perfectly and created a website that truly represents our brand identity.",
    author: "Linda T.",
    role: "Founder",
    company: "Creative Studios",
    rating: 5,
  },
]

const pricingTiers = [
  {
    name: "Starter",
    price: "From $800",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 month support",
    ],
  },
  {
    name: "Professional",
    price: "From $2,000",
    description: "For growing businesses with more needs",
    features: [
      "Up to 15 pages",
      "Custom design",
      "CMS integration",
      "Advanced SEO",
      "E-commerce ready",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "API integrations",
      "Priority support",
      "Dedicated manager",
      "12 months support",
    ],
  },
]

export default function WebsiteDevelopmentPage() {
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
                <Globe className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  Website Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
                Stunning Websites That
                <br />
                <span className="text-accent">Drive Results</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                We design and develop high-performance websites that represent
                your brand with clarity and impact. From corporate sites to
                e-commerce platforms, every pixel is crafted for conversion.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="#contact">
                  <Button
                    size="lg"
                    className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8"
                  >
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/partners">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full bg-transparent border-border text-foreground hover:bg-muted px-8"
                  >
                    View Our Work
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
                  src="/images/website-dev-hero.jpg"
                  alt="Website Development"
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
                <div className="text-2xl font-bold text-accent">100+</div>
                <div className="text-sm text-muted-foreground">Websites Built</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-accent">40%</div>
                <div className="text-sm text-muted-foreground">Avg. Conversion Boost</div>
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
              What We Deliver
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every website we build comes with these core features to ensure
              your online presence is exceptional.
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
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/40 transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
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
              A proven methodology that ensures your project is delivered on
              time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-2xl border border-border bg-card p-6 h-full">
                  <div className="text-4xl font-bold text-accent/30 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section id="portfolio" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Website Portfolio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See examples of some of the websites we have built for clients across
              various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/40 transition-all"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 rounded-full text-xs bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                  >
                    Visit Website
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {"Don't just take our word for it. Here's what our clients have to say about working with us."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-accent/30 mb-3" />
                <p className="text-foreground mb-4 leading-relaxed">
                  {`"${testimonial.quote}"`}
                </p>
                <div className="border-t border-border pt-4 mt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      {/* <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transparent Pricing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a package that fits your needs. All prices are starting
              points and can be customized to your requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl border p-6 ${tier.popular
                  ? "border-accent bg-card shadow-lg relative"
                  : "border-border bg-card"
                  }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {tier.description}
                </p>
                <div className="text-3xl font-bold text-foreground mb-6">
                  {tier.price}
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="block">
                  <Button
                    className={`w-full rounded-full ${tier.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                      }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8">
              {"Let's discuss your project and create something amazing together. Get a free consultation and quote today."}
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
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/50 text-accent-foreground bg-transparent hover:bg-white/10 px-8"
                >
                  Send an Inquiry
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
