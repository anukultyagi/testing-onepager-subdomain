import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Image from "next/image";

const stats = [
  {
    value: "10,000+",
    label: "Residents Served",
  },
  {
    value: "50+",
    label: "Properties",
  },
  {
    value: "24×7",
    label: "Resident Support",
  },
];

export default function TrustStripSection() {
  return (<Section className="scroll-mt-28 bg-[#FFD9C2]/40 py-14 lg:py-16"> <Container> <div className="mx-auto max-w-6xl text-center">

    {/* Reassurance line */}
    <p className="text-sm font-medium tracking-wide text-[#A96B45]">
      Thoughtfully managed for easier living.
    </p>

    {/* Google Rating */}
    <div className="mt-8 flex justify-center items-center gap-4">

      <Image
        src="/assets/google-reviews-logo.svg"
        alt="Google"
        width={80}
        height={80}
        className="h-auto"
      />
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-3">

          <span className="text-4xl font-semibold tracking-tight text-(--text-primary)">
            4.8
          </span>

          <div className="flex text-2xl tracking-wide text-[#F4B400]">
            ★★★★★
          </div>

        </div>

        <p className="mt-1 text-sm text-(--text-primary)">
          Rated by 1,200+ residents on Google
        </p>
      </div>
    </div>

    {/* Divider */}
    <div className="mx-auto mt-10 h-px max-w-4xl bg-[#F1D9C9]" />

    {/* Stats */}
    <div className="mt-10 grid grid-cols-1 divide-y divide-[#F1D9C9] md:grid-cols-3 md:divide-x md:divide-y-0">
      {stats.map((item) => (
        <div
          key={item.label}
          className="px-6 py-6 text-center"
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
      We handle the everyday essentials, so you can focus on what matters most.
    </p>

  </div>
  </Container>
  </Section>


  );
}
