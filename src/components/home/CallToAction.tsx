import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/container';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Amplify Your Digital Presence?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Let BEZA Digital Compass guide your brand to new heights. Partner with us to build, engage, zoom, and amplify your way to success.
        </p>
        <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transform hover:scale-105">
          <Link href="/contact">
            Get Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </Container>
    </section>
  );
}
