"use-ckient";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const words = ["SYSTEMS", "WEB APPS", "TOOLS", "AI PRODUCTS"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative text-white">
      <div className="pointer-events-none absolute inset-0 " />

      <section className="relative flex min-h-screen overflow-hidden px-10 pb-25 pt-24">
        <div className="relative z-10 w-[78%] self-end">
          <div className="mb-8">
            <p className="text-[13px] font-medium uppercase tracking-[0.32em] text-white/45">
              Namaste, I’m
            </p>

            <p className="mt-2 text-[28px] font-bold uppercase leading-none tracking-[-0.06em] text-white">
              Jenish Adhikari
            </p>
          </div>

          <h1 className="text-[8.9rem] font-black uppercase leading-[0.82] tracking-[-0.02em]">
            DEVELOPER
            <br />
            FOR FULLSTACK
            <br />

            <span className="relative inline-block h-[0.85em] overflow-hidden align-baseline text-[#ff4d00]">
              <span
                className="block transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
                style={{
                  transform: `translateY(-${wordIndex * 0.85}em)`,
                }}
              >
                {words.map((word) => (
                  <span
                    key={word}
                    className="block h-[0.85em] leading-[0.82]"
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
              src="/Image.png"
              alt="Jenish portrait"
              fill
              sizes="360px"
              className="object-cover object-center grayscale"
            />
          </div>
        </div>
      </section>
    </main>
  );
}