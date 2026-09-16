"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_DATA } from "@/data/faq";

export default function Page() {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <div className="w-full bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <div className="flex flex-col items-start gap-3 text-left">
          <span className="text-xs font-bold tracking-wider text-red-600">
            FAQ
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="text-sm leading-6 text-neutral-500 sm:text-base">
            Everything about downloading, signing up, problems, networking,
            profiles, security &amp; more.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {FAQ_DATA.map((section) => (
            <div key={section.category} className="flex flex-col gap-1">
              <h2 className="flex items-center justify-center gap-2 text-center text-xl font-bold text-black sm:text-2xl mt-5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-600" />
                {section.category}
              </h2>

              <div className="flex flex-col gap-3 pt-3">
                {section.items.map((item, index) => {
                  const key = `${section.category}-${index}`;
                  const isOpen = openKey === key;

                  return (
                    <div
                      key={key}
                      className="rounded-2xl border border-neutral-200 px-5"
                    >
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      >
                        <span className="text-sm font-semibold text-black">
                          {item.question}
                        </span>
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center text-neutral-400">
                          {isOpen ? (
                            <Minus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </span>
                      </button>

                      <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] pb-4 opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <p className="overflow-hidden text-sm leading-6 text-neutral-500">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
