import React from 'react'
import { FaCode, FaServer, FaDatabase, FaCloud, FaCertificate } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: FaCode,
      skills: ["Python", "JavaScript", "Java", "TypeScript", "SQL"],
      color: "text-blue-400"
    },
    {
      title: "Frameworks",
      icon: FaServer,
      skills: ["Django", "Angular", "SpringBoot", "ReactJS", "NodeJS", "ExpressJS", "PyTorch", "TailwindCSS"],
      color: "text-green-400"
    },
    {
      title: "Databases",
      icon: FaDatabase,
      skills: ["MySQL", "PostgreSQL", "DynamoDB", "MongoDB", "Hazelcast", "SybaseDB", "Neo4j"],
      color: "text-yellow-400"
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      skills: ["Apache Kafka", "PySpark", "Jenkins", "Docker", "Podman", "Kubernetes"],
      color: "text-purple-400"
    }
  ]

  const certifications = [
    "Microsoft Certified: Azure Fundamentals (AZ-900)",
    "Google Cybersecurity Professional Certificate"
  ]

  return (
    <section id="skills" className="py-20 bg-dark-light">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-dark-lighter p-6 rounded-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <category.icon className={`text-2xl ${category.color} mr-3`} />
                <h3 className="text-lg font-semibold text-secondary">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="text-accent text-sm hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-dark-lighter p-8 rounded-lg animate-slide-up">
          <div className="flex items-center mb-6">
            <FaCertificate className="text-2xl text-primary mr-3" />
            <h3 className="text-xl font-semibold text-secondary">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center p-3 bg-dark rounded-lg hover:bg-dark-lighter transition-colors duration-300"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-accent">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
