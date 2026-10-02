export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen scroll-mt-9 border-t border-[#1a1714]/10 px-0 py-16 lg:scroll-mt-0 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] lg:pl-10">
        <div className="mb-10 text-center lg:mb-12">
          <h2 className="text-3xl font-black uppercase leading-none tracking-[-0.06em] text-[#1a1714] sm:text-4xl">
            About
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-[150px] bg-[#ff4d00]" />
        </div>

        <div className="w-full max-w-none lg:pr-8">
          <h3 className="text-[clamp(2.6rem,12vw,4rem)] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[#1a1714] lg:text-[4.7rem] lg:leading-[0.88] lg:tracking-[-0.065em]">
            I turn ideas into clean, practical digital systems.
          </h3>

          <p className="mt-7 max-w-none text-[15px] font-semibold leading-7 tracking-[-0.02em] text-[#1a1714]/70 sm:text-[17px] sm:leading-8 lg:mt-9">
            I’m Jenish Adhikari, a Computer Engineering student focused on
            building full-stack web applications, AI-powered tools, and
            data-driven systems. I enjoy creating digital products that are not
            only visually clean, but also reliable, useful, and easy to
            maintain.
          </p>

          <p className="mt-5 max-w-none text-[15px] font-semibold leading-7 tracking-[-0.02em] text-[#1a1714]/70 sm:text-[17px] sm:leading-8 lg:mt-6">
            My work usually sits between design, development, and
            problem-solving. I like taking real-world requirements and turning
            them into smooth interfaces, structured logic, and practical systems
            that people can actually use.
          </p>

          <div className="mt-10 grid w-full gap-x-10 gap-y-8 sm:grid-cols-2 lg:mt-14">
            <div className="border-t border-[#1a1714]/15 pt-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#1a1714]/55">
                Focus
              </p>
              <p className="mt-3 text-[17px] font-bold text-[#1a1714]">
                Full-stack Development
              </p>
            </div>

            <div className="border-t border-[#1a1714]/15 pt-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#1a1714]/55">
                Interest
              </p>
              <p className="mt-3 text-[17px] font-bold text-[#1a1714]">
                AI Tools & Data Systems
              </p>
            </div>

            <div className="border-t border-[#1a1714]/15 pt-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#1a1714]/55">
                Approach
              </p>
              <p className="mt-3 text-[17px] font-bold text-[#1a1714]">
                Clean UI, Reliable Logic
              </p>
            </div>

            <div className="border-t border-[#1a1714]/15 pt-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#1a1714]/55">
                Based In
              </p>
              <p className="mt-3 text-[17px] font-bold text-[#1a1714]">Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
