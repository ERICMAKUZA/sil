"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface SectionTransitionProps {
  children: React.ReactNode
  className?: string
}

export function SectionTransition({ children, className }: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1])
  const y = useTransform(scrollYProgress, [0, 0.3], [20, 0])

  return (
    <div ref={ref} className={`relative ${className ?? ""}`}>
      <motion.div style={{ opacity, y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}
