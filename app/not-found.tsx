import Link from "next/link"
import { Home, ArrowLeft, Search, Phone } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-12">
          <div className="relative">
            <h1 className="text-9xl md:text-[12rem] font-serif font-light text-emerald-100 select-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center shadow-luxury">
                <Search className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-charcoal-600 leading-relaxed max-w-lg mx-auto">
              We're sorry, but the page you're looking for seems to have wandered off like a lost recipe. Let's get you
              back to our delicious menu!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-emerald-600 text-white rounded-full font-medium tracking-wide hover:bg-emerald-700 transition-all duration-500 hover:scale-105 hover:shadow-luxury"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/menu"
              className="group inline-flex items-center space-x-3 px-8 py-4 border-2 border-emerald-600 text-emerald-700 rounded-full font-medium tracking-wide hover:bg-emerald-600 hover:text-white transition-all duration-500 hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>View Menu</span>
            </Link>
          </div>

          {/* Help Section */}
          <div className="pt-12 border-t border-charcoal-200">
            <h3 className="text-lg font-medium text-charcoal-800 mb-6">Need Help?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Link
                href="/menu"
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-emerald-200 transition-colors">
                  <Search className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-medium text-charcoal-800 mb-2">Browse Menu</h4>
                <p className="text-sm text-charcoal-600">Discover our authentic Italian dishes</p>
              </Link>

              <Link
                href="/reservation"
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-gold-200 transition-colors">
                  <Phone className="w-6 h-6 text-gold-600" />
                </div>
                <h4 className="font-medium text-charcoal-800 mb-2">Make Reservation</h4>
                <p className="text-sm text-charcoal-600">Book your table for an unforgettable experience</p>
              </Link>

              <div className="group p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-charcoal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-6 h-6 text-charcoal-600" />
                </div>
                <h4 className="font-medium text-charcoal-800 mb-2">Contact Us</h4>
                <p className="text-sm text-charcoal-600 mb-2">(555) 123-4567</p>
                <p className="text-sm text-charcoal-600">info@vista.com</p>
              </div>
            </div>
          </div>

          {/* Fun Message */}
          <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500">
            <p className="text-emerald-800 italic">
              "Even the best chefs sometimes lose a recipe. But don't worry, our kitchen is always ready to serve you
              something delicious!"
            </p>
            <p className="text-emerald-700 text-sm mt-2 font-medium">- Chef Marco</p>
          </div>
        </div>
      </div>
    </div>
  )
}
