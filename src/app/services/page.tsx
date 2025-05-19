import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { ServiceCard } from '@/components/services/ServiceCard';
import { servicesData } from '@/lib/data';

export const metadata = {
  title: 'Our Digital Marketing Services | BEZA Digital Compass',
  description: 'Explore BEZA\'s comprehensive suite of digital marketing services including Brand Building, Audience Engagement, Data Analysis, and Amplification Strategies.',
};

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <Container>
        <SectionTitle
          title="Our Digital Marketing Services"
          subtitle="What We Offer"
        >
          BEZA Digital Compass provides a full spectrum of digital marketing solutions designed to help your business thrive in the online world. Each service is tailored to your unique needs, guided by our B.E.Z.A. philosophy.
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </div>
  );
}
