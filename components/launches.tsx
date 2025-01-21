"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

const launches = [
  {
    name: "FinScan",
    logo: "https://fin-scan-gules.vercel.app/FinScan.png",
    launchDate: "November 2024",
    image: "https://raw.githubusercontent.com/pratikpatwe/personal-website/refs/heads/main/app/public-images/FinScan-UI.jpg",
    description: "AI-powered tool that analyzes uploaded bank statements and provides personalized spending suggestions to improve financial management.",
    github: "https://github.com/pratikpatwe/FinScan",
    visit: "https://fin-scan-gules.vercel.app/",
    tags: ["Node", "Gemini", "Firebase"],
  },
]

export default function Launches() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16">
      <div className="space-y-2 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Launches</h2>
        <p className="text-gray-500 dark:text-gray-400">Check out my latest launches</p>
      </div>

      <div className="space-y-12">
        {launches.map((launch, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50">
              <CardContent className="p-0">
                {/* Image Section - Fixed 16:9 ratio */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full aspect-video overflow-hidden rounded-t-lg group"
                >
                  <Image
                    src={launch.image}
                    alt={`${launch.name} interface`}
                    fill
                    className="object-cover object-center brightness-90 group-hover:brightness-100 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 90vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Status Badge - Moved to bottom-left with improved styling */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-green-500/30 text-white backdrop-blur-sm border border-green-400/30 shadow-lg">
                      🚀 Live
                    </span>
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="p-6 md:p-8 space-y-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={launch.logo}
                        alt={`${launch.name} logo`}
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <div className="space-y-1">
                        <h3 className="text-2xl font-bold">{launch.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Launched: {launch.launchDate}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {launch.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {launch.description}
                    </p>
                  </div>

                  {/* Actions - Improved button styling */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        variant="outline" 
                        className="flex-1 sm:flex-none sm:w-40 gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        asChild
                      >
                        <a 
                          href={launch.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          View Source
                        </a>
                      </Button>
                      <Button 
                        className="flex-1 sm:flex-none sm:w-40 gap-2 bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200" 
                        asChild
                      >
                        <a 
                          href={launch.visit} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}