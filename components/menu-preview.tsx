"use client"

import Link from "next/link"
import { useState } from "react"
import { Star, Clock, ChefHat } from "lucide-react"
import { menuData } from "@/data/mock-data"

export default function MenuPreview() {
  const [hoveredDish, setHoveredDish] = useState<string | null>(null)

  const featuredDishes = [
    menuData.pasta.dishes[0], // Spaghetti Carbonara
    menuData.pizza.dishes[0], // Pizza Margherita
    menuData.secondi.dishes[0], // Osso Buco
  ]

  return (
    <section className="py-32 bg-cream-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 border border-emerald-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-gold-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-px bg-emerald-600"></div>
            <ChefHat className="w-8 h-8 text-emerald-600" />
            <div className="w-16 h-px bg-emerald-600"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-charcoal-900 mb-6 tracking-tight">
            Signature Creations
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed font-light">
            Each dish is a masterpiece, crafted with passion and precision using the finest ingredients from across
            Italy
          </p>
        </div>

        {/* Featured Dishes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {featuredDishes.map((dish, index) => (
            <div
              key={dish.id}
              className="group relative"
              onMouseEnter={() => setHoveredDish(dish.id)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              {/* Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-700 hover:-translate-y-4 group-hover:scale-[1.02]">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />

                  {/* Floating Badge */}
                  <div
                    className={`absolute top-6 right-6 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide transform transition-all duration-500 ${
                      hoveredDish === dish.id ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                    }`}
                  >
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Signature</span>
                    </div>
                  </div>

                  {/* Preparation Time */}
                  <div className="absolute bottom-6 left-6 flex items-center space-x-2 text-white">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{dish.preparationTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif font-medium text-charcoal-900 mb-3 transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed font-light">{dish.shortDescription}</p>
                  </div>

                  {/* Ingredients Preview */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {dish.ingredients.slice(0, 3).map((ingredient, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-medium tracking-wide"
                      >
                        {ingredient}
                      </span>
                    ))}
                    {dish.ingredients.length > 3 && (
                      <span className="text-xs px-3 py-1 bg-charcoal-100 text-charcoal-600 rounded-full font-medium">
                        +{dish.ingredients.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/menu/${dish.id}`}
                    className="group/btn inline-flex items-center space-x-2 text-emerald-700 font-medium tracking-wide hover:text-emerald-800 transition-all duration-300"
                  >
                    <span>Discover Recipe</span>
                    <div className="w-6 h-px bg-emerald-700 group-hover/btn:w-12 transition-all duration-300"></div>
                  </Link>
                </div>
              </div>

              {/* Index Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-luxury">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-emerald-600 to-gold-500 rounded-full">
            <Link
              href="/menu"
              className="block px-12 py-4 bg-white text-charcoal-900 rounded-full font-medium tracking-wide hover:bg-transparent hover:text-white transition-all duration-500 hover:scale-105"
            >
              Explore Complete Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
