"use client";

import Image from "next/image";
import {
    CalendarDays,
    MessageCircleMore,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import scrollToLeadForm from "@/lib/scrollToLeadForm";

const trustPoints = [
    "No Brokerage",
    "Move-In Ready",
    "24×7 Support",
];

export default function FinalCTASection() {
    return (
        <Section className="scroll-mt-28 py-16 lg:py-24">
            <Container>
                <div className="overflow-hidden rounded-[32px] border border-(--border)  bg-[#FFF7F2]">

                    {/* Lifestyle image */}
                    <div className="relative h-[260px] overflow-hidden md:h-[340px]">
                        <Image
                            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
                            alt="Warm premium co-living lifestyle"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF7F2] via-[#FFF7F2]/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="px-8 pb-10 text-center lg:px-16 lg:pb-14">

                        {/* Headline */}
                        <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-(--text-primary) lg:text-5xl">
                            Your New Home Is
                            Just One Visit Away.
                        </h2>

                        {/* Supporting copy */}
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-(--text-secondary)">
                            Visit the property, explore the
                            space, meet the team and
                            experience what easier living
                            actually feels like.
                        </p>

                        {/* Reassurance row */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            {trustPoints.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-white px-5 py-3 text-sm font-medium text-(--text-primary)"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <button
                                onClick={scrollToLeadForm}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F38744] px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-[2px] hover:opacity-95"
                            >
                                <CalendarDays size={18} />

                                Book a Visit
                            </button>

                            <a
                                href="https://wa.me/919220103600"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-(--border)  bg-white px-8 py-4 font-semibold text-(--text-primary) transition duration-300 hover:-translate-y-[2px]"
                            >
                                <MessageCircleMore size={18} />

                                Talk to Our Team
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
