import Link from "next/link"

const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-16 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-playfair font-bold">
              Pratik.
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              Developer, Indie Hacker, and Entrepreneur specializing in AI software solutions.
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/#launches" className="text-foreground hover:text-accent transition-colors">
              Launches
            </Link>
            <Link href="/Blog" className="text-foreground hover:text-accent transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center md:text-left text-muted-foreground">
          <p>© {new Date().getFullYear()} Pratik Patwe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

