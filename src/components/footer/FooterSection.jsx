import Container from "@/components/ui/Container";
import {
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

export default function FooterSection() {
    return (
        <footer className="relative overflow-hidden bg-[#FFF9F5] py-20">

            {/* Subtle decorative glow */}
            <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#F38744]/[0.03] blur-[100px]" />

            <Container>
                <div className="relative text-center">

                    {/* Brand */}
                    <div className="mx-auto max-w-xl">
                        <h3 className="text-3xl font-semibold tracking-tight text-(--text-primary)">
                            Uniliv
                        </h3>

                        <p className="mt-4 text-lg text-(--text-secondary)">
                            Premium co-living for students &
                            professionals.
                        </p>

                        <p className="mt-2 text-sm text-(--text-muted)">
                            Designed for stress-free living.
                        </p>
                    </div>

                    {/* Contact row */}
                    <div className="mt-10 flex flex-col items-center justify-center gap-5 text-sm text-(--text-secondary) sm:flex-row sm:flex-wrap sm:gap-8">

                        <a
                            href="tel:+919999999999"
                            className="inline-flex items-center gap-2 transition hover:text-[#F38744]"
                        >
                            <Phone size={16} strokeWidth={1.8} />
                            +91 99999 99999
                        </a>

                        <a
                            href="mailto:hello@uniliv.com"
                            className="inline-flex items-center gap-2 transition hover:text-[#F38744]"
                        >
                            <Mail size={16} strokeWidth={1.8} />
                            hello@uniliv.com
                        </a>

                        <div className="inline-flex items-center gap-2">
                            <MapPin size={16} strokeWidth={1.8} />
                            Noida • Greater Noida • Delhi NCR
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="mt-10 flex items-center justify-center gap-6 text-sm text-(--text-muted)">
                        <a
                            href="/privacy-policy"
                            className="transition hover:text-[#F38744]"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="/terms"
                            className="transition hover:text-[#F38744]"
                        >
                            Terms & Conditions
                        </a>

                        <a
                            href="/refund-policy"
                            className="transition hover:text-[#F38744]"
                        >
                            Cancellation Policy
                        </a>
                    </div>

                    {/* Bottom */}
                    <div className="mt-12 border-t border-[#F3D4BF]/70 pt-6">
                        <p className="text-xs tracking-wide text-(--text-muted)">
                            © 2026 Uniliv. All rights reserved.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
