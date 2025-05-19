'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BezaLogo } from '@/components/icons/BezaLogo';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        'px-3 py-2 rounded-md text-sm font-medium hover:text-primary hover:bg-primary-foreground/10',
        pathname === href ? 'text-primary font-semibold' : 'text-foreground/80'
      )}
      onClick={() => setIsSheetOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
      isScrolled ? "bg-background/80 backdrop-blur-lg shadow-md border-b" : "bg-transparent"
    )}>
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" aria-label="BEZA Home">
          <BezaLogo className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href} label={link.label} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
