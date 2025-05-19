import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Container } from '@/components/shared/container';
import { BuildIcon } from '@/components/icons/BuildIcon';
import { EngageIcon } from '@/components/icons/EngageIcon';
import { ZoomIcon } from '@/components/icons/ZoomIcon';
import { AmplifyIcon } from '@/components/icons/AmplifyIcon';
import type { ReactElement } from 'react';

interface PhilosophyStep {
  icon: ReactElement;
  title: string;
  letter: string;
  description: string;
  color: string;
}

const philosophySteps: PhilosophyStep[] = [
  {
    icon: <BuildIcon className="h-10 w-10" />,
    title: 'Build',
    letter: 'B',
    description: 'Crafting a solid foundation—whether it’s a brand identity, website, or campaign strategy.',
    color: 'text-blue-500', // Example color, can be themed
  },
  {
    icon: <EngageIcon className="h-10 w-10" />,
    title: 'Engage',
    letter: 'E',
    description: 'Connecting with your audience through compelling content, social media, or ads to spark interest.',
    color: 'text-green-500',
  },
  {
    icon: <ZoomIcon className="h-10 w-10" />,
    title: 'Zoom',
    letter: 'Z',
    description: 'Diving into data, analyzing what’s clicking (e.g., high-performing channels or content) to refine your approach.',
    color: 'text-purple-500',
  },
  {
    icon: <AmplifyIcon className="h-10 w-10" />,
    title: 'Amplify',
    letter: 'A',
    description: 'Doubling down on what works, scaling up campaigns or reach to maximize impact and achieve exponential growth.',
    color: 'text-orange-500',
  },
];

export function PhilosophyTimeline() {
  return (
    <section className="section-padding bg-secondary/30">
      <Container>
        <SectionTitle title="Our BEZA Philosophy" subtitle="Our Approach">
          Discover the four pillars that drive digital success. Our B.E.Z.A. methodology is a proven roadmap to navigate the complexities of online marketing.
        </SectionTitle>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* This is a simplified timeline display. For actual timeline visuals, more complex CSS would be needed. */}
          {philosophySteps.map((step, index) => (
            <Card key={step.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
              <CardHeader className="items-center text-center">
                <div className={`p-4 rounded-full bg-primary/10 mb-4 inline-block text-primary`}>
                  {step.icon}
                </div>
                <CardTitle className="text-2xl">
                  <span className={`font-bold text-primary`}>{step.letter}</span> - {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <CardDescription className="text-base text-muted-foreground">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
