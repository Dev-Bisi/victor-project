import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoCard({ video, index = 0, onPlay }) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const state = active ? "hover" : "rest";

  const t = { duration: reduceMotion ? 0 : 0.6, ease: "easeOut" };

  const imageVariants = {
    rest: { scale: 1, transition: t },
    hover: { scale: reduceMotion ? 1 : 1.06, transition: t },
  };
  const overlayVariants = {
    rest: { opacity: 0, transition: t },
    hover: { opacity: 1, transition: t },
  };
  const playVariants = {
    rest: {
      scale: 1,
      backgroundColor: "rgba(10,10,10,0.35)",
      color: "rgb(242,239,233)",
      transition: t,
    },
    hover: {
      scale: reduceMotion ? 1 : 1.12,
      backgroundColor: "rgba(200,169,126,1)",
      color: "rgb(10,10,10)",
      transition: t,
    },
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
      className="relative aspect-[4/3] overflow-hidden bg-charcoal sm:aspect-[16/10]"
    >
      <button
        type="button"
        onClick={() => onPlay(video)}
        aria-label={`Play ${video.title}, ${video.label}, ${video.year}`}
        className="absolute inset-0 block w-full text-left"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      >
        <motion.div initial="rest" animate={state} className="h-full w-full">
          <motion.img
            variants={imageVariants}
            src={video.thumbnail}
            alt={`${video.title} - ${video.label}`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-ink/85 to-transparent" />
          <motion.div
            variants={overlayVariants}
            className="absolute inset-0 bg-ink/45"
          />

          {/* Play icon in the center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              variants={playVariants}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-bone/60 md:h-20 md:w-20"
            >
              <Play
                size={26}
                fill="currentColor"
                className="ml-1"
                aria-hidden="true"
              />
            </motion.span>
          </div>

          {/* Info */}
          <motion.div
            variants={infoVariants}
            className="absolute inset-x-0 bottom-0 p-5 md:p-7"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent sm:text-[11px]">
              {video.label}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium uppercase leading-tight md:text-3xl">
              {video.title}
            </h3>
            <p className="mt-1 text-xs tracking-widest text-bone/70">
              {video.year}
            </p>
          </motion.div>
        </motion.div>
      </button>
    </motion.article>
  );
}
