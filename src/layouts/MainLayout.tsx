import { Home, User, Briefcase, Code, Mail, MessageSquareQuote } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { useEffect, useState } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Projects', url: '#projects', icon: Code },
    { name: 'Testimonials', url: '#testimonials', icon: MessageSquareQuote },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.3 } // 30% of the section must be visible
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {activeSection === 'home' && <BackgroundAnimation />}
      <NavBar 
        items={navItems} 
        activeTab={activeSection}
      />
      <main className="flex-grow pb-20">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
