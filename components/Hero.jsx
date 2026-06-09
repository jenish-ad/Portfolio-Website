"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const words = ["SYSTEMS", "WEB APPS", "TOOLS", "AI PRODUCTS"];

  const [rotationStep, setRotationStep] = useState(0);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasPlayed = localStorage.getItem("heroIntroPlayed");

    if (!hasPlayed) {
      localStorage.setItem("heroIntroPlayed", "true");
    }

    const frame = requestAnimationFrame(() => {
      setShowIntro(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationStep((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-24 lg:min-h-screen lg:pb-24 lg:pt-28"
    >
      <div className="pointer-events-none absolute right-[-24px] top-[22%] hidden h-[56%] w-px bg-gradient-to-b from-transparent via-white/25 to-transparent lg:block" />

      <div className="absolute left-1/2 top-24 h-[34svh] max-h-[320px] min-h-[220px] w-[72vw] max-w-[270px] -translate-x-1/2 overflow-hidden rounded-[18px] bg-white/5 p-2 shadow-[0_0_60px_rgba(255,77,0,0.16)] ring-1 ring-white/10 lg:hidden">
        <div className="relative h-full w-full overflow-hidden rounded-[14px]">
          <Image
            src="/hi-there.gif"
            alt="Waving animation"
            fill
            priority
            unoptimized
            sizes="(max-width: 1023px) 72vw, 0px"
            className="object-cover object-center grayscale contrast-125 brightness-90"
          />
        </div>
      </div>

      <div className="relative z-10 w-full">
        <div
          className={`mb-8 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            showIntro
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <div className="mb-7 h-px w-full max-w-[470px] lg:mb-10" />

          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/45 sm:text-[13px] sm:tracking-[0.32em]">
            Namaste, I’m
          </p>

          <p className="mt-2 text-[23px] font-bold uppercase leading-none tracking-[-0.06em] text-white sm:text-[28px]">
            Jenish Adhikari
          </p>
        </div>

        <h1 className="text-[clamp(3rem,14.5vw,5.5rem)] font-bold uppercase leading-[0.82] tracking-[-0.05em] text-white lg:text-[9.1rem] lg:leading-[0.78] lg:tracking-[-0.04em]">
          <span
            className={`block transition-all delay-100 duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              showIntro
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
          >
            Developer
          </span>

          <span
            className={`block transition-all delay-[250ms] duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              showIntro
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
          >
            For Fullstack
          </span>

          <span
            className={`relative inline-block h-[0.9em] w-full overflow-hidden align-baseline text-[#ff4d00] [perspective:1400px] transition-all delay-500 duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] lg:w-[7.9em] lg:px-[0.22em] ${
              showIntro
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
          >
            <span
              className="absolute left-0 top-0 h-full w-full transition-transform duration-[850ms] ease-[cubic-bezier(0.65,0,0.35,1)] [transform-style:preserve-3d] lg:left-[0.22em]"
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
    </section>
  );
}
