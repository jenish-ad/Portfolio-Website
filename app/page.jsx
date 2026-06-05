"use client";

import { useEffect, useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Image from "next/image";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  const words = ["SYSTEMS", "WEB APPS", "TOOLS", "AI PRODUCTS"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!introFinished && (
        <IntroAnimation onFinish={() => setIntroFinished(true)} />
      )}

      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-5 text-white md:px-10">
        <div className="text-xl font-bold tracking-[-0.08em] md:text-2xl">
          JENISH ADHIKARI
        </div>

        <div className="flex cursor-pointer items-center gap-10">
          <div className="hidden items-center gap-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 md:flex">
            <a className="transition-colors hover:text-[#ff4d00]">01 / About</a>
            <a className="transition-colors hover:text-[#ff4d00]">
              02 / Projects
            </a>
            <a className="transition-colors hover:text-[#ff4d00]">
              03 / Contact
            </a>
          </div>

          <button className="border border-[#ff4d00]/30 px-4 py-2 text-[10px] tracking-widest text-[#ff4d00] transition-colors hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-black md:px-5 md:text-xs">
            _RESUME
          </button>
        </div>
      </nav>

      <main className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,77,0,0.2),transparent_35%)] md:bg-[radial-gradient(circle_at_75%_45%,rgba(255,77,0,0.22),transparent_35%)]" />

        <section className="relative flex min-h-screen flex-col overflow-hidden px-5 pb-10 pt-28 md:flex-row md:px-10 md:pb-24 md:pt-24">
          <div className="relative z-10 w-full self-end md:w-[78%]">
            <div className="mb-6 md:mb-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45 md:text-[13px] md:tracking-[0.32em]">
                Namaste, I’m
              </p>

              <p className="mt-2 text-[22px] font-bold uppercase leading-none tracking-[-0.06em] text-white md:text-[28px]">
                Jenish Adhikari
              </p>
            </div>

            <h1 className="text-[clamp(3.4rem,18vw,6rem)] font-black uppercase leading-[0.86] tracking-[-0.04em] md:text-[9rem] md:leading-[0.82] md:tracking-[-0.02em]">
              DEVELOPER
              <br />
              FOR FULLSTACK
              <br />
              <span className="relative inline-block h-[0.9em] overflow-hidden align-baseline text-[#ff4d00] md:h-[0.85em]">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
                  style={{
                    transform: `translateY(-${wordIndex * 0.85}em)`,
                  }}
                >
                  {words.map((word) => (
                    <span
                      key={word}
                      className="block h-[0.9em] leading-[0.86] md:h-[0.85em] md:leading-[0.82]"
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </span>
            </h1>
          </div>

          <div className="relative z-0 mt-10 h-[420px] w-full overflow-hidden md:absolute md:right-10 md:top-[54%] md:mt-0 md:h-[750px] md:w-[360px] md:-translate-y-1/2">
            <div className="relative h-full w-full overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/Image.png"
                alt="Jenish portrait"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover object-center grayscale"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
