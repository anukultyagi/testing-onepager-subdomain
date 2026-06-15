"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import LeadForm from "@/components/ui/LeadForm";
import Navbar from "./Navbar";
import {
  ShieldCheck,
  UtensilsCrossed,
  Wifi,
  IndianRupee,
} from "lucide-react";


const stats = [
  {
    icon: ShieldCheck,
    label: "Fully Managed",
    color: "text-[#D46A2C]",
  },
  {
    icon: UtensilsCrossed,
    label: "Daily Meals",
    color: "text-[#D46A2C]",
  },
  {
    icon: Wifi,
    label: "Wi-Fi Included",
    color: "text-[#D46A2C]",
  },
  {
    icon: IndianRupee,
    label: "Zero Brokerage",
    color: "text-[#D46A2C]",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: customDelay,
      ease: "easeOut",
    },
  }),
};

export default function HeroSection() {
  return (
    <>
      <section id="hero-section" className="relative overflow-hidden bg-linear-to-b from-[#FFF9F5] via-[#FFFDFB] to-white scroll-mt-28">
        <Navbar />

        {/* Ambient Background */}
        {/* Warm ambient glow */}
        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#F38744]/12 blur-[120]" />

        <div className="absolute right-[-120px] top-[20%] h-[360px] w-[360px] rounded-full bg-orange-100 blur-[110]" />

        <div className="absolute bottom-[-180px] left-[30%] h-[280px] w-[280px] rounded-full bg-[#FFD9C2]/40 blur-[120]" />

        <Container className="relative z-10 pt-28 pb-14 md:pt-32 md:pb-20 lg:pt-36 lg:pb-28">
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
                  No Brokerage • Professionally Managed • Move-In Ready
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={0.1}
                className="text-[44px] font-bold leading-tight text-black sm:text-[56px] lg:text-[64px] lg:leading-snug"
              >
                Fully managed Hostel/PG residences {" "}

                <span className="text-[#F38744] sm:text-[56px] lg:text-7xl">
                  Stay Better. Live Easier.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={0.2}
                className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 lg:text-xl"
              >
                Move into Fully managed spaces with in-house meals, Wi-Fi, housekeeping and security for students and professionals. 
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                custom={0.3}
                className="mt-10 flex flex-wrap gap-4"
              >
                {stats.map((stat) => {
                  const IconComponent = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="flex items-center gap-3 rounded-full border border-[#F3D4BF]/40 bg-white/80 sm:px-5 px-4 sm:py-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-md"
                    >
                      <IconComponent
                        className={`h-5 w-5 shrink-0 ${stat.color}`}
                        strokeWidth={2.5} />

                      <span className="text-sm font-medium text-neutral-600">
                        {stat.label}
                      </span>
                    </div>
                  )
                })}

              </motion.div>

              {/* Trust */}
              {/* <motion.div
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
                </motion.div> */}
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

              <div className="relative rounded-2xl border border-white/70 bg-white/75 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-7 backdrop-blur-xl md:p-8">

                <div className="mb-7">
                  <h2 className="text-2xl font-semibold text-[#D46A2C]">
                    Find Your Ideal PG / Hostel
                  </h2>

                  <p className="mt-2 text-sm text-neutral-500">
                    Tell us your preferences —
                    we’ll recommend the best options.
                  </p>
                </div>

                <LeadForm />
              </div>
            </motion.div>
          </div>
        </Container>
      </section >

    </>
  );
}