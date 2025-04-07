'use client'

import { useState } from "react"
import { MapPin } from "lucide-react"
import Image from "next/image"

// Experience data array
const experienceData = [
  {
    id: 1,
    date: "April 2025",
    title: "Unnati Hackathon",
    location: "VIT, Pune",
    description: "Achieved first runner-up position in the Unnati Hackathon, showcasing innovative solutions in AI and software development.",
    type: "hackathon",
    imageSrc: "https://i.imgur.com/wEwnz8q.jpeg",
    imageAlt: "TechCrunch Disrupt Hackathon"
  },
];

type ExperienceType = "hackathon" | "speaking" | "award" | "education" | "community";

interface ExperienceItemProps {
  date: string;
  title: string;
  location: string;
  description: string;
  type: ExperienceType;
  imageSrc: string;
  imageAlt: string;
}

const ExperienceItem = ({ date, title, location, description, type, imageSrc, imageAlt }: ExperienceItemProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex-shrink-0">
        <div className="w-32 h-24 md:w-48 md:h-32 rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={192}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <div className="flex items-center mb-4 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
        <p className="text-secondary-foreground">{description}</p>
      </div>
    </div>
  )
}

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  // Initialize with top 3 experiences
  const visibleExperiences = showAll
    ? experienceData
    : experienceData.slice(0, 3);

  return (
    <section id="experience" className="py-16 px-4 md:px-8 lg:px-16 container mx-auto mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">EXPERIENCE</h2>

      <div className="space-y-12">
        {visibleExperiences.map((experience) => (
          <ExperienceItem
            key={experience.id}
            date={experience.date}
            title={experience.title}
            location={experience.location}
            description={experience.description}
            type={experience.type as ExperienceType}
            imageSrc={experience.imageSrc}
            imageAlt={experience.imageAlt}
          />
        ))}
      </div>

      {experienceData.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  )
}

export default Experience