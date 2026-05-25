"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What kind of digital solutions do you offer?",
    answer: "We specialize in custom software development (web & mobile apps, enterprise platforms), process automation, and digital transformation. Our key products include SkillCircuit (LMS), VeriCred (Digital Certification), and FlowMatic (Workflow Automation). We also offer media production and content creation services.",
  },
  {
    question: "How long does a typical project take?",
    answer: "The timeline varies depending on the project's complexity. A standard website takes 2-4 weeks, web applications 4-8 weeks, and complex enterprise platforms 6-12 weeks. After an initial consultation to understand your needs, we provide a detailed project plan with clear timelines.",
  },
  {
    question: "Do you offer support after the project is complete?",
    answer: "Yes, we believe in long-term partnerships. We offer ongoing support and maintenance packages to ensure your digital solutions remain up-to-date, secure, and effective. Your success is our long-term commitment.",
  },
  {
    question: "Do you work with clients outside Zimbabwe?",
    answer: "Absolutely. While we're based in Harare, Zimbabwe and serve businesses across Southern Africa, we're fully equipped to work with global clients. We collaborate remotely using modern tools and communication channels.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, industry-leading tools including React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel. For mobile, we build cross-platform apps with React Native and Flutter. Our solutions are built on scalable, secure architectures.",
  },
  {
    question: "Can you help with an existing product or system?",
    answer: "Yes. We regularly help businesses improve, scale, or modernize existing digital products. Whether it's a performance audit, redesign, feature addition, or migration, we can help optimize what you already have.",
  },
  {
    question: "How does FlowMatic help my business?",
    answer: "FlowMatic replaces paper-based processes with digital forms and automated workflows. It handles approvals, data capture, notifications, and reporting -- reducing manual work by up to 60% and dramatically improving accuracy and speed.",
  },
  {
    question: "How do I get started with Synaptix?",
    answer: "Simply reach out via WhatsApp at +263 789 158 334 or email us at sales@synaptix.co.zw. We'll discuss your goals, challenges, and ideas, then create a tailored proposal. No commitment required for the initial conversation.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Got a question?
            <br />
            <span className="text-muted-foreground">{"We've got answers."}</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-border bg-card px-6 data-[state=open]:border-accent/40"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-foreground mb-4">Still have questions?</p>
          <Link href="https://wa.me/263789158334" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full bg-transparent border-border text-foreground hover:bg-secondary px-8">
              Chat with us on WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
