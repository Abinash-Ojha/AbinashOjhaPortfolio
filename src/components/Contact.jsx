
import SectionTitle from './SectionTitle'
import resume from '../assets/AbinashOjhaResumeOL.pdf'

const rows = [
  ['Email', 'ojhabinash546@gmail.com', 'mailto:ojhabinash546@gmail.com', false],
  ['LinkedIn', 'abinash-ojha', 'https://www.linkedin.com/in/abinash-ojha-02a85330b/', true],
  ['GitHub', 'Abinash-Ojha', 'https://github.com/Abinash-Ojha', true],
  ['Resume', 'Download PDF', resume, true],
]

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-[#080808] text-white"
      >
        <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-10 md:py-32">

          <SectionTitle kicker="Epilogue">
            Correspon<em>dence</em>
          </SectionTitle>

          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">

            {/* Introduction */}
            <div>
              <h2 className="display text-6xl leading-[1.05] tracking-tight md:text-8xl">
                Let's build
                <br />
                <em className="font-normal text-[#10B981]">
                  together.
                </em>
              </h2>

              <p className="mt-7 max-w-[38ch] text-base leading-7 text-neutral-400">
                I'm open to software engineering opportunities,
                interesting technical challenges, and conversations
                about building useful software.
              </p>

              <a
                href="mailto:ojhabinash546@gmail.com"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#10B981] pb-2 text-sm text-[#10B981] transition-colors hover:text-white hover:border-white"
              >
                Start a conversation
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Contact links */}
            <div>
              <p className="label mb-5 text-neutral-500">
                FIND ME HERE
              </p>

              <ul className="border-t border-neutral-800">
                {rows.map(([label, value, href, external]) => (
                  <li key={label} className="border-b border-neutral-800">
                    <a
                      href={href}
                      {...(
                        external
                          ? {
                              target: '_blank',
                              rel: 'noopener noreferrer',
                            }
                          : {}
                      )}
                      className="group grid grid-cols-[6rem_minmax(0,1fr)_auto] items-center gap-3 py-5 transition-colors hover:text-[#10B981] sm:grid-cols-[7rem_minmax(0,1fr)_auto]"
                    >
                      <span className="label text-neutral-500 transition-colors group-hover:text-[#10B981]">
                        {label}
                      </span>

                      <span className="min-w-0 break-words text-sm text-neutral-200 transition-colors group-hover:text-[#10B981] sm:text-base">
                        {value}
                      </span>

                      <span
                        className="text-neutral-600 transition-colors group-hover:text-[#10B981]"
                        aria-hidden="true"
                      >
                        {external ? '↗' : '→'}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-neutral-800 bg-[#080808] px-6 py-7 text-white md:px-10">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#top"
            className="display text-2xl tracking-tight transition-colors hover:text-[#10B981]"
          >
            AO<span className="text-[#10B981]">.</span>
          </a>

          <p className="label text-neutral-500">
            DESIGNED & BUILT BY ABINASH OJHA
          </p>

          <p className="label text-neutral-600">
            © {new Date().getFullYear()} ABINASH OJHA
          </p>
        </div>
      </footer>
    </>
  )
}
