
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </MainLayout>
  );
};

export default Index;
