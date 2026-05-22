"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "accent" | "outline"
  size?: "default" | "sm" | "lg"
  showArrow?: boolean
  children: React.ReactNode
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant = "default", size = "default", showArrow = true, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const sizeStyles = {
      default: "h-10 px-5 py-2 text-sm",
      sm: "h-9 px-4 py-2 text-xs",
      lg: "h-12 px-7 py-3 text-base",
    }

    const variantStyles = {
      default: "glass-button text-foreground",
      accent: "glass-button glass-button-accent text-accent-foreground",
      outline: "glass-button border-border bg-transparent hover:bg-muted/50 text-foreground",
    }

    return (
      <button
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {showArrow && (
          <span className="arrow-circle">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        )}
      </button>
    )
  }
)

GlassButton.displayName = "GlassButton"

export { GlassButton }
