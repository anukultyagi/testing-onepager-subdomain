import { Check } from "lucide-react";
import Link from "next/link";

import { CONTACT } from "@/data/contact";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFB]">

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto w-full max-w-3xl rounded-2xl border border-[#F3D4BF] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.04)] sm:p-8 lg:p-12">

          {/* Success icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF4ED]">

            <Check
              size={34}
              className="text-[#F38744]"
              strokeWidth={2.4}
            />
          </div>

          {/* Heading */}
          <div className="mt-8 text-center">

            <p className="text-sm font-medium tracking-wide text-[#A96B45]">
              We’ve received your request
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight leading-tight text-(--text-primary) sm:text-4xl lg:text-5xl">
              We’ll Help You Find
              The Right Space.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-(--text-secondary)">
              Our team will contact you shortly
              to understand your requirements
              and recommend the best living
              options for you.
            </p>
          </div>

          {/* What happens next */}
          <div className="mt-10 rounded-2xl border border-[#F3D4BF] bg-[#FFF7F2] p-6">

            <h2 className="font-semibold tracking-tight text-(--text-primary)">
              What happens next?
            </h2>

            <div className="mt-5 space-y-4">

              {[
                "You’ll receive a callback shortly",
                "We’ll understand your preferences & city",
                "Our team will recommend suitable options",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-[#F38744]" />

                  <p className="text-(--text-secondary)">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-md border border-[#F3D4BF] bg-white px-6 text-center font-semibold text-(--text-primary) transition duration-300 hover:-translate-y-[2px]"
            >
              Back to Homepage
            </Link>

            <a
              href={`tel:+${CONTACT.mobile}`}
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#F38744] px-6 text-center font-semibold text-white transition duration-300 hover:-translate-y-[2px] hover:opacity-95"
            >
              Talk to Our Team
            </a>
          </div>

          {/* Trust text */}
          <p className="mt-8 text-center text-sm text-(--text-muted)">
            Trusted by students & professionals across cities.
          </p>
        </div>
      </div>
    </main>
  );
}