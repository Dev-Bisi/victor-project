import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const reduceMotion = useReducedMotion();
  const [[index, direction], setPage] = useState([0, 0]);
  const total = testimonials.length;
  const current = testimonials[index];

  const paginate = (dir) => setPage(([i]) => [(i + dir + total) % total, dir]);

  const variants = {
    enter: (dir) => ({ opacity: 0, x: reduceMotion ? 0 : dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: reduceMotion ? 0 : dir * -60 }),
  };

  const buttonClass =
    "flex h-12 w-12 items-center justify-center rounded-full border border-bone/30 text-bone transition-colors duration-300 hover:border-accent hover:text-accent";

  return (
    <section
      className="bg-ink px-6 py-24 md:px-10 md:py-32"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading
          label="Kind words"
          title="What our clients say"
          className="mb-12 md:mb-16"
        />

        {/* The quote */}
        <div className="min-h-[19rem] sm:min-h-[17rem]" aria-live="polite">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.figure
              key={current.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                ease: "easeOut",
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) paginate(1);
                else if (info.offset.x > 80) paginate(-1);
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <span
                aria-hidden="true"
                className="block font-display text-8xl leading-none text-accent/40"
              >
                “
              </span>
              <blockquote>
                <p className="-mt-6 font-display text-2xl font-medium leading-snug sm:text-3xl md:text-4xl">
                  {current.quote}
                </p>
              </blockquote>
              <figcaption className="mt-8">
                <span className="block text-sm font-medium uppercase tracking-[0.25em]">
                  {current.name}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-[0.25em] text-accent">
                  {current.service}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-between border-t border-graphite pt-6">
          <p className="text-xs tracking-[0.3em] text-bone/60">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className={buttonClass}
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className={buttonClass}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
