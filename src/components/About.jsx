import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

const facts = [
  ['Education', ['B.Tech, Computer Science & Engineering', 'GIET University, Gunupur, Odisha · 2022–2026']],
  ['Achievement', ['Hackathon Winner, GIET University', '2025 — led a six-member team to design and ship a production-ready AI solution.']],
  ['Practice', ['130+ LeetCode problems solved']],
]

const certs = [
  ['Certified Backend Developer', 'Spring Framework 6 & Spring Boot 3 - Udemy'],
  ['Certified Java Full Stack Developer', 'Wipro TalentNext Program'],
]

export default function About() {
  return (
    <section id="about" className="night">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-10 md:py-32">
        <SectionTitle kicker="Part II">About the <em>engineer</em></SectionTitle>

        <Reveal className="mt-16 grid gap-14 md:grid-cols-12 md:gap-0">
          <div className="md:col-span-7 md:pr-16">
            <div className="soft max-w-[58ch] space-y-5 text-lg">
              <p className="dropcap">I'm a Computer Science graduate from GIET University, interested in how software systems are designed, built, and improved. I enjoy working on problems that require careful thinking, from backend architecture to integrating AI into practical applications.</p>
              <p>My work focuses on Java, Spring Boot, secure APIs, database design, and full-stack development. I've also worked with Redis for caching and rate limiting, and built applications that combine language models with retrieval-based document search.</p>
              <p>I care about understanding why a system behaves the way it does, where its limitations lie, and how its design can be made more reliable and maintainable.</p>
            </div>

            <blockquote className="mt-12 border-l border-[var(--accent)] pl-6">
              <p className="display text-3xl italic leading-snug md:text-4xl">
                Look beneath the surface. Build beyond the obvious.
              </p>
            </blockquote>
          </div>

          <dl className="md:col-span-5 md:border-l md:border-[var(--rule)] md:pl-12">
            <p className="label mb-2">Background</p>

            {facts.map(([k, lines]) => (
              <div key={k} className="rule-t py-5">
                <dt className="label accent">{k}</dt>
                {lines.map((line, i) => (
                  <dd key={line} className={i === 0 ? 'display mt-2 text-2xl leading-snug' : 'soft mt-1 text-[0.95rem]'}>
                    {line}
                  </dd>
                ))}
              </div>
            ))}

            <div className="rule-t py-5">
              <dt className="label accent">Certifications</dt>
              {certs.map(([title, provider]) => (
                <dd key={title} className="mt-3 first:mt-2">
                  <span className="display block text-2xl font-semibold leading-snug">{title}</span>
                  <span className="soft block text-[0.95rem]">{provider}</span>
                </dd>
              ))}
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}