import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site, navLinks } from "../data/site";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  // Darken the navbar after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu when the page changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close with Escape, and stop the page scrolling behind the menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const duration = reduceMotion ? 0 : 0.4;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-ink/80 py-4 backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-10"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="leading-none"
            aria-label={`${site.name} home`}
          >
            <span className="block font-display text-2xl font-semibold tracking-[0.25em]">
              {site.logoTop}
            </span>
            <span className="block text-[10px] tracking-[0.5em] text-accent">
              {site.logoBottom}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `relative text-xs uppercase tracking-[0.2em] transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300 ${
                      isActive
                        ? "text-bone after:w-full"
                        : "text-bone/70 after:w-0 hover:text-bone hover:after:w-full"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Button to="/contact" className="hidden lg:inline-flex">
              Book a Session
            </Button>

            {/* Hamburger (mobile) */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-12 w-12 items-center justify-center lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration }}
            className="fixed inset-0 z-40 flex flex-col justify-center overflow-y-auto bg-ink px-6 pb-10 pt-28 lg:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration,
                    delay: reduceMotion ? 0 : 0.1 + i * 0.06,
                  }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 font-display text-5xl uppercase tracking-wide transition-colors sm:text-6xl ${
                        isActive ? "text-accent" : "text-bone hover:text-accent"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.6 }}
              className="mt-10"
            >
              <Button
                to="/contact"
                onClick={() => setOpen(false)}
                className="w-full"
              >
                Book a Session
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
