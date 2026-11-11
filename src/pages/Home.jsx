import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import FeaturedWork from "../components/FeaturedWork";
import ServicesPreview from "../components/ServicesPreview";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <PageTransition>
      <Seo description="Professional videography and mobile videography services capturing weddings, events, brands and unforgettable moments." />
      <Hero />
      <Intro />
      <FeaturedWork />
      <ServicesPreview />
      <Testimonials />
      <CallToAction />
    </PageTransition>
  );
}