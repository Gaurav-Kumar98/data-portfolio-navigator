
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      
      // Reset form after submission
      const form = e.target as HTMLFormElement;
      form.reset();
      
      // Reset submitted state after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-secondary/30">
      <div className="section-inner">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <motion.div variants={itemVariants} className="inline-block mb-3">
            <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary">
              Contact
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Get In Touch
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            Have a project in mind or interested in working together? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">contact@yourdomain.com</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <motion.form 
              variants={itemVariants} 
              onSubmit={handleSubmit}
              className="space-y-6 p-6 bg-background/50 backdrop-blur-sm rounded-lg border border-border/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="bg-background/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="How can I help you?" 
                  required 
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  required 
                  className="min-h-32 bg-background/50"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full button-hover" 
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>Sending Message...</>
                ) : isSubmitted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" /> Message Sent
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
