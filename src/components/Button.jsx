import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "group inline-flex min-h-[48px] items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60";

  const styles = {
    primary: "bg-bone text-ink hover:bg-accent",
    outline:
      "border border-bone/40 text-bone hover:border-accent hover:text-accent",
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  const content = (
    <>
      {children}
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </>
  );

  // Link to another page on our site
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  // Link to an outside website (opens in a new tab)
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  // A normal button
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
