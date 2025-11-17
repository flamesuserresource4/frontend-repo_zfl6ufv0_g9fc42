import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Portfolio' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/blog', label: 'Blog' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">Flames</Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(item => (
            <NavLink key={item.to} to={item.to} className={({isActive}) => `text-sm hover:text-blue-600 transition ${isActive? 'text-blue-600': 'text-gray-700'}`}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="ml-2 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">Request Quote</Link>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-3 grid gap-2">
            {nav.map(item => (
              <NavLink key={item.to} to={item.to} className={({isActive}) => `block py-2 ${isActive? 'text-blue-600': 'text-gray-700'}`} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="mt-2 inline-flex items-center justify-center px-3 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition" onClick={() => setOpen(false)}>Request Quote</Link>
          </div>
        </div>
      )}
    </header>
  )
}
