export default function Section({
  children,
  className = "",
  background = "",
  id = "",
}) {
  return (
    <section
      id={id}
      className={`
        py-24
        lg:py-32
        ${background}
        ${className}
      `}
    >
      {children}
    </section>
  );
}