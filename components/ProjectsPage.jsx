"use client";

import { useState } from "react";

const projects = [
  {
    title: "Credit Risk Analyser",
    image: "/projects/project-1.png",
    github: "https://github.com/jenish-ad/Credit-score-risk-analysis.git",
    description:
      "A credit risk analysis system designed to help users understand their credit score, risk level, and financial health through a clean dashboard. The project focuses on turning complex financial indicators into simple visual insights, making it easier for users to track risk, review score factors, and make more confident financial decisions.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "AI/ML"],
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

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="min-h-screen overflow-visible px-[7vw] py-10 text-white">
      <h1 className="mb-20 text-center text-[42px] font-semibold tracking-[0.18em] text-white">
        MY <span className="">WORKS</span>
      </h1>

      <div className="relative hidden h-[900px] w-full md:block">
        {projects.map((project) => (
          <div
            key={project.title}
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
            className={`group absolute ${project.position} h-[260px] w-[310px] cursor-pointer overflow-hidden rounded-[8px] border-2 border-[#c6ff00] bg-black transition-all duration-300 hover:z-10 hover:scale-105`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-left grayscale"
            />

            <img
              src={project.image}
              alt={project.title}
              className="absolute left-0 top-0 h-full w-full -translate-y-full object-cover object-left transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
            />

            <div className="absolute inset-0 bg-black/0 transition-colors delay-300 duration-300 group-hover:bg-black/35" />

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 translate-y-4 opacity-0 transition-all delay-300 duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100"
            >
              <span className="rounded-full border border-[#c6ff00] bg-black/70 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c6ff00] backdrop-blur-sm transition-colors hover:bg-[#c6ff00] hover:text-black">
                GitHub
              </span>
            </a>
          </div>
        ))}

        <div className="absolute right-0 top-0 h-full w-[600px] overflow-visible">
          <div className="sticky top-25 h-[700px] w-full overflow-hidden border border-white/10 bg-white/5">
            {activeProject ? (
              <div className="flex h-full flex-col">
                <div className="h-[360px] w-full overflow-hidden bg-white">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="h-full w-full object-cover object-left"
                  />
                </div>

                <div>
                  <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.06em] text-white">
                    {activeProject.title}
                  </h2>

                  <div className="mt-5 h-px w-20 bg-[#c6ff00]/60" />

                  <p className="mt-6 max-w-xl text-[15px] font-medium leading-7 text-white/60">
                    {activeProject.description}
                  </p>

                  <div className="mt-7">
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
                Hover a project
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <div className="grid gap-6 md:hidden">
        {projects.map((project) => (
          <div
            key={project.title}
            className="h-[220px] w-full overflow-hidden bg-[#ff650f]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover grayscale"
            />
          </div>
        ))}
      </div> */}
    </section>
  );
}
