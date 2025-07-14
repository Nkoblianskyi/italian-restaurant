"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { CheckCircle, Phone, Mail } from "lucide-react"

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden bg-white">
        <div className="bg-cream-50 p-8 text-center rounded-2xl">
          <div className="mb-6">
            <CheckCircle className="h-20 w-20 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-light text-charcoal-900 mb-2">Grazie Mille!</h2>
            <p className="text-xl text-charcoal-600">Thank You for Your Reservation</p>
          </div>

          <div className="bg-white p-6 shadow-lg border-l-4 border-emerald-500 mb-6 rounded-lg">
            <h3 className="font-medium text-charcoal-800 mb-3">What happens next?</h3>
            <div className="space-y-3 text-sm text-charcoal-600 text-left">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-xs font-bold text-emerald-600">1</span>
                </div>
                <span className="text-charcoal-700">We'll confirm your reservation within 2 hours</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-xs font-bold text-emerald-600">2</span>
                </div>
                <span className="text-charcoal-700">You'll receive a confirmation email with all details</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-xs font-bold text-emerald-600">3</span>
                </div>
                <span className="text-charcoal-700">We'll prepare everything for your special dining experience</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-charcoal-600">If you need to make any changes or have questions, please contact us:</p>

            <div className="flex justify-center space-x-6 text-sm">
              <div className="flex items-center text-charcoal-700">
                <Mail size={16} className="mr-2 text-emerald-600" />
                <span className="text-charcoal-700">reservations@hyperswap.com</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 font-medium transition-all duration-300 hover:scale-105 shadow-lg rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
