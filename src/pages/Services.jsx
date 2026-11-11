import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import Process from "../components/Process";
import { serviceGroups } from "../data/services";

const labelClass =
  "text-[11px] font-medium uppercase tracking-[0.3em] text-accent sm:text-xs";

export default function Services() {
  return (
    <PageTransition>
      <Seo
        title="About"
        description="Meet the studio behind the films. We turn real moments into visual memories through cinematic and mobile videography."
      />
      {/* Page title */}
      <section className="px-6 pb-8 pt-36 md:px-10 md:pb-12 md:pt-44">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className={labelClass}>Services</p>
          </Reveal>
          <Reveal as="h1" delay={0.15}>
            <span className="mt-5 block max-w-4xl font-display text-5xl font-medium uppercase leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl">
              What we create.
            </span>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-base font-light text-bone/75 md:text-lg">
              Two ways of filming, one standard of storytelling. Choose the
              style that fits your story, or let us help you decide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service groups */}
      {serviceGroups.map((group) => (
        <section key={group.id} className="px-6 py-14 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
              <Reveal>
                <p className={labelClass}>{group.label}</p>
              </Reveal>
              <Reveal as="h2" delay={0.15}>
                <span className="mt-4 block font-display text-4xl font-medium uppercase leading-[1.05] sm:text-5xl">
                  {group.title}
                </span>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-bone/70">
                  {group.intro}
                </p>
              </Reveal>
            </div>

            <ul className="border-b border-graphite lg:col-span-8">
              {group.services.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={i} />
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* How we work */}
      <Process />

      {/* Closing call to action */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px] text-center">
          <Reveal as="h2">
            <span className="block font-display text-4xl font-medium uppercase leading-[1.05] sm:text-5xl md:text-6xl">
              Not sure what you need?
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-md text-base font-light text-bone/70 md:text-lg">
              Tell us about your idea and we'll recommend the right approach.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex justify-center">
            <Button to="/contact">Get in Touch</Button>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
