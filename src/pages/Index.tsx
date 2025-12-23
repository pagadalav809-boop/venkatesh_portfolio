import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Pagadala Venkatesh | Python Developer & Software Engineer</title>
      <meta 
        name="description" 
        content="ECE graduate and Python developer with experience in MySQL, web technologies, and embedded systems. View my projects and connect for software development opportunities." 
      />
      
      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
