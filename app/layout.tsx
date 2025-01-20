import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ParticleBackground from "@/components/ParticleBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pratik Patwe - Tech Enthusiast",
  description: "an 18-year-old developer building cool stuff and exploring AI",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const buildId = process.env.BUILD_ID || Date.now()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  function setThemeColor(theme) {
                    const meta = document.querySelector('meta[name="theme-color"]');
                    if (meta) {
                      meta.setAttribute('content', theme === 'dark' ? '#020818' : '#ffffff');
                    }
                  }

                  const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        const isDark = document.documentElement.classList.contains('dark');
                        setThemeColor(isDark ? 'dark' : 'light');
                      }
                    });
                  });

                  observer.observe(document.documentElement, { attributes: true });

                  // Initial setup
                  const initialTheme = localStorage.getItem('theme') || 'system';
                  setThemeColor(initialTheme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : initialTheme);
                })();
              `,
            }}
          />
          <ParticleBackground />
          {children}
        </ThemeProvider>
        <script
          id="cache-bust"
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              var scripts = document.getElementsByTagName('script');
              for (var i = 0; i < scripts.length; i++) {
                if (scripts[i].src && scripts[i].src.indexOf('_next/static') !== -1) {
                  scripts[i].src = scripts[i].src + '?v=${buildId}';
                }
              }
            })();
          `,
          }}
        />
      </body>
    </html>
  )
}

