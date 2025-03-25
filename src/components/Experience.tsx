import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [selectedCompany, setSelectedCompany] = useState("McKinsey & Company");

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
        "Led the digital transformation of legacy data systems to cloud-native solutions, resulting in a 60% reduction in operational costs and 35% improvement in data processing efficiency",
        "Architected and implemented real-time data streaming pipelines using Kafka and Spark Structured Streaming to enable instant analytics on customer behavior data",
        "Designed and deployed a comprehensive data governance framework that ensured compliance with global regulations while maintaining data accessibility",
        "Mentored junior data engineers and established best practices for data modeling and ETL development across the organization"
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
        "Optimized Data Infrastructure for McKinsey's Periscope Price Tool: Supported and optimized data pipelines for the tool by designing scalable workflows that seamlessly processed diverse real-time market and consumer data, enabling dynamic pricing insights and driving revenue growth.",
        "Built a flexible document parser: Leveraged Python, Azure Document Intelligence, and GPT-4 to extract payroll data from diverse document layouts, employing robust data models and advanced error handling for scalable processing.",
        "Developed dynamic system architecture: Designed a modular template matching solution to adapt to varying payroll formats, ensuring seamless integration of new document types and enhancing overall system flexibility.",
        "Built an intelligent chatbot solution: Conceptualized and deployed a multi-functional chatbot for invoice automation using Langchain and Vanna.ai, integrating a vector database and text-to-SQL functionality to streamline user support and query resolution.",
        "Enhanced collaboration and quality: Utilized Git for version control and rigorous testing, incorporating user feedback to continuously refine both solutions and maintain high code quality."
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
        "Engineered robust data pipelines: Leveraged Airbyte, Databricks, and Azure Data Factory to extract data from diverse REST APIs and standardize it into FHIR format, reducing extraction time by 20% and enhancing data quality for healthcare analytics.",
        "Streamlined workflow orchestration: Utilized Airflow DAG factories, Kubernetes, and Docker to automate multi-tenant data processing and alerting, cutting tenant onboarding time by 50% and boosting deployment efficiency by 25%.",
        "Optimized ETL processes for actionable insights: Employed Azure Functions and incremental loading techniques to transform data and calculate KPIs, driving a 40% improvement in decision-making efficiency while reducing data redundancy by 25%.",
        "Implemented agile engineering practices: Adopted best practices and agile methodologies via Azure DevOps (boards and repos) and open-source tools, ensuring continuous process improvement and effective cross-team collaboration."
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
        "Modernized ETL workflows: Architected the migration from an on-premise SQL data warehouse to Azure Cloud using Synapse Pipelines, Data Lake Gen2, and Databricks for seamless SAP data ingestion.",
        "Enhanced processing efficiency: Transformed legacy SQL stored procedures into optimized PySpark scripts, leveraging in-memory computation and Delta Lake to reduce pipeline runtimes to 5–8 minutes.",
        "Empowered data-driven insights: Redesigned data models with Fact-Dimension modeling on Azure Synapse, enabling real-time Power BI reporting and the development of actionable KPIs."
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
            {/* Companies list */}
            <motion.div variants={itemVariants} className="flex flex-row md:flex-col gap-4 md:w-1/4">
              {companies.map((company) => (
                <div 
                  key={company.name}
                  className={`flex items-center gap-2 p-3 rounded-md ${company.name === selectedCompany ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-foreground'} transition-colors cursor-pointer`}
                  onClick={() => setSelectedCompany(company.name)}
                >
                  <img src={company.logo} alt={company.name} className="w-12 h-12 object-contain" />
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
