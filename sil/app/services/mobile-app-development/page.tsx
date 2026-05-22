"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Smartphone,
  Zap,
  Bell,
  CloudOff,
  Shield,
  Rocket,
  RefreshCw,
  CheckCircle,
  Star,
  Quote,
  Download,
  Users,
  Code,
  Layers,
  Cpu,
  TestTube,
} from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Cross-Platform Development",
    description:
      "Build once, deploy everywhere. React Native and Flutter apps that run seamlessly on iOS and Android.",
  },
  {
    icon: Zap,
    title: "Native Performance",
    description:
      "Optimized code that delivers smooth 60fps animations and instant response times users expect.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description:
      "Engage users with targeted push notifications, in-app messaging, and real-time updates.",
  },
  {
    icon: CloudOff,
    title: "Offline-First Design",
    description:
      "Apps that work without internet, syncing seamlessly when connectivity is restored.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "End-to-end encryption, biometric authentication, and compliance with app store guidelines.",
  },
  {
    icon: RefreshCw,
    title: "Over-the-Air Updates",
    description:
      "Push updates to users instantly without waiting for app store approval cycles.",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We analyze your target audience, competitors, and define the core features that will make your app stand out.",
    icon: Rocket,
  },
  {
    step: "02",
    title: "UX/UI Design",
    description:
      "Our designers create intuitive wireframes and stunning visual designs following iOS and Android guidelines.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Agile sprints with regular builds let you test new features every week and provide feedback.",
    icon: Code,
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "Rigorous testing on real devices across different screen sizes, OS versions, and network conditions.",
    icon: TestTube,
  },
  {
    step: "05",
    title: "App Store Launch",
    description:
      "We handle submission to Apple App Store and Google Play, optimizing listings for discoverability.",
    icon: Download,
  },
  {
    step: "06",
    title: "Growth & Support",
    description:
      "Post-launch analytics, crash monitoring, feature updates, and 24/7 support to ensure continued success.",
    icon: Users,
  },
]

const caseStudies = [
  {
    name: "QuickBite Delivery",
    client: "Restaurant Chain",
    description:
      "A food delivery app connecting 50+ restaurants with customers, featuring real-time order tracking, in-app payments, and loyalty rewards program.",
    image: "/images/case-study-food-app.jpg",
    results: ["200+ downloads", "4.8 star rating", "30% repeat orders"],
    tags: ["Food & Beverage", "E-commerce", "GPS Tracking"],
    platform: "iOS & Android",
  },
  {
    name: "FitTrack Pro",
    client: "Fitness Startup",
    description:
      "A comprehensive fitness tracking app with custom workout plans, nutrition logging, wearable device integration, and social challenges.",
    image: "/images/case-study-fitness-app.jpg",
    results: ["500+ users", "Apple featured", "85% retention"],
    tags: ["Health & Fitness", "Wearables", "Social"],
    platform: "iOS & Android",
  },
  {
    name: "Insurance Mobile",
    client: "Insurence Institution",
    description:
      "A secure Insurance app , push notifications, balance checking, and AI-powered  insights.",
    image: "/images/case-study-banking-app.jpg",
    results: ["256-bit encryption", "99.9% uptime", "4.9 star rating"],
    tags: ["Fintech", "Security", "AI"],
    platform: "iOS & Android",
  },
]

const testimonials = [
  {
    quote:
      "Our app went from concept to App Store in just 2 months. The team delivered exactly what we envisioned and more.",
    author: "Sarah M.",
    role: "Founder",
    company: "Water Delivery",
    rating: 5,
  },
  {
    quote:
      "Synaptix understood the fitness market perfectly. The app feels native and our users love the seamless experience.",
    author: "James K.",
    role: "CEO",
    company: "FitTrack",
    rating: 5,
  },
  {
    quote:
      "Security was our top priority and they exceeded all requirements. The biometric features work flawlessly.",
    author: "Linda N.",
    role: "CTO",
    company: "SecureBank",
    rating: 5,
  },
]

