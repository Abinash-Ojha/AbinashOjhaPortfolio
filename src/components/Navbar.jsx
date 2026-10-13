
import { useEffect, useState } from 'react'

const links = [
  ['Projects', '#work'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

const sectionIds = ['work', 'about', 'skills', 'contact']

export default function Navbar() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight

      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)

      if (window.scrollY < 200) {
        setActive('')
      }
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-35% 0px -55% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-[#080808] text-white">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[68px] max-w-[1160px] items-center justify-between gap-5 px-5 sm:px-6 md:px-10"
      >
        {/* Brand - Always White */}
        <a
          href="#top"
          aria-label="Abinash Ojha, home"
          className="display shrink-0 text-2xl tracking-tight text-white sm:text-3xl"
        >
          Abinash Ojha<span className="text-white">.</span>
        </a>

        {/* Navigation Links - Soft Emerald */}
        <ul className="flex items-center gap-3 sm:gap-6 md:gap-9">
          {links.map(([label, href]) => {
            const isActive = active === href.slice(1)

            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative inline-block py-2 text-[0.65rem] font-medium uppercase tracking-wider transition-colors duration-200 sm:text-xs sm:tracking-[0.12em] ${
                    isActive
                      ? 'text-[#6FCFAD]'
                      : 'text-[#6FCFAD] hover:text-[#A0E3C8]'
                  }`}
                >
                  {label}

                  {/* Active Section Underline */}
                  <span
                    className={`absolute inset-x-0 -bottom-[2px] h-px origin-left bg-[#6FCFAD] transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Scroll Progress Bar */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-1px] left-0 h-[2px] bg-[#6FCFAD] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </header>
  )
}
