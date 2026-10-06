import Hero from "./Hero";
import HelloCard from "./HelloCard";

export default function Home() {
  return (
    <div className="relative overflow-x-clip text-[#1a1714]">
      <div className="pointer-events-none fixed right-[6%] top-[48%] h-130 w-130 -translate-y-1/2 rounded-full bg-[#ff4d00]/10 blur-[140px]" />

      <section className="relative mx-auto grid min-h-screen max-w-375 grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-6 lg:px-8 xl:grid-cols-[minmax(0,1fr)_380px] xl:gap-8 xl:px-10 2xl:grid-cols-[minmax(0,1fr)_410px]">
        <div className="relative z-10 min-w-0">
          <Hero />
        </div>

        <HelloCard
          className="hidden self-center justify-self-end lg:block"
          frameClassName="h-98 w-85 xl:h-105 xl:w-95 2xl:h-110 2xl:w-102.5"
        />
      </section>
    </div>
  );
}
