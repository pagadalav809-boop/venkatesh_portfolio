import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'B.E. in Electronics and Communication Engineering',
    institution: "Avanthi's Scientific Technological and Research Academy",
    period: '2021 – 2025',
    current: true,
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Krishnaveni Junior College',
    period: '2019 – 2021',
    current: false,
  },
  {
    degree: 'Secondary School Certificate (10th)',
    institution: 'St. Aloysius English Medium High School',
    period: '2018 – 2019',
    current: false,
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Education
          </h2>
          <p className="text-text-secondary">
            My academic journey
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            {/* Education Items */}
            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={item.degree}
                  className="relative pl-16"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-4 w-5 h-5 rounded-full border-2 ${
                      item.current
                        ? 'bg-primary border-primary animate-pulse-glow'
                        : 'bg-card border-border'
                    }`}
                  />

                  {/* Content Card */}
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-primary">
                            {item.period}
                          </span>
                          {item.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-heading mb-1">
                          {item.degree}
                        </h3>
                        <p className="text-text-secondary text-sm">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
