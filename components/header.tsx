"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Star } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-luxury border-b border-charcoal-100"
          : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick} className="group flex items-center space-x-3">

            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-charcoal-900 group-hover:text-emerald-700 transition-colors duration-300">
                Bella Vista
              </span>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {[
              { href: "/", label: "Home" },
              { href: "/menu", label: "Menu" },
              { href: "/reservation", label: "Reservations" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={`group relative text-sm font-medium tracking-wide transition-all duration-300 ${
                  pathname === item.href || (item.href === "/menu" && pathname.startsWith("/menu"))
                    ? "text-emerald-700"
                    : "text-charcoal-900 hover:text-emerald-700"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-500 delay-150 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/reservation"
              onClick={handleLinkClick}
              className="group relative px-8 py-3 bg-emerald-600 text-white text-sm font-medium tracking-wide rounded-full hover:bg-emerald-700 transition-all duration-500 hover:scale-105 hover:shadow-luxury overflow-hidden"
            >
              <span className="relative z-10">Reserve Table</span>
              <div className="absolute inset-0 bg-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-full hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                } text-charcoal-900`}
              />
              <X
                size={24}
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                } text-charcoal-900`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-8 border-t border-white/20">
            <nav className="flex flex-col space-y-6">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/reservation", label: "Reservations" },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`text-lg font-medium transition-all duration-300 hover:translate-x-4 text-charcoal-900 hover:text-emerald-700`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/reservation"
                onClick={handleLinkClick}
                className="inline-block mt-4 px-8 py-3 bg-emerald-600 text-white text-center rounded-full hover:bg-emerald-700 transition-all duration-300"
              >
                Reserve Table
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
