import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Heart } from "lucide-react"
import { getDishById } from "@/data/mock-data"

export default function DishPage({ params }: { params: { dish: string } }) {
  const dish = getDishById(params.dish)

  if (!dish) {
    return (
      <div className="min-h-screen bg-sage-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Dish not found</h1>
          <Link href="/menu" className="text-forest-600 hover:text-forest-700 text-lg">
            Return to menu
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-sage-50  py-20">
      {/* Navigation */}
      <div className="container mx-auto px-6 py-8">
        <Link
          href="/menu"
          className="inline-flex items-center text-forest-600 hover:text-forest-700 text-lg font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Menu
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img src={dish.image || "/placeholder.svg"} alt={dish.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-5xl font-bold mb-2 font-playfair">{dish.name}</h1>
          <div className="flex items-center gap-6 text-lg">
            <span className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              {dish.preparationTime}
            </span>
            <span className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              {dish.origin}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">About This Dish</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{dish.fullDescription}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">Premium Ingredients</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dish.ingredients.map((ingredient: string, index: number) => (
                    <div
                      key={index}
                      className="bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-forest-500 rounded-lg"
                    >
                      <span className="text-gray-800 font-medium">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-playfair flex items-center">
                  <Heart className="mr-3 h-6 w-6 text-forest-600" />
                  Nutritional Benefits
                </h3>
                <div className="space-y-3">
                  {dish.nutritionalBenefits.map((benefit: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start bg-forest-50 p-4 border-l-4 border-forest-500 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-forest-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white p-8 shadow-xl rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-playfair">Dish Information</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-medium text-gray-600">Preparation Time:</span>
                    <span className="text-gray-800 ml-2">{dish.preparationTime}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Origin:</span>
                    <span className="text-gray-800 ml-2">{dish.origin}</span>
                  </div>
                </div>
              </div>

              {dish.allergens.length > 0 && (
                <div className="bg-red-50 p-6 border-l-4 border-red-500 rounded-lg">
                  <h3 className="font-bold text-red-800 mb-3">Allergen Information</h3>
                  <div className="flex flex-wrap gap-2">
                    {dish.allergens.map((allergen: string, index: number) => (
                      <span key={index} className="bg-red-200 text-red-800 px-3 py-1 text-sm font-medium rounded-full">
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <Link
                  href="/reservation"
                  className="block w-full bg-forest-600 hover:bg-forest-700 text-black text-center py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg rounded-lg"
                >
                  Reserve Table
                </Link>
                <Link
                  href="/menu"
                  className="block w-full border-2 border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white text-center py-4 text-lg font-medium transition-all duration-300 rounded-lg"
                >
                  Browse Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
