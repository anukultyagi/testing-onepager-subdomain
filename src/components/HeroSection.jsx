"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import LeadForm from "@/components/ui/LeadForm";

const stats = [
  {
    value: "8+",
    label: "Cities",
  },
  {
    value: "10K+",
    label: "Residents",
  },
  {
    value: "₹0",
    label: "Brokerage",
  },
  {
    value: "4.9",
    label: "Rating",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

export default function HeroSection() {
  return (
    <section  className="relative overflow-hidden bg-linear-to-b from-[#FFF9F5] via-[#FFFDFB] to-white scroll-mt-28">

      {/* Ambient Background */}
      {/* Warm ambient glow */}
      <div className="absolute left-[-120] top-[-120] h-[420] w-[420] rounded-full bg-[#F38744]/12 blur-[120px]" />

      <div className="absolute right-[-120] top-[20%] h-[360] w-[360] rounded-full bg-orange-100 blur-[110px]" />

      <div className="absolute bottom-[-180] left-[30%] h-[280] w-[280] rounded-full bg-[#FFD9C2]/40 blur-[120px]" />

      <Container className="relative z-10 py-14 md:py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="mb-7 inline-flex rounded-full border border-[#F38744]/15 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-[#A95A25]">
                No Brokerage • Fully Managed • Move-In Ready
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="text-[44px] font-bold tracking-[-0.04em] text-black sm:text-[56px] lg:text-5xl lg:leading-[1.02]"
            >
              Premium Co-Living Spaces{" "}
              <span className="text-[#F38744] sm:text-[56px] lg:text-7xl">
                That Feel Like Home
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 lg:text-xl"
            >
              Fully managed rooms with WiFi,
              meals, housekeeping and zero
              brokerage.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="mt-10 flex flex-wrap gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-full border border-white/80 bg-white/75 px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-md"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-[#D46A2C]">
                      {stat.value}
                    </span>

                    <span className="text-sm text-neutral-500">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Trust */}
            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-12 bg-amber-600 w-12 rounded-full border-[3px] border-white from-neutral-200 to-neutral-300"
                  />
                ))}
              </div>

              <p className="max-w-sm text-sm leading-6 text-neutral-600">
                Trusted by students &
                professionals from top
                universities and companies.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="relative"
          >
            {/* Decorative card behind */}
            
            <div className="relative rounded-[32] border border-white/70 bg-white/75 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-7 backdrop-blur-xl md:p-8">

              <div className="mb-7">
                <h2 className="text-2xl font-semibold text-[#D46A2C]">
                  Check Availability
                </h2>

                <p className="mt-2 text-sm text-neutral-500">
                  Find rooms near your preferred location.
                </p>
              </div>

              <LeadForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}