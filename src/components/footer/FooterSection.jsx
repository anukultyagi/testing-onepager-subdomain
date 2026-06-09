import Container from "@/components/ui/Container";

const footerLinks = {
    cities: [
        "Noida",
        "Gurugram",
        "Bangalore",
        "Hyderabad",
    ],
    company: [
        "About",
        "Locations",
        "Amenities",
        "Reviews",
    ],
    support: [
        "FAQs",
        "Privacy Policy",
        "Terms",
        "Contact",
    ],
};

export default function FooterSection() {
    return (
        <footer className="border-t border-(--border) bg-white py-16">
            <Container>
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-(--text-primary)">
                            Uniliv
                        </h3>

                        <p className="mt-4 max-w-xs leading-7 text-(--text-secondary)">
                            Premium co-living spaces
                            designed for students and
                            working professionals.
                        </p>

                        <div className="mt-6 flex gap-3">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="h-10 w-10 rounded-full bg-[#FFF4ED]"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Cities */}
                    <div>
                        <h4 className="font-semibold text-(--text-primary)">
                            Cities
                        </h4>

                        <div className="mt-5 space-y-3">
                            {footerLinks.cities.map(
                                (city) => (
                                    <p
                                        key={city}
                                        className="text-(--text-secondary) transition hover:text-[#F38744]"
                                    >
                                        {city}
                                    </p>
                                )
                            )}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-(--text-primary)">
                            Company
                        </h4>

                        <div className="mt-5 space-y-3">
                            {footerLinks.company.map(
                                (link) => (
                                    <p
                                        key={link}
                                        className="text-(--text-secondary) transition hover:text-[#F38744]"
                                    >
                                        {link}
                                    </p>
                                )
                            )}
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-semibold text-(--text-primary)">
                            Support
                        </h4>

                        <div className="mt-5 space-y-3">
                            {footerLinks.support.map(
                                (link) => (
                                    <p
                                        key={link}
                                        className="text-(--text-secondary) transition hover:text-[#F38744]"
                                    >
                                        {link}
                                    </p>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-14 border-t border-(--border) pt-8">
                    <p className="text-center text-sm text-(--text-muted)">
                        © 2026 Uniliv. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}