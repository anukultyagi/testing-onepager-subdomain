"use client";

import Image from "next/image";
import {
    CalendarDays,
    MessageCircleMore,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import scrollToLeadForm from "@/lib/scrollToLeadForm";
import { CONTACT } from "@/data/contact";

const trustPoints = [
    "Professionally Managed",
    "Move-In Ready",
    "No Brokerage",
];

export default function FinalCTASection() {
    return (
        <Section className="scroll-mt-28 py-12 lg:py-16">
            <Container>
                <div className="overflow-hidden rounded-2xl border border-[#F3D4BF] bg-[#FFF7F2] shadow-[0_12px_30px_rgba(0,0,0,0.04)]">

                    {/* Lifestyle image */}
                    <div className="relative h-[220px] overflow-hidden sm:h-[260px] md:h-[320px]">
                        <Image
                            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
                            alt="Comfortable managed living"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF7F2] via-[#FFF7F2]/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="px-5 pb-8 text-center sm:px-8 lg:px-16 lg:pb-12">

                        {/* Eyebrow */}
                        <p className="text-sm font-medium tracking-wide text-[#A96B45]">
                            Find your ideal space
                        </p>

                        {/* Headline */}
                        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight leading-tight text-(--text-primary) sm:text-4xl lg:text-5xl">
                            Comfortable Living,
                            Designed To Feel Easier.
                        </h2>

                        {/* Supporting copy */}
                        <p className="mx-auto mt-5 max-w-2xl leading-8 text-(--text-secondary)">
                            Explore professionally managed living spaces,
                            visit the property and find the option that
                            feels right for your lifestyle.
                        </p>

                        {/* Trust pills */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            {trustPoints.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-[#F3D4BF] bg-white px-4 py-2 text-sm font-medium text-(--text-primary)"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">

                            <button
                                onClick={scrollToLeadForm}
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#F38744] px-6 font-semibold text-white transition duration-300 hover:-translate-y-[2px] hover:opacity-95"
                            >
                                <CalendarDays size={18} />
                                Schedule a Visit
                            </button>

                            <a
                                href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%2C%20I%20am%20Looking%20for%20accomodation`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#F3D4BF] bg-white px-6 font-semibold text-(--text-primary) transition duration-300 hover:-translate-y-[2px]"
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