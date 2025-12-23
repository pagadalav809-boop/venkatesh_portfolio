const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python'],
    color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  },
  {
    title: 'Web Technologies',
    skills: ['HTML5', 'CSS3'],
    color: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  },
  {
    title: 'Databases',
    skills: ['MySQL'],
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  },
  {
    title: 'Version Control',
    skills: ['Git', 'GitHub'],
    color: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  },
  {
    title: 'Hardware & Embedded',
    skills: ['Arduino UNO', 'Ultrasonic Sensors', 'Servo Motors', 'TFT Display'],
    color: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Technical Skills
          </h2>
          <p className="text-text-secondary">
            Technologies and tools I work with
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-card rounded-xl p-6 border border-border"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border ${category.color} transition-transform hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
