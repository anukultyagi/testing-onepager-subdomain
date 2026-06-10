
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const trustItems = [
  {
    value: "1000+",
    label: "Residents trusted us",
  },
  {
    value: "24×7",
    label: "Security & support",
  },
  {
    value: "4.8/5",
    label: "Resident satisfaction",
  },
  {
    value: "Move-In Ready",
    label: "No setup hassle",
  },
];

export default function TrustStripSection() {
  return (
    <Section
      className="scroll-mt-28 bg-[#FFD9C2]/40 py-14 lg:py-16"
    >
      <Container>
        <div className="mx-auto max-w-6xl text-center">

          {/* Reassurance line */}
          <p className="text-sm font-medium tracking-wide text-[#A96B45]">
            Thoughtfully managed for easier living.
          </p>

          {/* Trust row */}
          <div className="mt-10 grid gap-y-8 md:grid-cols-4 md:gap-0">
            {trustItems.map((item, index) => (
              <div
                key={item.label}
                className={`px - 6 ${index !== trustItems.length - 1
                    ? "md:border-r md:border-[#F1D9C9]"
                    : ""
                  } `}
              >
                <h3 className="text-4xl font-semibold tracking-tight text-(--text-primary)">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Supporting sentence */}
          <p className="mx-auto mt-10 max-w-3xl text-sm leading-7 text-(--text-secondary)">
            Meals, housekeeping, comfort and support —
            thoughtfully managed so you can focus on
            living, studying and growing.
          </p>
        </div>
      </Container>
    </Section>
  );
}
