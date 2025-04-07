import type React from "react"
import { Award, Trophy } from "lucide-react"

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 px-4 md:px-8 lg:px-16 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">SHOUTOUTS -D</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <ShoutoutCard
          name="Alex Hormozi"
          role="Founder, Acquisition.com"
          quote="Pratik's AI tools have revolutionized how we approach content creation. His software has saved our team countless hours."
          image="/placeholder.svg?height=100&width=100"
        />

        <ShoutoutCard
          name="Sahil Bloom"
          role="Angel Investor & Creator"
          quote="As a solo founder, what Pratik has built is incredibly impressive. His attention to detail and user experience sets his products apart."
          image="/placeholder.svg?height=100&width=100"
        />

        <ShoutoutCard
          name="Kunal Shah"
          role="Founder, CRED"
          quote="Pratik represents the future of Indian entrepreneurship - building global products with a deep understanding of user needs."
          image="/placeholder.svg?height=100&width=100"
        />

        <ShoutoutCard
          name="Ankur Warikoo"
          role="Entrepreneur & Content Creator"
          quote="I've been using Pratik's AI writing assistant for months now. It's become an essential part of my content creation workflow."
          image="/placeholder.svg?height=100&width=100"
        />
      </div>
    </section>
  )
}

interface AchievementCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const AchievementCard = ({ icon, title, description }: AchievementCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">{icon}</div>
        <div>
          <h4 className="text-lg font-bold mb-2">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}

interface ShoutoutCardProps {
  name: string
  role: string
  quote: string
  image: string
}

const ShoutoutCard = ({ name, role, quote, image }: ShoutoutCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4 relative w-12 h-12 rounded-full overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={name} className="object-cover w-full h-full" />
        </div>
        <div>
          <div className="mb-2">
            <h4 className="text-lg font-bold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
          <p className="text-secondary-foreground italic">"{quote}"</p>
        </div>
      </div>
    </div>
  )
}

export default Achievements

