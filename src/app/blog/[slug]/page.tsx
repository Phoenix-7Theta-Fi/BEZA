import { Container } from '@/components/shared/container';
import { blogPostsData } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface BlogPostPageParams {
  slug: string;
}

interface BlogPostPageProps {
  params: BlogPostPageParams;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPostsData.find(p => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  return {
    title: `${post.title} | Blog | BEZA Digital Compass`,
    description: post.excerpt,
  };
}


export default function SingleBlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPostsData.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const authorInitials = post.author.split(' ').map(n => n[0]).join('').toUpperCase();
  const avatarKeywords = "author,profile";

  return (
    <div className="section-padding">
      <Container>
         <div className="mb-8">
           <Button variant="outline" asChild>
            <Link href="/blog">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">{post.title}</h1>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`https://source.unsplash.com/random/100x100?${avatarKeywords}`} alt={post.author} data-ai-hint="author profile" />
                <AvatarFallback>{authorInitials}</AvatarFallback>
              </Avatar>
              <div>
                <span>By <span className="font-semibold text-foreground">{post.author}</span></span>
                <span className="mx-1">&bull;</span>
                <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
              </div>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            )}
          </header>

          {post.imageUrl && (
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={1200}
              height={675}
              className="rounded-lg shadow-lg mb-8 object-cover w-full aspect-video"
              data-ai-hint="blog cover"
              priority
            />
          )}
          
          <div 
            className="prose prose-lg max-w-none dark:prose-invert text-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
        </article>
      </Container>
    </div>
  );
}
