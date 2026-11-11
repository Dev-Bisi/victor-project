import Reveal from "./Reveal";
import Button from "./Button";
import { intro } from "../data/home";

export default function Intro() {
  return (
    <section className="bg-ink px-6 py-24 md:px-10 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: label + big statement */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent sm:text-xs">
              {intro.label}
            </p>
          </Reveal>

          <Reveal delay={0.15} as="h2">
            <span className="mt-6 block font-display text-4xl font-medium uppercase leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              {intro.heading}
            </span>
          </Reveal>
        </div>

        {/* Right: paragraph + button */}
        <div className="flex flex-col justify-end lg:col-span-5">
          <Reveal delay={0.3}>
            <p className="text-base font-light leading-relaxed text-bone/75 md:text-lg">
              {intro.text}
            </p>
          </Reveal>

          <Reveal delay={0.45} className="mt-10">
            <Button to={intro.buttonLink} variant="outline">
              {intro.buttonLabel}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}