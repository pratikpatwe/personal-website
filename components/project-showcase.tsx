import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    name: "NextGen AI Assistant",
    description: "AI-powered personal assistant with advanced task management and scheduling capabilities.",
    image: "/placeholder.svg?height=300&width=300",
    tags: ["AI", "Machine Learning", "React Native"],
  },
  {
    name: "EcoTrack",
    description: "Mobile app for tracking and reducing personal carbon footprint using gamification.",
    image: "/placeholder.svg?height=300&width=300",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    name: "CodeCollab",
    description: "Real-time collaborative coding platform with integrated AI code suggestions.",
    image: "/placeholder.svg?height=300&width=300",
    tags: ["WebRTC", "React", "Express", "Socket.io"],
  },
]

export default function ProjectShowcase() {
  const [currentProject, setCurrentProject] = useState(0)

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Innovative Projects</h2>
      <div className="relative h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            className="absolute inset-0 flex flex-col md:flex-row items-center bg-white/5 backdrop-blur-lg rounded-2xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                src={projects[currentProject].image}
                alt={projects[currentProject].name}
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">{projects[currentProject].name}</h3>
              <p className="mb-6">{projects[currentProject].description}</p>
              <div className="flex flex-wrap gap-2">
                {projects[currentProject].tags.map((tag, index) => (
                  <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentProject ? 'bg-blue-500' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentProject(index)}
          />
        ))}
      </div>
    </div>
  )
}

