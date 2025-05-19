import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | BEZA Digital Compass',
  description: 'Get in touch with BEZA Digital Compass. We\'re ready to help you with your digital marketing needs. Reach out for a consultation.',
};

const contactDetails = [
  {
    Icon: Mail,
    title: 'Email Us',
    value: 'info@bezadigital.com',
    href: 'mailto:info@bezadigital.com',
  },
  {
    Icon: Phone,
    title: 'Call Us',
    value: '(123) 456-7890',
    href: 'tel:+11234567890',
  },
  {
    Icon: MapPin,
    title: 'Visit Us',
    value: '123 Digital Avenue, Tech City, TX 75001',
    href: '#', // Could link to Google Maps
  },
];

export default function ContactPage() {
  return (
    <div className="section-padding">
      <Container>
        <SectionTitle
          title="Let's Connect"
          subtitle="Contact Us"
        >
          We're excited to hear about your project and discuss how BEZA can help you achieve your digital marketing goals. Reach out to us today!
        </SectionTitle>

        <div className="grid lg:grid-cols-3 gap-12 mt-16">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
            <p className="text-muted-foreground">
              Prefer to reach out directly? Here are other ways to connect with the BEZA team.
            </p>
            {contactDetails.map(({ Icon, title, value, href }) => (
              <div key={title} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 mt-1">
                  <Icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{title}</h4>
                  <a href={href} className="text-muted-foreground hover:text-accent transition-colors">
                    {value}
                  </a>
                </div>
              </div>
            ))}
            <div className="pt-4 border-t">
               <h4 className="font-semibold text-foreground mb-2">Office Hours</h4>
               <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
               <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
