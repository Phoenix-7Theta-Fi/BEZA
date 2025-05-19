
import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { caseStudiesData, type CaseStudy } from '@/lib/data';
import { fetchPexelsImage } from '@/services/pexels';
import { FALLBACK_IMAGE_URL } from '@/lib/config';

export const metadata = {
  title: 'Our Success Stories | Case Studies | BEZA Digital Compass',
  description: 'Discover how BEZA Digital Compass has helped businesses achieve remarkable results. Explore our digital marketing case studies.',
};

export default async function CaseStudiesPage() {
  const studiesWithPexelsImagesPromises = caseStudiesData.map(async (study) => {
    const pexelsQuery = study.imageHint || study.industry.split(' ')[0].toLowerCase() || 'business success';
    const pexelsImageUrl = await fetchPexelsImage(pexelsQuery, 600, 338);
    return {
      ...study,
      imageUrl: pexelsImageUrl || study.imageUrl || FALLBACK_IMAGE_URL,
    };
  });

  const studiesWithPexelsImages = await Promise.all(studiesWithPexelsImagesPromises);

  return (
    <div className="section-padding">
      <Container>
        <SectionTitle
          title="Our Success Stories"
          subtitle="Case Studies"
        >
          See real-world examples of how our B.E.Z.A. philosophy and tailored digital marketing strategies have driven growth and success for our clients.
        </SectionTitle>

        {studiesWithPexelsImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
            {studiesWithPexelsImages.map((study) => (
              <CaseStudyCard key={study.id} study={study as CaseStudy} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-16">We're currently compiling our latest success stories. Check back soon!</p>
        )}
      </Container>
    </div>
  );
}
