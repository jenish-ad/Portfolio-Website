import Hero from "./Hero";
import About from "./About";
import StickyImage from "./StickyImage";

export default function Home() {
  return (
    <main className="relative overflow-x-clip text-white">
      <div className="pointer-events-none fixed right-[6%] top-[48%] h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#ff4d00]/20 blur-[140px]" />

      <section className="relative mx-auto grid min-h-screen max-w-[1500px] grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-6 lg:px-8 xl:grid-cols-[minmax(0,1fr)_330px] xl:gap-8 xl:px-10 2xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="relative z-10 min-w-0">
          <Hero />
          <About />
        </div>

        <StickyImage />
      </section>
    </main>
  );
}
