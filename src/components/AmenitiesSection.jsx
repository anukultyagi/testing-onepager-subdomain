import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const amenities = [
  {
    title: "Fast WiFi",
    description:
      "Reliable high-speed internet for work, study and entertainment.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
  },
  {
    title: "Housekeeping",
    description:
      "Regular room cleaning so your space stays fresh and stress-free.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
  },
  {
    title: "24/7 Security",
    description:
      "Safe and monitored spaces designed for complete peace of mind.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
  },
  {
    title: "Community Spaces",
    description:
      "Relax, work or connect in thoughtfully designed common areas.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
];

export default function AmenitiesSection() {
  return (
    <Section
      id="amenities-section"
      background="bg-[#FFFDFB]"
      className="scroll-mt-28"
    >
      <Container>
        <div className="grid gap-14  lg:items-start">

          {/* LEFT CONTENT */}
          <div className="">
            <SectionHeading
              eyebrow="Amenities"
              title="Everything You Need. Literally."
              description="Designed for comfort, convenience and stress-free daily living."
            />

            <button className="mt-8 text-sm font-semibold text-[#F38744] transition hover:opacity-70">
              Explore amenities →
            </button>
          </div>

          {/* RIGHT BENTO GRID */}
          <div className="grid gap-5 md:grid-cols-2">

            {/* Featured card */}
            <div className="group relative overflow-hidden rounded-[32px] border border-(--border)  bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] md:row-span-2">
              <div className="relative h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                  alt="Comfortable co-living lifestyle"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-7 text-white">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                  Community Living
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  Comfortable Spaces.
                  Better Everyday Living.
                </h3>

                <p className="mt-3 text-sm text-white/85">
                  Thoughtfully designed spaces built for comfort,
                  convenience and peace of mind.
                </p>
              </div>
            </div>

            {/* Small cards */}
            {amenities.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[28px] border border-(--border)  bg-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1"
              >
                <div className="relative h-[180px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-(--text-primary)">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-(--text-secondary)">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}