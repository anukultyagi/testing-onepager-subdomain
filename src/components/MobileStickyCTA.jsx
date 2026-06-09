"use client";

import scrollToLeadForm from "@/lib/scrollToLeadForm";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-[var(--border)] bg-white/90 p-4 backdrop-blur-xl lg:hidden">
      
      <div className="flex gap-3">
        
        {/* Call button */}
        <a
          href="tel:+919999999999"
          className="flex h-14 flex-1 items-center justify-center rounded-[18] border border-[#F38744]/20 bg-[#FFF4ED] font-semibold text-[#F38744]"
        >
          Call
        </a>

        {/* CTA */}
        <button
          onClick={scrollToLeadForm}
          className="h-14 flex-1 rounded-[18] bg-[#F38744] font-semibold text-white transition active:scale-[0.98]"
        >
          Schedule Visit
        </button>
      </div>
    </div>
  );
}