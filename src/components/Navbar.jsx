"use client";

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

    return (
        <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl">

            <div className="mx-auto flex h-20 max-w-[1280] items-center justify-between px-4 sm:px-6 lg:px-8">

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
                        className="hidden rounded-full border border-(--border) bg-white px-4 py-3 text-sm font-medium text-(--text-primary) transition hover:border-[#F38744]/30 lg:flex"
                    >
                        📞 +{supportPhone}
                    </a>

                    {/* CTA */}
                    <button
                        onClick={
                            scrollToLeadForm
                        }
                        className="rounded-full bg-[#F38744] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:opacity-95"
                    >
                        Schedule a Visit
                    </button>
                </div>
            </div>
        </header>
    );
}