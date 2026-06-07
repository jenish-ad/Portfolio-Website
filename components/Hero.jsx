"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const words = ["SYSTEMS", "WEB APPS", "TOOLS", "AI PRODUCTS"];

  const [rotationStep, setRotationStep] = useState(0);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasPlayed = localStorage.getItem("heroIntroPlayed");

    if (!hasPlayed) {
      setShowIntro(true);
      localStorage.setItem("heroIntroPlayed", "true");
    } else {
      setShowIntro(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationStep((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative text-white">
      <div className="pointer-events-none absolute inset-0" />

      <section className="relative flex min-h-screen overflow-hidden px-10 pb-25 pt-24">
        <div className="relative z-10 w-[78%] self-end translate-y-8">
          <div
            className={`mb-8 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              showIntro
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="mb-10 h-px w-[420px] bg-white/30" />
            <p className="text-[13px] font-medium uppercase tracking-[0.32em] text-white/45">
              Namaste, I’m
            </p>

            <p className="mt-2 text-[28px] font-bold uppercase leading-none tracking-[-0.06em] text-white">
              Jenish Adhikari
            </p>
          </div>

          <h1 className="text-[8.9rem] font-bold uppercase leading-[0.78] tracking-[-0.005em] text-white">
            <span
              className={`block transition-all delay-100 duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                showIntro
                  ? "translate-y-0 opacity-100"
                  : "translate-y-24 opacity-0"
              }`}
            >
              DEVELOPER
            </span>

            <span
              className={`block transition-all delay-[250ms] duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                showIntro
                  ? "translate-y-0 opacity-100"
                  : "translate-y-24 opacity-0"
              }`}
            >
              FOR FULLSTACK
            </span>

            <span
              className={`relative inline-block h-[0.9em] w-[7.9em] overflow-hidden px-[0.22em] align-baseline text-[#ff4d00] [perspective:1400px] transition-all delay-500 duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                showIntro
                  ? "translate-y-0 opacity-100"
                  : "translate-y-24 opacity-0"
              }`}
            >
              <span
                className="absolute left-[0.22em] top-0 h-full w-full transition-transform duration-[850ms] ease-[cubic-bezier(0.65,0,0.35,1)] [transform-style:preserve-3d]"
                style={{
                  transform: `rotateX(${rotationStep * 90}deg)`,
                }}
              >
                {words.map((word, index) => (
                  <span
                    key={word}
                    className="absolute left-0 top-0 block h-[0.9em] whitespace-nowrap leading-[0.82] [backface-visibility:hidden]"
                    style={{
                      transform: `rotateX(${-index * 90}deg) translateZ(0.45em)`,
                    }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </span>
          </h1>
        </div>

        <div className="absolute right-10 top-[56%] h-[700px] w-[360px] -translate-y-1/2 overflow-hidden">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/hi-there.gif"
              alt="Jenish portrait"
              fill
              priority
              loading="eager"
              sizes="360px"
              className="object-cover object-center grayscale"
            />
          </div>
        </div>
      </section>
    </main>
  );
}