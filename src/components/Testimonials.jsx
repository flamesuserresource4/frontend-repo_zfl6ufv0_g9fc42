import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/testimonials`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      }
    }
    fetchTestimonials()
  }, [])

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Loved by teams</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="p-6 rounded-xl border border-black/5 bg-white shadow-sm">
              <p className="text-gray-800">“{t.quote}”</p>
              <div className="mt-4 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{t.author}</span>{t.role ? `, ${t.role}`: ''}{t.company ? ` at ${t.company}`: ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
