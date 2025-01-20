"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from 'next/image';

const socialLinks = [
  {
    Icon: Twitter,
    href: "https://x.com/PatwePrati11520",
    label: "Twitter",
    bgClass: "bg-blue-50 dark:bg-blue-950/50",
    iconClass: "text-blue-600",
  },
  {
    Icon: Github,
    href: "https://github.com/pratikpatwe",
    label: "GitHub",
    bgClass: "bg-gray-50 dark:bg-gray-900/50",
    iconClass: "text-gray-700 dark:text-gray-300",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/pratik-patwe-7741a0255",
    label: "LinkedIn",
    bgClass: "bg-blue-50 dark:bg-blue-950/50",
    iconClass: "text-blue-600",
  },
]

export default function Hero() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <Card className="overflow-hidden border-0 bg-gradient-to-br from-white/80 via-white/50 to-blue-50/30 dark:from-gray-900/80 dark:via-gray-900/50 dark:to-blue-900/30 backdrop-blur-xl shadow-2xl">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Image Section - First on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/3 md:order-last relative"
            >
              <div className="aspect-square w-full h-full relative overflow-hidden rounded-b-none md:rounded-l-2xl md:rounded-r-none">
                <Image
                  src="https://raw.githubusercontent.com/pratikpatwe/personal-website/refs/heads/main/app/pratikv2.jpg"
                  alt="Pratik Patwe"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
                  loading="eager"
                />
                {/* Adjusted gradients for better visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-black/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 mix-blend-overlay" />
                
                {/* Repositioned Floating Info Card for mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-6"
                >
                  <div className="bg-black/10 backdrop-blur-md md:rounded-xl p-4 md:border border-white/10">
                    <p className="text-white font-medium text-sm md:text-base opacity-90">Turning Ideas into Reality</p>
                    <p className="text-white/80 text-xs md:text-sm mt-0.5">One Line of Code at a Time</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section - Second on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-2/3 flex flex-col justify-center p-8 md:p-16 relative"
            >
              <div className="space-y-6 md:space-y-8 relative z-10">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-2xl" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="inline-block px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                    ✨ Available for Projects
                  </span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Pratik Patwe
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hey, I&apos;m{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    an 18-year-old developer
                  </span>{" "}
                  crafting innovative solutions at the intersection of code and creativity.
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map(({ Icon, href, label, bgClass, iconClass }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "p-3 rounded-xl backdrop-blur-sm",
                        bgClass,
                        "shadow-lg hover:shadow-xl",
                        "transition-all duration-300"
                      )}
                      aria-label={label}
                    >
                      <Icon className={cn("w-5 h-5", iconClass)} />
                    </motion.a>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    size="lg"
                    className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <a href="#contact" className="flex items-center gap-2">
                      Get in Touch
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}