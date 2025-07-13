export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-amber-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-8 font-playfair text-center">Cookie Policy</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are stored on your computer or mobile device when you visit our
                website. They help us provide you with a better experience by remembering your preferences and improving
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                  <p className="text-gray-600">
                    These cookies are necessary for the website to function properly. They enable basic functions like
                    page navigation and access to secure areas of the website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600">
                    These cookies help us understand how visitors interact with our website by collecting and reporting
                    information anonymously.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Preference Cookies</h3>
                  <p className="text-gray-600">
                    These cookies remember your preferences and choices to provide you with a more personalized
                    experience.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                You can control and manage cookies in various ways. Most web browsers automatically accept cookies, but
                you can modify your browser settings to decline cookies if you prefer. However, this may affect the
                functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                We may use third-party services that place cookies on your device. These services help us analyze
                website traffic and improve user experience. We do not control these third-party cookies and recommend
                reviewing their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at:
                <br />
                Email: info@bellavista.com
                <br />
              </p>
            </section>

            <div className="text-sm text-gray-500 pt-4 border-t">Last updated: 2025</div>
          </div>
        </div>
      </div>
    </div>
  )
}
