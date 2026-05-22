"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlassButton } from "@/components/ui/glass-button"
import { ArrowRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const allTestimonials = [
  { text: "We don't follow trends -- we build what's next.", author: "Innovation", icon: "rocket" },
  { text: "We move fast, adapt faster, and never stand still.", author: "Agility", icon: "zap" },
  { text: "Your vision, our expertise -- built together.", author: "Partnership", icon: "handshake" },
  { text: "What we build today grows with you tomorrow.", author: "Scalability", icon: "trending" },
  { text: "Powerful technology, made simple for everyone.", author: "Accessibility", icon: "globe" },
]

const leftTestimonials = allTestimonials.slice(0, 3).map((t, i) => ({ ...t, opacity: i === 1 ? 1 : 0.5 }))
const rightTestimonials = allTestimonials.slice(3).map((t, i) => ({ ...t, opacity: i === 1 ? 1 : 0.5 }))

function TestimonialCard({
  text,
  author,
  opacity = 1,
  className = ""
}: {
  text: string
  author: string
  opacity?: number
  className?: string
}) {
  return (
    <div
      className={`px-4 py-3 rounded-2xl border border-border bg-card shadow-sm max-w-[220px] ${className}`}
      style={{ opacity }}
    >
      <div className="flex justify-between items-start mb-1.5">
        <p className="text-[13px] leading-snug text-foreground">{`"${text}"`}</p>
        <span className="text-muted-foreground/20 text-lg font-serif ml-1.5 flex-shrink-0">{'"'}</span>
      </div>
      <p className="text-[11px] text-muted-foreground font-medium">{'-- '}{author}</p>
    </div>
  )
}

function MobileTestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  // Auto-play
  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [api])

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api])

  return (
    <div className="w-full max-w-xs mx-auto">
      <Carousel
        setApi={setApi}
        opts={{ align: "center", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {allTestimonials.map((item, index) => (
            <CarouselItem key={index} className="pl-2 basis-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current === index ? "active" : "inactive"}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="px-1"
                >
                  <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <Quote className="h-5 w-5 text-accent/60 mb-3" />
                    <p className="text-sm leading-relaxed text-foreground mb-4">
                      {`"${item.text}"`}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-6 rounded-full bg-accent" />
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {item.author}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              index === current
                ? "w-6 h-2 bg-accent"
                : "w-2 h-2 bg-border hover:bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative pt-28 pb-8 overflow-hidden min-h-screen z-0">
      <div className="mx-auto max-w-7xl px-4 relative" style={{ zIndex: 1 }}>
        {/* Left Floating Testimonials - Desktop only */}
        <div className="hidden lg:block absolute left-0 top-32 w-[240px]">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="space-y-4"
          >
            {leftTestimonials.map((item, index) => (
              <TestimonialCard
                key={index}
                text={item.text}
                author={item.author}
                opacity={item.opacity}
              />
            ))}
          </motion.div>
        </div>

        {/* Right Floating Testimonials - Desktop only */}
        <div className="hidden lg:block absolute right-0 top-32 w-[240px]">
          <motion.div
            animate={{ y: [-20, 0, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="space-y-4"
          >
            {rightTestimonials.map((item, index) => (
              <TestimonialCard
                key={index}
                text={item.text}
                author={item.author}
                opacity={item.opacity}
              />
            ))}
          </motion.div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center max-w-3xl mx-auto pt-0 lg:pt-8">
          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm mb-8 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 blink-dot" />
            <span className="text-sm text-foreground font-medium">{"Ready to Work"}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight text-balance">
            Smart, Scalable &
            <br />
            <span className="text-accent">Accessible</span> Digital Solutions
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            We build intelligent solutions to unlock growth, replacing paper-based systems with streamlined digital workflows across industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link href="https://wa.me/263789158334" target="_blank" rel="noopener noreferrer">
              <GlassButton variant="accent" size="lg">
                Book A Call
              </GlassButton>
            </Link>
            <Link href="#projects">
              <GlassButton variant="outline" size="lg" showArrow={false}>
                View Projects
              </GlassButton>
            </Link>
          </div>

          {/* Reviews Badge */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",

              ].map((src, i) => (
                <img
                  key={i}
                  src={src || "/placeholder.svg"}
                  alt={`Client ${i + 1}`}
                  className="h-10 w-10 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Trusted to Deliver</span>
          </div>

          {/* Mobile Testimonials - Swipeable carousel below mission */}
          <div className="lg:hidden mt-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-3">Our Values</p>
              <MobileTestimonialCarousel />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Project Card */}
      <div className="mt-16 mx-auto max-w-5xl px-4">
        <div className="rounded-3xl border border-border bg-card p-4 overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/hero-dashboard.jpg"
                  alt="SkillCircuit Learning Management System Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-80 flex flex-col justify-center p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 text-xs font-medium bg-accent/15 text-accent rounded-full">We have a mission</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Mission Statement</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our mission is to build smart, scalable, and accessible digital solutions that unlock growth across industries..</p>
              {/* <Link href="https://skillcircuit.co.zw/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full w-fit bg-transparent border-border text-foreground hover:bg-muted">
                  Visit SkillCircuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
