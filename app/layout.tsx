import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import ParticleBackground from '@/components/ParticleBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pratik Patwe - Tech Innovator',
  description: '18-year-old visionary shaping the future of technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ParticleBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

