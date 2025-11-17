import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone } from 'lucide-react'
import { useState } from 'react'

const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-green-700 text-white' : 'text-white/90 hover:bg-white/10'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-md border-b border-white/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-800 ring-2 ring-white/20 shadow-lg" />
          <div className="leading-tight">
            <p className="text-white font-extrabold tracking-wide text-lg">Busy Wombats</p>
            <p className="text-white/70 text-xs uppercase tracking-widest">Landscaping Sydney</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/reviews" className={navLinkClass}>Reviews</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        <a href="tel:+611300000000" className="hidden md:flex items-center gap-2 bg-gold/90 hover:bg-gold text-charcoal font-semibold px-4 py-2 rounded-full shadow-lg transition-all">
          <Phone size={18} /> Call Now
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/10">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-charcoal/95 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <NavLink onClick={() => setOpen(false)} to="/" className="block px-4 py-3 rounded-lg text-white/90 hover:bg-white/10">Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className="block px-4 py-3 rounded-lg text-white/90 hover:bg-white/10">About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/services" className="block px-4 py-3 rounded-lg text-white/90 hover:bg-white/10">Services</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/reviews" className="block px-4 py-3 rounded-lg text-white/90 hover:bg-white/10">Reviews</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className="block px-4 py-3 rounded-lg text-white/90 hover:bg-white/10">Contact</NavLink>
            <a href="tel:+611300000000" className="block px-4 py-3 rounded-lg bg-gold/90 text-charcoal font-semibold">Call Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
