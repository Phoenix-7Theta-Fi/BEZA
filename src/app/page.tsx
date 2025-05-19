
import { HeroSection } from '@/components/home/HeroSection';
import { PhilosophyTimeline } from '@/components/home/PhilosophyTimeline';
import { FeaturedServices } from '@/components/home/FeaturedServices';
import { FeaturedCaseStudies } from '@/components/home/FeaturedCaseStudies';
import { CallToAction } from '@/components/home/CallToAction';
import Image from 'next/image';
import { Container } from '@/components/shared/container';
import { fetchPexelsImage } from '@/services/pexels';
import { FALLBACK_IMAGE_URL } from '@/lib/config';

export default async function HomePage() {
  const testImageQuery = "abstract tech";
  const testImageUrl = await fetchPexelsImage(testImageQuery, 300, 200) || FALLBACK_IMAGE_URL;

  return (
    <>
      <Container className="py-8 bg-destructive/10">
        <h2 className="text-2xl font-bold text-center text-destructive mb-4">Test Image Below (Using Pexels)</h2>
        <p className="text-center text-muted-foreground mb-4">
          This image attempts to load from Pexels based on the query: "{testImageQuery}".
        </p>
        <div className="flex justify-center">
          <Image
            src={testImageUrl}
            alt="Test Diagnostic Image from Pexels"
            width={300}
            height={200}
            className="border-4 border-destructive rounded-lg object-cover"
            data-ai-hint="test diagnostic"
            priority
          />
        </div>
         <p className="text-center text-muted-foreground mt-4">Source: Pexels or Fallback</p>
      </Container>

      <HeroSection />
      <PhilosophyTimeline />
      <FeaturedServices />
      <FeaturedCaseStudies />
      <CallToAction />
    </>
  );
}
