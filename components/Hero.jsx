"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const words = ["SYSTEMS", "WEB APPS", "TOOLS", "AI PRODUCTS"];

export default function Hero() {
  const [rotationStep, setRotationStep] = useState(0);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
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
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-20 pt-20 lg:min-h-screen lg:flex-row lg:items-end lg:justify-start lg:pb-20 lg:pt-28 xl:pb-24"
    >
      <div className="pointer-events-none absolute right-[-24px] top-[22%] hidden h-[56%] w-px bg-gradient-to-b from-transparent via-[#1a1714]/20 to-transparent lg:block" />

      <div className="relative mx-auto mb-6 h-[30svh] max-h-[320px] min-h-[170px] w-[72vw] max-w-[270px] shrink-0 overflow-hidden rounded-[18px] bg-white/50 p-2 shadow-[0_24px_60px_rgba(26,23,20,0.14)] ring-1 ring-[#1a1714]/10 lg:hidden">
        <div className="relative h-full w-full overflow-hidden rounded-[14px]">
          <Image
            src="/hi-there.gif"
            alt="Waving animation"
            fill
            loading="eager"
            fetchPriority="high"
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
          <div className="mb-7 h-px w-full max-w-[470px] bg-gradient-to-r from-[#1a1714] via-[#1a1714]/70 to-transparent lg:mb-10" />

          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#1a1714]/60 sm:text-[13px] sm:tracking-[0.32em]">
            Namaste, I’m
          </p>

          <p className="mt-2 text-[23px] font-bold uppercase leading-none tracking-[-0.06em] text-[#1a1714] sm:text-[28px]">
            Jenish Adhikari
          </p>
        </div>

        <h1 className="max-w-full text-[clamp(3rem,14.5vw,5.5rem)] font-bold uppercase leading-[0.82] tracking-[-0.05em] text-[#1a1714] lg:text-[clamp(5.6rem,8.2vw,7rem)] lg:leading-[0.78] lg:tracking-[-0.04em] xl:text-[clamp(7rem,8.6vw,8.2rem)] 2xl:text-[9.1rem]">
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
            className={`relative inline-block h-[0.9em] w-full max-w-full overflow-hidden align-baseline text-[#ff4d00] [perspective:1400px] transition-all delay-500 duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] lg:w-[7.9em] lg:px-[0.16em] xl:px-[0.2em] 2xl:px-[0.22em] ${
              showIntro
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
          >
            <span
              className="absolute left-0 top-0 h-full w-full transition-transform duration-[850ms] ease-[cubic-bezier(0.65,0,0.35,1)] [transform-style:preserve-3d] lg:left-[0.16em] xl:left-[0.2em] 2xl:left-[0.22em]"
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
