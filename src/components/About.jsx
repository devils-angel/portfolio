import React from 'react'
import { FaCode, FaRocket, FaBrain, FaUsers } from 'react-icons/fa'

const About = () => {
  const interests = [
    { icon: FaCode, title: 'Full-Stack Development', description: 'Building end-to-end applications' },
    { icon: FaBrain, title: 'AI & Machine Learning', description: 'Creating intelligent systems' },
    { icon: FaRocket, title: 'Cloud & DevOps', description: 'Scalable infrastructure solutions' },
    { icon: FaUsers, title: 'Team Collaboration', description: 'Leading cross-functional teams' },
  ]

  return (
    <section id="about" className="py-20 bg-dark-light">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-accent leading-relaxed">
              <p>
                I'm a passionate Software Engineer with a Master's in Computer Science from 
                the University of Texas at Dallas, specializing in building scalable applications 
                and intelligent systems that solve real-world problems.
              </p>
              <p>
                With experience at companies like UBS and Credit Suisse, I've worked on 
                high-impact projects involving ETL pipelines, microservices architecture, 
                and AI-powered solutions. I'm particularly interested in the intersection 
                of software engineering and artificial intelligence.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or participating in hackathons. I believe in continuous 
                learning and staying updated with the latest industry trends.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="grid grid-cols-2 gap-6">
              {interests.map(({ icon: Icon, title, description }, index) => (
                <div 
                  key={title}
                  className="bg-dark-lighter p-6 rounded-lg card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="text-primary text-2xl mb-3" />
                  <h3 className="text-secondary font-semibold mb-2">{title}</h3>
                  <p className="text-accent text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
