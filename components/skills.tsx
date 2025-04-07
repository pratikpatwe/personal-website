const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 lg:px-16 container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">EXPERIENCE & SKILLS</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <SkillCategory
          period="2021-24"
          title="AI Development"
          skills={[
            "• OpenAI GPT Integration",
            "• LangChain",
            "• Vector Databases",
            "• Prompt Engineering",
            "• Fine-tuning Models",
          ]}
        />

        <SkillCategory
          period="2020-24"
          title="Web Development"
          skills={["• React.js", "• Next.js", "• TypeScript", "• Node.js", "• Tailwind CSS"]}
        />

        <SkillCategory
          period="2022-24"
          title="Entrepreneurship"
          skills={[
            "• Product Strategy",
            "• SaaS Business Models",
            "• Growth Marketing",
            "• Customer Development",
            "• Subscription Management",
          ]}
        />
      </div>
    </section>
  )
}

interface SkillCategoryProps {
  period: string
  title: string
  skills: string[]
}

const SkillCategory = ({ period, title, skills }: SkillCategoryProps) => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <span className="text-sm text-muted-foreground">{period}</span>
        <h3 className="text-xl font-bold ml-8">{title}</h3>
      </div>
      <div className="ml-8 space-y-2">
        {skills.map((skill, index) => (
          <p key={index} className="text-secondary-foreground">
            {skill}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Skills

