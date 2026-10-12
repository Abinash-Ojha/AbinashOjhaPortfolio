import { useEffect, useState } from 'react'

const links = [['Projects', '#work'], ['About', '#about'], ['Contact', '#contact']]

export default function Navbar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="night sticky top-0 z-40 border-b border-[var(--rule)]">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[1160px] items-center justify-between px-6 md:px-10">
        <a href="#top" aria-label="Abinash Ojha, home" className="display text-3xl">Abinash Ojha</a>
        <ul className="flex gap-7 md:gap-10">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} className="nav-link">{label}</a></li>
          ))}
        </ul>
      </nav>
      <div aria-hidden="true" className="absolute bottom-[-1px] left-0 h-[2px] bg-[var(--taupe)]" style={{ width: `${progress}%` }} />
    </header>
  )
}