"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ArrowRight, BarChart3, Smartphone, Code2, Globe, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassButton } from "@/components/ui/glass-button"
import { ThemeToggle } from "@/components/theme-toggle"

const solutions = [
  {
    title: "Data & Analytics",
    description: "Business Intelligence & Insights",
    href: "/services/data-analytics",
    icon: BarChart3,
    image: "/images/data-analytics-hero.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    title: "Mobile Apps",
    description: "iOS & Android Development",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    image: "/images/case-study-fitness-app.jpg",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    title: "Custom Software",
    description: "Enterprise & SaaS Solutions",
    href: "/services/custom-software-development",
    icon: Code2,
    image: "/images/custom-software-hero.jpg",
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500",
  },
  {
    title: "Website Development",
    description: "Custom Web Solutions",
    href: "/services/website-development",
    icon: Globe,
    image: "/images/website-dev-hero.jpg",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] px-4 py-4" style={{ isolation: 'isolate' }}>
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between rounded-full border border-border bg-card/80 backdrop-blur-md px-9 py-[18px] shadow-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-light.png"
              alt="Synaptix Innovation Labs"
              width={279}
              height={135}
              className="h-12 md:h-[60px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div
              className="relative group"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => {
                setSolutionsOpen(false)
                setHoveredSolution(null)
              }}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm text-foreground hover:text-muted-foreground transition-colors rounded-full hover:bg-muted"
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[520px] z-[9999] transition-all duration-300 ease-out ${solutionsOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"}`}>
                <div className="rounded-2xl border border-border bg-card backdrop-blur-xl shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="px-5 py-4 border-b border-border bg-gradient-to-r from-accent/5 to-transparent">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-accent" />
                      <p className="text-sm font-semibold text-foreground">Our Solutions</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Innovative technology solutions for your business</p>
                  </div>

                  {/* Solutions Grid */}
                  <div className="p-3 grid grid-cols-2 gap-2">
                    {solutions.map((solution, index) => {
                      const Icon = solution.icon
                      const isHovered = hoveredSolution === index
                      return (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          className={`group/item relative flex flex-col p-3 rounded-xl transition-all duration-300 overflow-hidden ${isHovered ? 'bg-muted shadow-lg scale-[1.02]' : 'hover:bg-muted/50'}`}
                          onMouseEnter={() => setHoveredSolution(index)}
                          onMouseLeave={() => setHoveredSolution(null)}
                        >
                          {/* Background gradient on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl`} />

                          <div className="relative z-10 flex items-start gap-3">
                            {/* Animated Icon Container */}
                            <div className={`relative h-10 w-10 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3`}>
                              <Icon className={`h-5 w-5 ${solution.iconColor} transition-transform duration-300 group-hover/item:scale-110`} />
                              {/* Pulse ring animation */}
                              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${solution.color} animate-ping opacity-0 group-hover/item:opacity-30`} />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <p className="text-sm font-semibold text-foreground group-hover/item:text-foreground transition-colors">
                                  {solution.title}
                                </p>
                                <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                {solution.description}
                              </p>
                            </div>
                          </div>

                          {/* Preview image on hover */}
                          <div className={`mt-3 relative h-20 rounded-lg overflow-hidden transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 h-0 mt-0'}`}>
                            <Image
                              src={solution.image}
                              alt={solution.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          </div>
                        </Link>
                      )
                    })}
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-3 border-t border-border bg-muted/30">
                    <Link
                      href="/#services"
                      className="group/link flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Sparkles className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">View all services</p>
                          <p className="text-xs text-muted-foreground">Explore our complete offerings</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover/link:text-accent group-hover/link:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/partners" className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:text-muted-foreground transition-colors rounded-full hover:bg-muted">
              Our Work
              <span className="px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded-full">New</span>
            </Link>
            <Link href="/#faq" className="px-4 py-2 text-sm text-foreground hover:text-muted-foreground transition-colors rounded-full hover:bg-muted">
              FAQ
            </Link>
            <Link href="/#about" className="px-4 py-2 text-sm text-foreground hover:text-muted-foreground transition-colors rounded-full hover:bg-muted">
              About
            </Link>
            <Link href="/#contact" className="px-4 py-2 text-sm text-foreground hover:text-muted-foreground transition-colors rounded-full hover:bg-muted">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/#contact">
              <GlassButton variant="accent" size="default">
                Contact Us
              </GlassButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-4 shadow-lg">
            <div className="flex flex-col gap-2">
              <button
                className="flex items-center justify-between text-sm text-foreground py-3 px-2 rounded-lg hover:bg-muted"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>
              {solutionsOpen && (
                <div className="pl-2 space-y-1 mb-2">
                  {solutions.map((solution) => {
                    const Icon = solution.icon
                    return (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-muted transition-colors"
                      >
                        <div className={`h-9 w-9 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`h-4 w-4 ${solution.iconColor}`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{solution.title}</p>
                          <p className="text-xs text-muted-foreground">{solution.description}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}
              <Link href="/partners" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-sm text-foreground py-3 px-2 rounded-lg hover:bg-muted">
                Our Work
                <span className="px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded-full">New</span>
              </Link>
              <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="text-sm text-foreground py-3 px-2 rounded-lg hover:bg-muted">
                FAQ
              </Link>
              <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-sm text-foreground py-3 px-2 rounded-lg hover:bg-muted">
                About
              </Link>
              <div className="pt-3 border-t border-border mt-2">
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block">
                  <GlassButton variant="accent" size="default" className="w-full justify-center">
                    Get Started
                  </GlassButton>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
