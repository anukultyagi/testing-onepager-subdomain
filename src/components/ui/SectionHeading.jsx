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
        <p className="text-sm font-medium tracking-wide text-[#A96B45]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 text-4xl font-semibold tracking-tight leading-tight text-(--text-primary) lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-(--text-secondary)">
          {description}
        </p>
      )}
    </div>
  );
}