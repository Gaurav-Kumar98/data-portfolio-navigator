
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const Skills = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      name: "Data Processing",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Apache Spark", level: 80 },
        { name: "Pandas", level: 90 }
      ]
    },
    {
      name: "Data Storage",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Snowflake", level: 80 },
        { name: "Amazon S3", level: 85 }
      ]
    },
    {
      name: "Data Orchestration",
      skills: [
        { name: "Apache Airflow", level: 85 },
        { name: "dbt", level: 80 },
        { name: "Prefect", level: 75 },
        { name: "Docker", level: 80 }
      ]
    },
    {
      name: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 85 },
        { name: "GCP", level: 75 },
        { name: "Azure", level: 70 },
        { name: "Kubernetes", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
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
              Skills
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Technical Expertise
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            A comprehensive overview of my technical skills and proficiency levels 
            across various data engineering technologies and tools.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <Card className="h-full border border-border/30 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-primary">{category.name}</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
