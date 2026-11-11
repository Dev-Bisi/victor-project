import { Play } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./Button";

const smallLabel = "text-[11px] uppercase tracking-[0.25em] text-accent";

export default function ProjectRow({ project, index, onPlay }) {
  const flip = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="grid items-center gap-8 border-t border-graphite py-12 md:py-16 lg:grid-cols-12 lg:gap-16">
      {/* Image */}
      <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <button
          type="button"
          onClick={() => onPlay(project)}
          aria-label={`Watch ${project.title}`}
          className="group relative block aspect-[4/3] w-full overflow-hidden bg-charcoal sm:aspect-[16/10]"
        >
          <img
            src={project.image}
            alt={`${project.title} - ${project.category}`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transform-none"
          />
          <span className="absolute inset-0 bg-ink/30 transition-colors duration-500 group-hover:bg-ink/50" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-bone/60 bg-ink/35 text-bone transition-all duration-500 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-ink md:h-20 md:w-20">
              <Play
                size={26}
                fill="currentColor"
                className="ml-1"
                aria-hidden="true"
              />
            </span>
          </span>
        </button>
      </Reveal>

      {/* Text */}
      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <Reveal>
          <p className="flex items-center gap-4">
            <span className="font-display text-3xl text-accent">{number}</span>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-bone/70">
              {project.category} · {project.year}
            </span>
          </p>
        </Reveal>

        <Reveal as="h2" delay={0.1}>
          <span className="mt-5 block font-display text-4xl font-medium uppercase leading-[1.05] md:text-5xl lg:text-6xl">
            {project.title}
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 max-w-md text-base font-light leading-relaxed text-bone/70 md:text-lg">
            {project.description}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-graphite pt-6 text-sm">
            <div>
              <dt className={smallLabel}>Format</dt>
              <dd className="mt-2 font-light text-bone/80">
                {project.format} Videography
              </dd>
            </div>
            <div>
              <dt className={smallLabel}>Services</dt>
              <dd className="mt-2 font-light text-bone/80">
                {project.services.join(", ")}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.4} className="mt-8">
          <Button type="button" onClick={() => onPlay(project)}>
            Watch the Film
          </Button>
        </Reveal>
      </div>
    </article>
  );
}
