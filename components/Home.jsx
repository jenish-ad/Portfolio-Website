import Hero from "./Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-x-clip text-[#1a1714]">
      <div className="pointer-events-none fixed right-[6%] top-[48%] h-130 w-130 -translate-y-1/2 rounded-full bg-[#ff4d00]/10 blur-[140px]" />

      <section className="relative mx-auto grid min-h-screen max-w-375 grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-6 lg:px-8 xl:grid-cols-[minmax(0,1fr)_330px] xl:gap-8 xl:px-10 2xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="relative z-10 min-w-0">
          <Hero />
        </div>

        <aside className="hidden self-center justify-self-end lg:block">
          <div className="h-98 w-70 overflow-hidden rounded-[18px] bg-white/50 p-2 shadow-[0_30px_80px_rgba(26,23,20,0.16)] ring-1 ring-[#1a1714]/10 xl:h-105 xl:w-75 2xl:h-110 2xl:w-78.75">
            <div className="relative h-full w-full overflow-hidden rounded-[14px]">
              <Image
                src="/hi-there.gif"
                alt="Waving animation"
                fill
                loading="eager"
                fetchPriority="high"
                unoptimized
                sizes="(max-width: 1279px) 280px, (max-width: 1535px) 300px, 315px"
                className="object-cover object-center contrast-125 brightness-90"
              />
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
