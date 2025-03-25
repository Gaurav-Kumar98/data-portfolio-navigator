import { TestimonialsSection } from "./testimonials-with-marquee"

const testimonials = [
  {
    id: 1,
    name: "Rajiv Sharma",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    description: "Gaurav's optimization of our Periscope Price Tool's data infrastructure has been transformative. His scalable workflows reduced processing time by 40% and enabled real-time market insights that directly impacted our revenue growth."
  },
  {
    id: 2,
    name: "Priya Mehta",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    description: "Working with Gaurav on our healthcare data pipelines was exceptional. His expertise in Azure and Databricks streamlined our FHIR transformation process, and his Airflow orchestration reduced our tenant onboarding time by half."
  },
  {
    id: 3,
    name: "Anand Patel",
    avatar: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=300&h=300&fit=crop&crop=face",
    description: "Gaurav led our data warehouse migration to Azure with exceptional skill. His PySpark optimizations reduced our pipeline runtime from hours to minutes, and his data models significantly improved our business intelligence capabilities."
  },
  {
    id: 4,
    name: "Neha Gupta",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    description: "The document parser Gaurav built using Azure Document Intelligence and GPT-4 was revolutionary for our payroll processing. It handles diverse formats with 98% accuracy and adapts to new document types seamlessly."
  },
  {
    id: 5,
    name: "Vikram Singh",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    description: "Gaurav's intelligent chatbot implementation using LangChain and vector databases transformed our invoice automation workflow. His solution reduced query resolution time by 75% while maintaining exceptional accuracy."
  }
]

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="What colleagues and clients say"
      description="Feedback from professionals who have collaborated with me on data engineering and AI projects"
      testimonials={testimonials}
    />
  )
} 