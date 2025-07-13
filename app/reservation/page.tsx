"use client"

import type React from "react"

import { useState } from "react"
import ThankYouModal from "@/components/thank-you-modal"

export default function ReservationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="min-h-screen bg-cream-50">
        {/* Hero Section */}
        <div className="relative h-80 overflow-hidden">
          <img
            src="/937b68524412a34cfbb6745b64e2e41b.jpg"
            alt="Restaurant Dining Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-900/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-serif font-light mb-4 text-white">Reserve Your Table</h1>
              <p className="text-xl text-white/90">Experience Italian hospitality at its finest</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
          <div className="bg-white shadow-luxury overflow-hidden rounded-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Sidebar */}
              <div className="lg:col-span-2 p-12 bg-emerald-600">
                <h2 className="text-3xl font-serif font-light mb-8 text-white">Dining Information</h2>

                <div className="space-y-8 text-white">
                  <div>
                    <h3 className="text-xl font-medium mb-4 text-white">Opening Hours</h3>
                    <div className="space-y-2 text-white/90">
                      <p>Monday - Thursday: 11:30 AM - 10:00 PM</p>
                      <p>Friday - Saturday: 11:30 AM - 11:00 PM</p>
                      <p>Sunday: 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-4 text-white">Reservation Policy</h3>
                    <ul className="space-y-2 text-white/90 text-sm">
                      <li>• Tables held for 15 minutes past reservation</li>
                      <li>• Credit card required for parties of 6+</li>
                      <li>• 2-hour advance cancellation required</li>
                      <li>• Special dietary requests welcomed</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-4 text-white">Contact</h3>
                    <div className="space-y-2 text-white/90">
                      <p>Email: reservations@bellavista.com</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
                      <span className="text-sm text-white/90">Award-winning culinary experience</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3 p-12">
                <h2 className="text-3xl font-serif font-light text-charcoal-900 mb-8">Book Your Experience</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-charcoal-700 font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border-2 border-charcoal-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-charcoal-900 placeholder-charcoal-400 rounded-lg"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-charcoal-700 font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border-2 border-charcoal-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-charcoal-900 placeholder-charcoal-400 rounded-lg"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-charcoal-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border-2 border-charcoal-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-charcoal-900 placeholder-charcoal-400 rounded-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-charcoal-700 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border-2 border-charcoal-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-charcoal-900 placeholder-charcoal-400 rounded-lg"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-charcoal-700 font-medium mb-2">Preferred Date *</label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-3 border-2 border-charcoal-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-charcoal-900 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-charcoal-700 font-medium mb-2">Preferred Time *</label>
                      <select
                        required
                        className="w-full px-4 py-3 border-2 border-charcoal-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-charcoal-900 rounded-lg"
                      >
                        <option value="" className="text-charcoal-400">
                          Select Time
                        </option>
                        <option value="11:30" className="text-charcoal-900">
                          11:30 AM
                        </option>
                        <option value="12:00" className="text-charcoal-900">
                          12:00 PM
                        </option>
                        <option value="12:30" className="text-charcoal-900">
                          12:30 PM
                        </option>
                        <option value="13:00" className="text-charcoal-900">
                          1:00 PM
                        </option>
                        <option value="13:30" className="text-charcoal-900">
                          1:30 PM
                        </option>
                        <option value="18:00" className="text-charcoal-900">
                          6:00 PM
                        </option>
                        <option value="18:30" className="text-charcoal-900">
                          6:30 PM
                        </option>
                        <option value="19:00" className="text-charcoal-900">
                          7:00 PM
                        </option>
                        <option value="19:30" className="text-charcoal-900">
                          7:30 PM
                        </option>
                        <option value="20:00" className="text-charcoal-900">
                          8:00 PM
                        </option>
                        <option value="20:30" className="text-charcoal-900">
                          8:30 PM
                        </option>
                        <option value="21:00" className="text-charcoal-900">
                          9:00 PM
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-charcoal-700 font-medium mb-2">Party Size *</label>
                      <select
                        required
                        className="w-full px-4 py-3 border-2 border-charcoal-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-charcoal-900 rounded-lg"
                      >
                        <option value="" className="text-charcoal-400">
                          Select Size
                        </option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                          <option key={num} value={num} className="text-charcoal-900">
                            {num} {num === 1 ? "Person" : "People"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-charcoal-700 font-medium mb-2">Special Occasion</label>
                    <input
                      type="text"
                      placeholder="Birthday, Anniversary, Business Dinner, etc."
                      className="w-full px-4 py-3 border-2 border-charcoal-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-charcoal-900 placeholder-charcoal-400 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-charcoal-700 font-medium mb-2">
                      Special Requests & Dietary Restrictions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please let us know about any food allergies, dietary restrictions, seating preferences, or special requests..."
                      className="w-full px-4 py-3 border-2 border-charcoal-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-charcoal-900 placeholder-charcoal-400 resize-none rounded-lg"
                    />
                  </div>

                  <div className="bg-emerald-50 p-6 border-l-4 border-emerald-500 rounded-lg">
                    <h3 className="font-medium text-emerald-800 mb-2">Important Notes</h3>
                    <ul className="text-sm text-emerald-700 space-y-1">
                      <li>• All reservations are confirmed within 2 hours</li>
                      <li>• Large parties may require a deposit</li>
                      <li>• We accommodate all dietary restrictions with advance notice</li>
                    </ul>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
                  >
                    {isSubmitting ? "Processing Reservation..." : "Confirm Reservation"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ThankYouModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
