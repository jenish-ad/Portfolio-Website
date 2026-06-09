"use client";

import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // removes #home / #about / #projects / #contact from URL
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full text-white">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/20 to-transparent" />

      <div className="relative z-10 flex w-full items-center justify-between px-5 py-4 lg:px-10 lg:py-5">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="text-lg font-bold tracking-[-0.08em] lg:text-2xl"
        >
          JENISH ADHIKARI
        </a>

        <div className="flex cursor-pointer items-center gap-2 lg:gap-18">
          <div className="fixed bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/10 bg-black/80 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-white/80 shadow-lg backdrop-blur-md lg:static lg:translate-x-0 lg:gap-2 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:text-[11px] lg:tracking-[0.18em] lg:shadow-none lg:backdrop-blur-none">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="transition-colors hover:text-[#ff4d00]"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="transition-colors hover:text-[#ff4d00]"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="transition-colors hover:text-[#ff4d00]"
            >
              Contact
            </a>
          </div>

          <a
            href="/Jenish_Adhikari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-lg px-2 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-[#ff4d00] lg:px-3 lg:py-3 lg:text-[12px] lg:tracking-[0.32em]"
          >
            _RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}
