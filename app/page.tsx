import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Clients } from "@/components/clients"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Blog } from "@/components/blog"
import { Footer } from "@/components/footer"
import { ValuesSection } from "@/components/values-section"
import { SectionTransition } from "@/components/section-transition"
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SectionTransition>
        <Stats />
      </SectionTransition>
      <SectionTransition>
        <Services />
      </SectionTransition>
      <SectionTransition>
        <Projects />
      </SectionTransition>
      <SectionTransition>
        <Process />
      </SectionTransition>
      <SectionTransition>
        <Clients />
      </SectionTransition>
      {/* <SectionTransition>
        <Testimonials />
      </SectionTransition> */}
      <SectionTransition>
        <FAQ />
      </SectionTransition>
      {/* <SectionTransition>
        <Blog />
      </SectionTransition> */}
      <SectionTransition>
        <Footer />
      </SectionTransition>
    </main>
  )
}
