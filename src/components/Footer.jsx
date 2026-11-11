import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import {
  site,
  navLinks,
  socials,
  footerServices,
  footerDescription,
} from "../data/site";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const linkClass =
    "text-sm font-light text-bone/70 transition-colors duration-300 hover:text-accent";
  const headingClass =
    "mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-accent";

  return (
    <footer className="border-t border-graphite bg-ink px-6 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 py-16 sm:grid-cols-2 md:py-20 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <Reveal className="lg:col-span-4">
            <Link
              to="/"
              className="inline-block leading-none"
              aria-label={`${site.name} home`}
            >
              <span className="block font-display text-3xl font-semibold tracking-[0.25em]">
                {site.logoTop}
              </span>
              <span className="block text-xs tracking-[0.5em] text-accent">
                {site.logoBottom}
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-bone/70">
              {footerDescription}
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on ${s.label}`}
                    className="text-xs uppercase tracking-[0.2em] text-bone/70 transition-colors duration-300 hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Navigation */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <h2 className={headingClass}>Explore</h2>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Services */}
          <Reveal delay={0.2} className="lg:col-span-3">
            <h2 className={headingClass}>Services</h2>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link to="/services" className={linkClass}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.3} className="lg:col-span-3">
            <h2 className={headingClass}>Contact</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${site.email}`}
                  className={`${linkClass} break-all`}
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className={linkClass}
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="text-sm font-light text-bone/70">
                  {site.location}
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse gap-6 border-t border-graphite py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-bone/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={backToTop}
            aria-label="Back to top"
            className="group inline-flex min-h-[44px] items-center gap-3 self-start text-xs uppercase tracking-[0.25em] text-bone/70 transition-colors duration-300 hover:text-accent sm:self-auto"
          >
            Back to top
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/30 transition-colors duration-300 group-hover:border-accent">
              <ArrowUp
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
