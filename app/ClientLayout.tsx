"use client"

import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import CookieBanner from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Ensure scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="en">
      <head>
        <title>Hyperswap - Authentic Italian Restaurant</title>
        <meta name="description" content="Experience the finest Italian cuisine in an elegant atmosphere" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header />
        <main className="transition-all duration-500 ease-in-out">{children}</main>
        <CookieBanner/>
        <Footer />
      </body>
    </html>
  )
}
