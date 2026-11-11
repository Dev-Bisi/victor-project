import Reveal from "./Reveal";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import { serviceGroups } from "../data/services";

export default function ServicesPreview() {
  return (
    <section className="bg-charcoal px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading
          label="What we do"
          title="Two ways to tell your story"
          text="Cinematic productions or fast, authentic mobile films. Choose the style that fits your story."
          className="mb-14 md:mb-20"
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {serviceGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.15}>
              <div className="border-t border-graphite pt-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
                  {group.label}
                </p>
                <h3 className="mt-3 font-display text-3xl font-medium uppercase md:text-4xl">
                  {group.title}
                </h3>
                <p className="mt-4 max-w-md text-base font-light leading-relaxed text-bone/70">
                  {group.intro}
                </p>

                <ul className="mt-6 space-y-3">
                  {group.services.map((service) => (
                    <li
                      key={service.title}
                      className="flex items-center gap-3 text-sm text-bone/80"
                    >
                      <span aria-hidden="true" className="h-px w-5 bg-accent" />
                      {service.title}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <Button to="/services" variant="outline">
            Explore All Services
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
