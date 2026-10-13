import { projects } from '../data/projects'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

const total = projects.length
const last = projects[total - 1].numeral

function Index() {
  return (
    <nav aria-label="Table of works" className="mx-auto mt-14 max-w-4xl">
      <p className="label accent text-center">Table of works</p>
      <ol className="mt-6 border border-[var(--line2)]">
        {projects.map((p) => (
          <li key={p.id} className="border-b border-[var(--line)] last:border-b-0">
            <a
              href={`#${p.id}`}
              className="index-row grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 px-4 py-4 md:grid-cols-[3.5rem_15rem_1fr_auto] md:px-6"
            >
              <span className="label accent">{p.numeral}.</span>
              <span className="display text-2xl">{p.name}</span>
              <span className="label hidden md:block">{p.tagline}</span>
              <span className="flex items-center gap-3">
                {p.live && <span className="accent text-[0.6rem]" title="Live site" aria-label="Live site">●</span>}
                <span className="arrow accent" aria-hidden="true">→</span>
              </span>
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
  const plate = <div className="plate"><img src={p.image} alt={p.alt} loading="lazy" /></div>

  return (
    <Reveal as="article" className="accent-rule py-16 md:py-24">
      <header id={p.id} className="mb-10 flex scroll-mt-24 items-end gap-6 md:mb-14 md:gap-10">
        <span className="numeral" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
        <div className="min-w-0 flex-1 pb-1">
          <p className="label">{p.numeral} / {last}</p>
          <h3 className="display mt-2 text-[clamp(2.2rem,4vw,3rem)]">{p.name}</h3>
          <p className="display soft mt-1 text-2xl italic">{p.tagline}</p>
        </div>
      </header>

      <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
        <div className={`md:col-span-6 ${flip ? 'md:order-2' : ''}`}>
          <div className="spec ticks">
            <div className="flex items-center justify-between border-b border-[var(--line2)] px-6 py-3 md:px-9">
              <p className="label accent">Chapter {p.numeral}</p>
              <p className="label">
                {p.live ? <><span className="accent">●</span> Live</> : 'Repository'}
              </p>
            </div>

            <div className="p-6 md:p-9">
              <p className="display text-[1.5rem] leading-snug">{p.lead}</p>

              <div className="soft mt-6 space-y-5 text-[1.02rem] leading-[1.8]">
                {p.body.map((t) => <p key={t}>{t}</p>)}
              </div>

              {p.figure && (
                <div className="mt-8 border-l-2 border-[var(--mint)] pl-5">
                  <span className="display accent text-5xl">{p.figure[0]}</span>
                  <span className="label mt-1 block">{p.figure[1]}</span>
                </div>
              )}

              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies used">
                {p.stack.map((s) => (
                  <li key={s} className="tag label">{s}</li>
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
          </div>
        </div>

        <figure className={`md:sticky md:top-24 md:col-span-6 ${flip ? 'md:order-1' : ''}`}>
          <div className="frame">
            {primary ? (
              <a href={primary} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Open ${p.name} (opens in a new tab)`}>
                {plate}
              </a>
            ) : plate}
          </div>
          <figcaption className="label mt-8 text-center">Plate {p.numeral} — {p.caption}</figcaption>
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
        <p className="rule-t pt-8 text-center">
          <a href="#top" className="nav-link link">Back to the top <span className="arrow" aria-hidden="true">↑</span></a>
        </p>
      </div>
    </section>
  )
}