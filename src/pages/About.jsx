import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import Counter from "../components/Counter";
import ParallaxImage from "../components/ParallaxImage";
import { aboutHero, story, philosophy, stats, values } from "../data/about";

const labelClass =
  "text-[11px] font-medium uppercase tracking-[0.3em] text-accent sm:text-xs";

export default function About() {
  return (
    <PageTransition>
      <Seo
        title="About"
        description="Meet the studio behind the films. We turn real moments into visual memories through cinematic and mobile videography."
      />
      {/* Page title */}
      <section className="px-6 pb-12 pt-36 md:px-10 md:pb-16 md:pt-44">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className={labelClass}>{aboutHero.label}</p>
          </Reveal>
          <Reveal as="h1" delay={0.15}>
            <span className="mt-5 block max-w-5xl font-display text-5xl font-medium uppercase leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl">
              {aboutHero.heading}
            </span>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-base font-light text-bone/75 md:text-lg">
              {aboutHero.text}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story with director photo */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <ParallaxImage
              src={story.image}
              alt={story.imageAlt}
              className="aspect-[4/5] w-full"
            />
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-bone/60">
              {story.caption}
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className={labelClass}>{story.label}</p>
            </Reveal>
            <Reveal as="h2" delay={0.15}>
              <span className="mt-4 block font-display text-4xl font-medium uppercase leading-[1.05] sm:text-5xl md:text-6xl">
                {story.heading}
              </span>
            </Reveal>
            <div className="mt-8 space-y-5">
              {story.paragraphs.map((text, i) => (
                <Reveal key={i} delay={0.25 + i * 0.1}>
                  <p className="text-base font-light leading-relaxed text-bone/75 md:text-lg">
                    {text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy and approach */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-2 md:gap-16">
          {philosophy.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.15}>
              <div className="border-t border-graphite pt-8">
                <h2 className="font-display text-3xl font-medium uppercase md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-4 max-w-md text-base font-light leading-relaxed text-bone/70">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-charcoal px-6 py-20 md:px-10 md:py-28">
        <dl className="mx-auto grid max-w-[1500px] grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="border-t border-graphite pt-6">
                <dd className="font-display text-6xl font-medium text-bone md:text-7xl lg:text-8xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-3 text-[11px] uppercase tracking-[0.25em] text-accent sm:text-xs">
                  {stat.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Values */}
      <section className="px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className={labelClass}>What we stand for</p>
          </Reveal>
          <Reveal as="h2" delay={0.15}>
            <span className="mt-4 block font-display text-4xl font-medium uppercase leading-[1.05] sm:text-5xl md:text-6xl">
              Our values
            </span>
          </Reveal>

          <ul className="mt-12 md:mt-16">
            {values.map((value, i) => (
              <Reveal as="li" key={value.title} delay={0.05}>
                <div className="grid gap-3 border-t border-graphite py-8 md:grid-cols-12 md:gap-8">
                  <span className="font-display text-2xl text-accent md:col-span-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl font-medium uppercase md:col-span-4 md:text-4xl">
                    {value.title}
                  </h3>
                  <p className="text-base font-light leading-relaxed text-bone/70 md:col-span-6">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12">
            <Button to="/contact">Work With Us</Button>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
