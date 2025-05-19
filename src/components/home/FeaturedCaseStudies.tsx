
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Container } from '@/components/shared/container';
import type { CaseStudy } from '@/lib/data'; 
import { ArrowRight } from 'lucide-react';
import { caseStudiesData } from '@/lib/data'; 
import { fetchPexelsImage } from '@/services/pexels';
import { FALLBACK_IMAGE_URL } from '@/lib/config';

export async function FeaturedCaseStudies() {
  const featuredCaseStudiesPromises = caseStudiesData.slice(0, 2).map(async (study) => {
    const pexelsQuery = study.imageHint || study.industry.toLowerCase().split(' ')[0] || 'business highlight';
    const pexelsImageUrl = await fetchPexelsImage(pexelsQuery, 600, 338);
    return {
      ...study,
      imageUrl: pexelsImageUrl || study.imageUrl || FALLBACK_IMAGE_URL,
    };
  });
  const featuredCaseStudies = await Promise.all(featuredCaseStudiesPromises);

  return (
    <section className="section-padding bg-secondary/30">
      <Container>
        <SectionTitle title="Success Stories" subtitle="Our Impact">
          See how we've helped businesses like yours achieve remarkable results through strategic digital marketing.
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCaseStudies.map((study) => {
            const imageHint = study.imageHint || `${study.industry.toLowerCase()} success`;
            return (
              <Card key={study.id} className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-1 hover:border-accent border border-transparent">
                <div className="aspect-video overflow-hidden group">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    width={600}
                    height={338}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl hover:text-accent transition-colors">
                     <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-sm text-accent font-medium">{study.clientName}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{study.summary}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="group">
                    <Link href={`/case-studies/${study.slug}`}>
                      Read Full Story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="shadow-md hover:shadow-lg group">
            <Link href="/case-studies">
              Explore More Case Studies <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
