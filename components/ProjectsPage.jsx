"use client";

import { useState } from "react";

const projects = [
  {
    title: "Credit Risk Analyser",
    image: "/projects/project-1.png",
    github: "https://github.com/jenish-ad/Credit-score-risk-analysis.git",
    position: "left-[0px] top-[0px]",
  },
  {
    title: "NEPSAY",
    image: "/projects/project-2.png",
    github: "https://github.com/jenish-ad/Nepsay.git",
    position: "left-[180px] top-[100px]",
  },
  {
    title: "E-KYC",
    image: "/projects/project-3.png",
    github: "https://github.com/jenish-ad/E-KYC.git",
    position: "left-[360px] top-[185px]",
  },
  {
    title: "Movie Recommender",
    image: "/projects/project-4.png",
    github: "https://github.com/jenish-ad/Movie-recommendation-system.git",
    position: "left-[0px] top-[330px]",
  },
  {
    title: "My Pasal",
    image: "/projects/project-5.png",
    github: "https://github.com/jenish-ad/My-pasal.git",
    position: "left-[180px] top-[430px]",
  },
  {
    title: "Quizzy",
    image: "/projects/project-6.png",
    github: "https://github.com/jenish-ad/Quizzy.git",
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
              <>
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="h-auto w-auto object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/40 px-6 py-5 backdrop-blur-sm">
                  <h2 className="mt-2 text-2xl font-bold uppercase tracking-[-0.04em] text-white">
                    {activeProject.title}
                  </h2>
                </div>
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[11px] uppercase tracking-[0.3em] text-white/35">
                Hover a project
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:hidden">
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
      </div>
    </section>
  );
}