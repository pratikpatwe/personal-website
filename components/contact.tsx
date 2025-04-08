import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, MapPin } from "lucide-react"

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
            <SocialLink
              href="https://x.com/pratik_patwe"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              }
              label="X (Twitter)"
            />
            <SocialLink
              href="https://github.com/pratikpatwe/"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2773 21.0498 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
                </svg>
              }
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/pratik-patwe-7741a0255/"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
              label="LinkedIn"
            />
            <SocialLink
              href="https://www.youtube.com/@PratikPatwe"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 24 17" fill="currentColor">
                  <path d="M23.5 2.88C23.24 1.73 22.37 0.85 21.22 0.59C19.36 0.12 12 0.12 12 0.12C12 0.12 4.64 0.12 2.78 0.59C1.63 0.85 0.76 1.73 0.5 2.88C0.02 4.74 0.02 8.59 0.02 8.59C0.02 8.59 0.02 12.44 0.5 14.3C0.76 15.45 1.63 16.33 2.78 16.59C4.64 17.06 12 17.06 12 17.06C12 17.06 19.36 17.06 21.22 16.59C22.37 16.33 23.24 15.45 23.5 14.3C23.98 12.44 23.98 8.59 23.98 8.59C23.98 8.59 23.98 4.74 23.5 2.88ZM9.55 12.23V4.95L15.82 8.59L9.55 12.23Z" />
                </svg>
              }
              label="YouTube"
            />
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