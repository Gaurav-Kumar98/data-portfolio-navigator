
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.div 
            className="rounded-full bg-accent/50 p-2 mb-8 backdrop-blur-sm"
            variants={fadeInUp}
          >
            <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Data Engineer with 5 Years of Experience
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            variants={fadeInUp}
          >
            Transforming Data into
            <span className="text-primary"> Actionable Insights</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            variants={fadeInUp}
          >
            I specialize in building robust data pipelines, creating insightful visualizations, 
            and developing data-driven solutions that help businesses make informed decisions.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-12"
            variants={fadeInUp}
          >
            <Button size="lg" className="button-hover">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="button-hover">
              Contact Me
            </Button>
          </motion.div>

          <motion.div 
            className="flex items-center gap-6"
            variants={fadeInUp}
          >
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-muted-foreground/60 rounded-full animate-pulse-slow"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
