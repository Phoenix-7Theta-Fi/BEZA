
import { HeroSection } from '@/components/home/HeroSection';
// import { PhilosophyTimeline } from '@/components/home/PhilosophyTimeline';
// import { FeaturedServices } from '@/components/home/FeaturedServices';
// import { FeaturedCaseStudies } from '@/components/home/FeaturedCaseStudies';
// import { CallToAction } from '@/components/home/CallToAction';
import Image from 'next/image';
import { Container } from '@/components/shared/container';

export default function HomePage() {
  return (
    <>
      {/* Test Image Section - PLEASE CHECK THIS IMAGE AND YOUR BROWSER CONSOLE */}
      <Container className="py-8 bg-destructive/10">
        <h2 className="text-2xl font-bold text-center text-destructive mb-4">Test Image Below (Focus of 503 Debug)</h2>
        <p className="text-center text-muted-foreground mb-4">
          If this image fails with a 503, Unsplash might be rate-limiting or having issues.
          If it loads, the previous 503s were likely due to too many requests.
        </p>
        <div className="flex justify-center">
          <Image
            src="https://source.unsplash.com/random/300x200?test"
            alt="Test Diagnostic Image"
            width={300}
            height={200}
            className="border-4 border-destructive rounded-lg"
            data-ai-hint="test diagnostic" // Ensure this is simple
            priority // Make sure this one tries to load first
          />
        </div>
         <p className="text-center text-muted-foreground mt-4">Expected URL: https://source.unsplash.com/random/300x200?test</p>
         <p className="text-center text-muted-foreground mt-2">If you're still seeing 503s, try waiting a few minutes or check <a href="https://status.unsplash.com/" target="_blank" rel="noopener noreferrer" className="underline">Unsplash's status page</a> (if available) or social media for outage reports.</p>
      </Container>
      {/* End Test Image Section */}

      <HeroSection />
      {/* <PhilosophyTimeline /> */}
      {/* <FeaturedServices /> */}
      {/* <FeaturedCaseStudies /> */}
      {/* <CallToAction /> */}
    </>
  );
}
