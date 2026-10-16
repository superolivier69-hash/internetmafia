import type { Metadata, Viewport } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" })

export const metadata: Metadata = {
  metadataBase: new URL("https://internetmafia.com"),
  title: {
    default: "InternetMafia — The Internet Underground",
    template: "%s | InternetMafia",
  },
  description:
    "Independent reporting on online privacy, VPNs, cybersecurity, anonymous browsing and digital rights. Go dark. Stay legal.",
  openGraph: {
    title: "InternetMafia — The Internet Underground",
    description: "Online privacy, VPNs, cybersecurity and digital rights. Go dark. Stay legal.",
    siteName: "InternetMafia",
    images: ["/images/hero.png"],
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0b0b0a",
  colorScheme: "dark",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-dvh flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-accent focus:text-accent-foreground focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
