import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import Button from "./Button";
import { cta } from "../data/home";

export default function CallToAction() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-charcoal px-6 py-24 md:px-10 md:py-32">
      <motion.img
        src={cta.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        initial={{ scale: reduceMotion ? 1 : 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0 : 3, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] text-center">
        <Reveal as="h2">
          <span className="mx-auto block max-w-4xl font-display text-5xl font-medium uppercase leading-[1.02] sm:text-6xl md:text-7xl">
            {cta.heading}
          </span>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-lg text-base font-light text-bone/80 md:text-lg">
            {cta.text}
          </p>
        </Reveal>

        <Reveal
          delay={0.3}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button to="/contact">Book a Session</Button>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
