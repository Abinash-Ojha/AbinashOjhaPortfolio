import resume from "../assets/AbinashOjhaResumeOL.pdf";

const tech = ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'AWS']
const delay = (s) => ({ '--d': `${s}s` })

export default function Hero() {
  return (
    <section id="top" className="night hero-glow">
      <div className="mx-auto grid min-h-[84vh] max-w-[1160px] items-center gap-14 px-6 py-16 md:grid-cols-12 md:gap-12 md:px-10 md:py-20">

        {/* Left: introduction */}
        <div className="md:col-span-7">
          <p className="label flex items-center gap-4">
            <span className="draw h-px bg-[var(--accent)]" style={delay(0.1)} aria-hidden="true" />
            <span className="fade-up" style={delay(0.2)}>Abinash Ojha · Computer Science Engineer · India</span>
          </p>

          <h1 className="display mt-8 text-[clamp(2.8rem,7vw,5.5rem)]" aria-label="Conceive . Build. Evolve.">
            <span aria-hidden="true">
              <span className="rise"><span style={delay(0.25)}>Conceive</span></span>{' '}
              <span className="rise"><span style={delay(0.4)}>.</span></span>{' '}
              <span className="rise"><span style={delay(0.55)}>Build.</span></span>{' '}
              <span className="rise"><span style={delay(0.8)}><em className="shimmer">Evolve.</em></span></span>
            </span>
          </h1>

          <p className="soft fade-up mt-8 max-w-[50ch] text-lg" style={delay(1)}>
            I work across backend systems, React applications, and AI integrations. Most of my work revolves around building secure APIs, making thoughtful architectural decisions, and finding practical ways to keep software reliable and maintainable. I care about how things work beneath the surface, not just whether they work.
          </p>

          <div className="fade-up mt-10 flex flex-wrap items-center gap-8" style={delay(1.2)}>
            <a href="#work" className="btn">Explore my work <span className="arrow" aria-hidden="true">→</span></a>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="nav-link link">
              View resume <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="label mt-12 flex flex-wrap gap-x-2">
            {tech.map((t, i) => (
              <span key={t} className="fade-up" style={delay(1.45 + i * 0.12)}>
                {t}{i < tech.length - 1 && <span aria-hidden="true"> ·</span>}
              </span>
            ))}
          </p>
        </div>

        {/* Right: the story */}
        <aside aria-label="How I work" className="vellum fade-up  p-3 md:col-span-5" style={delay(0.7)}>
          <div className="rounded-xl border border-[var(--rule)] p-7 md:p-9">
            <p className="display fade-up text-center text-[1.7rem] italic leading-snug md:text-[1.9rem]" style={delay(1)}>
              I work on software limitations and real-world problems.
            </p>

            <span className="mx-auto my-7 block h-px w-12 bg-[var(--accent)]" aria-hidden="true" />

            <p className="soft fade-up text-[0.95rem] leading-relaxed" style={delay(1.2)}>
              My projects explore different areas of software engineering, from a multi-role SaaS platform with role-based access control to a RAG-based document analyzer and backend optimizations using caching and rate limiting.
            </p>

            <p className="soft fade-up mt-4 text-[0.95rem] leading-relaxed" style={delay(1.4)}>
              I deploy my applications to PaaS platforms and cloud services, making them accessible over the internet.
            </p>

            <p className="rule-t fade-up mt-8 pt-5 text-center" style={delay(1.6)}>
              <span className="display text-xl italic">Built to work beyond my machine.</span>
              <span className="label mt-2 block">Render · Netlify · Neon · AWS</span>
            </p>
          </div>
        </aside>

      </div>
    </section>
  )
}