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

        <Reveal className="mx-auto mt-16 max-w-4xl">
          {groups.map(([group, items]) => (
            <div key={group} className="grid gap-1 border-t border-dotted border-[var(--rule)] py-5 md:grid-cols-[15rem_1fr] md:gap-8 md:py-6">
              <h3 className="display text-[1.7rem] italic leading-tight">{group}</h3>
              <p className="min-w-0 break-words text-[1.05rem] leading-relaxed text-[var(--soft)]">
                {items.join(', ')}
              </p>
            </div>
          ))}
          <div className="border-t border-dotted border-[var(--rule)]" />
        </Reveal>
      </div>
    </section>
  )
}