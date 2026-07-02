"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const projects = [
  {
    title: "Credit Risk Analyser",
    image: "/projects/project-1.png",
    github: "https://github.com/jenish-ad/Credit-score-risk-analysis.git",
    description:
      "A credit risk analysis system designed to help users understand their credit score, risk level, and financial health through a clean dashboard. The project focuses on turning complex financial indicators into simple visual insights, making it easier for users to track risk, review score factors, and make more confident financial decisions.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Django"],
    position: "left-[0px] top-[0px]",
  },
  {
    title: "NEPSAY",
    image: "/projects/project-2.png",
    github: "https://github.com/jenish-ad/Nepsay.git",
    description:
      "A Nepal stock market data system built to collect, process, and organize financial market information. It handles market prices, corporate actions, dividends, rights shares, and historical records, making the data easier to analyze and use for future stock screening, indicators, and recommendation features.",
    techStack: ["Python", "PostgreSQL", "Pandas", "Automation"],
    position: "left-[180px] top-[100px]",
  },
  {
    title: "E-KYC",
    image: "/projects/project-3.png",
    github: "https://github.com/jenish-ad/E-KYC.git",
    description:
      "An identity verification platform focused on simplifying the digital onboarding process. The system supports document validation, OCR-based detail extraction, face verification, and liveness-style checks, helping create a smoother and more secure flow for verifying users online.",
    techStack: ["React", "Tailwind CSS", "OCR", "Face Verification"],
    position: "left-[360px] top-[185px]",
  },
  {
    title: "Movie Recommender",
    image: "/projects/project-4.png",
    github: "https://github.com/jenish-ad/Movie-recommendation-system.git",
    description:
      "A movie recommendation system built to suggest relevant films based on user preferences and similarity patterns. The project explores how machine learning can improve content discovery by comparing movie features, matching interests, and generating personalized recommendations in a simple user-friendly way.",
    techStack: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    position: "left-[0px] top-[330px]",
  },
  {
    title: "Libraa",
    image: "/projects/project-5.png",
    github: "https://github.com/jenish-ad/libraa.git",
    description:
      "A modern web application concept focused on clean interface design, structured content, and smooth user experience. The project helped me practice building visually balanced layouts, reusable frontend sections, and a polished presentation style suitable for real-world web products.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "UI Design"],
    position: "left-[180px] top-[430px]",
  },
  {
    title: "Quizzy",
    image: "/projects/project-6.png",
    github: "https://github.com/jenish-ad/Quizzy.git",
    description:
      "An interactive quiz application designed to make question practice simple and engaging. It includes a clean question flow, answer selection, score tracking, and instant feedback-style interaction, helping users test their knowledge while giving me practice with frontend logic and state handling.",
    techStack: ["HTML", "CSS", "JavaScript", "Frontend"],
    position: "left-[360px] top-[520px]",
  },
];

const diagonalPositions = [
  "left-0 top-0",
  "left-[24%] top-[11%]",
  "left-[48%] top-[20%]",
  "left-0 top-[45%]",
  "left-[24%] top-[56%]",
  "left-[48%] top-[66%]",
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="min-h-screen overflow-visible px-5 py-16 text-white sm:px-8 lg:px-[7vw] lg:py-10">
      <h1 className="mb-2 text-center text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
        MY  WORKS
      </h1>
      <div className="mx-auto mb-12 h-[2px] w-36 bg-[#c6ff00]/60 sm:w-48 lg:mb-20" />
      <div id="projects" className="relative top-[-128px]" />

      <div className="grid gap-6 lg:hidden">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-xl border border-[#c6ff00]/50 bg-white/[0.03]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(100vw - 4rem), 310px"
                className="h-full w-full object-cover object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <h2 className="absolute bottom-4 left-4 right-16 text-2xl font-black uppercase leading-none tracking-[-0.05em] text-white">
                {project.title}
              </h2>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#c6ff00] bg-black/75 text-[#c6ff00]"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>

            <div className="p-5">
              <p className="text-[14px] font-medium leading-6 text-white/60">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#c6ff00]/25 bg-[#c6ff00]/5 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#c6ff00]/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="hidden h-[760px] items-start gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(340px,42%)] xl:h-[840px] xl:gap-8 2xl:h-[900px] 2xl:grid-cols-[minmax(0,1fr)_560px]">
        <div className="relative h-full min-w-0">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group absolute ${diagonalPositions[index]} aspect-[31/26] w-[clamp(11.75rem,18vw,19.375rem)] min-w-0 overflow-hidden rounded-[8px] border-2 border-[#c6ff00] bg-black transition-all duration-300 hover:z-10 hover:scale-105`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1279px) 18vw, (max-width: 1919px) 18vw, 310px"
                quality={90}
                className="h-full w-full object-cover object-left grayscale"
              />

              <Image
                src={project.image}
                alt=""
                fill
                sizes="(max-width: 1279px) 18vw, (max-width: 1919px) 18vw, 310px"
                quality={90}
                className="absolute left-0 top-0 h-full w-full -translate-y-full object-cover object-left transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors delay-300 duration-300 group-hover:bg-black/35" />

              <button
                type="button"
                aria-label={`Select ${project.title}`}
                aria-pressed={activeProject?.title === project.title}
                onClick={() => setActiveProject(project)}
                className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#c6ff00]"
              />

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-[calc(50%-1rem)] opacity-0 transition-all delay-300 duration-300 group-hover:pointer-events-auto group-hover:-translate-y-1/2 group-hover:opacity-100"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c6ff00] bg-black/70 text-[#c6ff00] backdrop-blur-sm transition-colors hover:bg-[#c6ff00] hover:text-black">
                  <FaGithub className="text-2xl" />
                </span>
              </a>
            </div>
          ))}
        </div>

        <div className="h-full min-w-0 overflow-visible">
          <div className="sticky top-[6.25rem] h-[calc(100vh-7rem)] max-h-[700px] min-h-[560px] w-full overflow-hidden border border-white/10 bg-white/5">
            {activeProject ? (
              <div className="flex h-full flex-col">
                <div className="relative h-[300px] w-full shrink-0 overflow-hidden bg-white xl:h-[340px]">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    sizes="(max-width: 1535px) 42vw, 560px"
                    className="h-full w-full object-cover object-left"
                  />
                </div>

                <div className="p-5 xl:p-6">
                  <h2 className="text-[clamp(1.7rem,2.4vw,2.5rem)] font-black uppercase leading-none tracking-[-0.06em] text-white">
                    {activeProject.title}
                  </h2>

                  <div className="mt-5 h-px w-20 bg-[#c6ff00]/60" />

                  <p className="mt-5 text-[14px] font-medium leading-6 text-white/60 xl:text-[15px] xl:leading-7">
                    {activeProject.description}
                  </p>

                  <div className="mt-6">
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.26em] text-white/35">
                      Tech Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {activeProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#c6ff00]/25 bg-[#c6ff00]/5 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c6ff00]/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[15px] uppercase tracking-[0.3em] text-white/70">
                Click a project
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
