export function validateLead(body) {
  const fullName = body.fullName?.trim();

  const phoneNumber = body.phoneNumber?.replace(/\D/g, "").trim();

  const city = body.city?.trim() || "";

  const userType = body.userType?.trim() || "";

  // Full name validation
  if (!fullName) {
    return {
      isValid: false,
      message: "Full name is required",
    };
  }

  // Phone validation
  if (!phoneNumber) {
    return {
      isValid: false,
      message: "Phone number is required",
    };
  }

  if (!city) {
    return {
      isValid: false,
      message: "Please select a city",
    };
  }

  if (phoneNumber.length < 10 || phoneNumber.length > 15) {
    return {
      isValid: false,
      message: "Invalid phone number",
    };
  }

  return {
    isValid: true,
    cleanedData: {
      fullName,
      phoneNumber,
      city,
      userType,
    },
  };
}
