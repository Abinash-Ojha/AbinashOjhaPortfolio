import resume from "../assets/AbinashOjhaResumeOL.pdf";
export default function Hero() {
  return (
    <section id="top" className="night">
      <div className="mx-auto grid min-h-[80vh] max-w-[1160px] items-center gap-14 px-6 py-16 md:grid-cols-12 md:gap-12 md:px-10 md:py-20">

        {/* Left: introduction */}
        <div className="md:col-span-7">
          <p className="label flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--taupe)]" aria-hidden="true" />
            Abinash Ojha · Computer Science Engineer · India
          </p>

          <h1 className="display mt-8 text-[clamp(2.4rem,6vw,4.75rem)]">
            Conceive . Build. <em className="soft">Evolve.</em>
          </h1>

          <p className="soft mt-8 max-w-[50ch] text-lg">
            I work across backend systems, React applications, and AI integrations. Most of my work revolves around building secure APIs, making thoughtful architectural decisions, and finding practical ways to keep software reliable and maintainable. I care about how things work beneath the surface, not just whether they work.         </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a href="#work" className="btn">Explore selected work</a>
<a
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  className="nav-link link"
>           View resume <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="label mt-12">Java · Spring Boot · React · PostgreSQL · Redis · AWS </p>
        </div>

        {/* Right: the story */}
        <aside aria-label="How I work" className="vellum md:col-span-5 ">
          <div className="m-3 border-[3px] border-double border-[var(--rule)] p-7 md:p-9">
            <p className="display text-center text-[1.7rem] italic leading-snug md:text-[1.9rem]">
              I work on software limitations and real-world problems.
            </p>

            <span className="mx-auto my-7 block h-px w-12 bg-[var(--accent)]" aria-hidden="true" />

            <p className="soft text-[0.95rem] leading-relaxed">
           My projects explore different areas of software engineering, from a multi-role SaaS platform with role-based access control to a RAG-based document analyzer and backend optimizations using caching and rate limiting.
             </p>

            <p className="soft mt-4 text-[0.95rem] leading-relaxed">
            I deploy my applications to PaaS platforms and cloud services, making them accessible over the internet.
             </p>

            <p className="rule-t mt-8 pt-5 text-center">
              <span className="display text-xl italic">Built to work beyond my machine.</span>
              <span className="label mt-2 block">RENDER · NETLIFY · NEON · AWS</span>
            </p>
          </div>
        </aside>

      </div>
    </section>
  )
}