import Image from "next/image";

// The waving GIF card. Hero shows it above the text on small screens,
// Home shows it beside the text on desktop.
export default function HelloCard({ className, frameClassName }) {
  return (
    <figure className={className}>
      <div
        className={`overflow-hidden rounded-[18px] bg-white/50 p-2 shadow-[0_30px_80px_rgba(26,23,20,0.16)] ring-1 ring-[#1a1714]/10 ${frameClassName}`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[14px]">
          <Image
            src="/hi-there.gif"
            alt="Waving animation"
            fill
            loading="eager"
            fetchPriority="high"
            unoptimized
            className="object-cover object-top contrast-125 brightness-90"
          />
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1a1714]/55">
        Human behind the code
      </figcaption>
    </figure>
  );
}
