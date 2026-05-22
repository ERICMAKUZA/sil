"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const posts = [
  {
    title: "How Digital Certification Is Reshaping Professional Credentialing in Africa",
    author: "Synaptix Team",
    date: "Feb 5, 2026",
    readTime: "7 min",
    tags: ["VeriCred", "Certification"],
    featured: true,
    color: "from-orange-600/20 to-amber-600/20",
  },
  {
    title: "SkillCircuit Case Study: 95% Pass Rate with Cloud-Based LMS Training",
    author: "Synaptix Team",
    date: "Jan 20, 2026",
    readTime: "9 min",
    tags: ["SkillCircuit", "Case Study"],
    featured: false,
    color: "from-blue-600/20 to-cyan-600/20",
  },
  {
    title: "From Paper to Digital: How FlowMatic Cuts Admin Time by 60%",
    author: "Synaptix Team",
    date: "Jan 8, 2026",
    readTime: "6 min",
    tags: ["FlowMatic", "Automation"],
    featured: false,
    color: "from-emerald-600/20 to-teal-600/20",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Fresh insights & ideas
            <br />
            <span className="text-muted-foreground">from the lab.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Expert tips, case studies, and trends on digital innovation, data, and AI to help your business grow smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-border bg-card overflow-hidden hover:border-foreground/30 transition-all"
            >
              {/* Post Image Area */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                {post.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs bg-primary text-primary-foreground font-medium">
                    Featured
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-1/2 rounded-xl bg-background/60 backdrop-blur border border-border/50" />
                </div>
              </div>

              {/* Post Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span>{post.author}</span>
                  <span>{'·'}</span>
                  <span>{post.date}</span>
                  <span>{'·'}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-muted-foreground transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-xs bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full bg-transparent border-border text-foreground hover:bg-secondary px-8">
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
