
import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BuildIcon } from '@/components/icons/BuildIcon';
import { EngageIcon } from '@/components/icons/EngageIcon';
import { ZoomIcon } from '@/components/icons/ZoomIcon';
import { AmplifyIcon } from '@/components/icons/AmplifyIcon';
import Image from 'next/image';
import type { ReactElement } from 'react';

interface PhilosophyDetail {
  icon: ReactElement;
  title: string;
  letter: string;
  tagline: string;
  details: string[];
  imageUrl: string; // Now placehold.co
  imageAlt: string;
  dataAiHint: string;
}

const philosophyDetails: PhilosophyDetail[] = [
  {
    icon: <BuildIcon className="h-12 w-12 text-accent" />,
    title: 'Build',
    letter: 'B',
    tagline: 'Crafting Solid Foundations for Digital Success.',
    details: [
      "We start by understanding your unique business goals, target audience, and competitive landscape.",
      "This stage involves creating robust brand identities, developing high-performance websites, and formulating comprehensive campaign strategies.",
      "A strong foundation ensures that all subsequent marketing efforts are aligned, effective, and sustainable.",
      "Think of it as architecting a skyscraper – meticulous planning and strong materials are essential before you can build upwards."
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Illustration of building blocks or architectural plans',
    dataAiHint: 'construction blueprint'
  },
  {
    icon: <EngageIcon className="h-12 w-12 text-accent" />,
    title: 'Engage',
    letter: 'E',
    tagline: 'Connecting Meaningfully with Your Audience.',
    details: [
      "Once the foundation is set, we focus on capturing attention and fostering connections.",
      "This involves creating compelling content, executing targeted social media campaigns, and utilizing engaging advertising formats.",
      "The goal is to spark genuine interest, encourage interaction, and build a loyal community around your brand.",
      "Engagement is a two-way street; we listen to your audience to refine our approach continually."
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Illustration of people interacting or social media icons',
    dataAiHint: 'social media'
  },
  {
    icon: <ZoomIcon className="h-12 w-12 text-accent" />,
    title: 'Zoom',
    letter: 'Z',
    tagline: 'Diving Deep into Data for Actionable Insights.',
    details: [
      "Data is the compass of digital marketing. We meticulously track and analyze campaign performance and user behavior.",
      "This stage involves identifying what's working (high-performing channels, resonating content, effective calls-to-action) and what's not.",
      "By zooming into the data, we uncover actionable insights that allow us to optimize strategies, improve ROI, and make informed decisions.",
      "We transform raw data into a clear roadmap for refinement and growth."
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Illustration of data charts and analytics dashboards',
    dataAiHint: 'data charts'
  },
  {
    icon: <AmplifyIcon className="h-12 w-12 text-accent" />,
    title: 'Amplify',
    letter: 'A',
    tagline: 'Scaling Success and Maximizing Impact.',
    details: [
      "With a clear understanding of what drives results, we strategically scale your marketing efforts.",
      "This means doubling down on successful tactics, expanding reach to new, qualified audiences, and exploring innovative growth opportunities.",
      "Amplification is about maximizing your return on investment and achieving exponential growth for your brand.",
      "We ensure your message reaches further, resonates deeper, and converts more effectively."
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Illustration of a megaphone or upward trending graph',
    dataAiHint: 'growth graph'
  },
];

export default function PhilosophyPage() {
  return (
    <div className="section-padding">
      <Container>
        <SectionTitle
          title="The BEZA Philosophy"
          subtitle="Our Proven Methodology"
        >
          At BEZA Digital Compass, our B.E.Z.A. philosophy is the cornerstone of every strategy we develop. It's a cyclical, data-driven approach designed to build lasting brands and deliver measurable results.
        </SectionTitle>

        <div className="space-y-16 mt-16">
          {philosophyDetails.map((step, index) => (
            <section key={step.title} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-12 group`}>
              <div className="md:w-1/2 overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={step.imageUrl}
                  alt={step.imageAlt}
                  width={600}
                  height={400}
                  className="object-cover w-full aspect-video group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  data-ai-hint={step.dataAiHint}
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  {step.icon}
                  <h3 className="ml-4 text-3xl font-bold text-foreground">
                    <span className="text-accent">{step.letter}</span> - {step.title}
                  </h3>
                </div>
                <p className="text-xl font-semibold text-muted-foreground mb-4">{step.tagline}</p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  {step.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
