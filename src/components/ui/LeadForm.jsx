"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateLead } from "@/lib/metaPixel";


const cities = [
    "Noida",
    "Delhi",
    "Gurugram",
    "Bangalore",
    "Hyderabad",
];

export default function LeadForm() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        city: "",
        userType: "Student",
        website: "",
    });

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const handleInputChange = (event) => {
        const { name, value } =
            event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        event
    ) => {
        event.preventDefault();

        try {
            setIsSubmitting(true);

            const response =
                await fetch("/api/lead", {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(
                        formData
                    ),
                });

            const data =
                await response.json();

            if (!data.success) {
                throw new Error(
                    data.message
                );
            }
            generateLead();
            router.push(
                "/thank-you"
            );
        } catch (error) {
            console.error(error);
            alert(
                "Failed to submit"
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            id="lead-form"
            onSubmit={handleSubmit}
            className="space-y-5"
        >
            {/* Name */}
            <div>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={
                        formData.fullName
                    }
                    onChange={
                        handleInputChange
                    }
                    required
                    className="h-14 w-full rounded-[16] border border-(--border) bg-white px-5 outline-none transition focus:border-[#F38744]"
                />
            </div>

            {/* Phone */}
            <div className="flex overflow-hidden rounded-[16] border border-(--border) focus-within:border-[#F38744]">
                <div className="flex items-center border-r border-(--border) bg-[#FFF4ED] px-4 font-medium text-(--text-primary)">
                    +91
                </div>

                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    pattern="[0-9]{10}"
                    inputMode="numeric"
                    value={
                        formData.phoneNumber
                    }
                    onChange={
                        handleInputChange
                    }
                    required
                    maxLength={10}
                    className="h-14 w-full px-5 outline-none"
                />
            </div>

            {/* User Type */}
            <div>
                <p className="mb-3 text-sm font-medium text-(--text-secondary)">
                    I am a
                </p>

                <div className="grid grid-cols-2 gap-3">
                    {[
                        "Student",
                        "Professional",
                    ].map((type) => (
                        <button
                            key={type}
                            type="button"
                            onClick={() =>
                                setFormData(
                                    (
                                        previousData
                                    ) => ({
                                        ...previousData,
                                        userType:
                                            type,
                                    })
                                )
                            }
                            className={`rounded-[16] border px-4 py-4 text-sm font-medium transition ${formData.userType ===
                                type
                                ? "border-[#F38744] bg-[#FFF4ED] text-[#F38744]"
                                : "border-(--border) bg-white text-(--text-secondary) hover:border-[#F38744]/30"
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* City */}
            <select
                name="city"
                value={formData.city}
                onChange={
                    handleInputChange
                }
                required
                className="h-14 w-full rounded-[16] border border-(--border) bg-white px-5 outline-none transition focus:border-[#F38744]"
            >
                <option value="">
                    Select Preferred City
                </option>

                {cities.map((city) => (
                    <option
                        key={city}
                        value={city}
                    >
                        {city}
                    </option>
                ))}
            </select>

            {/* Honeypot */}
            <input
                type="text"
                name="website"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
                value={
                    formData.website
                }
                onChange={
                    handleInputChange
                }
            />

            {/* CTA */}
            <button
                type="submit"
                disabled={
                    isSubmitting
                }
                className="h-14 w-full rounded-[18] bg-[#F38744] text-base font-semibold text-white transition hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
                {isSubmitting
                    ? "Submitting..."
                    : "Schedule a Visit"}
            </button>

            {/* Trust text */}
            <p className="text-center text-xs text-(--text-muted)">
                🔒 Your data is secure
            </p>
        </form>
    );
}