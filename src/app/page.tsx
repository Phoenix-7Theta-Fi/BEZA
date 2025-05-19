import { HeroSection } from '@/components/home/HeroSection';
import { PhilosophyTimeline } from '@/components/home/PhilosophyTimeline';
import { FeaturedServices } from '@/components/home/FeaturedServices';
import { FeaturedCaseStudies } from '@/components/home/FeaturedCaseStudies';
import { CallToAction } from '@/components/home/CallToAction';
import Image from 'next/image'; // Added for test image
import { Container } from '@/components/shared/container'; // Added for test image layout

export default function HomePage() {
  return (
    <>
      {/* Test Image Section - PLEASE CHECK THIS IMAGE AND YOUR BROWSER CONSOLE */}
      <Container className="py-8 bg-destructive/10">
        <h2 className="text-2xl font-bold text-center text-destructive mb-4">Test Image Below</h2>
        <p className="text-center text-muted-foreground mb-4">If this image does not load, please check your browser's developer console for errors (Network and Console tabs).</p>
        <div className="flex justify-center">
          <Image
            src="https://source.unsplash.com/random/300x200?test,diagnostics"
            alt="Test Diagnostic Image"
            width={300}
            height={200}
            className="border-4 border-destructive rounded-lg"
            data-ai-hint="test diagnostics"
          />
        </div>
         <p className="text-center text-muted-foreground mt-4">Expected URL: https://source.unsplash.com/random/300x200?test,diagnostics</p>
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
