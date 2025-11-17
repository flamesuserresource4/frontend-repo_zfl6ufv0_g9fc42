import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function Projects(){
  const [projects, setProjects] = useState([])
  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) { setProjects([]) }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
        <p className="mt-2 text-gray-600">Selected work and outcomes.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.slug} className="p-6 rounded-xl border border-black/5 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.summary}</p>
              {p.results && <p className="mt-2 text-sm font-medium text-gray-900">{p.results}</p>}
              {p.tags?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t, i) => (
                    <span key={i} className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
