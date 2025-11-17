import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function Careers(){
  const [openings, setOpenings] = useState([])
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/openings`)
        const data = await res.json()
        setOpenings(data)
      } catch (e) { setOpenings([]) }
    }
    load()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/jobapplications`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) })
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
      <div className="pt-24 pb-20 mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold text-gray-900">Careers</h1>
        <p className="mt-2 text-gray-600">Join a small, senior team shipping world‑class products.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Current Openings</h2>
            <div className="mt-4 space-y-3">
              {openings.map((o, i) => (
                <div key={i} className="p-4 rounded-lg border border-black/5 bg-white">
                  <div className="font-semibold text-gray-900">{o.title}</div>
                  <div className="text-sm text-gray-600">{o.department} • {o.location} • {o.type}</div>
                  {o.description && <p className="mt-2 text-gray-700 text-sm">{o.description}</p>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Apply</h2>
            <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
              <input name="name" required placeholder="Full name" className="w-full rounded-md border border-black/10 px-4 py-3" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-md border border-black/10 px-4 py-3" />
              <input name="phone" placeholder="Phone (optional)" className="w-full rounded-md border border-black/10 px-4 py-3" />
              <input name="role" required placeholder="Role" className="w-full rounded-md border border-black/10 px-4 py-3" />
              <input name="resume_url" placeholder="Resume URL (Drive/Dropbox)" className="w-full rounded-md border border-black/10 px-4 py-3" />
              <input name="portfolio_url" placeholder="Portfolio URL (optional)" className="w-full rounded-md border border-black/10 px-4 py-3" />
              <textarea name="cover_letter" rows="4" placeholder="Cover letter (optional)" className="w-full rounded-md border border-black/10 px-4 py-3" />
              <button className="mt-1 inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Submit Application</button>
            </form>
            {status && (
              <div className={`mt-3 p-3 rounded-md ${status.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {status.ok ? 'Thanks! We received your application.' : `Error: ${status.error}`}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
