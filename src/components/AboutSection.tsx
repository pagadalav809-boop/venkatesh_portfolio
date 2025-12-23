import { Code, Lightbulb, GraduationCap, Wrench } from 'lucide-react';

const highlights = [
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Analytical mindset with a focus on finding efficient, practical solutions to complex challenges.',
  },
  {
    icon: Code,
    title: 'Continuous Learner',
    description: 'Committed to staying current with technologies and expanding my development skill set.',
  },
  {
    icon: GraduationCap,
    title: 'Engineering Background',
    description: 'Solid foundation in electronics and communication principles, bridging hardware and software.',
  },
  {
    icon: Wrench,
    title: 'Practical Developer',
    description: 'Hands-on experience building real-world applications with Python, MySQL, and embedded systems.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
            About Me
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            Electronics and Communication Engineering graduate with hands-on experience 
            in Python development, MySQL-based applications, and front-end technologies. 
            I bring strong analytical and problem-solving abilities with a practical 
            approach to building real-world projects. Currently seeking an entry-level 
            software development role where I can apply my technical skills, learn 
            continuously, and contribute to impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-6 border border-border card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
