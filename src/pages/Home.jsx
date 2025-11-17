import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <footer className="py-10 border-t border-black/5 text-center text-sm text-gray-600">© {new Date().getFullYear()} Flames — All rights reserved.</footer>
    </div>
  )
}
