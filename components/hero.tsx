"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialLinks = [
  {
    Icon: XIcon,
    href: "https://x.com/PatwePrati11520",
    label: "X (Twitter)",
    bgClass: "bg-black dark:bg-white",
    iconClass: "text-white dark:text-black",
    hoverAnimation: true,
  },
  {
    Icon: Github,
    href: "https://github.com/pratikpatwe",
    label: "GitHub",
    bgClass: "bg-gray-100 dark:bg-gray-800",
    iconClass: "text-gray-700 dark:text-gray-200",
    hoverAnimation: false,
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/pratik-patwe-7741a0255",
    label: "LinkedIn",
    bgClass: "bg-gray-100 dark:bg-gray-800",
    iconClass: "text-gray-700 dark:text-gray-200",
    hoverAnimation: false,
  },
]

export default function Hero() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <Card className="overflow-hidden border-0 bg-gradient-to-br from-white/80 via-white/50 to-blue-50/30 dark:from-gray-900/80 dark:via-gray-900/50 dark:to-blue-900/30 backdrop-blur-xl shadow-2xl">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
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
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-6"
                >
                  <div className="bg-black/40 backdrop-blur-md rounded-t-xl md:rounded-xl p-4 md:p-5 md:border border-white/20">
                    <p className="text-white font-semibold text-sm md:text-base opacity-100">
                      Turning Ideas into Reality
                    </p>
                    <p className="text-white/90 text-xs md:text-sm mt-1">One Line of Code at a Time</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-2/3 flex flex-col justify-center p-8 md:p-16 relative"
            >
              <div className="space-y-6 md:space-y-8 relative z-10">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-200/30 dark:bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-200/30 dark:bg-purple-500/20 rounded-full blur-3xl" />

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <span className="inline-block px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                    ⚡ On a Journey to Innovate
                  </span>
                </motion.div>

                {/* Enhanced name typography with modern font stack */}
                <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 tracking-tight leading-none font-display">
                  Pratik Patwe
                </h1>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Hey, I&apos;m{" "}
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
                    an 18-year-old developer
                  </span>{" "}
                  building cool stuff and exploring AI
                </p>

                {/* Social Links - Only X icon glows */}
                <div className="flex gap-4">
                  {socialLinks.map(({ Icon, href, label, bgClass, iconClass, hoverAnimation }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: hoverAnimation ? 1.05 : 1 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "p-3 rounded-xl",
                        bgClass,
                        iconClass,
                        hoverAnimation
                          ? "hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20"
                          : "hover:bg-gray-200 dark:hover:bg-gray-700",
                        "transition-all duration-300",
                      )}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <Button
                    size="lg"
                    className="group relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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

