import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Container } from '@/components/shared/container';
import type { CaseStudy } from '@/lib/data'; // Assuming CaseStudy type

// Simplified mock data
const featuredCaseStudiesData: Pick<CaseStudy, 'title' | 'clientName' | 'imageUrl' | 'summary' | 'slug'>[] = [
  {
    title: 'Boosting E-commerce Sales by 150%',
    clientName: 'FashionRetail Co.',
    imageUrl: 'https://placehold.co/600x400.png',
    summary: 'Implemented a targeted ad campaign and SEO strategy that significantly increased online sales and brand visibility.',
    slug: 'ecommerce-sales-boost',
  },
  {
    title: 'Tripling Lead Generation for SaaS',
    clientName: 'TechSolutions Inc.',
    imageUrl: 'https://placehold.co/600x400.png',
    summary: 'Revamped content marketing and lead nurturing funnels, resulting in a 3x increase in qualified leads.',
    slug: 'saas-lead-generation',
  },
];

export function FeaturedCaseStudies() {
  return (
    <section className="section-padding bg-secondary/30">
      <Container>
        <SectionTitle title="Success Stories" subtitle="Our Impact">
          See how we've helped businesses like yours achieve remarkable results through strategic digital marketing.
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCaseStudiesData.map((study) => (
            <Card key={study.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint="marketing success"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <CardDescription className="text-sm text-primary">{study.clientName}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{study.summary}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-primary">
                  <Link href={`/case-studies/${study.slug}`}>Read Full Story &rarr;</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="shadow-md hover:shadow-lg">
            <Link href="/case-studies">Explore More Case Studies</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
