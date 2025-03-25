
import { Home, User, Briefcase, Code, BarChart3, Mail } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import BackgroundAnimation from '@/components/BackgroundAnimation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Projects', url: '#projects', icon: Code },
    { name: 'Skills', url: '#skills', icon: BarChart3 },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundAnimation />
      <NavBar items={navItems} />
      <main className="flex-grow pb-20">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
