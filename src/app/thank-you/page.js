import { Check } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-(--background)">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-3xl rounded-[40] border border-(--border) bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] lg:p-12">
          {/* Success badge */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF4ED]">
            <Check size={34} className="text-[#F38744]" strokeWidth={2.5} />
          </div>

          {/* Heading */}
          <div className="mt-8 text-center">
            <p className="font-medium text-[#F38744]">Request Received</p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-(--text-primary) lg:text-5xl">
              We’ll Help You Find Your Ideal Stay.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-(--text-secondary)">
              Our team will contact you shortly to understand your requirements
              and help you find the perfect co-living option.
            </p>
          </div>

          {/* Expectations */}
          <div className="mt-10 rounded-[28] bg-[#FFF4ED]/50 p-6">
            <h2 className="font-semibold text-(--text-primary)">
              What happens next?
            </h2>

            <div className="mt-5 space-y-4">
              {[
                "You’ll receive a callback shortly",
                "We’ll understand your city & preferences",
                "Our team will recommend suitable options",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#F38744]" />

                  <p className="text-(--text-secondary)">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="rounded-[18] border border-(--border) bg-white px-8 py-4 text-center font-semibold text-(--text-primary) transition hover:border-[#F38744]"
            >
              Back to Homepage
            </Link>

            <a
              href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE}`}
              className="rounded-md bg-[#F38744] px-8 py-4 text-center font-semibold text-white transition hover:scale-[1.01] hover:opacity-95"
            >
              Call Support
            </a>
          </div>

          {/* Small trust text */}
          <p className="mt-8 text-center text-sm text-(--text-muted)">
            Trusted by students & professionals across cities.
          </p>
        </div>
      </div>
    </main>
  );
}
