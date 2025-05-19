
'use client'; // Needs to be client for useState/useEffect if fetching client-side,
              // but we will pass the URL as a prop from server component parent if possible.
              // For now, keeping it as is and assuming parent page will handle fetching if it's a server component.
              // If ServiceDetail is always used in a server component, this can be a server component too.
              // Let's modify it to accept pexelsImageUrl as a prop.

import type { Service } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FALLBACK_IMAGE_URL } from '@/lib/config';

interface ServiceDetailProps {
  service: Service;
  pexelsImageUrl?: string; // Optional: parent can fetch and pass this
}

export function ServiceDetail({ service, pexelsImageUrl }: ServiceDetailProps) {
  // If pexelsImageUrl is not provided, we'd typically use a default or a client-side fetch.
  // For this iteration, assuming the parent (SingleServicePage) will provide it.
  // The original placeholder from data.ts (via service.imageUrl if it existed) or FALLBACK_IMAGE_URL
  const imageUrl = pexelsImageUrl || service.imageUrl || FALLBACK_IMAGE_URL; // Ensure service has imageUrl or use fallback
  const imageHint = service.slug.split('-')[0] + ' ' + 'concept';

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4 hover:text-accent transition-colors">{service.title}</h2>
          <p className="text-lg text-muted-foreground mb-6">{service.longDescription}</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 group">
            <Link href={service.cta.link}>
              {service.cta.text} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <div className="overflow-hidden rounded-lg shadow-xl">
          <Image 
            src={imageUrl}
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
            <CardTitle className="text-xl text-accent">Key Benefits</CardTitle>
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
            <CardTitle className="text-xl text-accent">Our Process</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {service.process.map((item, index) => (
              <div key={index} className="p-4 border rounded-md bg-background hover:shadow-md transition-all hover:border-accent/50 hover:bg-accent/5">
                <h4 className="font-semibold text-primary group-hover:text-accent transition-colors">{index + 1}. {item.step}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

