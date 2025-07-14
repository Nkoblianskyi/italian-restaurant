"use client"

import { useState } from "react"
import { Award, Users, Clock, Star } from "lucide-react"

export default function About() {
  const [isImageHovered, setIsImageHovered] = useState(false)

  const achievements = [
    { icon: Star, label: "Excellence Awards", value: "15" },
    { icon: Award, label: "World Ranking", value: "#7" },
    { icon: Users, label: "Master Chefs", value: "12" },
    { icon: Clock, label: "Years Excellence", value: "37" },
  ]

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-100 to-gold-100"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-12">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-px bg-emerald-600"></div>
                <span className="text-sm font-medium tracking-[0.3em] text-emerald-700 uppercase">Our Story</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-charcoal-900 mb-8 tracking-tight leading-tight">
                A Legacy of
                <br />
                <span className="text-emerald-700">Culinary Excellence</span>
              </h2>
            </div>

            {/* Story */}
            <div className="space-y-8 text-lg text-charcoal-600 leading-relaxed font-light">
              <p className="hover:text-charcoal-700 transition-colors duration-300">
                Since 1987, Hyperswap has been a beacon of Italian culinary artistry, where tradition meets innovation
                in perfect harmony. Our journey began with a simple vision: to create an extraordinary dining experience
                that honors the rich heritage of Italian cuisine while pushing the boundaries of gastronomic excellence.
              </p>

              <p className="hover:text-charcoal-700 transition-colors duration-300">
                Under the guidance of our award-winning culinary team, we source only the finest ingredients from across
                Italy and beyond. Each dish tells a story, each flavor carries the passion of generations, and every
                meal becomes an unforgettable memory.
              </p>

              <p className="hover:text-charcoal-700 transition-colors duration-300">
                Today, Hyperswap stands among the world's most celebrated restaurants, a testament to our unwavering
                commitment to perfection and our dedication to creating moments of pure culinary magic.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group text-center p-6 rounded-2xl hover:bg-cream-50 transition-all duration-500 hover:scale-105"
                >
                  <achievement.icon className="w-8 h-8 text-emerald-600 mx-auto mb-4 group-hover:text-gold-600 transition-colors duration-300" />
                  <div className="text-3xl font-serif font-bold text-charcoal-900 mb-2">{achievement.value}</div>
                  <div className="text-sm font-medium tracking-wide text-charcoal-600 uppercase">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-700 hover:-translate-y-2"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <img
                src="/about.jpg"
                alt="Master Chef at Hyperswap"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent"></div>

              {/* Floating Quote */}
              <div
                className={`absolute bottom-8 left-8 right-8 text-white transform transition-all duration-700 ${
                  isImageHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl">
                  <p className="text-lg font-light italic mb-3">
                    "Cooking is not just about feeding the body, but nourishing the soul with every carefully crafted
                    bite."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">MC</span>
                    </div>
                    <div>
                      <div className="font-medium">Marco Castellano</div>
                      <div className="text-sm text-white/80">Executive Chef</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 border-2 border-gold-400 rounded-full opacity-30"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-emerald-400 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
