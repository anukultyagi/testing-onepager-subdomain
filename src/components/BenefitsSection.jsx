import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    title: "Fully Managed",
    description:
      "Housekeeping, meals, WiFi and maintenance handled for you.",
  },
  {
    title: "₹0 Brokerage",
    description:
      "Move in without paying unnecessary broker fees.",
  },
  {
    title: "Safe Community",
    description:
      "Trusted by students and professionals across cities.",
  },
];

export default function BenefitsSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          centered
          eyebrow="Why Choose Us"
          title="Everything You Need, Already Included"
          description="Premium co-living designed for comfort, convenience and peace of mind."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[24] border border-[--border] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 h-14 w-14 rounded-[16] bg-[--primary]/10" />

              <h3 className="text-xl font-semibold text-[--text-primary]">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-[--text-secondary]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}