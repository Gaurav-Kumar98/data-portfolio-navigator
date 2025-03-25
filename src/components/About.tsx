
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
      description: "Building efficient ETL processes and data workflows to ensure reliable data processing."
    },
    {
      icon: <LineChart size={24} className="text-primary" />,
      title: "Data Visualization",
      description: "Creating insightful dashboards and visualizations that make complex data accessible."
    },
    {
      icon: <Server size={24} className="text-primary" />,
      title: "Data Architecture",
      description: "Designing scalable data infrastructures that support business growth and analytics needs."
    },
    {
      icon: <FileCode size={24} className="text-primary" />,
      title: "Data Engineering Solutions",
      description: "Developing custom data solutions tailored to specific business requirements."
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: "Team Collaboration",
      description: "Working effectively with data scientists, analysts, and stakeholders to deliver results."
    },
    {
      icon: <BadgeCheck size={24} className="text-primary" />,
      title: "Data Quality Management",
      description: "Implementing processes to ensure data accuracy, consistency, and reliability."
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
          <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
            <motion.div variants={itemVariants} className="md:w-1/3">
              <img 
                src="/Profile photo.jpg" 
                alt="Profile" 
                className="rounded-lg shadow-xl object-cover w-full max-w-[280px] h-auto" 
              />
            </motion.div>
            
            <div className="md:w-2/3">
              <motion.div variants={itemVariants} className="inline-block mb-3">
                <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary">
                  About Me
                </span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
                Passionate about transforming data into value
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
                With 5 years of experience in data engineering, I've developed expertise in building
                robust data pipelines, creating insightful visualizations, and implementing efficient
                data solutions for diverse business needs.
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
