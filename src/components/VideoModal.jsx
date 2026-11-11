import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

// Chooses the right player for the video type
function Player({ video }) {
  const common = "h-full w-full";

  if (video.type === "youtube") {
    return (
      <iframe
        className={common}
        src={`https://www.youtube-nocookie.com/embed/${video.src}?autoplay=1&rel=0`}
        title={video.title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />
    );
  }

  if (video.type === "vimeo") {
    return (
      <iframe
        className={common}
        src={`https://player.vimeo.com/video/${video.src}?autoplay=1`}
        title={video.title}
        allow="autoplay; picture-in-picture; fullscreen"
        allowFullScreen
      />
    );
  }

  return (
    <video
      className={`${common} bg-black object-contain`}
      src={video.src}
      controls
      autoPlay
      playsInline
    />
  );
}

function ModalContent({ video, onClose }) {
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      // Keep Tab inside the pop-up
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = dialogRef.current.querySelectorAll(
        "button, a[href], iframe, video[controls]",
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, []);

  const vertical = video.orientation === "vertical";
  const fade = { duration: reduceMotion ? 0 : 0.3 };

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={fade}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-bone/30 text-bone transition-colors duration-300 hover:border-accent hover:text-accent"
      >
        <X size={22} />
      </button>

      <motion.div
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
        transition={fade}
        onClick={(e) => e.stopPropagation()}
        className={`w-full ${vertical ? "max-w-sm" : "max-w-5xl"}`}
      >
        <div
          className={`overflow-hidden bg-black ${
            vertical ? "mx-auto aspect-[9/16]" : "aspect-video"
          }`}
          style={
            vertical ? { width: "min(100%, calc(78svh * 9 / 16))" } : undefined
          }
        >
          <Player video={video} />
        </div>

        <div className="mt-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
            {video.label}
          </p>
          <h2 className="mt-1 font-display text-2xl font-medium uppercase md:text-3xl">
            {video.title}
          </h2>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function VideoModal({ video, onClose }) {
  return (
    <AnimatePresence>
      {video && <ModalContent key={video.id} video={video} onClose={onClose} />}
    </AnimatePresence>
  );
}
