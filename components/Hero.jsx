"use client";

import { useEffect, useState } from "react";
import HelloCard from "./HelloCard";

const words = ["SYSTEMS", "WEB APPS", "TOOLS", "AI PRODUCTS"];

const ease = "transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]";

export default function Hero() {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    const timer = setInterval(() => setStep((s) => s + 1), 2000);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(timer);
    };
  }, []);

  // Slide up and fade in once the page has painted.
  const reveal = (shift = "translate-y-24") =>
    visible ? "translate-y-0 opacity-100" : `${shift} opacity-0`;

  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-24 pt-20 lg:min-h-screen lg:flex-row lg:items-center lg:justify-start lg:pb-16 lg:pt-28"
    >
      <div className="pointer-events-none absolute -right-6 top-[22%] hidden h-[56%] w-px bg-linear-to-b from-transparent via-[#1a1714]/20 to-transparent lg:block" />

      <HelloCard
        className="mx-auto mb-6 lg:hidden"
        frameClassName="h-[32svh] max-h-100 min-h-44 w-[86vw] max-w-85"
        sizes="(max-width: 1023px) 86vw, 0px"
      />

      <div className="relative z-10 w-full">
        <div className={`mb-8 ${ease} ${reveal("translate-y-16")}`}>
          <div className="mb-7 h-px w-full max-w-117.5 bg-linear-to-r from-[#1a1714] via-[#1a1714]/70 to-transparent lg:mb-10" />
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#1a1714]/60 sm:text-[13px] sm:tracking-[0.32em]">
            Namaste, I’m
          </p>
          <p className="mt-2 text-[23px] font-bold uppercase leading-none tracking-[-0.06em] sm:text-[28px]">
            Jenish Adhikari
          </p>
        </div>

        <h1 className="text-[clamp(3rem,14.5vw,5.5rem)] font-bold uppercase leading-[0.8] tracking-[-0.07em] lg:text-[clamp(4.5rem,7.4vw,7rem)] lg:leading-[0.76] lg:tracking-[-0.065em] xl:text-[clamp(7rem,8.6vw,8.2rem)] 2xl:text-[9.1rem]">
          <span className={`block delay-100 ${ease} ${reveal()}`}>Developer</span>
          <span className={`block delay-250 ${ease} ${reveal()}`}>For Fullstack</span>

          {/* A four-sided box of words that tips forward every two seconds. */}
          <span
            className={`relative inline-block h-[0.9em] w-full overflow-hidden align-baseline text-[#ff4d00] perspective-[1400px] perspective-origin-left delay-500 lg:w-[7.9em] lg:px-[0.16em] lg:perspective-origin-center xl:px-[0.2em] 2xl:px-[0.22em] ${ease} ${reveal()}`}
          >
            <span
              className="absolute left-0 top-0 h-full w-full transition-transform duration-850 ease-[cubic-bezier(0.65,0,0.35,1)] transform-3d lg:left-[0.16em] xl:left-[0.2em] 2xl:left-[0.22em]"
              style={{ transform: `rotateX(${step * 90}deg)` }}
            >
              {words.map((word, i) => (
                <span
                  key={word}
                  className="absolute left-0 top-0 h-[0.9em] whitespace-nowrap leading-[0.82] backface-hidden"
                  style={{ transform: `rotateX(${-i * 90}deg) translateZ(0.45em)` }}
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
