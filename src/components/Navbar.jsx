"use client";
import { useEffect, useState } from "react";
import scrollToLeadForm from "@/lib/scrollToLeadForm";


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

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${isScrolled
                ? "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                : "bg-transparent"
                }`}
        >

            <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">

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
                    Uniliv
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

                    {/* Phone */}
                    <a
                        href={`tel:${process.env
                            .NEXT_PUBLIC_SUPPORT_PHONE}`}
                        className={`hidden rounded-full px-4 py-3 text-sm font-medium transition lg:flex ${isScrolled
                            ? "border border-(--border) bg-white text-(--text-primary)"
                            : "border border-white/50 bg-white/20 text-[#A95A25] backdrop-blur-md"
                            }`}
                    >
                        📞 +91-{supportPhone}
                    </a>

                    {/* CTA */}
                    <button
                        onClick={
                            scrollToLeadForm
                        }
                        className={`rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${isScrolled
                            ? "bg-[#F38744] text-white hover:scale-[1.02]"
                            : "border border-white/50 bg-white/20 text-[#A95A25] backdrop-blur-md"
                            }`}
                    >
                        Schedule a Visit
                    </button>
                </div>
            </div>
        </header>
    );
}