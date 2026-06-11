"use client";
import { useEffect, useState } from "react";
import scrollToLeadForm from "@/lib/scrollToLeadForm";
import Image from "next/image";


const navLinks = [
    {
        label: "Locations",
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
    const handleScroll = (
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
    const supportPhone =
        process.env
            .NEXT_PUBLIC_SUPPORT_PHONE;

    const [isScrolled, setIsScrolled] =
        useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(
                window.scrollY > 30
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

    const logoWidth = 120;
    const logoHeight = 40;

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${isScrolled
                ? "bg-white border-b border-(--border) /70 bg-white/85 backdrop-blur-xl"
                : "bg-transparent"
                }`}
        >

            <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <button
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                    className="text-2xl font-bold tracking-tight text-(--text-primary)"
                >
                    <Image
                        src="/unilivLogo.svg"
                        className="object-contain"
                        width={logoWidth}
                        height={logoHeight}
                        alt="uniliv logo" />
                </button>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.label}
                            onClick={() =>
                                handleScroll(
                                    link.id
                                )
                            }
                            className="text-sm font-medium text-(--text-secondary) transition hover:text-[#F38744]"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                {/* Right */}
                <div className="flex items-center gap-3">

                    {/* Mobile + Desktop Phone */}
                    <a
                        href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE}`}
                        className="rounded-full border border-(--border)  bg-white px-4 py-2.5 text-sm font-medium text-(--text-primary) transition hover:border-[#F38744]/30"
                    >
                        +91-{supportPhone}
                    </a>

                    {/* Desktop CTA only */}
                    <button
                        onClick={scrollToLeadForm}
                        className="hidden rounded-full bg-[#F38744] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-[1px] hover:opacity-95 lg:block"
                    >
                        Schedule Visit
                    </button>
                </div>
            </div>
        </header>
    );
}