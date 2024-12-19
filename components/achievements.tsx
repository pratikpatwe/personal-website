import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Trophy, BookOpen, Mic, TrendingUp } from 'lucide-react'

const achievements = [
  {
    title: "Global AI Hackathon Winner",
    description: "Developed an AI solution for early disease detection, beating 500+ teams worldwide.",
    image: "/placeholder.svg?height=360&width=640",
    icon: Trophy,
  },
  {
    title: "Published in Nature Journal",
    description: "Co-authored a paper on 'Quantum Computing in Climate Modeling' at age 17.",
    image: "/placeholder.svg?height=360&width=640",
    icon: BookOpen,
  },
  {
    title: "TEDx Speaker",
    description: "Delivered a talk on 'The Future of AI in Education' reaching 100,000+ viewers.",
    image: "/placeholder.svg?height=360&width=640",
    icon: Mic,
  },
  {
    title: "100k+ Active Users",
    description: "EcoTrack app reached 100,000 active users within 3 months of launch.",
    image: "/placeholder.svg?height=360&width=640",
    icon: TrendingUp,
  },
]

export default function Achievements() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <div key={index}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 640px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white flex items-center">
                      <IconComponent 
                        className="mr-3 text-white" 
                        size={32} 
                        strokeWidth={2.5}
                      />
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

