import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Service } from '@/lib/data';
import { Palette, Users, BarChart3, Megaphone, Wand2, ArrowRight } from 'lucide-react'; // Added Wand2 as a fallback

interface ServiceCardProps {
  service: Pick<Service, 'title' | 'shortDescription' | 'iconName' | 'slug'>;
}

const iconMap: { [key: string]: JSX.Element } = {
  Palette: <Palette className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />,
  Users: <Users className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />,
  BarChart3: <BarChart3 className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />,
  Megaphone: <Megaphone className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />,
  Default: <Wand2 className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
};

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || iconMap.Default;

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1 group hover:border-accent border border-transparent">
      <CardHeader className="items-center text-center">
        <div className="p-4 rounded-full bg-accent/10 mb-4 inline-block">
          {IconComponent}
        </div>
        <CardTitle className="text-2xl group-hover:text-accent transition-colors">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center flex-grow">
        <CardDescription className="text-base text-muted-foreground">{service.shortDescription}</CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <Button asChild variant="outline" className="mt-4 group/button">
          <Link href={`/services/${service.slug}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
