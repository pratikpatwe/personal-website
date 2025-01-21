import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog"
import { database } from "@/lib/firebase"
import { ref, set, get } from "firebase/database"
import { toast, Toaster } from "react-hot-toast"
import { useLocalStorage } from "usehooks-ts"
import { v4 as uuidv4 } from "uuid"
import { Check, Bell, Lock, X } from 'lucide-react'

export default function CurrentlyBuilding() {
  const [email, setEmail] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [userId, setUserId] = useLocalStorage("pratik-patwe-user-id", "")

  const checkRegistrationStatus = useCallback(async () => {
    if (!userId) return
    const userRef = ref(database, `preregistrations/${userId}`)
    const snapshot = await get(userRef)
    if (snapshot.exists()) {
      setIsRegistered(true)
      setEmail(snapshot.val().email)
    }
  }, [userId])

  useEffect(() => {
    if (!userId) {
      setUserId(uuidv4())
    } else {
      checkRegistrationStatus()
    }
  }, [userId, setUserId, checkRegistrationStatus])

  const handlePreRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const handleConfirmRegistration = async () => {
    try {
      const userRef = ref(database, `preregistrations/${userId}`)
      await set(userRef, {
        email: email,
        timestamp: Date.now(),
      })
      setIsModalOpen(false)
      setIsRegistered(true)
      toast.success(
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
          </div>
          <p className="font-medium">You&apos;ve been registered successfully!</p>
        </div>,
        {
          duration: 4000,
          position: "bottom-center",
          style: {
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(59, 130, 246, 0.1)",
            color: "#1e293b",
            padding: "12px 16px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          },
          className: "bg-blue-50/10",
        }
      )
    } catch (error) {
      console.error("Error registering email:", error)
      toast.error("Registration failed. Please try again.", {
        position: "bottom-center",
        style: {
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(239, 68, 68, 0.1)",
          padding: "12px 16px",
          borderRadius: "12px",
          color: "#991b1b",
        },
      })
    }
  }
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16">
      <Toaster />
      
      <div className="space-y-2 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Currently Building</h2>
        <p className="text-gray-500 dark:text-gray-400">Stay updated with my latest project</p>
      </div>

      <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50">
        <CardContent className="p-0">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-[2/1] md:aspect-[21/9] overflow-hidden rounded-2xl"
          >
            <Image
              src="https://raw.githubusercontent.com/pratikpatwe/personal-website/refs/heads/main/app/public-images/new_project_banner.jpg"
              alt="Project Preview"
              fill
              className="object-cover object-center brightness-90 hover:brightness-100 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 90vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Floating Status Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200 backdrop-blur-sm border border-blue-500/20">
                In Development
              </span>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="p-6 md:p-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Secret Project</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Started: December 2024</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["AI", "Node", "React"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Get ready for an exciting new experience that combines cutting-edge AI with seamless user interaction.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              {!isRegistered ? (
                <form onSubmit={handlePreRegister} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="richard@piedpiper.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-gray-50 dark:bg-gray-800/50"
                    />
                    <Button 
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                    >
                      Pre-register
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Be the first to know when we launch. No spam, just updates.
                  </p>
                </form>
              ) : (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    You&apos;re registered for early access!
                  </p>
                  <Button 
                    onClick={() => setIsRegistered(false)} 
                    variant="outline" 
                    className="w-full sm:w-auto"
                  >
                    Update Email
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogPortal>
          <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="mx-auto bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <DialogTitle className="text-xl sm:text-2xl text-center">Join the Waitlist</DialogTitle>
            </DialogHeader>

            <div className="space-y-6 py-4">
              {/* Email Preview */}
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Confirming registration for
                </p>
                <p className="text-center font-medium mt-1">{email}</p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Early Access</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Be among the first to experience the product
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Exclusive Updates</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get development insights and behind-the-scenes content
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Lock className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Privacy Guaranteed</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Your email will only be used for project updates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter className="flex-col sm:flex-row gap-2">
              <Button 
                variant="outline" 
                onClick={() => setIsModalOpen(false)} 
                className="w-full sm:w-auto order-1 sm:order-none"
              >
                Maybe Later
              </Button>
              <Button 
                onClick={handleConfirmRegistration}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
              >
                Confirm Registration
              </Button>
            </DialogFooter>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  )
}