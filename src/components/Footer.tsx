import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            {currentYear} Pagadala Venkatesh. Built with purpose.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/pagadalav809-boop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/pagadala-venkatesh-308734327/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:pagadalav809@gmail.com"
              className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
