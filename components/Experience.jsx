import { FiBriefcase, FiCheckCircle, FiMapPin, FiUser } from "react-icons/fi";
import CertificateButton from "./CertificateButton";

const highlights = [
  { icon: FiBriefcase, value: "4 months", label: "Professional experience" },
  { icon: FiCheckCircle, value: "5+", label: "Projects completed" },
  { icon: FiUser, value: "Freelance", label: "Available" },
  { icon: FiMapPin, value: "Kathmandu", label: "Based in Nepal" },
];

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
      <div className="mx-auto grid max-w-295 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.03em] underline decoration-[#ff4d00] decoration-[3px] underline-offset-[6px] [text-decoration-skip-ink:none]">
            My experience
            <br />
            and journey
          </h2>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7">
            {highlights.map(({ icon: Icon, value, label }) => (
              <li key={value} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#1a1714] text-[#f3ede4]">
                  <Icon aria-hidden="true" className="text-lg" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-bold leading-tight">
                    {value}
                  </span>
                  <span className="mt-0.5 block text-[12px] leading-snug text-[#1a1714]/60">
                    {label}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ol className="border-t border-[#1a1714]/15 lg:border-t-0">
          {experiences.map((exp) => (
            <li
              key={exp.company + exp.role}
              className="flex items-center justify-between gap-6 border-b border-[#1a1714]/20 py-6"
            >
              <div>
                <h3 className="text-lg font-bold tracking-[-0.02em] sm:text-xl">
                  {exp.role}
                </h3>
                <p className="mt-1.5 text-[12px] font-medium text-[#1a1714]/60">
                  {exp.period}
                </p>
                <p className="mt-3 text-[14px] text-[#1a1714]/70">
                  <span className="font-semibold text-[#ff4d00]">
                    @ {exp.company}
                  </span>
                  <span className="mx-2 text-[#1a1714]/30">/</span>
                  {exp.location}
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
      </div>
    </section>
  );
}
