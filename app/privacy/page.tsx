export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-amber-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-8 font-playfair text-center">Privacy Policy</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed">
                We collect information you provide directly to us, such as when you make a reservation, contact us, or
                sign up for our newsletter. This may include your name, email address, phone number, and dining
                preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">How We Use Your Information</h2>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li>• To process and confirm your reservations</li>
                <li>• To communicate with you about your dining experience</li>
                <li>• To send you promotional materials (with your consent)</li>
                <li>• To improve our services and customer experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@bellavista.com

              </p>
            </section>

            <div className="text-sm text-gray-500 pt-4 border-t">Last updated: 2025</div>
          </div>
        </div>
      </div>
    </div>
  )
}
