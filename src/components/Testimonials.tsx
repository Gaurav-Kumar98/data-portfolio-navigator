
import { TestimonialCarousel, Testimonial } from '@/components/ui/testimonial';
import { Section } from '@/components/ui/section';

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&h=150",
    description: "As a product manager, working with this data engineer transformed our analytics. Their ETL pipelines delivered insights that directly increased our conversion rates by 28%."
  },
  {
    id: 2,
    name: "Samantha Williams",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&h=150",
    description: "Incredible data architecture skills! Built our data warehouse from scratch and implemented automated reporting that saved us 20+ hours weekly. Highly recommended."
  },
  {
    id: 3,
    name: "Marco Diaz",
    avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=150&h=150",
    description: "Their expertise in streaming data technologies revolutionized how we handle real-time analytics. Professional, communicative, and delivered exactly what we needed."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <div className="section-inner">
        <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          I've had the pleasure of collaborating with professionals across various industries. 
          Here's what they have to say about working with me.
        </p>
        
        <TestimonialCarousel 
          testimonials={TESTIMONIALS_DATA}
          className="max-w-md mx-auto mb-20"
        />
      </div>
    </section>
  );
};

export default Testimonials;
