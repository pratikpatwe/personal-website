'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * (canvas?.width ?? window.innerWidth)
        this.y = Math.random() * (canvas?.height ?? window.innerHeight)
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > (canvas?.width ?? window.innerWidth)) this.x = 0
        else if (this.x < 0) this.x = canvas?.width ?? window.innerWidth

        if (this.y > (canvas?.height ?? window.innerHeight)) this.y = 0
        else if (this.y < 0) this.y = canvas?.height ?? window.innerHeight
      }

      draw() {
        ctx!.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.closePath()
        ctx!.fill()
      }
    }

    const init = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height)
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  )
}

export default ParticleBackground