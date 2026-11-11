import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioCard({ project, className = "", index = 0 }) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const state = active ? "hover" : "rest";

  const t = { duration: reduceMotion ? 0 : 0.6, ease: "easeOut" };

  // The hover animations for each layer of the card
  const imageVariants = {
    rest: { scale: 1, transition: t },
    hover: { scale: reduceMotion ? 1 : 1.06, transition: t },
  };
  const overlayVariants = {
    rest: { opacity: 0, transition: t },
    hover: { opacity: 1, transition: t },
  };
  const arrowVariants = {
    rest: { opacity: 0, x: -8, y: 8, transition: t },
    hover: { opacity: 1, x: 0, y: 0, transition: t },
  };
  const infoVariants = {
    rest: { y: 0, transition: t },
    hover: { y: reduceMotion ? 0 : -12, transition: t },
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        delay: reduceMotion ? 0 : (index % 2) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative overflow-hidden bg-charcoal ${className}`}
    >
      <Link
        to={project.link}
        aria-label={`${project.title}, ${project.category}, ${project.year}`}
        className="absolute inset-0 block"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      >
        <motion.div initial="rest" animate={state} className="h-full w-full">
          <motion.img
            variants={imageVariants}
            src={project.image}
            alt={`${project.title} - ${project.category}`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Soft dark fade at the bottom so the text is always readable */}
          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-ink/85 to-transparent" />

          {/* Extra dark overlay that appears on hover */}
          <motion.div variants={overlayVariants} className="absolute inset-0 bg-ink/45" />

          {/* Arrow icon */}
          <motion.span
            variants={arrowVariants}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-bone/60 text-bone md:right-6 md:top-6"
          >
            <ArrowUpRight size={20} />
          </motion.span>

          {/* Project info */}
          <motion.div
            variants={infoVariants}
            className="absolute inset-x-0 bottom-0 p-5 md:p-7"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent sm:text-[11px]">
              {project.category}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium uppercase leading-tight md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-xs tracking-widest text-bone/70">{project.year}</p>
          </motion.div>
        </motion.div>
      </Link>
    </motion.article>
  );
}