import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/lib/data';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
      {post.imageUrl && (
        <Link href={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={600}
            height={338} // 16:9 aspect ratio
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="blog article technology"
          />
        </Link>
      )}
      <CardHeader>
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">{post.title}</CardTitle>
        </Link>
        <CardDescription className="text-sm text-muted-foreground">
          By {post.author} on {format(new Date(post.date), 'MMMM d, yyyy')}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {post.tags.slice(0, 3).map(tag => ( // Show max 3 tags
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-primary p-0 h-auto">
          <Link href={`/blog/${post.slug}`}>Read More &rarr;</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
