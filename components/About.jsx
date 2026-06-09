export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen scroll-mt-20 border-t border-white/10 px-0 py-16 lg:scroll-mt-[-85] lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] lg:pl-10">
        {/* Section title like My Works */}
        <div className="mb-10 text-center lg:mb-12">
          <h2 className="text-3xl font-black uppercase leading-none tracking-[-0.06em] text-white sm:text-4xl">
            About
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-[150px] bg-[#ff4d00]" />
        </div>

        {/* About content */}
        <div className="w-full max-w-none lg:pr-8">
          <h3 className="text-[clamp(2.6rem,12vw,4rem)] font-black uppercase leading-[0.92] tracking-[-0.06em] text-white lg:text-[4.7rem] lg:leading-[0.88] lg:tracking-[-0.065em]">
            I turn ideas into clean, practical digital systems.
          </h3>

          <p className="mt-7 max-w-none text-[15px] font-semibold leading-7 tracking-[-0.02em] text-white/50 sm:text-[17px] sm:leading-8 lg:mt-9">
            I’m Jenish Adhikari, a Computer Engineering student focused on
            building full-stack web applications, AI-powered tools, and
            data-driven systems. I enjoy creating digital products that are not
            only visually clean, but also reliable, useful, and easy to
            maintain.
          </p>

          <p className="mt-5 max-w-none text-[15px] font-semibold leading-7 tracking-[-0.02em] text-white/50 sm:text-[17px] sm:leading-8 lg:mt-6">
            My work usually sits between design, development, and
            problem-solving. I like taking real-world requirements and turning
            them into smooth interfaces, structured logic, and practical systems
            that people can actually use.
          </p>

          <div className="mt-10 grid w-full gap-x-10 gap-y-8 sm:grid-cols-2 lg:mt-14">
            <div className="border-t border-white/15 pt-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/35">
                Focus
              </p>
              <p className="mt-3 text-[17px] font-bold text-white">
                Full-stack Development
              </p>
            </div>

            <div className="border-t border-white/15 pt-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/35">
                Interest
              </p>
              <p className="mt-3 text-[17px] font-bold text-white">
                AI Tools & Data Systems
              </p>
            </div>

            <div className="border-t border-white/15 pt-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/35">
                Approach
              </p>
              <p className="mt-3 text-[17px] font-bold text-white">
                Clean UI, Reliable Logic
              </p>
            </div>

            <div className="border-t border-white/15 pt-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/35">
                Based In
              </p>
              <p className="mt-3 text-[17px] font-bold text-white">Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
