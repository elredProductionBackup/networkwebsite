"use client";

import Image from "next/image";
import Link from "next/link";
import tnLogo from "@/images/tn-logo.svg";

const LINKS = [
  { name: "Home", href: "/" },
  { name: "Our Tribe", href: "/our-tribe" },
  { name: "Careers", href: "/careers" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const LEGAL = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Community Guidelines", href: "/community-guidelines" },
  { name: "Pay It Forward", href: "/pay-it-forward" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-neutral-950 px-6 py-16 text-white sm:px-10 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 md:max-w-xs">
          <div className="flex items-center">
            <Image src={tnLogo} alt="theNetwork" className="h-4 md:h-6 w-auto" />
          </div>
          <p className="text-sm leading-6 text-neutral-400">
            Makes collaboration easy and seamless.
            <br />
            Networks. Collaboration. Human first.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:flex md:gap-20">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-wider text-neutral-500">
              LINKS
            </span>
            {LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-neutral-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-wider text-neutral-500">
              LEGAL
            </span>
            {LEGAL.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-neutral-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:info@rextonedigital.com"
              className="text-sm text-neutral-300 hover:text-white"
            >
              info@rextonedigital.com
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-neutral-800 pt-6">
        <p className="text-xs text-neutral-500">
          © 2026 Rex-Tone Digital Private Limited. All Rights Reserved.
        </p>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white transition-colors hover:bg-red-700 sm:bottom-10 sm:right-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
