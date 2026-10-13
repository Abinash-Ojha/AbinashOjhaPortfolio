import { projects } from '../data/projects'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

const total = projects.length
const pad = (n) => String(n).padStart(2, '0')

function Index() {
  return (
    <nav aria-label="Table of works" className="mx-auto mt-14 max-w-3xl">
      <p className="label accent text-center">Table of works</p>
      <ol className="mt-6">
        {projects.map((p) => (
          <li key={p.id}>
            <a href={`#${p.id}`} className="flex items-baseline gap-3 py-2.5 transition-colors hover:text-[var(--accent)]">
              <span className="display w-10 shrink-0 text-xl">{p.numeral}.</span>
              <span className="display text-2xl">{p.name}</span>
              {p.live && <span className="accent text-[0.6rem]" title="Live site" aria-label="Live site">●</span>}
              <span className="min-w-4 flex-1 border-b border-dotted border-[var(--line2)]" aria-hidden="true" />
              <span className="label hidden shrink-0 sm:inline">{p.tagline}</span>
            </a>
          </li>
        ))}
      </ol>
      <p className="label mt-4 text-center normal-case tracking-normal"><span className="accent">●</span> deployed and live</p>
    </nav>
  )
}

function Project({ p, i }) {
  const flip = i % 2 === 1
  const extra = p.links ?? []
  const primary = p.live ?? p.repo
  const next = projects[i + 1]
  const actionLabel = p.live ? (p.liveLabel ?? 'Visit live site') : 'GitHub Repo'

  const image = (
    <div className="group relative overflow-hidden border border-[var(--line2)] bg-white transition duration-500 hover:-translate-y-1 hover:border-[var(--mint)]">
      <img src={p.image} alt={p.alt} loading="lazy" className="block h-auto w-full" />
      {primary && (
        <span
          className="label absolute bottom-0 left-0 translate-y-full border-t border-[var(--mint)] bg-[#0A0A0A] px-4 py-2 transition-transform duration-300 group-hover:translate-y-0"
          style={{ color: 'var(--mint)' }}
        >
          {actionLabel} ↗
        </span>
      )}
    </div>
  )

  return (
    <Reveal as="article" className="rule-t py-14 md:py-20">
      <div className="grid items-start gap-10 md:grid-cols-12 md:gap-14">

        {/* Description card: white, like the hero card */}
        <div id={p.id} className={`vellum scroll-mt-24 p-3 md:col-span-6 ${flip ? 'md:order-2' : ''}`}>
          <div className="border border-[var(--rule)] p-6 md:p-9">
            <div className="flex items-center justify-between gap-4">
              <p className="label accent">Chapter {p.numeral}</p>
              <p className="label">
                {p.live ? <><span className="accent">●</span> Live</> : 'Repository'}
              </p>
            </div>

            <h3 className="display mt-5 text-[clamp(2.2rem,4vw,3rem)]">{p.name}</h3>
            <p className="display soft mt-1 text-2xl italic">{p.tagline}</p>

            <span className="my-7 block h-px w-12 bg-[var(--accent)]" aria-hidden="true" />

            <p className="display text-[1.5rem] leading-snug">{p.lead}</p>

            <div className="soft mt-6 space-y-5 text-[1.02rem] leading-[1.8]">
              {p.body.map((t) => <p key={t}>{t}</p>)}
            </div>

            {p.figure && (
              <div className="mt-8 border-l-2 border-[var(--accent)] pl-5">
                <span className="display accent text-5xl">{p.figure[0]}</span>
                <span className="label mt-1 block">{p.figure[1]}</span>
              </div>
            )}

            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies used">
              {p.stack.map((s) => (
                <li key={s} className="label border border-[var(--rule)] px-3 py-1.5">{s}</li>
              ))}
            </ul>

            {(primary || extra.length > 0) && (
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                {primary && (
                  <a
                    href={primary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#0A0A0A] px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#0B7A55]"
                  >
                    {actionLabel} <span className="arrow" aria-hidden="true">↗</span>
                  </a>
                )}
                {p.live && p.repo && (
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className="nav-link link">
                    GitHub Repo <span className="arrow" aria-hidden="true">↗</span>
                  </a>
                )}
                {extra.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="nav-link link">
                    {l.label} <span className="arrow" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            )}

            {/* counter and next project */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-[var(--rule)] pt-4">
              <span className="label">{pad(i + 1)} / {pad(total)}</span>
              {next ? (
                <a href={`#${next.id}`} className="nav-link link">
                  Next — {next.name} <span className="arrow" aria-hidden="true">↓</span>
                </a>
              ) : (
                <a href="#about" className="nav-link link">
                  Continue — About <span className="arrow" aria-hidden="true">↓</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Screenshot on the black page */}
        <figure className={`md:sticky md:top-24 md:col-span-6 ${flip ? 'md:order-1' : ''}`}>
          {primary ? (
            <a href={primary} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Open ${p.name} (opens in a new tab)`}>
              {image}
            </a>
          ) : image}
          <figcaption className="label mt-4 text-center">Plate {p.numeral} — {p.caption}</figcaption>
        </figure>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="work" className="mist">
      <div className="mx-auto max-w-[1160px] px-6 pb-12 pt-20 md:px-10 md:pt-28">
        <SectionTitle kicker="Part I">Selected <em>Work</em></SectionTitle>
        <Index />
        <div className="mt-16">
          {projects.map((p, i) => <Project key={p.id} p={p} i={i} />)}
        </div>
    
      </div>
    </section>
  )
}