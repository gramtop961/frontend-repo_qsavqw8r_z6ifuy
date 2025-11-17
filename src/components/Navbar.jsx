import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">/dev-portfolio</a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-2 text-sm rounded-md text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 hover:dark:text-white hover:bg-neutral-900/5 dark:hover:bg-white/5 transition">
                {l.label}
              </a>
            ))}
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-neutral-900/5 dark:hover:bg-white/5" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 text-sm rounded-md text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 hover:dark:text-white hover:bg-neutral-900/5 dark:hover:bg-white/5 transition">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
