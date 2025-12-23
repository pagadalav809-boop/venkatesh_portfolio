import { Award, Presentation, Factory } from 'lucide-react';

const achievements = [
  {
    icon: Presentation,
    title: 'Seminar on Online Secure Data Service',
    description: 'Presented research on secure data handling and cloud service architectures.',
  },
  {
    icon: Award,
    title: 'Technical Presentation on Satellite-Based Wireless Networks',
    description: 'Delivered in-depth presentation covering satellite communication technologies.',
  },
  {
    icon: Factory,
    title: 'Industrial Visit to LED Chip Indus Pvt. Limited',
    description: 'Gained practical exposure to semiconductor manufacturing processes.',
  },
];

export const AchievementsSection = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Achievements & Activities
          </h2>
          <p className="text-text-secondary">
            Professional development and academic accomplishments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-6 border border-border text-center card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-heading mb-2">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
