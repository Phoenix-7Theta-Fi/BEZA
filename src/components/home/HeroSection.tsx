import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/container';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-primary/10 via-background to-background section-padding overflow-hidden">
      <Container className="text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
          <span className="block">Navigate Your Digital Future with</span>
          <span className="block text-primary mt-2">BEZA Digital Compass</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          We craft bespoke digital marketing strategies that <span className="font-semibold text-foreground">Build</span> your brand, <span className="font-semibold text-foreground">Engage</span> your audience, <span className="font-semibold text-foreground">Zoom</span> into data, and <span className="font-semibold text-foreground">Amplify</span> your success.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl group">
            <Link href="/contact">
              Start Your Journey
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md group">
            <Link href="/philosophy">
              Learn Our Method
            </Link>
          </Button>
        </div>
      </Container>
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-0 opacity-20">
        <svg className="absolute left-[max(25rem,50%)] top-1/2 h-[50rem] w-[60rem] -translate-y-1/2 sm:left-1/2 sm:ml-[-20rem] lg:left-1/2 lg:ml-[-15rem] xl:left-1/2 xl:ml-[-5rem]" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="hero-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="400" r="400" fill="url(#hero-gradient)" />
        </svg>
      </div>
    </div>
  );
}
