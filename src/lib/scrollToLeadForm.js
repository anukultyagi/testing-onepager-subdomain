export default function scrollToLeadForm() {
  const leadForm =
    document.getElementById(
      "lead-form"
    );

  if (!leadForm) return;

  leadForm.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}