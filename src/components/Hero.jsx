import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "../assets/project-02.jpg";
import heroImg from "../assets/hero.jpg";

const words = ["weddings.", "events.", "brands.", "every moment."];
const pad = (n) => String(n).padStart(2, "0");

function Typewriter({ reduce }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = words[index];
    const delay = deleting ? 40 : text === word ? 1500 : 90;

    const id = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(id);
  }, [text, deleting, index, reduce]);

  return <>{reduce ? words[0] : text}</>;
}

function Timecode() {
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrames((f) => f + 1), 1000 / 24);
    return () => clearInterval(id);
  }, []);

  const ff = frames % 24;
  const ss = Math.floor(frames / 24) % 60;
  const mm = Math.floor(frames / 1440);

  return (
    <span className="font-mono text-xs tabular-nums text-white/90">
      {pad(mm)}:{pad(ss)}:{pad(ff)}
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const hide = (value) => (reduce ? false : value);
  const fade = (delay) => ({
    initial: hide({ opacity: 0, y: 16 }),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay },
  });

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Background image covering the whole section */}
      <motion.img
        src={heroBg}
        alt=""
        animate={
          reduce ? {} : { scale: [1.1, 1.25, 1.1], x: ["0%", "-2%", "0%"] }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2 md:gap-10 md:px-10 lg:gap-16">
        {/* Left: text */}
        <div>
          <motion.h1
            {...fade(0.2)}
            className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-7xl"
          >
            We capture
            <span className="block min-h-[1.3em]">
              <span className="bg-gradient-to-r from-amber-300 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                <Typewriter reduce={reduce} />
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-pink-400"
              />
            </span>
          </motion.h1>

          <motion.p
            {...fade(0.5)}
            className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg"
          >
            Cinematic videography and mobile video, shot and edited by a team
            that cares about every frame.
          </motion.p>

          <motion.div
            {...fade(0.8)}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row"
          >
            <Link
              to="/portfolio"
              className="rounded-full bg-gradient-to-r from-amber-400 via-pink-500 to-violet-500 px-7 py-3 text-center text-sm font-medium text-white transition hover:scale-105"
            >
              Watch our work
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/50 px-7 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
            >
              Book a shoot
            </Link>
          </motion.div>
        </div>

        {/* Right: image */}
        <motion.div
          initial={hide({ opacity: 0, x: 40 })}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-amber-400/40 via-pink-500/40 to-violet-500/40 blur-2xl" />

          {/* <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-white/20 md:aspect-[4/5]">
            <motion.img
              src={heroImg}
              alt="Videography showreel preview"
              style={{ scale: 1.2 }}
              animate={reduce ? {} : { rotate: [0, 4, 0, -4, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5">
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-red-500"
              />
              <span className="text-xs font-medium text-white">REC</span>
              <Timecode />
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
