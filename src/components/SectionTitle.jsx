export default function SectionTitle({ kicker, children }) {
  return (
    <div className="text-center">
      <p className="label accent">{kicker}</p>
      <h2 className="display mt-4 text-[clamp(3rem,5.5vw,4rem)]">{children}</h2>
      <span className="mx-auto mt-6 block h-px w-16 bg-[var(--accent)]" aria-hidden="true" />
    </div>
  )
}