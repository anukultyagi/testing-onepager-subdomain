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

  const [formData, setFormData] =
    useState({
      fullName: "",
      phoneNumber: "",
      city: "",
      userType: "Student",
      website: "",
    });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  const handleInputChange = (
    event
  ) => {
    const { name, value } =
      event.target;

    // Phone number restriction
    if (name === "phoneNumber") {
      const numericValue =
        value.replace(/\D/g, "");

      setFormData(
        (previousData) => ({
          ...previousData,
          [name]: numericValue,
        })
      );

      return;
    }

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    // Prevent duplicate clicks
    if (isSubmitting) return;

    setErrorMessage("");

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

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Failed to submit"
        );
      }

      generateLead();

      router.push(
        "/thank-you"
      );
    } catch (error) {
      console.error(error);

      setErrorMessage(
        error.message ||
        "Something went wrong"
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
          disabled={isSubmitting}
          required
          className="h-14 w-full rounded-2xl border border-(--border) bg-white px-5 outline-none transition focus:border-[#F38744] disabled:cursor-not-allowed disabled:bg-gray-100"
        />
      </div>

      {/* Phone */}
      <div className="flex overflow-hidden rounded-2xl border border-(--border) focus-within:border-[#F38744]">
        <div className="flex items-center border-r border-(--border) bg-[#FFF4ED] px-4 font-medium text-(--text-primary)">
          +91
        </div>

        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          inputMode="numeric"
          value={
            formData.phoneNumber
          }
          onChange={
            handleInputChange
          }
          disabled={isSubmitting}
          required
          maxLength={10}
          className="h-14 w-full px-5 outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
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
              disabled={
                isSubmitting
              }
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
              className={`rounded-2xl border px-4 py-4 text-sm font-medium transition disabled:cursor-not-allowed ${formData.userType ===
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
        disabled={isSubmitting}
        required
        className="h-14 w-full rounded-2xl border border-(--border) bg-white px-5 outline-none transition focus:border-[#F38744] disabled:cursor-not-allowed disabled:bg-gray-100"
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

      {/* Error Message */}
      {errorMessage && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {errorMessage}
        </p>
      )}

      {/* CTA */}
      <button
        type="submit"
        disabled={
          isSubmitting
        }
        className="flex h-14 w-full items-center justify-center rounded-md bg-[#F38744] text-base font-semibold text-white transition hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <span>
            Submitting...
          </span>
        ) : (
          "Schedule a Visit"
        )}
      </button>

      {/* Trust text */}
      <p className="text-center text-xs text-(--text-muted)">
        🔒 Your data is secure
      </p>
    </form>
  );
}