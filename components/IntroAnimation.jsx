"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useMemo, useState, useEffect } from "react";

export default function IntroAnimation({ onFinish }) {
  const greetings = useMemo(
    () => [
      "नमस्ते",
      "Bonjour",
      "Olá",
      "Salam",
      "Ciao",
      "Hello",
    ],
    [],
  );
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const id = setInterval(() => setIndex((i) => i + 1), 250);
      return () => clearInterval(id);
    } else {
      const t = setTimeout(() => setVisible(false), 430);
      return () => clearTimeout(t);
    }
  }, [index, greetings.length]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black px-5 text-center text-white"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.05,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          <motion.h1
            key={index}
            className="mt-10 text-6xl font-bold sm:text-8xl md:text-9xl lg:text-[10rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.12 }}
          >
            {greetings[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
