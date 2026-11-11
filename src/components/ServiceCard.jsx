import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, index = 0 }) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const state = active ? "hover" : "rest";
  const Icon = service.icon;

  const t = { duration: reduceMotion ? 0 : 0.4, ease: "easeOut" };

  const iconVariants = {
    rest: {
      borderColor: "rgba(242,239,233,0.25)",
      color: "rgb(242,239,233)",
      transition: t,
    },
    hover: {
      borderColor: "rgba(200,169,126,1)",
      color: "rgb(200,169,126)",
      transition: t,
    },
  };
  const titleVariants = {
    rest: { x: 0, color: "rgb(242,239,233)", transition: t },
    hover: {
      x: reduceMotion ? 0 : 12,
      color: "rgb(200,169,126)",
      transition: t,
    },
  };
  const arrowVariants = {
    rest: { x: 0, y: 0, color: "rgba(242,239,233,0.6)", transition: t },
    hover: {
      x: reduceMotion ? 0 : 4,
      y: reduceMotion ? 0 : -4,
      color: "rgb(200,169,126)",
      transition: t,
    },
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : (index % 4) * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to="/contact"
        aria-label={`Enquire about ${service.title}`}
        className="block border-t border-graphite"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      >
        <motion.div
          initial="rest"
          animate={state}
          className="grid grid-cols-[auto_1fr_auto] items-start gap-5 py-8 md:gap-8 md:py-10"
        >
          <motion.span
            variants={iconVariants}
            className="flex h-12 w-12 items-center justify-center rounded-full border md:h-14 md:w-14"
          >
            <Icon size={22} aria-hidden="true" />
          </motion.span>

          <div>
            <motion.h3
              variants={titleVariants}
              className="font-display text-2xl font-medium uppercase leading-tight md:text-4xl"
            >
              {service.title}
            </motion.h3>
            <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-bone/70 md:text-base">
              {service.text}
            </p>
          </div>

          <motion.span variants={arrowVariants} className="mt-1 md:mt-3">
            <ArrowUpRight size={24} aria-hidden="true" />
          </motion.span>
        </motion.div>
      </Link>
    </motion.li>
  );
}
