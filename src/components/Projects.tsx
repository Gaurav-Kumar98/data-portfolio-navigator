
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
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

  const projects: ProjectItem[] = [
    {
      title: "Data Pipeline Automation",
      description: "Developed an automated ETL pipeline using Apache Airflow to process and transform large datasets from multiple sources.",
      tags: ["Apache Airflow", "Python", "AWS", "ETL"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Created a real-time analytics dashboard to visualize key performance indicators and business metrics.",
      tags: ["Kafka", "Spark", "React", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Data Quality Framework",
      description: "Implemented a comprehensive data quality framework to ensure data accuracy, completeness, and consistency.",
      tags: ["Python", "SQL", "Great Expectations", "dbt"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Cloud Data Warehouse",
      description: "Designed and deployed a cloud-based data warehouse solution to centralize and optimize data access.",
      tags: ["Snowflake", "AWS", "Terraform", "SQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section bg-secondary/30">
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
              Projects
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Featured Work
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            Here are some of the projects I've worked on that showcase my skills and expertise 
            in data engineering and analytics.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden border border-border/30 bg-card/50 backdrop-blur-sm card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-accent text-accent-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                  {project.liveUrl && (
                    <Button variant="default" size="sm" className="button-hover">
                      View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="button-hover">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
