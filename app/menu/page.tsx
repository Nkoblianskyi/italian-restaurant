import Link from "next/link"
import { menuData } from "@/data/mock-data"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-sage-50 mt-10">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-6 font-playfair">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover authentic Italian flavors crafted with passion and the finest ingredients from Italy
          </p>
        </div>

        {Object.entries(menuData).map(([key, category]) => (
          <div key={key} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 font-playfair">{category.name}</h2>
              <p className="text-lg text-gray-600 italic">{category.description}</p>
            </div>

            <div className="space-y-12">
              {category.dishes.map((dish, index) => (
                <div
                  key={dish.id}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group rounded-2xl">
                      <img
                        src={dish.image || "/placeholder.svg"}
                        alt={dish.name}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className="lg:w-1/2 space-y-6 text-black text-black">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-3 font-playfair">{dish.name}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{dish.shortDescription}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {dish.ingredients.slice(0, 4).map((ingredient, i) => (
                        <span
                          key={i}
                          className="bg-forest-100 text-forest-800 px-3 py-1 text-sm font-medium rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                      {dish.ingredients.length > 4 && (
                        <span className="bg-olive-100 text-olive-700 px-3 py-1 text-sm rounded-full">
                          +{dish.ingredients.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={`/menu/${dish.id}`}
                        className="bg-forest-600 hover:bg-forest-700 px-8 py-3 font-medium transition-all duration-300 hover:scale-105 shadow-lg text-center rounded-lg text-black"
                      >
                        View Full Details
                      </Link>
                      <Link
                        href="/reservation"
                        className="border-2 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white px-8 py-3 font-medium transition-all duration-300 text-center rounded-lg"
                      >
                        Reserve Table
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
