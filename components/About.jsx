import Image from "next/image";
import Modal from "./Modal";

const facts = [
  { label: "Role", value: "Full-Stack Developer" },
  { label: "Core Stack", value: "React, Next.js, Django" },
  { label: "Location", value: "Nepal" },
];

export default function About({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="about-title"
      className="relative grid max-h-[90vh] w-full max-w-240 grid-cols-1 overflow-y-auto rounded-3xl border border-[#1a1714]/10 bg-[#f3ede4] text-[#1a1714] shadow-2xl md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:overflow-hidden"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close about"
        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#f3ede4]/80 text-2xl leading-none text-[#1a1714]/60 backdrop-blur transition-colors hover:bg-[#1a1714]/5 hover:text-[#ff4d00]"
      >
        ×
      </button>

      <div className="p-3 md:p-4">
        <div className="relative h-65 w-full overflow-hidden rounded-[18px] bg-white/50 ring-1 ring-[#1a1714]/10 sm:h-85 md:h-full md:min-h-120">
          <Image
            src="/hi-there.gif"
            alt="Waving animation"
            fill
            unoptimized
            sizes="(max-width: 767px) 100vw, 400px"
            className="object-cover object-center contrast-125 brightness-90"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8 md:overflow-y-auto md:py-10 md:pl-4 md:pr-10">
        <h2
          id="about-title"
          className="text-3xl font-black uppercase leading-none tracking-[-0.06em]"
        >
          About Me
        </h2>
        <div className="mt-2 h-0.75 w-37 bg-[#ff4d00]" />
        <p className="mt-5 text-[15px] font-semibold leading-7 tracking-[-0.02em] text-[#1a1714]/70">
          I’m Jenish Adhikari, a Computer Engineering student focused on
          building full-stack web applications, AI-powered tools, and
          data-driven systems. I enjoy creating digital products that are
          not only visually clean, but also reliable, useful, and easy to
          maintain.
        </p>

        <p className="mt-4 text-[15px] font-semibold leading-7 tracking-[-0.02em] text-[#1a1714]/70">
          My work usually sits between design, development, and
          problem-solving. I like taking real-world requirements and
          turning them into smooth interfaces, structured logic, and
          practical systems that people can actually use.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-t border-[#1a1714]/15 pt-3"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1a1714]/55">
                {fact.label}
              </p>
              <p className="mt-1.5 text-[15px] font-bold">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
