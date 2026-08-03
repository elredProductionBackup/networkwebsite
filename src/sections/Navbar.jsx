"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import tnLogo from "@/images/tn-logo.svg";

const NAV_LINKS = [
  { name: "For You", href: "/" },
  { name: "For Groups", href: "/for-groups" },
  { name: "Our Tribe", href: "/our-tribe" },
  { name: "Pay It Forward", href: "/pay-it-forward" },
  { name: "Careers", href: "/careers" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="relative flex h-16 w-full items-center justify-between px-6 bg-white sm:px-8">
      <Link href="/" className="flex items-center">
        <Image src={tnLogo} alt="theNetwork" className="md:h-6 h-4 w-auto" priority />
      </Link>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="flex h-11 w-11 items-center justify-center rounded-md text-red-600"
      >
        <Menu className="h-8 w-8" strokeWidth={2} />
      </button>

      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        className={`fixed inset-y-0 right-0 z-50 flex h-full w-72 max-w-[80vw] flex-col gap-1 bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-4 flex items-center justify-end">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-md text-red-600"
          >
            <X className="h-8 w-8" strokeWidth={2} />
          </button>
        </div>

        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-neutral-50 hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
