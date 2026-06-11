"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import scrollToLeadForm from "@/lib/scrollToLeadForm";
import { CONTACT } from "@/data/contact";

const navLinks = [
  {
    label: "Stay Options",
    id: "rooms-section",
  },
  {
    label: "Amenities",
    id: "amenities-section",
  },
  {
    label: "Meals",
    id: "meals-section",
  },
  {
    label: "Reviews",
    id: "reviews-section",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] =
    useState(false);

  const handleSectionScroll = (
    sectionId
  ) => {
    const section =
      document.getElementById(
        sectionId
      );

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(
        window.scrollY > 24
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#F3D4BF] bg-white/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="shrink-0"
          aria-label="Go to top"
        >
          <Image
            src="/unilivLogo.svg"
            className="object-contain"
            width={120}
            height={40}
            alt="Uniliv logo"
            priority
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() =>
                handleSectionScroll(
                  link.id
                )
              }
              className="text-sm font-medium text-(--text-secondary) transition hover:text-[#F38744]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">

          {/* Phone */}
          <a
            href={`tel:+${CONTACT.mobile}`}
            className="inline-flex h-10 items-center justify-center rounded-full border border-[#F3D4BF] bg-white px-4 text-sm font-medium text-(--text-primary) transition hover:border-[#F38744]/30"
          >
            {CONTACT.displayPhone}
          </a>

          {/* Desktop CTA */}
          <button
            onClick={scrollToLeadForm}
            className="hidden h-10 items-center justify-center rounded-md bg-[#F38744] px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-[2px] hover:opacity-95 lg:inline-flex"
          >
            Schedule a Visit
          </button>
        </div>
      </div>
    </header>
  );
}