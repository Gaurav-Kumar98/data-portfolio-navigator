import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [selectedCompany, setSelectedCompany] = useState("McKinsey & Company");
  const [selectedIndex, setSelectedIndex] = useState(0);

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
      name: "McKinsey & Company",
      logo: "/images/companies/McK.jpg",
      role: "Senior Data Engineer",
      at: "@ McKinsey & Company",
      period: "October 2024 - March 2025",
      location: "Remote",
      achievements: [
        "Transformed systems to cloud, cutting costs by 60% and boosting efficiency by 35%.",
        "Built Kafka and Spark streaming for instant analytics.",
        "Established governance for compliance and accessibility.",
        "Mentored engineers and standardized ETL practices."
      ]
    },
    {
      name: "Pratham Software",
      logo: "/images/companies/PSI.png",
      role: "Senior Data Engineer",
      at: "@ Pratham Software",
      period: "October 2023 - March 2025",
      location: "Jaipur, Rajasthan",
      achievements: [
        "Developed a flexible document parser using Python, Azure Document Intelligence, and GPT-4 for scalable payroll data extraction.",
        "Engineered a modular template matching solution to handle diverse payroll formats and boost system flexibility.",
        "Created an invoice automation chatbot with Langchain and Vanna.ai, integrating a vector database and text-to-SQL for streamlined support.",
        "Enhanced collaboration with Git, rigorous testing, and user feedback to maintain high-quality code."
      ]
    },
    {
      name: "Mandelbulb Technologies",
      logo: "/images/companies/MBTECH.jpeg",
      role: "Data Engineer",
      at: "@ Mandelbulb Technologies",
      period: "October 2022 - September 2023",
      location: "Jaipur, Rajasthan",
      achievements: [
        "Built data pipelines with Airbyte, Databricks, and Azure Data Factory to standardize REST API data into FHIR, cutting extraction time by 20%.",
        "Automated multi-tenant workflows using Airflow, Kubernetes, and Docker, reducing onboarding time by 50% and boosting deployment by 25%.",
        "Enhanced ETL processes with Azure Functions and incremental loading to improve KPIs, increasing decision-making efficiency by 40% and lowering redundancy by 25%.",
        "Adopted agile practices with Azure DevOps and open-source tools for continuous improvement and effective team collaboration."
      ]
    },
    {
      name: "Techno Solar Power",
      logo: "/images/companies/TSP.jpg",
      role: "Data Engineer",
      at: "@ Techno Solar Power",
      period: "October 2020 - September 2022",
      location: "Jaipur, Rajasthan",
      achievements: [
        "Migrated on-prem SQL warehouse to Azure Cloud using Synapse, Data Lake Gen2, and Databricks for seamless SAP ingestion.",
        "Converted SQL procedures to optimized PySpark with in-memory computation and Delta Lake, reducing runtimes to 5-8 minutes.",
        "Redesigned data models with Fact-Dimension modeling on Azure Synapse for real-time Power BI reporting and actionable KPIs."
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
            My professional journey in data engineering and analytics.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Companies list with animated line */}
            <motion.div variants={itemVariants} className="flex flex-row md:flex-col gap-4 md:w-1/3 relative">
              {/* Company container with left padding for the line */}
              <div className="relative md:pl-6 md:border-l-0 w-full">
                {/* Vertical line - fixed position and height */}
                <div className="hidden md:block absolute left-0 top-0 w-0.5 h-full bg-border/30">
                  {/* Animated highlight with fixed height */}
                  <motion.div
                    className="absolute w-full bg-primary"
                    initial={{ top: 0 }}
                    animate={{
                      top: `${selectedIndex * (100 / companies.length)}%`
                    }}
                    style={{ height: `${100 / companies.length}%` }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                </div>
                
                {companies.map((company, index) => (
                  <div 
                    key={company.name}
                    className={`flex items-center gap-4 p-3 pl-8 rounded-md mb-2 ${
                      company.name === selectedCompany 
                        ? 'bg-muted text-primary' 
                        : 'text-muted-foreground hover:text-foreground'
                    } transition-colors cursor-pointer`}
                    onClick={() => {
                      setSelectedCompany(company.name);
                      setSelectedIndex(index);
                    }}
                  >
                    <img src={company.logo} alt={company.name} className="w-12 h-12 object-contain" />
                    <span className="font-medium">{company.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Selected company details */}
            <motion.div variants={containerVariants} className="md:w-2/3">
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
