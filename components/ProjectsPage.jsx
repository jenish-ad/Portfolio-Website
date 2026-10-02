import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Credit Risk Analyser",
    image: "/projects/project-1.png",
    github: "https://github.com/jenish-ad/Credit-score-risk-analysis.git",
    description:
      "A dashboard that turns complex financial indicators into a clear picture of a user's credit score, risk level and the factors driving them, so they can make more confident financial decisions.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Django"],
  },
  {
    title: "NEPSAY",
    image: "/projects/project-2.png",
    github: "https://github.com/jenish-ad/Nepsay.git",
    description:
      "A data system for the Nepal stock market that collects and cleans prices, dividends, rights shares and corporate actions into structured historical records, ready for screening and technical indicators.",
    techStack: ["Python", "PostgreSQL", "Pandas", "Automation"],
  },
  {
    title: "E-KYC",
    image: "/projects/project-3.png",
    github: "https://github.com/jenish-ad/E-KYC.git",
    description:
      "A digital onboarding flow that verifies identity end to end: document validation, OCR-based detail extraction, face verification and liveness-style checks in one smooth process.",
    techStack: ["React", "Python", "Machine Learning", "OCR"],
  },
  {
    title: "Movie Recommender",
    image: "/projects/project-4.png",
    github: "https://github.com/jenish-ad/Movie-recommendation-system.git",
    description:
      "A machine learning recommender that compares movie features and similarity patterns to suggest films matched to each user's taste.",
    techStack: ["C++", "Qt"],
  },
];

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-0 px-5 py-16 text-[#1a1714] sm:px-8 lg:-scroll-mt-3 lg:px-[7vw] lg:py-10"
    >
      <h2 className="mb-2 text-center text-3xl font-black uppercase tracking-[-0.04em] text-[#1a1714] sm:text-4xl">
        My Works
      </h2>
      <div className="mx-auto mb-12 h-[3px] w-36 bg-[#ff4d00] sm:w-48 lg:mb-16" />

      <div className="mx-auto grid max-w-[1180px] gap-6 sm:grid-cols-2 sm:gap-y-24 sm:pb-16 lg:gap-x-8 lg:gap-y-32 lg:pb-24">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`group flex flex-col rounded-2xl border border-[#1a1714]/10 bg-white/45 p-5 transition-colors duration-300 hover:border-[#ff4d00]/50 sm:p-6 lg:p-7 ${
              index % 2 === 1 ? "sm:translate-y-16 lg:translate-y-24" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-[0.24em] text-[#ff4d00]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1a1714]/70 transition-colors hover:text-[#ff4d00]"
              >
                <FaGithub className="text-base" />
                Code
              </a>
            </div>

            <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,2rem)] font-black uppercase leading-none tracking-[-0.05em] text-[#1a1714]">
              {project.title}
            </h3>

            <p className="mt-4 text-[14px] font-medium leading-6 text-[#1a1714]/70 lg:text-[15px] lg:leading-7">
              {project.description}
            </p>

            <p className="mb-6 mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c2410c]">
              {project.techStack.join("  /  ")}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
              className="relative mt-auto block aspect-[16/10] overflow-hidden rounded-xl border border-[#1a1714]/10 bg-white/60"
            >
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                loading="eager"
                quality={90}
                sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1279px) 45vw, 520px"
                className="object-cover object-left-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
