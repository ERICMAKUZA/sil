"use client"

import React from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  speed?: "slow" | "normal" | "fast"
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  speed = "normal",
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee",
  }

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-4",
          reverse ? "animate-marquee-reverse" : speedClass[speed],
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
