import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { caseStudiesData } from '@/lib/data';

export const metadata = {
  title: 'Our Success Stories | Case Studies | BEZA Digital Compass',
  description: 'Discover how BEZA Digital Compass has helped businesses achieve remarkable results. Explore our digital marketing case studies.',
};

export default function CaseStudiesPage() {
  return (
    <div className="section-padding">
      <Container>
        <SectionTitle
          title="Our Success Stories"
          subtitle="Case Studies"
        >
          See real-world examples of how our B.E.Z.A. philosophy and tailored digital marketing strategies have driven growth and success for our clients.
        </SectionTitle>

        {caseStudiesData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
            {caseStudiesData.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-16">We're currently compiling our latest success stories. Check back soon!</p>
        )}
      </Container>
    </div>
  );
}
