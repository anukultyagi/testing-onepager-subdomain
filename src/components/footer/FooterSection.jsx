import Container from "@/components/ui/Container";
import { CONTACT } from "@/data/contact";
import {
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import Image from "next/image";

const logoWidth = 220;
const logoHeight = 70;

export default function FooterSection() {
    return (
        <footer className="relative overflow-hidden bg-[#FFF9F5] py-16 pb-28 lg:py-20 lg:pb-20">

            {/* subtle ambient glow */}
            <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#F38744]/[0.03] blur-[100px]" />

            <Container>
                <div className="relative text-center">

                    {/* Brand */}
                    <div className="mx-auto max-w-xl">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/unilivLogo.svg"
                                className="object-contain"
                                width={logoWidth}
                                height={logoHeight}
                                alt="Uniliv logo"
                            />
                        </div>

                        <p className="mt-3 text-base leading-7 text-(--text-secondary)">
                            Professionally managed living spaces for students and professionals.
                        </p>

                        <p className="mt-2 text-sm text-(--text-muted)">
                            Designed to make everyday living easier.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="mt-10 flex flex-col items-center justify-center gap-5 text-sm text-(--text-secondary) sm:flex-row sm:flex-wrap sm:gap-7">

                        <a
                            href={`tel:+${CONTACT.mobile}`}
                            className="inline-flex items-center gap-2 transition hover:text-[#F38744]"
                        >
                            <Phone
                                size={16}
                                strokeWidth={1.8}
                            />
                            {CONTACT.displayPhone}
                        </a>

                        <a
                            href={`mailto:${CONTACT.email}`}
                            className="inline-flex items-center gap-2 transition hover:text-[#F38744]"
                        >
                            <Mail
                                size={16}
                                strokeWidth={1.8}
                            />
                            {CONTACT.email}
                        </a>

                        <div className="inline-flex items-center gap-2 text-center sm:text-left">
                            <MapPin
                                size={16}
                                strokeWidth={1.8}
                            />

                            <span>
                                Noida • Greater Noida • Delhi NCR
                                <br className="sm:hidden" />
                                <span className="hidden sm:inline"> • </span>
                                Bangalore • Dehradun • Gurugram
                            </span>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[#F3D4BF] pt-8 text-sm text-(--text-muted)">
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
                    <div className="mt-8">
                        <p className="text-xs tracking-wide text-(--text-muted)">
                            © 2026 Uniliv. All rights reserved.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}