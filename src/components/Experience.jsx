import React from 'react'
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaChartLine, FaShieldAlt, FaCogs } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: "Union Bank of Switzerland (UBS)",
      position: "Software Engineer",
      location: "Pune, India",
      duration: "July 2022 – July 2024",
      technologies: ["Apache Kafka", "PySpark", "FastAPI Microservices", "Grafana", "SQL", "Kubernetes"],
      achievements: [
        "Worked in a cross-functional team of 11 to design and deploy ETL pipelines processing 10M+ records across 600+ business scenarios, reducing analysis time by 40%",
        "Migrated batch-driven pipelines to event-driven architecture with Apache Kafka, reducing data latency from hours to near real-time and enabling processing of 10M+ events/day",
        "Developed FastAPI microservices to replace monolithic services, reducing backend latency by 30%",
        "Delivered real-time monitoring dashboards with Grafana and Prometheus, increasing observability accuracy by 30%",
        "Resolved 100+ vulnerabilities and performed SSL upgrades across 10+ production clusters, to strengthen platform security"
      ],
      icon: FaBuilding
    },
    {
      company: "Credit Suisse",
      position: "Technology Analyst Intern",
      location: "Pune, India",
      duration: "May 2021 – July 2021",
      technologies: ["Python", "RASA", "NLP", "Shell Scripting", "ServiceNow"],
      achievements: [
        "Designed training datasets, intents, and dialogue flows, gaining hands-on experience in natural language understanding (NLU) and dialogue management, foundational concepts for LLM-based assistants",
        "Built and deployed an AI-powered conversational assistant using RASA, reducing manual intervention by 40% and improving response times for production support queries",
        "Automated ServiceNow workflows with Python scripting, reducing incident and change request processing time by 40%"
      ],
      icon: FaBuilding
    },
    {
      company: "Tread Binary Technologies Pvt. Ltd.",
      position: "Python Developer Intern",
      location: "Mumbai, India",
      duration: "Dec 2020 – Mar 2021",
      technologies: ["Django REST Framework", "Angular 9", "Celery", "RabbitMQ", "MongoDB", "JWT"],
      achievements: [
        "Developed secure backend APIs with Django REST Framework, integrated Celery & RabbitMQ for asynchronous tasks, and enforced JWT authentication, aligning with healthcare-grade security practices",
        "Designed an Angular frontend, improving workflow efficiency by 30% and reducing backend response time by 20%",
        "Pioneered a high-efficiency mock data creation platform using Django REST Framework and Angular 9 unified with MongoDB for real-time analytics, delivering a 70% reduction in development time and a 25% increase in data accuracy"
      ],
      icon: FaBuilding
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-dark-light p-8 rounded-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <exp.icon className="text-primary text-3xl" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-secondary">
                      {exp.position}
                    </h3>
                    <div className="flex items-center text-accent text-sm">
                      <FaCalendarAlt className="mr-2 text-primary" />
                      {exp.duration}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center text-accent mb-2 md:mb-0">
                      <FaBuilding className="mr-2 text-primary" />
                      {exp.company}
                    </div>
                    <div className="flex items-center text-accent text-sm">
                      <FaMapMarkerAlt className="mr-2 text-primary" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-secondary font-medium mb-3 flex items-center">
                      <FaCode className="mr-2 text-primary" />
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-dark-lighter text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-secondary font-medium mb-3 flex items-center">
                      <FaChartLine className="mr-2 text-primary" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-accent">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
