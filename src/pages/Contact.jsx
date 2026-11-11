import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import FormField from "../components/FormField";
import { site, socials } from "../data/site";
import { inquiryServices, openingHours } from "../data/contact";
import {
  fieldOrder,
  getToday,
  validateAll,
  validateField,
} from "../utils/validateInquiry";
import { sendInquiry } from "../utils/sendInquiry";

const labelClass =
  "text-[11px] font-medium uppercase tracking-[0.3em] text-accent sm:text-xs";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  message: "",
  company: "", // hidden spam trap
};

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello, I'd like to book a videography session.",
  )}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear an error as soon as the person starts fixing it
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (fieldOrder.includes(name)) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    const found = validateAll(values);
    setErrors(found);

    const firstInvalid = fieldOrder.find((field) => found[field]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    // If the hidden spam-trap field is filled, it's a bot: pretend it worked
    if (values.company) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      await sendInquiry({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        service: values.service,
        date: values.date,
        message: values.message.trim(),
      });
      setValues(initialValues);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const fade = { duration: reduceMotion ? 0 : 0.4 };
  const itemClass = "flex items-start gap-4";
  const linkClass =
    "text-base font-light text-bone/80 transition-colors duration-300 hover:text-accent";

  return (
    <PageTransition>
      <Seo
        title="About"
        description="Meet the studio behind the films. We turn real moments into visual memories through cinematic and mobile videography."
      />
      {/* Page title */}
      <section className="px-6 pb-12 pt-36 md:px-10 md:pb-16 md:pt-44">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className={labelClass}>Contact</p>
          </Reveal>
          <Reveal as="h1" delay={0.15}>
            <span className="mt-5 block max-w-4xl font-display text-5xl font-medium uppercase leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl">
              Let's talk about your story.
            </span>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-base font-light text-bone/75 md:text-lg">
              Tell us about your project and we'll get back to you with ideas,
              availability and next steps.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  role="status"
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={fade}
                  className="border-t border-graphite pt-10"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent text-accent">
                    <Check size={26} aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 font-display text-4xl font-medium uppercase md:text-5xl">
                    Thank you.
                  </h2>
                  <p className="mt-4 max-w-md text-base font-light leading-relaxed text-bone/75">
                    Your inquiry has been received. We'll reply as soon as we
                    can, usually within one to two working days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-xs uppercase tracking-[0.25em] text-bone/70 underline underline-offset-8 transition-colors duration-300 hover:text-accent"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={fade}
                  className="grid gap-x-8 gap-y-8 sm:grid-cols-2"
                >
                  <FormField
                    id="name"
                    label="Name"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name}
                  />
                  <FormField
                    id="email"
                    label="Email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                  />
                  <FormField
                    id="phone"
                    label="Phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+234 000 000 0000"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone}
                  />
                  <FormField
                    id="date"
                    label="Preferred date"
                    type="date"
                    min={getToday()}
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.date}
                    className="[color-scheme:dark]"
                  />
                  <FormField
                    id="service"
                    label="Service"
                    as="select"
                    required
                    value={values.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.service}
                    className="sm:col-span-2"
                  >
                    <option value="" className="bg-ink text-bone">
                      Select a service
                    </option>
                    {inquiryServices.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-ink text-bone"
                      >
                        {service}
                      </option>
                    ))}
                  </FormField>
                  <FormField
                    id="message"
                    label="Message"
                    as="textarea"
                    required
                    placeholder="Tell us about your project, location and ideas"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.message}
                    className="sm:col-span-2"
                  />

                  {/* Hidden spam trap: real visitors never see or fill this */}
                  <div
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                  >
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={values.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    {status === "error" && (
                      <p role="alert" className="mb-5 text-sm text-red-300">
                        Something went wrong and your inquiry wasn't sent.
                        Please try again, or message us on WhatsApp.
                      </p>
                    )}
                    <Button type="submit" disabled={status === "sending"}>
                      {status === "sending" ? "Sending..." : "Send Inquiry"}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact details */}
          <aside className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-3xl font-medium uppercase md:text-4xl">
                Get in touch
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-6">
                <li className={itemClass}>
                  <Mail
                    size={20}
                    className="mt-1 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${site.email}`}
                    className={`${linkClass} break-all`}
                  >
                    {site.email}
                  </a>
                </li>
                <li className={itemClass}>
                  <Phone
                    size={20}
                    className="mt-1 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className={linkClass}
                  >
                    {site.phone}
                  </a>
                </li>
                <li className={itemClass}>
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-base font-light text-bone/80">
                    {site.location}
                  </span>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 border-t border-graphite pt-8">
                <h3 className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
                  <Clock size={16} aria-hidden="true" />
                  Opening hours
                </h3>
                <dl className="mt-5 space-y-3">
                  {openingHours.map((row) => (
                    <div
                      key={row.days}
                      className="flex justify-between gap-6 text-sm"
                    >
                      <dt className="font-light text-bone/70">{row.days}</dt>
                      <dd className="text-right text-bone">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 border-t border-graphite pt-8">
                <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
                  Prefer to chat?
                </h3>
                <Button
                  href={whatsappLink}
                  variant="outline"
                  className="mt-5 w-full sm:w-auto"
                >
                  Chat on WhatsApp
                </Button>

                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {socials
                    .filter((s) => s.label !== "WhatsApp")
                    .map((s) => (
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
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </PageTransition>
  );
}
