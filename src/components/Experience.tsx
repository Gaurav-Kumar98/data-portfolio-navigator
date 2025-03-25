
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

const Experience = () => {
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

  const timelineItems: TimelineItem[] = [
    {
      year: "2023 - Present",
      role: "Senior Data Engineer",
      company: "DataViz Innovations",
      description: "Leading a team to design and implement cloud-based data solutions, optimizing data pipelines, and developing real-time analytics platforms."
    },
    {
      year: "2021 - 2023",
      role: "Data Engineer",
      company: "TechAnalytics",
      description: "Developed and maintained ETL pipelines, optimized database performance, and created data models for business intelligence applications."
    },
    {
      year: "2019 - 2021",
      role: "Data Analyst",
      company: "Insightful Research",
      description: "Conducted data analysis, created visualizations, and developed reports to support business decision-making processes."
    },
    {
      year: "2017 - 2019",
      role: "Junior Data Analyst",
      company: "Data Pioneers",
      description: "Assisted in data collection, cleaning, and basic analysis. Supported the team in developing reports and visualizations."
    }
  ];

  return (
    <section id="experience" className="section">
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
              Experience
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            My Professional Journey
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            Over the years, I've had the opportunity to work with various organizations,
            each experience adding to my skill set and understanding of data engineering.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-12 relative"
            >
              <div className="flex">
                <div className="hidden md:block w-24 flex-shrink-0 text-sm text-muted-foreground pt-1">
                  <motion.span variants={itemVariants}>{item.year}</motion.span>
                </div>
                
                <div className="ml-6 relative flex-grow">
                  {/* Timeline line */}
                  {index < timelineItems.length - 1 && (
                    <div className="absolute left-0 top-4 w-0.5 h-full bg-border -ml-3.5"></div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary -ml-5"></div>
                  
                  <motion.div variants={itemVariants} className="mb-2 md:hidden text-sm text-muted-foreground">
                    {item.year}
                  </motion.div>
                  
                  <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-1">
                    {item.role}
                  </motion.h3>
                  
                  <motion.div variants={itemVariants} className="text-primary font-medium mb-3">
                    {item.company}
                  </motion.div>
                  
                  <motion.p variants={itemVariants} className="text-muted-foreground">
                    {item.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
