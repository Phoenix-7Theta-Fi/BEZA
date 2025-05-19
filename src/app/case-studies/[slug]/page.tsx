
import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { caseStudiesData } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckSquare, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';


interface CaseStudyPageParams {
  slug: string;
}

interface CaseStudyPageProps {
  params: CaseStudyPageParams;
}

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const study = caseStudiesData.find(s => s.slug === params.slug);
  if (!study) {
    return {
      title: 'Case Study Not Found',
    }
  }
  return {
    title: `${study.title} | Case Studies | BEZA Digital Compass`,
    description: study.summary,
  };
}

export default function SingleCaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudiesData.find(s => s.slug === params.slug);

  if (!study) {
    notFound();
  }
  
  // Using the imageHint from data.ts, which is now static
  const imageHint = study.imageHint || `${study.industry.split(' ')[0].toLowerCase()} results`;

  return (
    <div className="section-padding">
      <Container>
        <div className="mb-8">
           <Button variant="outline" asChild>
            <Link href="/case-studies">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Case Studies
            </Link>
          </Button>
        </div>
        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{study.title}</h1>
            <p className="text-xl text-muted-foreground">Client: <span className="font-semibold text-accent">{study.clientName}</span> | Industry: <span className="font-semibold text-accent">{study.industry}</span></p>
            {study.servicesUsed && study.servicesUsed.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground">Services Used:</span>
                {study.servicesUsed.map(service => (
                  <Badge key={service} variant="outline">{service}</Badge>
                ))}
              </div>
            )}
          </header>

          <Image
            src={study.imageUrl} // This will come from caseStudiesData, now placehold.co
            alt={study.title}
            width={1200}
            height={675} // 16:9 aspect ratio
            className="rounded-lg shadow-xl mb-12 object-cover w-full max-h-[500px] transform hover:scale-105 transition-transform duration-300"
            data-ai-hint={imageHint}
            priority
          />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">The Challenge</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{study.challenge}</p>
              </CardContent>
            </Card>
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Our Solution</CardTitle>
                <CheckSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                 <p className="text-muted-foreground">{study.solution}</p>
              </CardContent>
            </Card>
            <Card className="bg-accent/10 border-accent/30 transition-shadow hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-accent">Key Results</CardTitle>
                <TrendingUp className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {study.results.map(result => (
                    <li key={result.metric} className="text-sm">
                      <span className="font-semibold text-accent">{result.value}</span>
                      <span className="text-muted-foreground ml-1">{result.metric}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="prose prose-lg max-w-none dark:prose-invert text-foreground prose-a:text-accent hover:prose-a:text-accent/80">
            <h2 className="text-2xl font-semibold mb-4">Project Deep Dive</h2>
            <p>Further details about the project implementation, specific tactics, and learnings would go here. This section can be expanded with more rich text content, images, or quotes.</p>
            <p>For example, we could elaborate on the specific SEO techniques used for FashionRetail Co., or the type of high-value content created for TechSolutions Inc.</p>
          </div>

        </article>
      </Container>
    </div>
  );
}
