import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import IntroSection from "@/components/intro"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <Navbar />
      <div className="pt-24">
        <Hero />
        <IntroSection />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

