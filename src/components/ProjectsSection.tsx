import { Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'ATM System',
    subtitle: 'Python Application',
    description:
      'Command-line ATM simulation performing core banking operations including balance inquiry, withdrawal, deposit, and PIN validation. Implements business rules and security logic to simulate real-world ATM behavior.',
    technologies: ['Python'],
    highlights: [
      'Balance inquiry and transaction history',
      'Secure PIN validation logic',
      'Withdrawal and deposit operations',
      'Business rule enforcement',
    ],
  },
  {
    title: 'Hospital Management System',
    subtitle: 'Full-Stack Application',
    description:
      'Database-driven healthcare application managing patient registration, staff authentication, doctor schedules, and appointment bookings with integrated billing functionality.',
    technologies: ['Python', 'MySQL'],
    highlights: [
      'Patient registration and records',
      'Automatic doctor suggestions',
      'Appointment scheduling with validation',
      'Billing generation (paid/pending)',
    ],
  },
  {
    title: 'Missile Radar System',
    subtitle: 'Embedded Systems Project',
    description:
      'Real-time radar system that detects, tracks, and displays moving objects using ultrasonic sensing. Demonstrates embedded system integration suitable for defense and security applications.',
    technologies: ['Arduino UNO', 'Ultrasonic Sensor', 'Servo Motors', 'TFT Display'],
    highlights: [
      'Real-time object detection',
      'Servo-based 180° scanning',
      'Visual display integration',
      'Defense-grade accuracy simulation',
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary">
            Practical applications showcasing my development skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="bg-card rounded-xl border border-border overflow-hidden card-hover flex flex-col group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                  {project.subtitle}
                </p>
                <h3 className="text-xl font-semibold text-heading mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="px-6 pb-6 flex-grow">
                <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-3">
                  Key Features
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-border mt-auto">
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="flex-1 hover:bg-primary/10 hover:text-primary" asChild>
                    <a href="https://github.com/pagadalav809-boop" target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
