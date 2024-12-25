"use client"

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { database } from '@/lib/firebase'
import { ref, set, get } from "firebase/database"
import { toast, Toaster } from 'react-hot-toast'
import { useLocalStorage } from 'usehooks-ts'
import { v4 as uuidv4 } from 'uuid'

export default function CurrentlyBuilding() {
  const [email, setEmail] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [userId, setUserId] = useLocalStorage('pratik-patwe-user-id', '')

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
        timestamp: Date.now()
      })
      setIsModalOpen(false)
      setIsRegistered(true)
      toast.success(
        "🎉 Success! You've been registered. Get ready for exciting updates coming your way!",
        {
          duration: 5000,
          position: 'bottom-center',
          style: {
            background: '#10B981',
            color: '#FFFFFF',
            padding: '16px',
            borderRadius: '10px',
          },
          icon: '🚀',
        }
      )
    } catch (error) {
      console.error("Error registering email:", error)
      toast.error("An error occurred. Please try again.", {
        position: 'bottom-center',
      })
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Toaster />
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
                  src="https://raw.githubusercontent.com/pratikpatwe/personal-website/refs/heads/main/app/public-images/new_project_banner.jpg"
                  alt="App Interface"
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Stay Tuned</h3>
                  <p className="text-xs md:text-sm">Started: December 2024</p>
                </div>
              </motion.div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="md:w-2/3">
                  <p className="mb-4 md:mb-6 text-base md:text-lg">Get ready for an exciting new experience. Stay tuned—something amazing is coming your way!</p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs md:text-sm font-medium">AI</span>
                    <span className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full text-xs md:text-sm font-medium">Machine Learning</span>
                    <span className="bg-accent/20 text-accent-foreground px-2 py-1 rounded-full text-xs md:text-sm font-medium">Next</span>
                  </div>
                </div>
                <div className="md:w-1/3">
                  {!isRegistered ? (
                    <form onSubmit={handlePreRegister} className="flex flex-col gap-4">
                      <Input
                        type="email"
                        placeholder="richard@piedpiper.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Button type="submit">Pre-register</Button>
                    </form>
                  ) : (
                    <div className="text-center">
                      <p className="text-green-500 font-semibold mb-2">You&apos;re registered!</p>
                      <Button onClick={() => setIsRegistered(false)}>Update Email</Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">Confirm Pre-registration</DialogTitle>
            <DialogDescription className="text-center text-lg leading-relaxed">
              Stay in the loop with all upcoming launches from Pratik Patwe! By pre-registering, you agree to receive updates directly from me.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center space-y-4 mt-4">
            <p className="text-sm text-muted-foreground text-center">
              If you&apos;re excited to join the journey, press &apos;Continue&apos; to proceed.
            </p>
            <DialogFooter className="flex flex-col sm:flex-row sm:justify-center w-full gap-2">
              <Button onClick={() => setIsModalOpen(false)} variant="outline" className="w-full sm:w-auto">Cancel</Button>
              <Button onClick={handleConfirmRegistration} className="w-full sm:w-auto">Continue</Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}