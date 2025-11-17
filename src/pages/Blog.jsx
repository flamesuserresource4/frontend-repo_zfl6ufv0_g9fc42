import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function Blog(){
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/blogposts`)
        const data = await res.json()
        setPosts(data)
      } catch (e) { setPosts([]) }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-20 mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
        <div className="mt-8 grid gap-6">
          {posts.map(p => (
            <article key={p.slug} className="p-6 rounded-xl border border-black/5 bg-white">
              <h2 className="text-xl font-semibold text-gray-900">{p.title}</h2>
              {p.excerpt && <p className="mt-2 text-gray-700">{p.excerpt}</p>}
              <div className="mt-2 text-xs text-gray-500">By {p.author || 'Team'}</div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
