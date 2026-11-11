import SectionHeading from "./SectionHeading";
import PortfolioCard from "./PortfolioCard";
import Reveal from "./Reveal";
import Button from "./Button";
import { projects } from "../data/projects";

// One "shape recipe" for each card, in the same order as projects.js
const layouts = [
  // 1. Large landscape
  "md:col-span-2 lg:col-span-8 aspect-[16/10]",
  // 2. Tall portrait
  "aspect-[3/4] md:aspect-[4/5] lg:col-span-4 lg:aspect-auto",
  // 3. Medium landscape
  "aspect-[4/3] md:aspect-[4/5] lg:col-span-7 lg:aspect-[4/3]",
  // 4. Square-ish
  "aspect-square md:col-span-2 md:aspect-[16/9] lg:col-span-5 lg:aspect-auto",
  // 5. Wide cinematic
  "aspect-[16/10] md:col-span-2 md:aspect-[16/9] lg:col-span-12 lg:aspect-[21/9]",
];

export default function FeaturedWork() {
  return (
    <section className="bg-ink px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading
          title="Featured Work"
          text="A selection of moments, stories and experiences we've had the privilege to capture."
          className="mb-14 md:mb-20"
        />

        <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-12">
          {projects.slice(0, 5).map((project, i) => (
            <PortfolioCard
              key={project.id}
              project={project}
              index={i}
              className={layouts[i]}
            />
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Button to="/portfolio" variant="outline">
            View All Projects
          </Button>
        </Reveal>
      </div>
    </section>
  );
}