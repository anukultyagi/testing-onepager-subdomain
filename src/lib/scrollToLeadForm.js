export default function scrollToLeadForm() {
  const form = document.getElementById("lead-form");

  if (!form) return;

  const navbarHeight = 96;

  const elementPosition = form.getBoundingClientRect().top + window.scrollY;

  const offsetPosition = elementPosition - navbarHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
