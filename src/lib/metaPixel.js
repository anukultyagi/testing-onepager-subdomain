export const pageView = () => {
  if (
    typeof window !== "undefined" &&
    window.fbq
  ) {
    window.fbq(
      "track",
      "PageView"
    );
  }
};

export const generateLead = () => {
  if (
    typeof window !== "undefined" &&
    window.fbq
  ) {
    window.fbq(
      "track",
      "Lead"
    );
  }
};