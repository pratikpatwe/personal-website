import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="order-2 lg:order-1">
          <span className="inline-block text-lg md:text-xl bg-secondary/30 px-4 py-1 rounded-full font-medium mb-4">
            Hey, there 👋
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            I AM
            <br />
            PRATIK
          </h1>

          <div className="mt-8 mb-8">
            <h2 className="text-2xl md:text-4xl font-bold">
              AI SOFTWARE
              <br />
              ENTREPRENEUR
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Independent developer building, shipping, and selling subscription-based AI software solutions that solve
              real problems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="#launches">
              <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-6 text-lg w-full sm:w-auto">
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border-black rounded-full px-8 py-6 text-lg w-full sm:w-auto">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          {/* Desktop image (portrait orientation) - hidden on mobile */}
          <div className="relative hidden md:block w-[320px] h-[450px] lg:w-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://i.imgur.com/rQTnig8.jpeg"
              alt="Pratik Patwe"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Mobile image (landscape orientation) - hidden on desktop */}
          <div className="relative block md:hidden w-full h-[280px] rounded-2xl overflow-hidden">
            <Image
              src="https://i.imgur.com/rQTnig8.jpeg"
              alt="Pratik Patwe"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero