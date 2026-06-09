"use client"
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import scrollToLeadForm from "@/lib/scrollToLeadForm";

const rooms = [
    {
        title: "Premium Single Room",
        location: "Noida Sector 62",
        price: "₹18,999/mo",
        badge: "Move-in Ready",
        amenities: [
            "Fully Furnished",
            "Meals",
            "WiFi",
            "Private Room",
        ],
    },
    {
        title: "Twin Sharing Room",
        location: "Gurugram Sector 44",
        price: "₹12,499/mo",
        badge: "Limited Spots",
        amenities: [
            "Attached Washroom",
            "Meals",
            "WiFi",
            "Sharing",
        ],
    },
    {
        title: "Studio Living",
        location: "Bangalore HSR",
        price: "₹22,999/mo",
        badge: "Premium Pick",
        amenities: [
            "Private Space",
            "Housekeeping",
            "Meals",
            "WiFi",
        ],
    },
];

export default function RoomsSection() {
    return (
        <Section id="rooms-section" background="bg-[#FFFDFB]" className="scroll-mt-28">
            <Container>
                <SectionHeading
                    centered
                    eyebrow="Our Spaces"
                    title="Find Your Perfect Fit"
                    description="Comfortable, thoughtfully designed spaces for students and working professionals."
                />

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {rooms.map((room) => (
                        <div
                            key={room.title}
                            className="group overflow-hidden rounded-[24] border border-[--border] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1"
                        >
                            {/* Image Placeholder */}
                            <div className="relative h-[240] overflow-hidden bg-linear-to-br from-[#FFE7D7] via-[#FFF2EA] to-[#FFD8C1]">

                                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#F38744] shadow-sm backdrop-blur-sm">
                                    {room.badge}
                                </span>

                                <div className="absolute inset-0 transition duration-500 group-hover:scale-105" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-(--text-primary)">
                                            {room.title}
                                        </h3>

                                        <p className="mt-1 text-sm text-(--text-secondary)">
                                            {room.location}
                                        </p>
                                    </div>

                                    <p className="font-semibold text-[#F38744]">
                                        {room.price}
                                    </p>
                                </div>

                                {/* Amenities */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {room.amenities.map(
                                        (amenity) => (
                                            <span
                                                key={amenity}
                                                className="rounded-full bg-[#FFF4ED] px-3 py-2 text-xs font-medium text-[#A95A25]"
                                            >
                                                {amenity}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* CTA */}
                                <button onClick={scrollToLeadForm} className="mt-6 w-full rounded-[16] border border-[#F38744]/20 bg-[#FFF4ED] px-5 py-4 font-semibold text-[#F38744] transition hover:bg-[#F38744] hover:text-white">
                                    Check Availability
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}