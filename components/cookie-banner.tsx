"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-luxury z-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-charcoal-600">
            We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you
            consent to our use of cookies.
            <Link href="/cookies" className="text-emerald-600 hover:text-emerald-700 hover:underline ml-1">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={declineCookies}
            variant="outline"
            size="sm"
            className="border-charcoal-300 text-charcoal-700 hover:bg-charcoal-50 bg-transparent"
          >
            Decline
          </Button>
          <Button onClick={acceptCookies} className="bg-emerald-600 hover:bg-emerald-700 text-white" size="sm">
            Accept
          </Button>
          <Button
            onClick={declineCookies}
            variant="ghost"
            size="sm"
            className="p-2 text-charcoal-600 hover:text-charcoal-800"
          >
            <X size={16} />
          </Button>
        </div>
      </div>
    </div>
  )
}
