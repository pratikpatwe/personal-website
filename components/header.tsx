"use client"

import { useState, useEffect } from 'react'
import { ThemeToggle } from './theme-toggle'
import { motion } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          whileHover={{ scale: 1.05 }}
        >
          Pratik Patwe
        </motion.h1>
        <nav className="flex items-center space-x-4">
          <a href="#hero" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#currently-building" className="hover:text-blue-500 transition-colors">Current Project</a>
          <a href="#launches" className="hover:text-blue-500 transition-colors">Launches</a>
          <a href="#achievements" className="hover:text-blue-500 transition-colors">Achievements</a>
          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  )
}

