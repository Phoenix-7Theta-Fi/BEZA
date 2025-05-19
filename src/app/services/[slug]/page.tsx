import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { servicesData, type Service } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface ServicePageParams {
  slug: string;
}

interface ServicePageProps {
  params: ServicePageParams;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = servicesData.find(s => s.slug === params.slug);
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }
  return {
    title: `${service.title} | Services | BEZA Digital Compass`,
    description: service.shortDescription,
  };
}


export default function SingleServicePage({ params }: ServicePageProps) {
  const service = servicesData.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="section-padding">
      <Container>
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/services">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to All Services
            </Link>
          </Button>
        </div>
        <SectionTitle
          title={service.title}
          subtitle="Our Service"
        />
        <ServiceDetail service={service} />
      </Container>
    </div>
  );
}
