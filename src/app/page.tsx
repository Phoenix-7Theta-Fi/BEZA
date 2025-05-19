import { HeroSection } from '@/components/home/HeroSection';
import { PhilosophyTimeline } from '@/components/home/PhilosophyTimeline';
import { FeaturedServices } from '@/components/home/FeaturedServices';
import { FeaturedCaseStudies } from '@/components/home/FeaturedCaseStudies';
import { CallToAction } from '@/components/home/CallToAction';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophyTimeline />
      <FeaturedServices />
      <FeaturedCaseStudies />
      <CallToAction />
    </>
  );
}
