import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

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

  // Social media and contact URLs
  const github = "https://github.com/Gaurav-Kumar98";
  const linkedin = "https://www.linkedin.com/in/gauravkumar98/";
  const email = "gk0415439@gmail.com";
  const phone = "+917014938338";

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
            className="mb-8"
            variants={fadeInUp}
          >
            <img 
              src="/Profile photo.jpg" 
              alt="Gaurav Kumar" 
              className="w-48 h-48 rounded-full object-cover border-2 border-primary/20 shadow-lg"
            />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            variants={fadeInUp}
          >
            I'm <span className="text-primary">Gaurav Kumar</span>, <br />
            Senior Data Engineer
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            variants={fadeInUp}
          >
            I specialize in building robust data pipelines, AI-powered solutions, 
            and cloud-based architectures that transform raw data into actionable insights.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-12 pointer-events-auto"
            variants={fadeInUp}
          >
            <a href="#projects" className="inline-block pointer-events-auto">
              <Button size="lg" className="button-hover pointer-events-auto">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            
            <a href="#contact" className="inline-block pointer-events-auto">
              <Button variant="outline" size="lg" className="button-hover pointer-events-auto">
                Contact Me
              </Button>
            </a>
          </motion.div>

          <motion.div 
            className="flex items-center gap-6 pointer-events-auto"
            variants={fadeInUp}
          >
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors pointer-events-auto">
              <Github size={24} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors pointer-events-auto">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors pointer-events-auto">
              <Mail size={24} />
            </a>
            <a href={`tel:${phone}`} className="text-muted-foreground hover:text-primary transition-colors pointer-events-auto">
              <Phone size={24} />
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
