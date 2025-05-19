import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Container } from '@/components/shared/container';
import { Palette, Users, BarChart3, Megaphone, ArrowRight } from 'lucide-react';
import type { Service } from '@/lib/data'; 

const featuredServicesData: Pick<Service, 'title' | 'shortDescription' | 'iconName' | 'slug'>[] = [
  {
    title: 'Brand Building',
    shortDescription: 'Craft a memorable brand identity that resonates with your target audience and stands out from the competition.',
    iconName: 'Palette',
    slug: 'brand-building',
  },
  {
    title: 'Audience Engagement',
    shortDescription: 'Connect with your customers through compelling content and strategic social media campaigns.',
    iconName: 'Users',
    slug: 'audience-engagement',
  },
  {
    title: 'Data Analysis',
    shortDescription: 'Unlock actionable insights from your marketing data to optimize performance and drive growth.',
    iconName: 'BarChart3',
    slug: 'data-analysis',
  },
];

const iconMap: { [key: string]: JSX.Element } = {
  Palette: <Palette className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />,
  Users: <Users className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />,
  BarChart3: <BarChart3 className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />,
  Megaphone: <Megaphone className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />,
};


export function FeaturedServices() {
  return (
    <section className="section-padding">
      <Container>
        <SectionTitle title="Our Core Services" subtitle="What We Do">
          We offer a comprehensive suite of digital marketing services designed to elevate your brand and achieve your business objectives.
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServicesData.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1 group hover:border-accent border border-transparent">
              <CardHeader>
                <div className="mb-4 flex justify-center items-center h-16 w-16 rounded-full bg-accent/10 mx-auto">
                   {iconMap[service.iconName as keyof typeof iconMap] || <Palette className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />}
                </div>
                <CardTitle className="text-center text-xl group-hover:text-accent transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center text-muted-foreground mb-4">{service.shortDescription}</CardDescription>
                 <Button asChild variant="outline" size="sm" className="w-full group/button">
                  <Link href={`/services/${service.slug}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="shadow-sm hover:shadow-md group">
            <Link href="/services">View All Services <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
