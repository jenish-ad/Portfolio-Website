"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function StickyImage() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.88, 1.1]);
  const scale = useSpring(scrollScale, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  return (
    <aside
      ref={containerRef}
      className="relative hidden justify-self-end lg:block"
    >
      <div className="sticky top-1/2 -translate-y-1/2">
        <motion.div
          style={{ scale: prefersReducedMotion ? 1 : scale }}
          className="h-[392px] w-[280px] origin-center overflow-hidden rounded-[18px] bg-white/5 p-2 shadow-[0_0_80px_rgba(255,77,0,0.18)] ring-1 ring-white/10 xl:h-[420px] xl:w-[300px] 2xl:h-[440px] 2xl:w-[315px]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[22px]">
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
        </motion.div>
      </div>
    </aside>
  );
}
