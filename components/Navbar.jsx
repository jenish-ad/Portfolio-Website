"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import About from "./About";

const links = [
  { id: "about", label: "About_Me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const closeAbout = useCallback(() => setAboutOpen(false), []);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();

    if (id === "about") {
      setAboutOpen(true);
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Keep the URL clean instead of leaving #section in it
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full text-[#1a1714]">
      <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#f3ede4]/90 to-transparent" />

      <div className="relative z-10 flex w-full items-center justify-between px-5 py-4 lg:px-10 lg:py-5">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="text-lg font-bold tracking-[-0.08em] lg:text-2xl"
        >
          JENISH ADHIKARI
        </a>

        <div className="flex items-center gap-2 lg:gap-18">
          <div className="fixed bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3.5 rounded-full border border-[#1a1714]/10 bg-[#f3ede4]/85 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-[#1a1714]/80 shadow-lg backdrop-blur-md lg:static lg:translate-x-0 lg:gap-2 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:text-[11px] lg:tracking-[0.18em] lg:shadow-none lg:backdrop-blur-none">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="group relative whitespace-nowrap transition-colors hover:text-[#ff4d00]"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-right scale-x-0 bg-[#ff4d00] transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <a
            href="/Jenish_Adhikari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-lg px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1714] transition-colors hover:text-[#ff4d00] lg:px-3 lg:py-3 lg:text-[12px] lg:tracking-[0.32em]"
          >
            <span className="relative inline-block pb-1">
              RESUME
              <motion.span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.75 w-[calc(100%-0.2em)] bg-[#ff4d00] lg:w-[calc(100%-0.32em)]"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                  duration: 1.1,
                  times: [0, 0.5, 0.5, 1],
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </span>
          </a>
        </div>
      </div>

      <About open={aboutOpen} onClose={closeAbout} />
    </nav>
  );
}
