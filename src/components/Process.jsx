import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/services";

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-charcoal px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading
          label="Our Process"
          title="How we work"
          className="mb-14 md:mb-20"
        />

        <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Gold line that draws across */}
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: reduceMotion ? 1 : 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: reduceMotion ? 0 : 1,
                  delay: reduceMotion ? 0 : 0.2 + i * 0.15,
                  ease: "easeOut",
                }}
                className="block h-px origin-left bg-accent/60"
              />

              <p className="mt-6 font-display text-6xl font-medium text-accent md:text-7xl">
                {step.number}
              </p>
              <h3 className="mt-4 text-sm font-medium uppercase tracking-[0.3em]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-base font-light leading-relaxed text-bone/70">
                {step.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
