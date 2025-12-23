import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pagadalav809@gmail.com',
    href: 'mailto:pagadalav809@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8897417599',
    href: 'tel:+918897417599',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Pagadala Venkatesh',
    href: 'https://www.linkedin.com/in/pagadala-venkatesh-308734327/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'pagadalav809-boop',
    href: 'https://github.com/pagadalav809-boop',
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Let's Connect
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            Looking for an entry-level software development opportunity. 
            Open to discussing roles, collaborations, or just connecting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
                  {link.label}
                </p>
                <p className="text-sm font-medium text-heading truncate">
                  {link.value}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:pagadalav809@gmail.com">
              <Mail size={18} />
              Send Message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
