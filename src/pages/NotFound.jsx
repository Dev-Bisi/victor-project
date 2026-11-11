import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <PageTransition>
      <Seo
        title="Page not found"
        description="The page you're looking for doesn't exist."
      />
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Error 404</p>
        <h1 className="mt-5 font-display text-5xl font-medium uppercase md:text-7xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-md font-light text-bone/70">
          The page you're looking for may have moved or never existed.
        </p>
        <Button to="/" className="mt-10">
          Back to Home
        </Button>
      </section>
    </PageTransition>
  );
}