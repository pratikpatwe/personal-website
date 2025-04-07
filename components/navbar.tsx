"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:px-8 lg:px-16">
      {/* This is the actual navbar with pill shape and soft edges */}
      <header
        className={`
          container mx-auto rounded-full relative
          transition-all duration-300
          ${scrolled ? 'shadow-lg' : ''}
        `}
      >
        {/* Background blur effect with feathered edges */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Soft blur background with feathered edges */}
          <div className="absolute inset-0 backdrop-blur-md bg-background/50"
            style={{
              boxShadow: "0 0 20px 20px rgba(255,255,255,0.05) inset",
              borderRadius: "9999px"
            }}
          ></div>

          {/* Extra soft edge blur - only visible at the edges */}
          <div className="absolute -inset-4 backdrop-blur-sm bg-transparent opacity-50"
            style={{
              borderRadius: "9999px",
              mask: "radial-gradient(ellipse at center, transparent 60%, black 100%)"
            }}
          ></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 flex justify-between items-center py-3 px-5 lg:px-8">
          <Link href="/" className="text-2xl font-playfair font-bold">
            Pratik.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="#launches" className="text-foreground hover:text-accent transition-colors">
              Launches
            </Link>
            <Link href="/blog" className="text-foreground hover:text-accent transition-colors">
              Blog
            </Link>
            <Link href="/#contact">
              <Button className="bg-black text-white hover:bg-black/90 rounded-full px-6">Contact</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground w-10 h-10 flex items-center justify-center rounded-full bg-background/30 backdrop-blur-sm"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 z-50 px-4">
          <nav className="flex flex-col space-y-4 bg-background/60 backdrop-blur-lg p-6 rounded-3xl shadow-lg mx-4">
            <Link
              href="/"
              className="text-foreground hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#launches"
              className="text-foreground hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Launches
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-black text-white hover:bg-black/90 rounded-full w-full">Contact</Button>
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navbar