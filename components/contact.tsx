import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Github, Linkedin, Twitter, Youtube, Mail, MapPin } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 lg:px-16 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">GET IN TOUCH</h2>
          <p className="text-muted-foreground max-w-md mb-8">
            Interested in my AI software products or want to connect with a fellow indie hacker? Feel free to reach out.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-accent/10 w-10 h-10 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-muted-foreground">pratikpatwe111@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-accent/10 w-10 h-10 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Location</h4>
                <p className="text-muted-foreground">Pune, India</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <SocialLink href="https://x.com/pratik_patwe" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            <SocialLink href="https://github.com" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
            <SocialLink href="https://youtube.com" icon={<Youtube className="h-5 w-5" />} label="YouTube" />
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-6">Send me a message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your name" className="rounded-lg border-input" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" className="rounded-lg border-input" />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <Input id="subject" placeholder="Subject" className="rounded-lg border-input" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" className="rounded-lg border-input min-h-[120px]" />
            </div>

            <Button className="bg-black text-white hover:bg-black/90 rounded-full w-full">
              Send Message
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-accent hover:text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

export default Contact