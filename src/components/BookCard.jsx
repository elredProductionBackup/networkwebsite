"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function BookCard({ book, delay = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const { coverImage, title, description } = book;

  return (
    <FadeIn
      delay={delay}
      className="flex flex-col gap-8 rounded-2xl border border-neutral-200 bg-white p-8 sm:flex-row sm:gap-10"
    >
      <div className="relative mx-auto h-96 w-64 shrink-0 overflow-hidden rounded-lg bg-neutral-100 sm:mx-0">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="256px"
            className="object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col items-start gap-5 text-left">
        <h3 className="text-2xl font-bold leading-snug text-black sm:text-3xl">
          {title}
        </h3>

        <div
          className={`grid w-full overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className="overflow-hidden text-base leading-7 text-neutral-600">
            {description}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-1 text-base font-semibold text-red-600 transition-colors hover:text-red-700"
        >
          Read More
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </FadeIn>
  );
}
