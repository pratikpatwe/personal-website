import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import ParticleBackground from '@/components/ParticleBackground'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pratik Patwe - Tech Enthusiast',
  description: 'an 18-year-old developer building cool stuff and exploring AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const buildId = process.env.BUILD_ID || Date.now()

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#020818" media="(prefers-color-scheme: dark)" />
          <ParticleBackground />
          {children}
        </ThemeProvider>
        <Script id="cache-bust" strategy="afterInteractive">
          {`
            (function() {
              var scripts = document.getElementsByTagName('script');
              for (var i = 0; i < scripts.length; i++) {
                if (scripts[i].src && scripts[i].src.indexOf('_next/static') !== -1) {
                  scripts[i].src = scripts[i].src + '?v=${buildId}';
                }
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}