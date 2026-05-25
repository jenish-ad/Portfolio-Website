"use client";

import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {!introFinished && (
        <IntroAnimation onFinish={() => setIntroFinished(true)} />
      )}

      <main
        className={`min-h-screen bg-[#f5efe7] text-black transition-opacity duration-700 ${
          introFinished ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold">Jenish Adhikari</h1>
          </div>
        </section>
      </main>
    </>
  );
}