import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Service } from '@/lib/data';
import { Palette, Users, BarChart3, Megaphone, Wand2 } from 'lucide-react'; // Added Wand2 as a fallback

interface ServiceCardProps {
  service: Pick<Service, 'title' | 'shortDescription' | 'iconName' | 'slug'>;
}

const iconMap: { [key: string]: JSX.Element } = {
  Palette: <Palette className="h-10 w-10 text-primary" />,
  Users: <Users className="h-10 w-10 text-primary" />,
  BarChart3: <BarChart3 className="h-10 w-10 text-primary" />,
  Megaphone: <Megaphone className="h-10 w-10 text-primary" />,
  Default: <Wand2 className="h-10 w-10 text-primary" />
};

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || iconMap.Default;

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <CardHeader className="items-center text-center">
        <div className="p-4 rounded-full bg-primary/10 mb-4 inline-block">
          {IconComponent}
        </div>
        <CardTitle className="text-2xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center flex-grow">
        <CardDescription className="text-base text-muted-foreground">{service.shortDescription}</CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <Button asChild variant="outline" className="mt-4 hover:bg-accent hover:text-accent-foreground hover:border-accent">
          <Link href={`/services/${service.slug}`}>
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
