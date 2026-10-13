import SectionTitle from './SectionTitle'
import resume from "../assets/AbinashOjhaResumeOL.pdf";

const rows = [
  ['Email', 'ojhabinash546@gmail.com', 'mailto:ojhabinash546@gmail.com', false],
  ['LinkedIn', 'abinash-ojha', 'https://www.linkedin.com/in/abinash-ojha-02a85330b/', true],
  ['GitHub', 'Abinash-Ojha', 'https://github.com/Abinash-Ojha', true],
  ['Resume', 'Download (PDF)', resume, true],
]

export default function Contact() {
  return (
    <>
      <section id="contact" className="ink">
        <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-10 md:py-32">
          <SectionTitle kicker="Epilogue">Correspon<em>dence</em></SectionTitle>

          <div className="mt-16 grid items-start gap-14 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-6">
              <p className="display text-6xl md:text-8xl">Let's build
<em className="soft"> together</em></p>
              <p className="soft mt-8 max-w-[40ch] text-lg">
                I'm open to software engineering opportunities, interesting technical challenges, and conversations about building useful software.
              </p>
            </div>

            <ul className="md:col-span-6">
              {rows.map(([label, value, href, external]) => (
                <li key={label} className="rule-t">
                  <a
                    href={href}
                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="group grid grid-cols-[5.5rem_1fr_auto] items-baseline gap-4 py-5 transition-colors hover:text-[var(--accent)] md:grid-cols-[6.5rem_1fr_auto]"
                  >
                    <span className="label accent">{label}</span>
                    <span className="display min-w-0 break-words text-2xl md:text-3xl">{value}</span>
                    <span className="arrow" aria-hidden="true">{external ? '↗' : '→'}</span>
                  </a>
                </li>
              ))}
              <li className="rule-t" aria-hidden="true" />
            </ul>
          </div>
        </div>
      </section>

      <footer className="ink border-t border-[var(--line)] px-6 py-12 text-center">
        <span className="mx-auto block h-px w-12 bg-[var(--mint)]" aria-hidden="true" />
        <p className="label mt-6">Designed &amp; built by Abinash Ojha</p>
        <p className="label mt-2">Cormorant Garamond · DM Sans · JetBrains Mono</p>
        <p className="label mt-2">© {new Date().getFullYear()} Abinash Ojha</p>
      
      </footer>
    </>
  )
}