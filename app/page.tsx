"use client"

import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import Hero from '@/components/hero'
import CurrentlyBuilding from '@/components/currently-building'
import Launches from '@/components/launches'
import Contact from '@/components/contact'
// import Achievements from '@/components/achievements'
// import NotableShoutouts from '@/components/notable-shoutouts'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'building', 'launches', 'contact']
      const currentSection = sections.find((section) => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
        }
        return false
      })
      if (currentSection) {
        setCurrentSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <nav className="fixed left-4 right-4 bottom-4 md:left-1/2 md:-translate-x-1/2 z-50 md:w-auto">
        <ul className="flex justify-center space-x-2 md:space-x-3 bg-background/50 dark:bg-background/30 backdrop-blur-md rounded-full px-3 py-2 shadow-lg max-w-full overflow-x-auto">
          {['hero', 'building', 'launches', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`text-xs md:text-sm font-medium px-2 md:px-3 py-1 rounded-full whitespace-nowrap ${
                  currentSection === section ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                } transition-colors`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
          <section id="hero" className="min-h-screen flex items-start justify-center pt-4 md:pt-8">
            <Hero />
          </section>
          <section id="building" className="min-h-screen flex items-center justify-center py-20">
            <CurrentlyBuilding />
          </section>
          <section id="launches" className="min-h-screen flex items-center justify-center py-20">
            <Launches />
          </section>
          {/* <section id="achievements" className="min-h-screen flex items-center justify-center py-20">
            <Achievements />
          </section>
          <section id="shoutouts" className="min-h-screen flex items-center justify-center py-20">
            <NotableShoutouts />
          </section> */}
          <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <Contact />
          </section>
    </main>
  )
}