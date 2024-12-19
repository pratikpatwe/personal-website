import { motion } from 'framer-motion'
import Image from 'next/image'

const shoutouts = [
  {
    name: "Elon Musk",
    avatar: "/placeholder.svg?height=80&width=80",
    role: "CEO of Tesla and SpaceX",
    message: "Pratik's work on AI-driven climate solutions is truly groundbreaking. He's definitely one to watch in the tech world."
  },
  {
    name: "Melinda Gates",
    avatar: "/placeholder.svg?height=80&width=80",
    role: "Co-chair of the Bill & Melinda Gates Foundation",
    message: "Impressed by Pratik's dedication to leveraging technology for social good. His EcoTrack app is making a real difference in environmental awareness."
  }
]

export default function NotableShoutouts() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Notable Shoutouts</h2>
      <div className="space-y-8">
        {shoutouts.map((shoutout, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Image
                src={shoutout.avatar}
                alt={shoutout.name}
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl fon  t-bold">{shoutout.name}</h3>
                <p className="text-sm text-gray-400">{shoutout.role}</p>
              </div>
            </div>
            <p className="italic text-lg">&ldquo;{shoutout.message}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}