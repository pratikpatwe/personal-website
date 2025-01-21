"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { database } from '@/lib/firebase'
import { ref, push, set } from "firebase/database"
import { toast, Toaster } from 'react-hot-toast'
import { Send, User, Mail, MessageSquare } from 'lucide-react'

// Array of placeholder objects
const PLACEHOLDERS = [
  {
    name: 'Richard Hendricks',
    email: 'richard@piedpiper.com',
    message: 'I swear this algorithm is going to change the world... if I can just fix this one bug.'
  },
  {
    name: 'Erlich Bachman',
    email: 'erlich@aviato.com',
    message: 'I founded the greatest startup you\'ve never heard of—Aviato. I\'ve also made *Pied Piper* what it is today. Let\'s talk about my latest brilliant idea... or just pay me to consult.'
  },
  {
    name: 'Dinesh Chugtai',
    email: 'dinesh@piedpiper.com',
    message: 'I can\'t believe I\'m still working for Richard... But hey, at least I\'m the most important person in the room, right?'
  },
  {
    name: 'Gilfoyle Bertram',
    email: 'gilfoyle@piedpiper.com',
    message: 'Let\'s make this brief—unless you\'re offering free pizza. Then, I\'ll listen.'
  },
  {
    name: 'Jared Dunn',
    email: 'jared@piedpiper.com',
    message: 'I believe in this company. I believe in Richard. I believe in... everything we\'re doing. Oh, and I made cookies if you want some.'
  },
  {
    name: 'Jian-Yang',
    email: 'jian-yang@box.com',
    message: 'I don\'t care about your stupid startup. I care about my app. Let\'s talk about that instead.'
  },
  {
    name: 'Monica Hall',
    email: 'monica@piedpiper.com',
    message: 'Richard might be a bit... overwhelmed, but I\'ll make sure we focus on the right things. Let\'s chat!'
  },
  {
    name: 'Gavin Belson',
    email: 'gavin@hooli.com',
    message: 'I\'m Gavin Belson, the visionary who\'s building the next big thing. You\'ll want to know me... or regret it.'
  },
  {
    name: 'Russ Hanneman',
    email: 'russ@russco.com',
    message: 'My company is worth billions, but my yacht is worth more. Let\'s talk... I\'m a huge deal.'
  },
  {
    name: 'Laurie Bream',
    email: 'laurie@piedpiper.com',
    message: 'I\'ve seen it all in tech. I know what works—and what doesn\'t. Reach out, and let\'s get to business.'
  }
]

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)
  const [userInteracted, setUserInteracted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (userInteracted) return // Stop updating if user interacted

    const intervalId = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % PLACEHOLDERS.length)
    }, 10000) // Change every 10 seconds

    return () => clearInterval(intervalId)
  }, [userInteracted])

  const handleUserInput = () => setUserInteracted(true) // Stop placeholder rotation

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const contactRef = ref(database, 'contacts')
      const newContactRef = push(contactRef)
      await set(newContactRef, {
        name,
        email,
        message,
        timestamp: Date.now()
      })
      
      toast.success(
        "Thanks for reaching out! I'll get back to you soon.",
        {
          duration: 5000,
          position: 'bottom-center',
          style: {
            background: '#10B981',
            color: '#FFFFFF',
            padding: '16px',
            borderRadius: '10px',
          },
          icon: '📨',
        }
      )
      
      // Reset form
      setName('')
      setEmail('')
      setMessage('')
      setUserInteracted(false)
    } catch (error) {
      console.error("Error submitting contact form:", error)
      toast.error(
        "Oops! Something went wrong. Please try again.",
        {
          duration: 5000,
          position: 'bottom-center',
          style: {
            background: '#EF4444',
            color: '#FFFFFF',
            padding: '16px',
            borderRadius: '10px',
          },
          icon: '❌',
        }
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentPlaceholderSet = PLACEHOLDERS[currentPlaceholder]

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <Toaster />
      <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <motion.div
            key={currentPlaceholderSet.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Input
              id="name"
              type="text"
              placeholder={currentPlaceholderSet.name}
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                handleUserInput()
              }}
              required
            />
          </motion.div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <motion.div
            key={currentPlaceholderSet.email}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Input
              id="email"
              type="email"
              placeholder={currentPlaceholderSet.email}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                handleUserInput()
              }}
              required
            />
          </motion.div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <motion.div
            key={currentPlaceholderSet.message}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Textarea
              id="message"
              placeholder={currentPlaceholderSet.message}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
                handleUserInput()
              }}
              required
              rows={6}
              className="min-h-[150px]"
            />
          </motion.div>
        </div>
        <Button type="submit" className="w-full">
          <motion.span
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 1 }}
            animate={{ opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.span>
        </Button>
      </motion.form>
    </div>
  )
}