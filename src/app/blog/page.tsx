import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { blogPostsData } from '@/lib/data';

export const metadata = {
  title: 'Insights Blog | BEZA Digital Compass',
  description: 'Stay updated with the latest digital marketing insights, tips, and perspectives from the experts at BEZA Digital Compass.',
};

export default function BlogPage() {
  const sortedPosts = [...blogPostsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-16">No blog posts available yet. Check back soon for our latest insights!</p>
        )}
      </Container>
    </div>
  );
}
