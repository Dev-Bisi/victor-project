import { useState } from "react";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import ProjectRow from "../components/ProjectRow";
import VideoModal from "../components/VideoModal";
import CallToAction from "../components/CallToAction";
import { projects } from "../data/projects";

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  // The video player expects a "label", so we use the project's category
  const play = (project) =>
    setSelected({ ...project, label: project.category });

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
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent sm:text-xs">
              Portfolio
            </p>
          </Reveal>
          <Reveal as="h1" delay={0.15}>
            <span className="mt-5 block max-w-4xl font-display text-5xl font-medium uppercase leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl">
              Selected projects.
            </span>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-base font-light text-bone/75 md:text-lg">
              Stories we've been trusted with, and what went into making each
              one.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1500px]">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              onPlay={play}
            />
          ))}
        </div>
      </section>

      <CallToAction />

      <VideoModal video={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  );
}
