"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PhoneMockup from "@/components/PhoneMockup";
import fypScreen from "@/images/screens/attach-hero.jpeg";
import communityScreen from "@/images/screens/attach-community.jpeg";
import profileScreen from "@/images/screens/attach-profile.jpeg";
import collabScreen from "@/images/screens/attach-collab.jpeg";

const TABS = [
  {
    name: "Find Your Partner",
    screen: fypScreen,
    description:
      "Discover the right partners, advisors, and collaborators through a curated feed tailored to your professional context.",
    checklist: [
      "Business challenges feed",
      "Opportunity discovery",
      "Partner matching",
    ],
  },
  {
    name: "Community Responses",
    screen: communityScreen,
    description:
      "Post a business challenge and let the network respond — members suggest contacts, share opportunities, and offer warm introductions relevant to your need.",
    checklist: [
      "Trusted member responses",
      "Warm introductions",
      "Context-rich replies",
    ],
  },
  {
    name: "Professional Profiles",
    screen: profileScreen,
    description:
      "Every profile is an authentic snapshot of who a member is and the value they bring — skills, expertise, testimonials and achievements.",
    checklist: [
      "Verified expertise",
      "Testimonials & ratings",
      "Authentic personality",
    ],
  },
  {
    name: "Collaborations",
    screen: collabScreen,
    description:
      "Turn conversations into outcomes. Build partnerships, close deals, secure investments, and grow through genuine collaboration.",
    checklist: [
      "Partnership building",
      "Deal & investment opportunities",
      "Long-term relationships",
    ],
  },
];

export default function RealRelationships() {
  const [activeTab, setActiveTab] = useState(TABS[0].name);
  const active = TABS.find((tab) => tab.name === activeTab);

  return (
    <section className="flex min-h-[700px] w-full flex-col items-center gap-12 bg-white px-6 py-20 sm:px-10 lg:px-16">
      <FadeIn className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl md:text-5xl">
          Built around real relationships
        </h2>
        <p className="text-sm text-neutral-500 sm:text-base">
          Every feature designed to deepen trust and accelerate meaningful
          connections.
        </p>
      </FadeIn>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {TABS.map((tab) => {
          const isActive = tab.name === activeTab;

          return (
            <button
              key={tab.name}
              type="button"
              onClick={() => setActiveTab(tab.name)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-red-600 text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-start gap-5 text-left"
          >
            <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              {active.name}
            </h3>
            <p className="text-sm leading-6 text-neutral-500 sm:text-base">
              {active.description}
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {active.checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50">
                    <Check className="h-3.5 w-3.5 text-red-600" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-black">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center">
          <PhoneMockup>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={active.screen}
                  alt={active.name}
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}
