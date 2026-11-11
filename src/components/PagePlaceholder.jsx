import PageTransition from "./PageTransition";

export default function PagePlaceholder({ title }) {
  return (
    <PageTransition>
      <section className="flex min-h-screen items-center justify-center px-6 pt-24">
        <h1 className="text-center font-display text-5xl uppercase tracking-wide md:text-7xl">
          {title}
        </h1>
      </section>
    </PageTransition>
  );
}