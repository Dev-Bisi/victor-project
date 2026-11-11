import Reveal from "./Reveal";

export default function SectionHeading({
  label,
  title,
  text,
  align = "left",
  className = "",
}) {
  const center = align === "center";

  return (
    <div
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""} ${className}`}
    >
      {label && (
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent sm:text-xs">
            {label}
          </p>
        </Reveal>
      )}

      <Reveal delay={0.15} as="h2">
        <span className="mt-4 block font-display text-4xl font-medium uppercase leading-[1.05] sm:text-5xl md:text-6xl">
          {title}
        </span>
      </Reveal>

      {text && (
        <Reveal delay={0.3}>
          <p className="mt-5 text-base font-light text-bone/70 md:text-lg">
            {text}
          </p>
        </Reveal>
      )}
    </div>
  );
}
