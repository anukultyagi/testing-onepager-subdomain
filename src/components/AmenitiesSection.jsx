import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const amenities = [
  {
    title: "Chef Meals",
    description:
      "Fresh daily meals designed for comfort and convenience.",
  },
  {
    title: "Fast WiFi",
    description:
      "Reliable high-speed internet for work and study.",
  },
  {
    title: "24/7 Security",
    description:
      "Safe and monitored spaces for complete peace of mind.",
  },
  {
    title: "Housekeeping",
    description:
      "Regular cleaning so you can focus on what matters.",
  },
];

export default function AmenitiesSection() {
  return (
    <Section id="amenities-section" background="bg-[#FFFDFB]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          
          {/* LEFT CONTENT */}
          <div className="sticky top-28">
            <SectionHeading
              eyebrow="Amenities"
              title="Everything You Need. Literally."
              description="Designed for comfort, convenience and stress-free daily living."
            />

            <button className="mt-8 text-sm font-semibold text-[#F38744] transition hover:opacity-70">
              See all amenities →
            </button>
          </div>

          {/* RIGHT GRID */}
          <div className="grid gap-5 sm:grid-cols-2">
            {amenities.map((item) => (
              <div
                key={item.title}
                className="rounded-[24] border border-(--border) bg-[#FFF4ED]/40 p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#FFF4ED]/70"
              >
                {/* Icon placeholder */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[18] bg-white shadow-sm">
                  <div className="h-6 w-6 rounded-full bg-[#F38744]/20" />
                </div>

                <h3 className="text-xl font-semibold text-(--text-primary)">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-(--text-secondary)">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}