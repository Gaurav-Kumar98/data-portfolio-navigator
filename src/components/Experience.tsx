
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [selectedCompany, setSelectedCompany] = useState("Netflix");

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

  const companies = [
    {
      name: "Apple",
      logo: "🍎",
      role: "Frontend Developer",
      at: "@ Apple",
      period: "Jan 2022 - Present",
      location: "Cupertino, CA",
      achievements: [
        "Led the redesign of Apple Music web application",
        "Optimized client-side performance resulting in 40% faster load times",
        "Collaborated with design team to implement new visual identity"
      ]
    },
    {
      name: "Google",
      logo: "🔍",
      role: "Software Engineer",
      at: "@ Google",
      period: "Jun 2020 - Dec 2021",
      location: "Mountain View, CA",
      achievements: [
        "Developed new features for Google Drive web interface",
        "Implemented real-time collaboration features",
        "Improved accessibility across Google Workspace apps"
      ]
    },
    {
      name: "Microsoft",
      logo: "🪟",
      role: "UI/UX Engineer",
      at: "@ Microsoft",
      period: "Mar 2019 - May 2020",
      location: "Redmond, WA",
      achievements: [
        "Built interactive prototypes for Microsoft Teams",
        "Reduced bug count by 35% through comprehensive testing",
        "Implemented design system components used across multiple products"
      ]
    },
    {
      name: "Netflix",
      logo: "🎬",
      role: "Software Engineer Intern",
      at: "@ Netflix",
      period: "Jan 2018 - Feb 2019",
      location: "Los Gatos, CA",
      achievements: [
        "Worked on the Netflix recommendation algorithm",
        "Improved streaming quality for users on low bandwidth",
        "Developed A/B testing framework for UI experiments"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-background">
      <div className="section-inner max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground mb-10">
            I switch a lot of companies. It's mostly about the culture.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Companies list */}
            <motion.div variants={itemVariants} className="flex flex-row md:flex-col gap-4 md:w-1/4">
              {companies.map((company) => (
                <div 
                  key={company.name}
                  className={`flex items-center gap-2 p-3 rounded-md ${company.name === selectedCompany ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-foreground'} transition-colors cursor-pointer`}
                  onClick={() => setSelectedCompany(company.name)}
                >
                  <span className="text-2xl">{company.logo}</span>
                  <span className="font-medium">{company.name}</span>
                </div>
              ))}
            </motion.div>

            {/* Selected company details */}
            <motion.div variants={containerVariants} className="md:w-3/4">
              {companies.filter(c => c.name === selectedCompany).map((company) => (
                <div key={`details-${company.name}`}>
                  <motion.div variants={itemVariants} className="mb-6">
                    <h3 className="text-2xl font-bold">
                      {company.role} <span className="text-primary">{company.at}</span>
                    </h3>
                    <p className="text-muted-foreground">{company.period}</p>
                    <p className="text-muted-foreground">{company.location}</p>
                  </motion.div>

                  <motion.ul variants={containerVariants} className="space-y-2">
                    {company.achievements.map((achievement, index) => (
                      <motion.li 
                        key={index}
                        variants={itemVariants}
                        className="flex items-start gap-2"
                      >
                        <Check size={18} className="text-primary mt-1" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
