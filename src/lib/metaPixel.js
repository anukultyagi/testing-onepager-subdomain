export const pageView = () => {
  window.fbq?.("track", "PageView");
};

export const generateLead = () => {
  window.fbq?.("track", "Lead");
};