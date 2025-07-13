import Hero from "@/components/hero"
import Gallery from "@/components/gallery"
import MenuPreview from "@/components/menu-preview"
import About from "@/components/about"
import ReservationForm from "@/components/reservation-form"
import CookieBanner from "@/components/cookie-banner"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <MenuPreview />
      <Gallery />
      <ReservationForm />
      <CookieBanner />
    </main>
  )
}
