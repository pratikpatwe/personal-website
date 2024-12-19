import { useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
declare module 'three'

export default function Background({ scrollY }: { scrollY: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)

  const setupScene = useCallback(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Particles setup
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 5000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x4a90e2,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)
    particlesRef.current = particlesMesh

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0005
      }
      renderer.render(scene, camera)
    }
    animate()
  }, [])

  const handleResize = useCallback(() => {
    if (cameraRef.current && rendererRef.current) {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }
  }, [])

  useEffect(() => {
    setupScene()
    window.addEventListener('resize', handleResize)

    const currentContainer = containerRef.current
    const currentRenderer = rendererRef.current

    return () => {
      window.removeEventListener('resize', handleResize)
      if (currentContainer && currentRenderer) {
        currentContainer.removeChild(currentRenderer.domElement)
      }
    }
  }, [setupScene, handleResize])

  useEffect(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = scrollY * 0.0005
    }
  }, [scrollY])

  return <div ref={containerRef} className="fixed inset-0 z-0" />
}