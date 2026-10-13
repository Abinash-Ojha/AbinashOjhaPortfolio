import { useEffect, useState } from 'react'

const links = [['Projects', '#work'], ['About', '#about'], ['Contact', '#contact']]
const sectionIds = ['work', 'about', 'skills', 'contact']

export default function Navbar() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
      if (window.scrollY < 200) setActive('')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <header className="night sticky top-0 z-40 border-b border-[var(--rule)]">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[1160px] items-center justify-between px-6 md:px-10">
        <a href="#top" aria-label="Abinash Ojha, home" className="display text-3xl">Abinash Ojha</a>
        <ul className="flex gap-7 md:gap-10">
          {links.map(([label, href]) => {
            const isActive = active === href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`nav-link border-b pb-1 ${isActive ? 'border-[var(--mint)] text-[var(--mint)]' : 'border-transparent'}`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <div aria-hidden="true" className="absolute bottom-[-1px] left-0 h-[2px] bg-[var(--mint)]" style={{ width: `${progress}%` }} />
    </header>
  )
}