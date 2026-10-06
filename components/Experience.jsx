import CertificateButton from "./CertificateButton";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Intersect Info Developers",
    location: "Kathmandu, Nepal",
    period: "May 2026 - September 2026",
    certificate: "/certificate.png",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-5 py-16 text-[#1a1714] sm:px-8 lg:px-[7vw] lg:py-24"
    >
      <div className="mx-auto mb-12 w-fit lg:mb-16">
        <h2 className="mb-2 text-center text-3xl font-black uppercase tracking-[-0.04em] text-[#1a1714] sm:text-4xl">
          My Experience
        </h2>
        <div className="h-0.75 w-full bg-[#ff4d00]" />
      </div>

      <ol className="mx-auto grid max-w-4xl gap-6">
        {experiences.map((exp) => (
          <li
            key={exp.company + exp.role}
            className="espresso-card flex items-center justify-between gap-6 overflow-hidden rounded-2xl px-5 py-4 text-white sm:px-7 sm:py-5"
          >
            <div className="relative">
              <p className="mb-2 w-fit rounded-md bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                {exp.period}
              </p>
              <h3 className="text-[clamp(1.15rem,2.2vw,1.5rem)] font-bold leading-tight tracking-[-0.02em] text-white">
                {exp.role}
              </h3>
              <p className="mt-1.5 text-[13px] font-medium text-white">
                <span className="font-semibold text-white">
                  @ {exp.company}
                </span>
                <span className="mx-2 hidden text-white/50 sm:inline">/</span>
                <span className="block sm:inline">{exp.location}</span>
              </p>
            </div>

            {exp.certificate && (
              <CertificateButton
                src={exp.certificate}
                title={`${exp.company} internship certificate`}
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
