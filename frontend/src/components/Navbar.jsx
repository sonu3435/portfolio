import { useState, useEffect } from 'react'
import { Menu, X, Terminal, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-night-900/95 backdrop-blur-md border-b border-night-600' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-cyber-400 rounded-lg flex items-center justify-center">
              <Terminal className="w-4 h-4 text-night-900" />
            </div>
            <span className="font-mono font-bold text-gray-100 group-hover:text-cyber-400 transition-colors">
              sonu<span className="text-cyber-400">@</span>dev
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNav(item.href)}
                className={`nav-link px-3 py-1.5 rounded-md hover:bg-night-700 transition-all ${
                  active === item.href ? 'text-cyber-400 bg-night-700' : ''
                }`}
              >
                <span className="text-neon-green mr-0.5">{String(i + 1).padStart(2,'0')}.</span>
                {item.label}
              </a>
            ))}
          </div>

          {/* Social + Resume */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/sonu3435" target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-cyber-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/sonusingh-470023241" target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-cyber-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sonusinghmca2024@bhu.ac.in"
               className="text-gray-500 hover:text-cyber-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#contact" className="btn-outline ml-2 text-xs px-4 py-1.5">
              hire me
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden text-gray-400 hover:text-cyber-400 transition-colors"
            onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-night-900/98 backdrop-blur-md border-b border-night-600">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNav(item.href)}
                className="font-mono text-sm text-gray-400 hover:text-cyber-400 py-2 px-3 rounded-lg hover:bg-night-700 transition-all"
              >
                <span className="text-neon-green mr-2">{String(i + 1).padStart(2,'0')}.</span>
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-3 mt-3 border-t border-night-600 px-3">
              <a href="https://github.com/sonu3435" target="_blank" rel="noopener noreferrer"
                 className="text-gray-500 hover:text-cyber-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/sonusingh-470023241" target="_blank" rel="noopener noreferrer"
                 className="text-gray-500 hover:text-cyber-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
