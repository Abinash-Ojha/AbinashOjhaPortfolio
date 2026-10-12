const items = [
  ['I', 'Selected Work', 'Six projects', '#work'],
  ['II', 'About', 'A short biography', '#about'],
  ['III', 'Index of Tools', 'Skills, in order', '#skills'],
  ['IV', 'Correspondence', 'Where to write', '#contact'],
]

export default function Contents() {
  return (
    <section aria-label="Contents" className="paper">
      <div className="mx-auto max-w-2xl px-6 py-20 md:px-10 md:py-28">
        <p className="label accent text-center">Contents</p>
        <ol className="mt-8">
          {items.map(([n, title, note, href]) => (
            <li key={href}>
              <a href={href} className="flex items-baseline gap-3 py-3 transition-colors hover:text-[var(--accent)]">
                <span className="display w-10 text-2xl">{n}.</span>
                <span className="display text-2xl md:text-3xl">{title}</span>
                <span className="flex-1 border-b border-dotted border-[var(--rule)]" aria-hidden="true" />
                <span className="label hidden sm:inline">{note}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}