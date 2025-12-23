import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useTypewriter } from '@/hooks/useTypewriter';

const titles = [
  'Python Developer',
  'Software Engineer',
  'MySQL Developer',
  'HTML & CSS',
  'Arduino & Embedded',
  'ECE Graduate',
];

export const HeroSection = () => {
  const { currentText } = useTypewriter({
    words: titles,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 1500,
  });

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Greeting */}
          <p 
            className="text-text-secondary text-base md:text-lg mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-heading mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Pagadala Venkatesh
          </h1>

          {/* Animated Titles */}
          <div 
            className="h-12 md:h-14 flex items-center justify-center mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <span className="text-xl md:text-2xl lg:text-3xl font-medium text-gradient">
              {currentText}
              <span className="cursor-blink ml-0.5 text-primary">|</span>
            </span>
          </div>

          {/* Value Statement */}
          <p 
            className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Python-focused developer with hands-on experience in database management, 
            web technologies, and embedded systems. Building practical solutions 
            through clean code and continuous learning.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown size={18} />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">
                <Mail size={18} />
                Contact Me
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-text-secondary hover:text-heading hover:bg-surface" asChild>
              <a 
                href="https://drive.google.com/file/d/18F0ljnITwgtYUXsvJhF052zK9GEjWrrJ/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download size={18} />
                Resume
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            <a 
              href="#about" 
              className="inline-flex flex-col items-center text-text-muted hover:text-primary transition-colors"
            >
              <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
              <ArrowDown size={16} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
