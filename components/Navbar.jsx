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

      <div className="relative z-10 flex w-full items-center justify-between px-10 py-5">
        <a
          href="/"
          onClick={(e) => scrollToSection(e, "home")}
          className="text-2xl font-bold tracking-[-0.08em]"
        >
          JENISH ADHIKARI
        </a>

        <div className="flex cursor-pointer items-center gap-18">
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
            <a
              href="/"
              onClick={(e) => scrollToSection(e, "about")}
              className="transition-colors hover:text-[#ff4d00]"
            >
              01 / About
            </a>

            <a
              href="/"
              onClick={(e) => scrollToSection(e, "projects")}
              className="transition-colors hover:text-[#ff4d00]"
            >
              02 / Projects
            </a>

            <a
              href="/"
              onClick={(e) => scrollToSection(e, "contact")}
              className="transition-colors hover:text-[#ff4d00]"
            >
              03 / Contact
            </a>
          </div>

          <a
            href="/Jenish_Adhikari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-lg px-3 py-3 text-[12px] font-medium uppercase tracking-[0.32em] text-white transition-colors hover:text-[#ff4d00]"
          >
            _RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}