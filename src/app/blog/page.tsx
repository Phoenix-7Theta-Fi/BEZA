
import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { blogPostsData, type BlogPost } from '@/lib/data';
import { fetchPexelsImage } from '@/services/pexels';
import { FALLBACK_IMAGE_URL } from '@/lib/config';

export const metadata = {
  title: 'Insights Blog | BEZA Digital Compass',
  description: 'Stay updated with the latest digital marketing insights, tips, and perspectives from the experts at BEZA Digital Compass.',
};

export default async function BlogPage() {
  const sortedPostsPromises = [...blogPostsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(async (post) => {
      const pexelsQuery = post.imageHint || post.tags?.[0] || 'technology blog';
      const pexelsImageUrl = await fetchPexelsImage(pexelsQuery, 600, 338);
      return {
        ...post,
        imageUrl: pexelsImageUrl || post.imageUrl || FALLBACK_IMAGE_URL,
      };
    });

  const sortedPosts = await Promise.all(sortedPostsPromises);

  return (
    <div className="section-padding">
      <Container>
        <SectionTitle
          title="BEZA Insights Blog"
          subtitle="Stay Informed"
        >
          Explore our latest articles on digital marketing trends, strategies, and best practices. Get valuable insights to help you navigate the ever-changing digital landscape.
        </SectionTitle>

        {sortedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {sortedPosts.map((post) => (
              <BlogPostCard key={post.id} post={post as BlogPost /* Ensure type after modification */} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-16">No blog posts available yet. Check back soon for our latest insights!</p>
        )}
      </Container>
    </div>
  );
}
