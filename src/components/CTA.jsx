import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">Have a project in mind?</h2>
          <p className="opacity-90 mt-1">Tell us about your goals and get a tailored quote.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="inline-flex items-center px-5 py-3 rounded-md bg-white text-blue-700 font-semibold hover:bg-blue-50 transition">Contact Us</Link>
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center px-5 py-3 rounded-md border border-white/30 hover:bg-white/10 transition">WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
