"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  targetX: number
  targetY: number
  closest: Particle[]
  startTime: number
  duration: number
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function getSquaredDistance(p1: { x: number; y: number }, p2: { x: number; y: number }): number {
  return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2
}

export function SpiderWebCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(0)
  const isInitializedRef = useRef(false)
  const [opacity, setOpacity] = useState(1)
  // Resolved after mount: reading `ontouchstart` during render makes the server
  // and client markup disagree, and React then throws away the whole tree.
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch('ontouchstart' in window)
  }, [])

  // Fade out as the user scrolls past the hero (first viewport height)
  useEffect(() => {
    if (isTouch) return

    function handleScroll() {
      const heroHeight = window.innerHeight
      const fadeEnd = heroHeight * 0.6
      const raw = Math.max(0, 1 - window.scrollY / fadeEnd)
      setOpacity(raw)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isTouch])

  useEffect(() => {
    // Only activate on non-touch devices
    if ('ontouchstart' in window) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const GRID_SIZE = 15
    const DRIFT_RANGE = 50

    function initParticles() {
      const width = canvas!.width
      const height = canvas!.height
      const particles: Particle[] = []

      const cellWidth = width / GRID_SIZE
      const cellHeight = height / GRID_SIZE

      // Create particles in a grid
      for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
          const x = cellWidth * i + Math.random() * cellWidth
          const y = cellHeight * j + Math.random() * cellHeight

          particles.push({
            x,
            y,
            originX: x,
            originY: y,
            targetX: x + (Math.random() - 0.5) * DRIFT_RANGE * 2,
            targetY: y + (Math.random() - 0.5) * DRIFT_RANGE * 2,
            closest: [],
            startTime: performance.now(),
            duration: 1000 + Math.random() * 2000,
          })
        }
      }

      // Find 5 closest neighbors for each particle
      for (const particle of particles) {
        const distances = particles
          .filter(p => p !== particle)
          .map(p => ({ particle: p, dist: getSquaredDistance(particle, p) }))
          .sort((a, b) => a.dist - b.dist)
          .slice(0, 5)

        particle.closest = distances.map(d => d.particle)
      }

      particlesRef.current = particles
      
      // Set initial mouse position
      mouseRef.current = { x: width / 2, y: height / 3 }
    }

    function resizeCanvas() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
      initParticles()
    }

    function updateParticlePosition(particle: Particle, now: number) {
      const elapsed = now - particle.startTime
      const progress = Math.min(elapsed / particle.duration, 1)
      const easedProgress = easeInOutCubic(progress)

      // Interpolate position
      const startX = particle.originX + (particle.x - particle.originX) / (easedProgress || 1) * (1 - easedProgress)
      const startY = particle.originY + (particle.y - particle.originY) / (easedProgress || 1) * (1 - easedProgress)

      particle.x = particle.originX + (particle.targetX - particle.originX) * easedProgress
      particle.y = particle.originY + (particle.targetY - particle.originY) * easedProgress

      // Reset to new target when animation completes
      if (progress >= 1) {
        particle.targetX = particle.originX + (Math.random() - 0.5) * DRIFT_RANGE * 2
        particle.targetY = particle.originY + (Math.random() - 0.5) * DRIFT_RANGE * 2
        particle.startTime = now
        particle.duration = 1000 + Math.random() * 2000
      }
    }

    function render() {
      if (!ctx || !canvas) return

      const now = performance.now()
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      for (const particle of particles) {
        updateParticlePosition(particle, now)

        const distToMouse = getSquaredDistance(particle, mouse)

        let lineOpacity = 0
        let dotOpacity = 0

        if (distToMouse < 4000) {
          lineOpacity = 0.8
          dotOpacity = 1.0
        } else if (distToMouse < 20000) {
          lineOpacity = 0.5
          dotOpacity = 0.8
        } else if (distToMouse < 40000) {
          lineOpacity = 0.2
          dotOpacity = 0.1
        }

        if (lineOpacity > 0) {
          // Draw lines to closest neighbors - using brand orange (#F96815 = rgb(249, 104, 21))
          ctx.beginPath()
          for (const neighbor of particle.closest) {
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(neighbor.x, neighbor.y)
          }
          ctx.strokeStyle = `rgba(249, 104, 21, ${lineOpacity})`
          ctx.lineWidth = 0.5
          ctx.stroke()

          // Draw particle dot - using brand orange
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, 2 + dotOpacity * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(249, 104, 21, ${dotOpacity})`
          ctx.fill()
        }
      }

      animationRef.current = requestAnimationFrame(render)
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    // Initialize
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    animationRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  // Don't render on touch devices
  if (isTouch) return null

  if (opacity === 0) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none"
      style={{ zIndex: 10, opacity, transition: 'opacity 0.15s ease-out' }}
    />
  )
}
