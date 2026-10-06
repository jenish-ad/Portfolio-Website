"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FaEnvelope } from "react-icons/fa";

const COUNT = 24;
const rand = (min, max) => min + Math.random() * (max - min);

// Envelopes thrown out in a ring, tumbling, then pulled down by "gravity".
const makeBurst = () => ({
  id: Date.now(),
  items: Array.from({ length: COUNT }, (_, i) => {
    const angle = (i / COUNT) * Math.PI * 2 + rand(-0.2, 0.2);
    const dist = rand(300, 700);
    const x = Math.cos(angle) * dist;
    const y = Math.sin(angle) * dist * 0.75;
    return {
      x: [0, x * 0.7, x],
      y: [0, y - rand(100, 220), y + rand(220, 420)],
      rotate: [0, rand(-120, 120), rand(-320, 320)],
      rotateY: [0, 360, 720],
      size: rand(18, 34),
      delay: rand(0, 0.2),
      duration: rand(3.2, 4.2),
      color: i % 4 === 0 ? "#1a1714" : "#ff4d00",
    };
  }),
});

// Fires from the Contact heading each time the section scrolls into view.
export default function EnvelopeBurst() {
  const reduceMotion = useReducedMotion();
  const [burst, setBurst] = useState(null);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 perspective-midrange"
      viewport={{ amount: 0.35 }}
      onViewportEnter={() => !reduceMotion && setBurst(makeBurst())}
    >
      {/* Reaches up over the projects but clips at the page bottom, so falling envelopes never add scroll */}
      {burst && (
        <div
          key={burst.id}
          className="absolute inset-x-0 -top-150 bottom-0 overflow-hidden"
        >
          <div className="absolute left-1/2 top-166 lg:top-160">
            {burst.items.map(({ size, color, delay, duration, ...path }, i) => (
              <motion.span
                key={i}
                className="absolute flex -translate-1/2 transform-3d"
                style={{ fontSize: size, color }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  ...path,
                  scale: [0, 1.25, 0.9],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration,
                  delay,
                  times: [0, 0.35, 1],
                  ease: ["easeOut", "easeIn"],
                  opacity: { duration, delay, times: [0, 0.06, 0.8, 1] },
                }}
              >
                <FaEnvelope />
              </motion.span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
