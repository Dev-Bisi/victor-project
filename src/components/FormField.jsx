import { ChevronDown } from "lucide-react";

export default function FormField({
  id,
  label,
  error,
  required = false,
  as = "input",
  className = "",
  children,
  ...props
}) {
  const base =
    "block w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-base text-bone placeholder:text-bone/30 transition-colors duration-300";
  const state = error
    ? "border-red-400"
    : "border-bone/25 hover:border-bone/50 focus:border-accent";

  const common = {
    id,
    name: id,
    "aria-required": required || undefined,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
    className: `${base} ${state}`,
    ...props,
  };

  let control;
  if (as === "textarea") {
    control = (
      <textarea
        rows={5}
        {...common}
        className={`${common.className} resize-y`}
      />
    );
  } else if (as === "select") {
    control = (
      <div className="relative">
        <select
          {...common}
          className={`${common.className} appearance-none pr-8`}
        >
          {children}
        </select>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-bone/60"
        />
      </div>
    );
  } else {
    control = <input {...common} />;
  }

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="text-[11px] font-medium uppercase tracking-[0.25em] text-bone/70"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="text-accent">
            {" "}
            *
          </span>
        )}
      </label>
      {control}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
