import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { CaseStudy } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        <Image
          src={study.imageUrl}
          alt={study.title}
          width={600}
          height={338} // 16:9 aspect ratio for 600 width
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={`${study.industry.toLowerCase()} business success`}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl leading-tight">{study.title}</CardTitle>
        <CardDescription className="text-sm text-primary font-medium">{study.clientName} - {study.industry}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-3">{study.summary}</p>
        {study.servicesUsed && study.servicesUsed.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {study.servicesUsed.map(service => (
              <Badge key={service} variant="secondary">{service}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-primary p-0 h-auto">
          <Link href={`/case-studies/${study.slug}`}>Read Full Story &rarr;</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
