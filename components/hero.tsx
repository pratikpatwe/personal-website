import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Twitter, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Hero() {
  return (
    <div className="relative text-center z-10 flex flex-col items-center px-4 w-full max-w-4xl mx-auto pt-24 md:pt-24 overflow-hidden">
      {/* Remove the background div */}
      
      {/* Animated Profile Image Container */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 0.8,
        }}
        className="mb-6 relative group"
      >
        <div
          className="absolute -inset-2 
            bg-gradient-to-br 
            from-primary/10 
            to-secondary/10 
            rounded-2xl 
            transition-all 
            duration-1000 
            ease-in-out 
            group-hover:scale-105 
            group-hover:opacity-70 
            opacity-40
          "
        ></div>
        <Image
          src="https://raw.githubusercontent.com/pratikpatwe/personal-website/refs/heads/main/app/pratik.jpg"
          alt="Pratik Patwe"
          width={200}
          height={200}
          priority
          className="relative 
            rounded-2xl 
            border-2 
            border-primary/10 
            shadow-xl 
            w-32 
            h-32 
            md:w-48 
            md:h-48 
            object-cover 
            ring-2 
            ring-primary/10 
            group-hover:ring-primary/50 
            transition-all 
            duration-300
          "
        />
        <motion.div
          className="absolute 
            bottom-0 
            right-0 
            bg-primary 
            text-white 
            p-2 
            rounded-full 
            shadow-lg
          "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}
        >
          <Zap 
            className="w-4 h-4 text-white dark:text-black" 
            fill="currentColor" 
            stroke="currentColor" 
            strokeWidth={2}
          />
        </motion.div>
      </motion.div>

      {/* Name with Refined Gradient */}
      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-gradient tracking-tight animate-gradient-x background-size-200 background-animate"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Pratik Patwe
      </motion.h1>

      {/* Subtitle with Enhanced Typography */}
      <motion.p
        className="text-xl md:text-2xl lg:text-3xl 
          mb-8 
          max-w-2xl 
          mx-auto 
          text-muted-foreground 
          font-medium 
          relative
          dark:text-muted-foreground/80
        "
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hey, I&apos;m <span className="bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded-lg text-primary dark:text-primary/80">an 18-year-old developer</span> building cool stuff and exploring AI
      </motion.p>

      {/* Social Icons with Enhanced Hover and Mode Adaptation */}
      <motion.div
        className="flex justify-center space-x-6 mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {[
          { 
            Icon: Twitter, 
            href: "https://x.com/PatwePrati11520", 
            lightColor: "hover:text-[#1DA1F2]", 
            darkColor: "dark:hover:text-[#1DA1F2]/80" 
          },
          { 
            Icon: Github, 
            href: "https://github.com/pratikpatwe", 
            lightColor: "hover:text-[#333]", 
            darkColor: "dark:hover:text-white/80" 
          },
          { 
            Icon: Linkedin, 
            href: "https://www.linkedin.com/in/pratik-patwe-7741a0255", 
            lightColor: "hover:text-[#0A66C2]", 
            darkColor: "dark:hover:text-[#0A66C2]/80" 
          }
        ].map(({ Icon, href, lightColor, darkColor }) => (
          <motion.a 
            key={href}
            href={href}
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={cn(
              "text-muted-foreground/60",
              "dark:text-muted-foreground/50",
              "transition-all duration-300 ease-in-out",
              lightColor,
              darkColor
            )}
          >
            <Icon 
              className="w-7 h-7 md:w-9 md:h-9 
                hover:drop-shadow-lg 
                dark:hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" 
              strokeWidth={1.5} 
            />
          </motion.a>
        ))}
      </motion.div>

      {/* CTA Button with Advanced Interaction and Mode Adaptation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button
          size="lg"
          className={cn(
            "group relative overflow-hidden",
            "transition-all duration-300",
            "shadow-md dark:shadow-lg",
            // Background and text color based on mode
            "bg-black text-white hover:bg-black/90",
            "dark:bg-white dark:text-black dark:hover:bg-gray-100"
          )}
          asChild
        >
          <a
            href="#contact"
            className="flex items-center justify-center relative z-10"
          >
            Get in Touch
          </a>
        </Button>
      </motion.div>
    </div>
  )
}