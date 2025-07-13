"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Star, Award, ChefHat } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-luxury-gradient opacity-20"></div>
        <img
          src="/bg.jpg"
          alt="Bella Vista Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/40 to-charcoal-900/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 opacity-20">
        <div className="w-32 h-32 border border-gold-400 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-20 right-20 opacity-20">
        <div className="w-24 h-24 border border-emerald-400 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
        {/* Awards */}
        <div
          className={`flex justify-center items-center space-x-8 mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center space-x-2 text-gold-400">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider text-white/90">WORLD'S 50 BEST</span>
          </div>
          <div className="w-px h-6 bg-white/30"></div>
          <div className="flex items-center space-x-2 text-emerald-400">
            <ChefHat className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider text-white/90">JAMES BEARD</span>
          </div>
          <div className="w-px h-6 bg-white/30"></div>
          <div className="flex items-center space-x-2 text-gold-400">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-sm font-medium tracking-wider text-white/90">EXCELLENCE</span>
          </div>
        </div>

        {/* Main Title */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-7xl md:text-9xl font-serif font-light text-white mb-6 tracking-tight leading-none">
            Bella Vista
          </h1>
          <div className="w-32 h-px bg-gold-500 mx-auto mb-8"></div>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-4 max-w-3xl mx-auto leading-relaxed">
            An extraordinary culinary journey through the heart of Italy
          </p>
          <p className="text-sm md:text-base text-white/70 font-medium tracking-[0.2em] uppercase mb-12">
            Ristorante • Milano • Est. 1987
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="/menu"
            className="group relative px-12 py-4 bg-transparent border-2 border-white text-white text-lg font-medium tracking-wide rounded-full hover:bg-white hover:text-charcoal-900 transition-all duration-700 hover:scale-105 hover:shadow-luxury overflow-hidden"
          >
            <span className="relative z-10">Explore Menu</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </Link>
          <Link
            href="/reservation"
            className="group relative px-12 py-4 bg-emerald-600 text-white text-lg font-medium tracking-wide rounded-full hover:bg-emerald-700 transition-all duration-700 hover:scale-105 hover:shadow-luxury overflow-hidden"
          >
            <span className="relative z-10">Reserve Experience</span>
            <div className="absolute inset-0 bg-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2"></div>
      </div>
    </section>
  )
}
