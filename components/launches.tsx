"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const launches = [
  {
    name: "EcoTrack",
    logo: "/placeholder.svg?height=50&width=50",
    launchDate: "January 2024",
    image: "/placeholder.svg?height=360&width=640",
    description: "Mobile app for tracking and reducing personal carbon footprint using gamification.",
    github: "https://github.com/your-handle/ecotrack",
    visit: "https://ecotrack.app",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    name: "FinScan",
    logo: "https://fin-scan-gules.vercel.app/FinScan.png",
    launchDate: "November 2024",
    image:
      "https://raw.githubusercontent.com/pratikpatwe/personal-website/refs/heads/main/app/public-images/FinScan-UI.jpg",
    description:
      "AI-powered tool that analyzes uploaded bank statements and provides personalized spending suggestions to improve financial management.",
    github: "https://github.com/pratikpatwe/FinScan",
    visit: "https://fin-scan-gules.vercel.app/",
    tags: ["Next.js", "AI", "Firebase"],
  },
]

export default function Launches() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Launches</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {launches.map((launch, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm border-0">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Left Column - Content */}
                  <div className="p-6 md:p-8 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={launch.logo || "/placeholder.svg"}
                        alt={`${launch.name} logo`}
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="font-bold text-xl">{launch.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{launch.launchDate}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{launch.description}</p>

                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {launch.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" className="flex-1" asChild>
                          <a href={launch.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        </Button>
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
                          <a href={launch.visit} target="_blank" rel="noopener noreferrer">
                            Visit
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="relative aspect-video md:aspect-auto order-first md:order-last">
                    <Image
                      src={launch.image || "/placeholder.svg"}
                      alt={`${launch.name} interface`}
                      fill
                      sizes="(max-width: 768px) 100vw, 640px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-blue-500/10 to-transparent dark:from-blue-500/20" />
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

