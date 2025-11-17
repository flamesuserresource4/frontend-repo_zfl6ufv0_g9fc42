import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Contact(){
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/inquiries`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      const data = await res.json()
      setStatus({ ok: true, id: data.id })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false, error: e.message })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-20 mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-gray-600">Tell us about your project. We’ll get back within 24 hours.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Full name" className="w-full rounded-md border border-black/10 px-4 py-3" />
            <input name="email" required type="email" placeholder="Email address" className="w-full rounded-md border border-black/10 px-4 py-3" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="phone" placeholder="Phone (optional)" className="w-full rounded-md border border-black/10 px-4 py-3" />
            <select name="service" className="w-full rounded-md border border-black/10 px-4 py-3">
              <option value="">Service of interest</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>Digital Marketing</option>
              <option>Software Development</option>
              <option>Cloud & DevOps</option>
              <option>AI & Automation</option>
            </select>
          </div>
          <input name="subject" placeholder="Subject" className="w-full rounded-md border border-black/10 px-4 py-3" />
          <textarea name="message" required rows="6" placeholder="Tell us about your goals" className="w-full rounded-md border border-black/10 px-4 py-3" />
          <button className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Send Inquiry</button>
        </form>
        {status && (
          <div className={`mt-4 p-3 rounded-md ${status.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {status.ok ? 'Thanks! We received your inquiry.' : `Error: ${status.error}`}
          </div>
        )}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900">Other ways to reach us</h2>
          <div className="mt-3 space-y-2 text-gray-700">
            <p>Email: hello@example.com</p>
            <p>Phone: +1 (000) 000-0000</p>
            <iframe title="map" className="w-full h-64 rounded-lg border border-black/10" src="https://www.google.com/maps?q=New+York&output=embed" />
          </div>
        </div>
      </div>
    </div>
  )
}
