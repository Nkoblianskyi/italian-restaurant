"use client"

import Image from "next/image"
import { useState } from "react"
import { Camera, Eye } from "lucide-react"

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/dining.jpg",
      alt: "Elegant private dining room with crystal chandeliers",
      category: "Dining Rooms",
    },
    {
      src: "/kitchen.jpg",
      alt: "State-of-the-art kitchen with master chefs",
      category: "Kitchen",
    },
    {
      src: "/wine.jpg",
      alt: "Extensive wine cellar with rare vintages",
      category: "Wine Cellar",
    },
    {
      src: "/terrace.jpg",
      alt: "Stunning rooftop terrace with city views",
      category: "Terrace",
    },
    {
      src: "/dem.jpg",
      alt: "Artisan pasta making demonstration",
      category: "Culinary Arts",
    },
    {
      src: "/bar.jpg",
      alt: "Sophisticated bar and lounge area",
      category: "Bar & Lounge",
    },
  ]

  return (
    <section className="py-32 bg-charcoal-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-px bg-emerald-600"></div>
            <Camera className="w-8 h-8 text-emerald-600" />
            <div className="w-16 h-px bg-emerald-600"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-charcoal-900 mb-6 tracking-tight">
            Experience the Ambiance
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed font-light">
            Step into a world where every detail has been meticulously crafted to create an atmosphere of unparalleled
            elegance
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-700 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Category Badge */}
              <div
                className={`absolute top-6 left-6 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide transform transition-all duration-500 ${
                  hoveredIndex === index ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                }`}
              >
                {image.category}
              </div>

              {/* View Icon */}
              <div
                className={`absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transform transition-all duration-500 ${
                  hoveredIndex === index ? "translate-y-0 opacity-100 scale-100" : "-translate-y-4 opacity-0 scale-75"
                }`}
              >
                <Eye className="w-5 h-5" />
              </div>

              {/* Description */}
              <div
                className={`absolute bottom-6 left-6 right-6 text-white transform transition-all duration-700 ${
                  hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <h3 className="text-lg font-medium mb-2">{image.alt}</h3>
                <div className="w-12 h-px bg-gold-500"></div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for selected image */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              className="w-full h-full object-contain rounded-2xl"
            />
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
