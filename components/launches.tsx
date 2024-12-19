import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const launches = [
  {
    name: "EcoTrack",
    logo: "/placeholder.svg?height=50&width=50",
    launchDate: "January 2024",
    image: "/placeholder.svg?height=360&width=640",
    description: "Mobile app for tracking and reducing personal carbon footprint using gamification.",
    github: "https://github.com/your-handle/ecotrack",
    visit: "https://ecotrack.app"
  },
  {
    name: "CodeCollab",
    logo: "/placeholder.svg?height=50&width=50",
    launchDate: "November 2023",
    image: "/placeholder.svg?height=360&width=640",
    description: "Real-time collaborative coding platform with integrated AI code suggestions.",
    github: "https://github.com/your-handle/codecollab",
    visit: "https://codecollab.app"
  },
]

export default function Launches() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gradient">Launches</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {launches.map((launch, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={launch.image}
                alt={`${launch.name} interface`}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">{launch.name}</h3>
                <p className="text-sm">{launch.launchDate}</p>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center">
                <Image
                  src={launch.logo}
                  alt={`${launch.name} logo`}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <CardTitle>{launch.name}</CardTitle>
                  <CardDescription>{launch.launchDate}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">{launch.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" asChild className="flex-1">
                  <a href={launch.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
                <Button asChild className="flex-1">
                  <a href={launch.visit} target="_blank" rel="noopener noreferrer">Visit</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

