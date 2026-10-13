
import { skills } from '../data/skills'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

// Supports [group, [items]], [group, 'a, b'] or { group, items: [...] }
const normalize = (entry) => {
  const group = Array.isArray(entry) ? entry[0] : entry.group
  const raw = Array.isArray(entry) ? entry[1] : entry.items

  const list = Array.isArray(raw) ? raw : String(raw ?? '').split(',')

  const items = list
    .map((item) => (typeof item === 'string' ? item : item?.name))
    .map((item) => item?.trim())
    .filter(Boolean)

  return [group, items]
}

export default function Skills() {
  const groups = skills.map(normalize)

  return (
    <section id="skills" className="paper relative overflow-hidden">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-10 md:py-32">

        {/* Section heading */}
        <div className="mb-16 md:mb-20">
          <SectionTitle kicker="Part III">
            Index of <em>Tools</em>
          </SectionTitle>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="display max-w-[34ch] text-2xl leading-snug text-[var(--text)] md:text-3xl">
              The tools behind the work.
             
            </p>

            <p className="label shrink-0 md:pb-1">
              TECHNICAL ARSENAL / 001—{String(groups.length).padStart(3, '0')}
            </p>
          </div>
        </div>

        {/* Skills index */}
        <Reveal className="spec ticks overflow-hidden border border-[var(--line)] bg-white text-[var(--text)]">

          {groups.map(([group, items], i) => (
            <div
              key={group}
              className="group grid gap-5 border-b border-[var(--line)] px-5 py-7 transition-colors duration-300 last:border-b-0 hover:bg-emerald-50/40 sm:px-7 md:grid-cols-[0.8fr_1.7fr] md:items-start md:gap-10 md:px-10 md:py-9"
            >
              {/* Group label */}
              <div className="flex items-start gap-5">
                <span className="pt-1 font-mono text-xs tracking-widest text-[var(--green-ink)]">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div>
                  <h3 className="display text-2xl italic leading-tight text-[var(--text)] md:text-3xl">
                    {group}
                  </h3>

                  <span className="mt-3 block h-px w-8 bg-[var(--green-ink)] transition-all duration-300 group-hover:w-14" />
                </div>
              </div>

              {/* Individual skills */}
              <div className="flex flex-wrap gap-x-3 gap-y-3 md:pt-1">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 border border-neutral-200 px-3 py-2 text-sm text-neutral-700 transition-all duration-200 hover:border-emerald-700 hover:text-emerald-800"
                  >
                    <span
                      className="h-1 w-1 shrink-0 bg-emerald-700"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>

        {/* Closing note */}
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            A growing toolkit, refined through building.
          </p>

          <span className="label text-[var(--green-ink)]">
            LEARN / BUILD / REFINE
          </span>
        </div>
      </div>
    </section>
  )
}
