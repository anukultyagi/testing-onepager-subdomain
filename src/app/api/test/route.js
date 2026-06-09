import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
  try {
    const body = await request.json();

    if (body.website) {
      return NextResponse.json(
        {
          success: false,
          message: "Spam detected",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await supabase
      .from("leads")
      .insert([
        {
          full_name: body.fullName,
          phone_number: body.phoneNumber,
          city: body.city,
          source: "meta_ads",
        },
      ]);

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}