const technologies = [
  { name: "React Native", category: "Framework" },
  { name: "Flutter", category: "Framework" },
  { name: "Swift", category: "iOS" },
  { name: "Kotlin", category: "Android" },
  { name: "TypeScript", category: "Language" },
  { name: "Firebase", category: "Backend" },
  { name: "GraphQL", category: "API" },
  { name: "Redux", category: "State" },
  { name: "Expo", category: "Tooling" },
  { name: "Jest", category: "Testing" },
  { name: "Fastlane", category: "CI/CD" },
  { name: "AppCenter", category: "Analytics" },
]

export default function MobileAppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Slanted Phone */}
      <section className="pt-32 pb-20 bg-secondary/30 overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.03, 0.06, 0.03]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.02, 0.05, 0.02]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent rounded-full blur-3xl"
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
                <Smartphone className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  Mobile App Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
                Apps Users
                <br />
                <span className="text-accent">Love to Use</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                We create stunning, high-performance mobile applications for iOS and Android that engage users and drive business growth.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foreground">Apps Launched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">5000+</div>
                  <div className="text-sm text-muted-foreground">Total Downloads</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">4.8</div>
                  <div className="text-sm text-muted-foreground">Avg Store Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="#contact">
                  <Button
                    size="lg"
                    className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8"
                  >
                    Start Your App
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full bg-transparent border-border text-foreground hover:bg-muted px-8"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Slanted Phone Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 0 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Phone Frame - Slanted */}
                <motion.div
                  className="relative"
                  style={{ transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg) rotateZ(-5deg)" }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Phone Outer Frame */}
                  <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[660px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[48px] p-3 shadow-2xl">
                    {/* Phone Inner Screen */}
                    <div className="relative w-full h-full bg-background rounded-[38px] overflow-hidden">
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-12 bg-card/80 backdrop-blur-sm flex items-center justify-between px-6 z-10">
                        <span className="text-xs font-medium text-foreground">9:41</span>
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-2 border border-foreground/50 rounded-sm">
                            <div className="w-2/3 h-full bg-foreground/50 rounded-sm" />
                          </div>
                        </div>
                      </div>

                      {/* Dynamic Island / Notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-900 rounded-full z-20" />

                      {/* App Screenshot */}
                      <div className="absolute inset-0 pt-14">
                        <Image
                          src="/images/case-study-food-app.jpg"
                          alt="Mobile App Preview"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/30" />
                      </div>

                      {/* Bottom Home Indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full" />
                    </div>
                  </div>

                  {/* Phone Shadow */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-[40px] bg-black/20 blur-2xl rounded-full" />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -top-4 -left-8 md:-left-16 bg-card border border-border rounded-2xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-green-500/15 flex items-center justify-center">
                      <Download className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">App Store</div>
                      <div className="text-xs text-muted-foreground">Ready to publish</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -bottom-4 -right-4 md:-right-12 bg-card border border-border rounded-2xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center">
                      <Star className="h-5 w-5 text-accent fill-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">4.9 Rating</div>
                      <div className="text-xs text-muted-foreground">User reviews</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute top-1/3 -right-8 md:-right-20 bg-card border border-border rounded-2xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-accent" />
                    <span className="text-xs font-medium text-foreground">Push Enabled</span>
                  </div>
                </motion.div>
              </div>
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
              High-quality mobile apps with features that users expect and businesses need.
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
              Our App Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that takes your app from idea to millions of downloads.
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              App Portfolio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mobile applications we have built that are changing how users interact with businesses.
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
                      <span className="px-3 py-1 rounded-full text-xs bg-accent/15 text-accent font-medium">
                        {study.platform}
                      </span>
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-xs bg-secondary text-muted-foreground font-medium"
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
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
              <Smartphone className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Ready to Build?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Turn Your App Idea Into Reality
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you are launching your first app or scaling an existing product, we are here to help you succeed in the mobile-first world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://wa.me/263789158334" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8"
                >
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-transparent border-border text-foreground hover:bg-muted px-8"
                >
                  View All Services
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
