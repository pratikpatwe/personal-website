import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

// Project data array
const projectData = [
  {
    id: "lernova",
    title: "Lernova",
    description: "A smart platform for seamless course material distribution, structured assignments, and real-time student progress tracking.",
    image: "https://raw.githubusercontent.com/pratikpatwe/Lernova/refs/heads/main/public/screenshot.png",
    tags: ["AI", "SaaS", "Content"],
    link: "https://lernova.vercel.app"
  },
  {
    id: "finscan",
    title: "FinScan",
    description: "Transform your financial data into actionable insights with AI-powered analysis.",
    image: "https://raw.githubusercontent.com/pratikpatwe/personal-website/refs/heads/main/app/public-images/FinScan-UI.jpg",
    tags: ["AI", "Micro SaaS", "Finance"],
    link: "https://fin-scan-gules.vercel.app/"
  },
  {
    id: "lifemap",
    title: "LifeMap",
    description: "Data analysis and visualization tool powered by artificial intelligence.",
    image: "/placeholder.svg?height=600&width=400",
    tags: ["AI", "to-do", "Visualization"],
    link: "https://life-map-xi.vercel.app/"
  },
  // You can easily add more projects here
]

const Projects = () => {
  return (
    <section id="launches" className="py-16 px-4 md:px-8 lg:px-16 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">LAUNCHES</h2>
        <Button variant="link" className="text-accent flex items-center p-0 mt-4 md:mt-0" asChild>
          <Link href="/all-launches">
            View all launches <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

const ProjectCard = ({ title, description, image, tags, link }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative h-[240px] w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" className="rounded-full border-black" asChild>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            Visit Now <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Projects