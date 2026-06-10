"use client";

import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import scrollToLeadForm from "@/lib/scrollToLeadForm";
import { CONTACT } from "@/data/contact";
import {
    CalendarDays,
    MessageCircleMore,
} from "lucide-react";

const rooms = [
    {
        title: "Private Room",
        description:
            "Maximum privacy and personal comfort.",
        price: "₹18,999/mo",
        badge: "Most Preferred",
        badgeType: "orange",
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    },
    {
        title: "Double Sharing",
        description:
            "Balanced comfort and affordability.",
        price: "₹12,499/mo",
        badge: "Filling Fast",
        badgeType: "green",
        image:
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    },
    {
        title: "Triple Sharing",
        description:
            "Smart and affordable shared living.",
        price: "₹9,999/mo",
        badge: "Best Value",
        badgeType: "orange",
        image:
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
    },
];

export default function RoomsSection() {
    return (
        <Section
            id="rooms-section"
            background="bg-[#FFFDFB]"
            className="scroll-mt-28"
        >
            <Container>
                <SectionHeading
                    centered
                    eyebrow="Our Spaces"
                    title="Find Your Perfect Fit"
                    description="Comfortable, thoughtfully designed spaces for students and working professionals."
                />

                <div className="mt-14 grid gap-7 lg:grid-cols-3">
                    {rooms.map((room) => (
                        <div
                            key={room.title}
                            className="group overflow-hidden rounded-2xl border border-[#F3D4BF] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-[4px]"
                        >
                            {/* Room image */}
                            <div className="relative h-[240px] overflow-hidden">
                                <Image
                                    src={room.image}
                                    alt={room.title}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent transition duration-500 group-hover:from-black/25" />

                                {/* Badge */}
                                <span
                                    className={`absolute left-5 top-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-sm backdrop-blur-sm ${room.badgeType === "green"
                                        ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                                        : "bg-[#FFF4ED] text-[#C96A2B] ring-1 ring-[#F3D4BF]"
                                        }`}
                                >
                                    <span
                                        className={`h-2 w-2 rounded-full ${room.badgeType === "green"
                                            ? "bg-emerald-500"
                                            : "bg-[#F38744]"
                                            }`}
                                    />

                                    {room.badge}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="min-h-[56px] text-2xl font-semibold leading-tight text-(--text-primary)">
                                            {room.title}
                                        </h3>

                                        <p className="mt-2 leading-6 text-(--text-secondary)">
                                            {room.description}
                                        </p>
                                    </div>
                                </div>
                                {/* <div className="mt-6 flex flex-wrap gap-2">
                                    {room.highlights.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full bg-[#FFF4ED] px-3 py-2 text-xs font-medium text-[#A95A25]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div> */}
                                <div className="mt-5 border-t border-[#F3D4BF] pt-4">
                                    <p className="text-sm text-(--text-secondary)">
                                        Starting from
                                    </p>

                                    <p className="mt-1 text-2xl font-semibold text-[#F38744]">
                                        {room.price}
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="mt-6 flex gap-3">
                                    <button
                                        onClick={scrollToLeadForm}
                                        className="flex text-sm flex-1 items-center justify-center gap-2 rounded-md bg-[#F38744] px-4 py-3 font-semibold text-white transition duration-300 hover:-translate-y-[2px] hover:opacity-90"
                                    >
                                        <CalendarDays size={16} />

                                        Check Availability
                                    </button>

                                    <a
                                        href={`https://wa.me/${CONTACT.whatsapp}`}

                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex text-sm items-center justify-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 font-semibold text-emerald-700 transition duration-300 hover:-translate-y-[2px] hover:bg-emerald-100"
                                    >
                                        <MessageCircleMore size={16} />

                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}