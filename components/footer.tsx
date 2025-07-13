import Link from "next/link"
import { MapPin, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-light mb-6 text-white">Bella Vista</h3>
            <p className="text-charcoal-300 mb-6 leading-relaxed">
              Authentic Italian cuisine in the heart of the city. Experience the taste of Italy with every bite.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
              <span className="text-sm text-charcoal-300">Award-winning excellence since 1987</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 text-white">Contact Info</h4>
            <div className="space-y-4 text-charcoal-300">
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 text-emerald-400" />
                <span>Via Tucidide 14, Milano</span>
              </div>
              
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-emerald-400" />
                <span>info@bellavista.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 text-white">Opening Hours</h4>
            <div className="space-y-3 text-charcoal-300">
              <div className="flex items-start">
                <Clock size={16} className="mr-3 mt-1 text-emerald-400" />
                <div>
                  <div>Mon-Thu: 11:30 AM - 10:00 PM</div>
                  <div>Fri-Sat: 11:30 AM - 11:00 PM</div>
                  <div>Sunday: 12:00 PM - 9:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 text-white">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/menu" className="block text-charcoal-300 hover:text-white transition-colors duration-300">
                Menu
              </Link>
              <Link
                href="/reservation"
                className="block text-charcoal-300 hover:text-white transition-colors duration-300"
              >
                Reservations
              </Link>
              <Link href="/privacy" className="block text-charcoal-300 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="block text-charcoal-300 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-700 mt-12 pt-8 text-center text-charcoal-400">
          <p>&copy; 2025 Bella Vista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
