import { useEffect, useState } from 'react'
import { Code2, Smartphone, Megaphone, Cloud, Bot, Globe } from 'lucide-react'

const ICONS = { Code2, Smartphone, Megaphone, Cloud, Bot, Globe }

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/services`)
        const data = await res.json()
        setServices(data)
      } catch (e) {
        setServices([])
      }
    }
    fetchServices()
  }, [])

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Services</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">End-to-end product delivery across web, mobile, cloud and AI.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = ICONS[s.icon] || Code2
            return (
              <div key={s.slug} className="p-6 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow transition">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{s.name}</h3>
                </div>
                <p className="mt-3 text-gray-600 text-sm">{s.summary}</p>
                <ul className="mt-4 space-y-1 text-sm text-gray-700 list-disc list-inside">
                  {s.features?.slice(0,3).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
