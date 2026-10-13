import { skills } from '../data/skills'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

// Accepts [group, [items]], [group, 'a, b'] or { group, items: [...] }
const normalize = (entry) => {
  const group = Array.isArray(entry) ? entry[0] : entry.group
  const raw = Array.isArray(entry) ? entry[1] : entry.items
  const list = Array.isArray(raw) ? raw : String(raw ?? '').split(',')
  const items = list.map((x) => (typeof x === 'string' ? x : x?.name)).map((x) => x?.trim()).filter(Boolean)
  return [group, items]
}

export default function Skills() {
  const groups = skills.map(normalize)

  return (
    <section id="skills" className="tan">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-10 md:py-32">
        <SectionTitle kicker="Part III">Index of <em>Tools</em></SectionTitle>
        <p className="display soft mx-auto mt-6 max-w-[40ch] text-center text-xl italic">
          The languages, frameworks and platforms behind the work above.
        </p>

        <Reveal className="spec ticks mx-auto mt-16 max-w-4xl">
          {groups.map(([group, items], i) => (
            <div
              key={group}
              className="row-hover grid gap-2 border-b border-[var(--line)] px-5 py-6 last:border-b-0 md:grid-cols-[16rem_1fr] md:gap-8 md:px-7"
            >
              <div className="flex items-baseline gap-4">
                <span className="label accent">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="display text-[1.7rem] italic leading-tight">{group}</h3>
              </div>
              <p className="display min-w-0 break-words text-[1.3rem] leading-relaxed md:text-[1.45rem]">
                {items.map((item, j) => (
                  <span key={item}>
                    {j > 0 && <span className="accent mx-2.5" aria-hidden="true">/</span>}
                    <span className="soft transition-colors hover:text-[var(--text)]">{item}</span>
                  </span>
                ))}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}