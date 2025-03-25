import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { TestimonialCarouselDemo } from '@/components/testimonial-carousel-demo';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TestimonialCarouselDemo />
      <Contact />
      <Footer />
    </MainLayout>
  );
};

export default Index;
