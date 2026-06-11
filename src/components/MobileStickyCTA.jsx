"use client";

import scrollToLeadForm from "@/lib/scrollToLeadForm";
import { Phone, CalendarDays } from "lucide-react";
import { CONTACT } from "@/data/contact";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-[#F3D4BF] bg-white/95 px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+12px)] shadow-[0_-8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md lg:hidden">

      <div className="flex gap-3">

        {/* Call */}
        <a
          href={`tel:+${CONTACT.mobile}`}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-md border border-[#F3D4BF] bg-[#FFF4ED] px-4 font-semibold text-[#F38744] transition duration-300 active:scale-[0.98]"
        >
          <Phone size={16} />
          Call
        </a>

        {/* CTA */}
        <button
          onClick={scrollToLeadForm}
          className="flex h-12 text-nowrap flex-1 items-center justify-center gap-2 rounded-md bg-[#F38744] px-4 font-semibold text-white transition duration-300 active:scale-[0.98]"
        >
          <CalendarDays size={16} />
          Schedule a Visit
        </button>
      </div>
    </div>
  );
}