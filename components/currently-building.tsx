import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { database } from "@/lib/firebase"
import { ref, set, get } from "firebase/database"
import { toast, Toaster } from "react-hot-toast"
import { useLocalStorage } from "usehooks-ts"
import { v4 as uuidv4 } from "uuid"

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
      toast.success("🎉 Success! You've been registered. Get ready for exciting updates coming your way!", {
        duration: 5000,
        position: "bottom-center",
        style: {
          background: "linear-gradient(to right, #8B5CF6, #3B82F6)",
          color: "#FFFFFF",
          padding: "16px",
          borderRadius: "10px",
        },
        icon: "🚀",
      })
    } catch (error) {
      console.error("Error registering email:", error)
      toast.error("An error occurred. Please try again.", {
        position: "bottom-center",
      })
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Toaster />
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Currently Building</h2>

      <Card className="overflow-hidden bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm border-0">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Image Container - Above on mobile, left on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://raw.githubusercontent.com/pratikpatwe/personal-website/refs/heads/main/app/public-images/new_project_banner.jpg"
                  alt="App Interface"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500/10 to-transparent dark:from-blue-500/20" />
              </div>
            </motion.div>

            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex flex-col justify-center"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Stay Tuned</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Started: December 2024</p>
                </div>

                <p className="text-gray-600 dark:text-gray-300">
                  Get ready for an exciting new experience. Stay tuned—something amazing is coming your way!
                </p>

                <div className="flex flex-wrap gap-2">
                  {["AI", "Machine Learning", "Next.js"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {!isRegistered ? (
                  <form onSubmit={handlePreRegister} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="richard@piedpiper.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/80 dark:bg-gray-900/80"
                    />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                      Pre-register
                    </Button>
                  </form>
                ) : (
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">You&apos;re registered!</p>
                    <Button onClick={() => setIsRegistered(false)} variant="outline" className="w-full">
                      Update Email
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Confirm Pre-registration</DialogTitle>
            <DialogDescription>
              Stay in the loop with all upcoming launches from Pratik Patwe! By pre-registering, you agree to receive
              updates directly from me.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              If you&apos;re excited to join the journey, press &apos;Continue&apos; to proceed.
            </p>
            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button onClick={() => setIsModalOpen(false)} variant="outline" className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button onClick={handleConfirmRegistration} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Continue
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}