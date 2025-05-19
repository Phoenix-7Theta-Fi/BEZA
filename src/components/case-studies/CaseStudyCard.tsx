
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { CaseStudy } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { FALLBACK_IMAGE_URL } from '@/lib/config';

interface CaseStudyCardProps {
  study: CaseStudy; // Expects imageUrl to be potentially Pexels URL
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const imageHint = study.imageHint || `${study.industry.split(' ')[0].toLowerCase()} success`;
  const imageUrl = study.imageUrl || FALLBACK_IMAGE_URL;

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-1 hover:border-accent border border-transparent">
      <div className="aspect-video overflow-hidden group">
        <Image
          src={imageUrl}
          alt={study.title}
          width={600}
          height={338}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl leading-tight hover:text-accent transition-colors">
           <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
        </CardTitle>
        <CardDescription className="text-sm text-accent font-medium">{study.clientName} - {study.industry}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-3">{study.summary}</p>
        {study.servicesUsed && study.servicesUsed.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {study.servicesUsed.map(service => (
              <Badge key={service} variant="secondary" className="hover:bg-accent/20 hover:text-accent transition-colors">{service}</Badge>
            ))}
          </div>
        )}
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
}
