import type { Service } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const imageHint = `${service.slug.split('-')[0]} concept`;
  const unsplashKeywords = imageHint.replace(/\s+/g, ',');

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">{service.title}</h2>
          <p className="text-lg text-muted-foreground mb-6">{service.longDescription}</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 group">
            <Link href={service.cta.link}>
              {service.cta.text} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <div className="overflow-hidden rounded-lg shadow-xl">
          <Image 
            src={`https://source.unsplash.com/random/600x400?${unsplashKeywords}`}
            alt={service.title} 
            width={600} 
            height={400}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            data-ai-hint={imageHint}
          />
        </div>
      </div>

      {service.benefits && service.benefits.length > 0 && (
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Key Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {service.process && service.process.length > 0 && (
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Our Process</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {service.process.map((item, index) => (
              <div key={index} className="p-4 border rounded-md bg-background hover:shadow-md transition-all hover:border-accent/50 hover:bg-accent/5">
                <h4 className="font-semibold text-accent">{index + 1}. {item.step}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
