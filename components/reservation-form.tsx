"use client"

import type React from "react"

import { useState } from "react"
import ThankYouModal from "./thank-you-modal"

export default function ReservationForm() {
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
      <section className="py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-px bg-emerald-600"></div>
              <span className="text-sm font-medium tracking-[0.3em] text-emerald-700 uppercase">Reservation</span>
              <div className="w-16 h-px bg-emerald-600"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-charcoal-900 mb-6 tracking-tight">
              Reserve Your Experience
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed font-light">
              Join us for an unforgettable culinary journey in the heart of Italian hospitality
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white shadow-luxury overflow-hidden rounded-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Information */}
                <div className="p-12 bg-emerald-600 text-white">
                  <h3 className="text-3xl font-serif font-light mb-8 text-white">Dining Information</h3>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium mb-4 text-white">Opening Hours</h4>
                      <div className="space-y-2 text-white/90">
                        <p>Monday - Thursday: 11:30 AM - 10:00 PM</p>
                        <p>Friday - Saturday: 11:30 AM - 11:00 PM</p>
                        <p>Sunday: 12:00 PM - 9:00 PM</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-medium mb-4 text-white">Reservation Policy</h4>
                      <ul className="space-y-2 text-white/90 text-sm">
                        <li>• Tables held for 15 minutes past reservation</li>
                        <li>• Credit card required for parties of 6+</li>
                        <li>• 2-hour advance cancellation required</li>
                        <li>• Special dietary requests welcomed</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-medium mb-4 text-white">Contact</h4>
                      <div className="space-y-2 text-white/90">
                        
                        <p>Email: reservations@bellavista.com</p>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-white/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
                        <span className="text-sm text-white/90">Exclusive dining experience awaits</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-12">
                  <h3 className="text-3xl font-serif font-light text-charcoal-900 mb-8">Book Your Table</h3>

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
                        <label className="block text-charcoal-700 font-medium mb-2">Date *</label>
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-3 border-2 border-charcoal-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-charcoal-900 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-charcoal-700 font-medium mb-2">Time *</label>
                        <select
                          required
                          className="w-full px-4 py-3 border-2 border-charcoal-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-charcoal-900 rounded-lg"
                        >
                          <option value="" className="text-charcoal-400">
                            Select time
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
                        <label className="block text-charcoal-700 font-medium mb-2">Guests *</label>
                        <select
                          required
                          className="w-full px-4 py-3 border-2 border-charcoal-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-charcoal-900 rounded-lg"
                        >
                          <option value="" className="text-charcoal-400">
                            Select guests
                          </option>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                            <option key={num} value={num} className="text-charcoal-900">
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-charcoal-700 font-medium mb-2">Special Requests</label>
                      <textarea
                        rows={4}
                        placeholder="Any dietary restrictions, special occasions, or seating preferences..."
                        className="w-full px-4 py-3 border-2 border-charcoal-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-charcoal-900 placeholder-charcoal-400 resize-none rounded-lg"
                      />
                    </div>

                    <div className="bg-emerald-50 p-6 border-l-4 border-emerald-500 rounded-lg">
                      <h4 className="font-medium text-emerald-800 mb-2">Important Notes</h4>
                      <ul className="text-sm text-emerald-700 space-y-1">
                        <li>• All reservations are confirmed within 2 hours</li>
                        <li>• Large parties may require a deposit</li>
                        <li>• We accommodate all dietary restrictions with advance notice</li>
                      </ul>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
                    >
                      {isSubmitting ? "Processing Reservation..." : "Confirm Reservation"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ThankYouModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
