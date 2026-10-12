import { projects } from '../data/projects'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

const total = projects.length

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
              <span className="min-w-4 flex-1 border-b border-dotted border-[var(--rule)]" aria-hidden="true" />
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
  const plate = <div className="plate transition duration-500 hover:-translate-y-1"><img src={p.image} alt={p.alt} loading="lazy" /></div>

  return (
    <Reveal as="article" className="rule-t py-16 md:py-24">
      <header id={p.id} className="mb-10 scroll-mt-24 md:mb-14">
        <div className="flex items-center justify-between gap-4">
          <p className="label accent">Chapter {p.numeral}{p.live && ' · Live'}</p>
          <p className="label">{p.numeral} / {projects[total - 1].numeral}</p>
        </div>
        <h3 className="display mt-3 text-[clamp(2.4rem,4vw,3rem)]">{p.name}</h3>
        <p className="display soft mt-1 text-2xl italic">{p.tagline}</p>
      </header>

      <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
        <div className={`md:col-span-6 ${flip ? 'md:order-2' : ''}`}>
          <p className="display text-[1.5rem] leading-snug">{p.lead}</p>

          <div className="soft mt-6 space-y-5 text-[1.02rem] leading-[1.8]">
            {p.body.map((t) => <p key={t}>{t}</p>)}
          </div>

          {p.figure && (
            <p className="rule-t mt-8 pt-4">
              <span className="display accent text-4xl">{p.figure[0]}</span>
              <span className="label mt-1 block">{p.figure[1]}</span>
            </p>
          )}

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies used">
            {p.stack.map((s) => (
              <li key={s} className="label border border-[var(--rule)] px-3 py-1.5">{s}</li>
            ))}
          </ul>

          {(primary || extra.length > 0) && (
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              {primary && (
                <a href={primary} target="_blank" rel="noopener noreferrer" className="btn-solid">
                  {p.live ? (p.liveLabel ?? 'Visit live site') : 'GitHub Repo'} <span className="arrow" aria-hidden="true">↗</span>
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
        </div>

        <figure className={`md:sticky md:top-24 md:col-span-6 ${flip ? 'md:order-1' : ''}`}>
          {primary ? (
            <a href={primary} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Open ${p.name} (opens in a new tab)`}>
              {plate}
            </a>
          ) : plate}
          <figcaption className="label mt-4 text-center">Plate {p.numeral} — {p.caption}</figcaption>
        </figure>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="work" className="tan">
      <div className="mx-auto max-w-[1160px] px-6 pb-12 pt-20 md:px-10 md:pt-28">
        <SectionTitle kicker="Part I">Selected <em>Work</em></SectionTitle>
        <Index />
        <div className="mt-16">
          {projects.map((p, i) => <Project key={p.id} p={p} i={i} />)}
        </div>
        <p className="rule-t pt-8 text-center">
          <a href="#top" className="nav-link link">Back to the top <span className="arrow" aria-hidden="true">↑</span></a>
        </p>
      </div>
    </section>
  )
}