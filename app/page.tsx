import { CollectionSection } from "@/components/collection-section";
import { CtaSection } from "@/components/cta-section";
import { EditorialSection } from "@/components/editorial-section";
import { HeroSection } from "@/components/hero-section";
import { StorySection } from "@/components/story-section";
import { TestimonialSection } from "@/components/testimonial-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <CollectionSection />
      <EditorialSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  );
}
