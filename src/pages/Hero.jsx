// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const words = [
//   "We",
//   "Turn",
//   "Moments",
//   "Into",
//   "Stories",
//   "Worth",
//   "Watching.",
// ];

// export default function Hero() {
//   return (
//     <section className="relative flex min-h-[100svh] items-center px-5 sm:px-8 lg:px-16">
//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="mx-auto w-full max-w-5xl text-center sm:text-left"
//       >
//         {/* Small label above headline */}
//         <motion.div
//           variants={fadeUp}
//           className="mb-4 flex items-center justify-center gap-3 sm:justify-start"
//         >
//           <span className="h-px w-8 bg-white/60 sm:w-12" />
//           <p className="text-[11px] uppercase tracking-[0.25em] text-white/70 sm:text-xs">
//             Professional Videography Studio
//           </p>
//         </motion.div>

//         {/* Headline: word-by-word reveal */}
//         <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
//           {words.map((word, i) => (
//             <motion.span
//               key={i}
//               variants={fadeUp}
//               className="mr-[0.25em] inline-block"
//             >
//               {word}
//             </motion.span>
//           ))}
//         </h1>

//         {/* Animated underline */}
//         <motion.span
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
//           className="mx-auto mt-5 block h-[3px] w-20 origin-left bg-white sm:mx-0 sm:w-28"
//         />

//         {/* Supporting text */}
//         <motion.p
//           variants={fadeUp}
//           className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:mx-0 sm:text-base lg:text-lg"
//         >
//           Cinematic video for weddings, events, brands and mobile-first content,
//           crafted with precision and delivered with care.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           variants={fadeUp}
//           className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-start"
//         >
//           <Link
//             to="/portfolio"
//             className="w-full rounded-full bg-white px-7 py-3 text-center text-sm font-medium text-black transition hover:scale-105 sm:w-auto"
//           >
//             View Our Work
//           </Link>
//           <Link
//             to="/contact"
//             className="w-full rounded-full border border-white/40 px-7 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
//           >
//             Book a Shoot
//           </Link>
//         </motion.div>
//       </motion.div>

//       {/* Scroll indicator (hidden on small phones) */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1, y: [0, 8, 0] }}
//         transition={{
//           opacity: { delay: 1.8 },
//           y: { delay: 1.8, duration: 1.6, repeat: Infinity },
//         }}
//         className="absolute bottom-6 left-1/2 hidden h-10 w-px -translate-x-1/2 bg-white/50 sm:block"
//       />
//     </section>
//   );
// }
