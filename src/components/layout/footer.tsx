import Link from 'next/link';
import { Container } from '@/components/shared/container';
import { BezaLogo } from '@/components/icons/BezaLogo';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-secondary/50 text-secondary-foreground border-t">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <BezaLogo className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Build, Engage, Zoom, Amplify. Your digital success starts here.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/philosophy" className="hover:text-primary text-sm">Our Philosophy</Link></li>
              <li><Link href="/services" className="hover:text-primary text-sm">Services</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary text-sm">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-primary text-sm">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-primary text-sm">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="text-muted-foreground hover:text-primary">
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
            <p className="text-sm mt-4 text-muted-foreground">info@bezadigital.com</p>
            <p className="text-sm text-muted-foreground">(123) 456-7890</p>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} BEZA Digital Compass. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
