"use client";

import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Image from "next/image";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {/* {!introFinished && (
        <IntroAnimation onFinish={() => setIntroFinished(true)} />
      )} */}

      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-10 py-5 text-white">
        <div className="text-2xl font-bold tracking-[-0.08em]">
          JENISH ADHIKARI
        </div>

        <div className="flex items-center gap-10 cursor-pointer">
          <div className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
            <a className="transition-colors hover:text-[#ff4d00]">01 / About</a>
            <a className="transition-colors hover:text-[#ff4d00]">
              02 / Projects
            </a>
            <a className="transition-colors hover:text-[#ff4d00]">
              03 / Contact
            </a>
          </div>

          <button className="border border-[#ff4d00]/30 px-5 py-2 text-xs cursor-pointer tracking-widest text-[#ff4d00]">
            _RESUME_
          </button>
        </div>
      </nav>

      <main className="bg-black text-white">
        <section className="flex min-h-screen justify-between px-10 pb-14 pt-24">
          <div className="w-[58%] self-end">
            <h1 className="text-[clamp(4rem,9vw,11rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
              DEVELOPER
              <br />
              FOR
              <br />
              FULLSTACK
              <br />
              <span className="text-[#ff4d00] tracking-[-0.05em]">SYSTEMS</span>
            </h1>
          </div>

          <div className="relative h-[625px] w-[30%] self-center overflow-hidden">
            <div className="relative h-full w-full overflow-hidden border border-white/10">
              <Image
                src="/Jenish.png"
                alt="Jenish portrait"
                fill
                className="object-cover object-center grayscale"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
