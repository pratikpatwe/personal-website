import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

export default function CurrentlyBuilding() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gradient">Currently Building</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="max-w-5xl mx-auto">
          <CardContent className="p-4 md:p-8">
            <div className="flex flex-col gap-6 md:gap-8">
              <motion.div
                className="w-full relative overflow-hidden rounded-lg aspect-video"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/placeholder.svg?height=360&width=640"
                  alt="App Interface"
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">NextGen AI Assistant</h3>
                  <p className="text-xs md:text-sm">Started: March 2024</p>
                </div>
              </motion.div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="md:w-2/3">
                  <p className="mb-4 md:mb-6 text-base md:text-lg">An AI-powered personal assistant with advanced task management and scheduling capabilities, designed to revolutionize productivity.</p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs md:text-sm font-medium">AI</span>
                    <span className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full text-xs md:text-sm font-medium">Machine Learning</span>
                    <span className="bg-accent/20 text-accent-foreground px-2 py-1 rounded-full text-xs md:text-sm font-medium">React Native</span>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <form className="flex flex-col gap-4">
                    <Input type="email" placeholder="richard@piedpiper.com" />
                    <Button type="submit">Pre-register</Button>
                  </form>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

