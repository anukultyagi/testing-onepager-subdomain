import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const amenities = [
  {
    title: "Fast Wi-Fi",
    description:
      "Reliable high-speed internet for work, study and everyday entertainment.",
    image: "/assets/uniliv-amenities-wifi.png",
  },
  {
    title: "Housekeeping",
    description:
      "Regular cleaning support so your space stays fresh and comfortable.",
    image:
      "/assets/uniliv-amenities-housekeeping.png",
  },
  {
    title: "24/7 Security",
    description:
      "Safe and professionally managed spaces designed for peace of mind.",
    image:
      "/assets/uniliv-amenities-security.png",
  },
  {
    title: "Professional Laundary",
    description:
      "Comfortable spaces designed to make everyday living feel easier.",
    image:
      "/assets/uniliv-amenities-laundary.png",
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
        <div className="grid gap-12 lg:gap-14">

          {/* content */}
          <div>
            <SectionHeading
              eyebrow="Everything Included"
              title="Live Comfortably From Day One."
              description="Meals, Wi-Fi, housekeeping, Security, maintenance and support - all under one roof."
            />
          </div>

          {/* bento */}
          <div className="grid gap-5 md:grid-cols-2">

            {/* featured */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#F3D4BF] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] md:row-span-2">

              <div className="relative h-[320px] sm:h-[380px] lg:h-[420px]">
                <Image
                  src="/assets/uniliv-campaign-featured-amenity-thumbnail.webp"
                  alt="Comfortable managed living"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 via-black/20 to-transparent p-6 text-white lg:p-7">

                <p className="text-sm font-medium tracking-wide text-white/85 [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]">
                  Professionally Managed Living
                </p>

                <h3 className="mt-2 text-2xl font-semibold leading-tight [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
                  Comfortable Spaces.
                  Easier Everyday Living.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]">
                  Fully managed spaces designed for comfort,
                  convenience and peace of mind.
                </p>
              </div>
            </div>

            {/* cards */}
            {amenities.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-[#F3D4BF] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
              >
                <div className="relative h-[180px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-fill object-top transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 lg:p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-(--text-primary)">
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