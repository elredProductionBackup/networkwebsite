"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { User, Check, Star, ShieldCheck, Diamond, History } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PhoneMockup from "@/components/PhoneMockup";
import trust1Screen from "@/images/screens/attach-trust1.jpeg";
import trust2Screen from "@/images/screens/attach-trust2.jpeg";

const TRUST_ITEMS = [
  { label: "Professional profiles", icon: User },
  // { label: "Verified connections", icon: Check },
  { label: "Community ratings", icon: Star },
  // { label: "Reputation signals", icon: ShieldCheck },
  { label: "Industry expertise", icon: Diamond },
  // { label: "Relationship history", icon: History },
];

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
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <FadeIn className="flex w-full flex-col items-start gap-6 text-left">
          <span className="text-xs font-bold tracking-wider text-red-600">
            TRUST INFRASTRUCTURE
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
            Built on trust, <span className="text-red-600">not followers</span>
          </h2>

          <p className="text-sm leading-6 text-neutral-500 sm:text-base">
            Your reputation on theNetwork is built through real interactions,
            community endorsements, and verified expertise — not follower
            counts.
          </p>

          <div className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {TRUST_ITEMS.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-red-50">
                  <Icon className="h-3.5 w-3.5 text-red-600" strokeWidth={2} />
                </div>
                <span className="text-sm font-medium text-black">
                  {label}
                </span>
              </div>
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
    </section>
  );
}
