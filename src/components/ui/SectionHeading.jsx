export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      {eyebrow && (
        <p className="font-medium text-[#F38744]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#111317] lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg text-[#6B7280]">
          {description}
        </p>
      )}
    </div>
  );
}