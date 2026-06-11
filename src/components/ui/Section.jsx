export default function Section({
  children,
  className = "",
  background = "",
  id = "",
  compact = false,
}) {
  return (
    <section
      id={id}
      className={`
        ${
          compact
            ? "py-12 lg:py-16"
            : "py-20 lg:py-28"
        }
        ${background}
        ${className}
      `}
    >
      {children}
    </section>
  );
}