"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import PhoneMockup from "@/components/PhoneMockup";
import trust1Screen from "@/images/screens/attach-trust1.jpeg";
import trust2Screen from "@/images/screens/attach-trust2.jpeg";

const CHIPS = ["Vouched-for members", "Earned reputation", "No negative rating"];

const SCREENS = [trust1Screen, trust2Screen];

export default function TrustInfrastructure() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SCREENS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex min-h-[500px] w-full items-center bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <FadeIn className="flex flex-col items-center gap-3 text-center">
          
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl md:text-5xl">
            Built around real relationships
          </h2>
          <p className="text-sm text-neutral-500 sm:text-base">
            Every feature designed to deepen trust and accelerate meaningful
            connections.
          </p>
        </FadeIn>

        <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center">
        <FadeIn className="flex w-full flex-col items-start gap-6 text-left">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
            Ratings built on real experience <span className="text-red-600">This gets you doors opened.</span>
          </h2>

          <p className="text-sm leading-6 text-neutral-500 sm:text-base">
           Build a network where professional relationships are backed by real interactions and the collective experience of the community. See whether members have met in person or virtually and whether others consider them safe and ethical to do business with.
          </p>

          <div className="flex flex-wrap gap-3">
            {CHIPS.map((label) => (
              <span
                key={label}
                className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                {label}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="flex w-full flex-col items-center gap-4">
          <PhoneMockup>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0"
              >
                <Image
                  src={SCREENS[activeIndex]}
                  alt={`Trust infrastructure screen ${activeIndex + 1}`}
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </PhoneMockup>

          <div className="flex items-center gap-2">
            {SCREENS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show screen ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-6 bg-red-600" : "w-2 bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </FadeIn>
        </div>
      </div>
    </section>
  );
}
