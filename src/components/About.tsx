import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BadgeCheck, Database, FileCode, LineChart, Server, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

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

  const services = [
    {
      icon: <Database size={24} className="text-primary" />,
      title: "Data Pipeline Development",
      description: "Building efficient ETL processes and data workflows to ensure reliable data processing and transformation."
    },
    {
      icon: <LineChart size={24} className="text-primary" />,
      title: "AI & LLM Integration",
      description: "Implementing advanced AI and large language models for intelligent data processing and automation solutions."
    },
    {
      icon: <Server size={24} className="text-primary" />,
      title: "Cloud Architecture",
      description: "Designing scalable Azure cloud infrastructures supporting modern data engineering needs and business growth."
    },
    {
      icon: <FileCode size={24} className="text-primary" />,
      title: "Document Intelligence",
      description: "Building intelligent document processing systems with AI to extract, analyze, and utilize unstructured data."
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: "Conversational AI",
      description: "Developing chatbot solutions and conversational interfaces with vector databases for enhanced user experiences."
    },
    {
      icon: <BadgeCheck size={24} className="text-primary" />,
      title: "Data Quality Optimization",
      description: "Implementing processes and tools to ensure data accuracy, consistency, and reliability throughout systems."
    }
  ];

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="section-inner">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="flex flex-col mb-10 text-center">
            <div className="w-full">
              <motion.div variants={itemVariants} className="flex justify-center mb-3">
                <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary">
                  About Me
                </span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
                Transforming Data into Actionable Insights
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With extensive experience in data engineering, I've developed expertise in building
                robust data pipelines and innovative AI solutions. I specialize in leveraging cloud technologies 
                and modern data architecture to solve complex business challenges and drive data-driven decision making.
              </motion.p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border border-border/30 bg-card/50 backdrop-blur-sm card-hover">
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
