import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { validateLead } from "@/lib/validation";

export async function POST(request) {
  try {
    const body = await request.json();

    // Honeypot spam protection
    if (body.website) {
      return NextResponse.json(
        {
          success: false,
          message: "Spam detected",
        },
        {
          status: 400,
        },
      );
    }

    // Validate form data
    const validation = validateLead(body);

    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: validation.message,
        },
        {
          status: 400,
        },
      );
    }

    const { fullName, phoneNumber, city, userType } = validation.cleanedData;

    // Insert into Supabase
    const { error } = await supabase.from("leads").insert([
      {
        full_name: fullName,
        phone_number: phoneNumber,
        city,
        user_type: userType,
        source: "meta_ads",
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to save lead",
        },
        {
          status: 500,
        },
      );
    }

    // Send to Google Sheets
    try {
      await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: fullName,
          phone_number: phoneNumber,
          city,
          user_type: userType,
          source: "meta_ads",
        }),
      });
    } catch (sheetError) {
      console.error("Google Sheet Error:", sheetError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead submitted successfully",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Lead API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
