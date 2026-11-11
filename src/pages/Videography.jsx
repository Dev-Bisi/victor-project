import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";
import { videos, videoCategories, videoFormats } from "../data/videos";

export default function Videography() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All" ? videos : videos.filter((v) => v.category === active);

  return (
    <PageTransition>
      <Seo
        title="About"
        description="Meet the studio behind the films. We turn real moments into visual memories through cinematic and mobile videography."
      />
      {/* Page title */}
      <section className="px-6 pb-10 pt-36 md:px-10 md:pb-14 md:pt-44">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent sm:text-xs">
              Videography
            </p>
          </Reveal>
          <Reveal as="h1" delay={0.15}>
            <span className="mt-5 block max-w-4xl font-display text-5xl font-medium uppercase leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl">
              Stories in motion.
            </span>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-base font-light text-bone/75 md:text-lg">
              From cinematic productions to fast, authentic mobile films, every
              project is shot with intention and edited to make you feel
              something.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter + video grid */}
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1500px]">
          <div
            role="group"
            aria-label="Filter videos by category"
            className="flex flex-wrap gap-x-8 gap-y-2 border-b border-graphite"
          >
            {videoCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={active === cat}
                onClick={() => setActive(cat)}
                className={`relative min-h-[44px] pb-3 text-xs uppercase tracking-[0.25em] transition-colors duration-300 ${
                  active === cat ? "text-bone" : "text-bone/50 hover:text-bone"
                }`}
              >
                {cat}
                {active === cat && (
                  <motion.span
                    layoutId="video-filter-underline"
                    transition={{ duration: reduceMotion ? 0 : 0.3 }}
                    className="absolute inset-x-0 -bottom-px h-px bg-accent"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
            <AnimatePresence>
              {filtered.map((video, i) => (
                <motion.div
                  key={video.id}
                  layout={!reduceMotion}
                  initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
                  transition={{ duration: reduceMotion ? 0 : 0.4 }}
                >
                  <VideoCard video={video} index={i} onPlay={setSelected} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Two ways we film */}
      <section className="bg-charcoal px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent sm:text-xs">
              Two ways we film
            </p>
          </Reveal>

          <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
            {videoFormats.map((format, i) => (
              <Reveal key={format.title} delay={i * 0.15}>
                <div className="border-t border-graphite pt-8">
                  <h2 className="font-display text-3xl font-medium uppercase md:text-4xl">
                    {format.title}
                  </h2>
                  <p className="mt-4 max-w-md text-base font-light leading-relaxed text-bone/70">
                    {format.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <Button to="/contact">Start Your Project</Button>
          </Reveal>
        </div>
      </section>

      <VideoModal video={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  );
}
