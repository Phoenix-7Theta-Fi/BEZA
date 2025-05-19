
import { HeroSection } from '@/components/home/HeroSection';
import { PhilosophyTimeline } from '@/components/home/PhilosophyTimeline';
import { FeaturedServices } from '@/components/home/FeaturedServices';
import { FeaturedCaseStudies } from '@/components/home/FeaturedCaseStudies';
import { CallToAction } from '@/components/home/CallToAction';
import Image from 'next/image';
import { Container } from '@/components/shared/container';

export default function HomePage() {
  return (
    <>
      {/* Test Image Section - Reverted to placehold.co */}
      <Container className="py-8 bg-destructive/10">
        <h2 className="text-2xl font-bold text-center text-destructive mb-4">Test Image Below (Using placehold.co)</h2>
        <p className="text-center text-muted-foreground mb-4">
          This image uses placehold.co. If this doesn't load, there might be an issue with `next/image` or the `placehold.co` service itself.
        </p>
        <div className="flex justify-center">
          <Image
            src="https://placehold.co/300x200.png"
            alt="Test Diagnostic Image"
            width={300}
            height={200}
            className="border-4 border-destructive rounded-lg"
            data-ai-hint="test diagnostic" 
            priority
          />
        </div>
         <p className="text-center text-muted-foreground mt-4">Expected URL: https://placehold.co/300x200.png</p>
      </Container>
      {/* End Test Image Section */}

      <HeroSection />
      <PhilosophyTimeline />
      <FeaturedServices />
      <FeaturedCaseStudies />
      <CallToAction />
    </>
  );
}
