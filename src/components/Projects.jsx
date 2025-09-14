import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaRobot, FaBook, FaStickyNote, FaChartLine, FaTasks} from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "GraphTalk",
      description: "A conversational AI assistant using LangChain and LangGraph, enabling multi-turn dialogue and context-aware responses.",
      technologies: ["LangChain", "LangGraph", "OpenAI", "Streamlit", "Python", "Docker", "LangFuse"],
      features: [
        "Multi-turn dialogue and context-aware responses",
        "OpenAI GPT integration for natural language understanding",
        "Interactive web interface with Streamlit",
        "Monitoring and debugging workflows using LangFuse"
      ],
      icon: FaRobot,
      github: "https://github.com/devils-angel/GraphTalk",
      demo: "#"
    },
    {
      title: "LitLens",
      description: "An AI-powered semantic book recommendation system using OpenAI embeddings, Pinecone, and knowledge graphs.",
      technologies: ["Python", "OpenAI API", "Neo4j", "Pinecone", "Flask", "Streamlit", "Machine Learning", "AI"],
      features: [
        "40% boost in suggestion accuracy",
        "Real-time interactive UI with Streamlit",
        "20,000+ books indexed in knowledge graph",
        "60% lower recommendation latency"
      ],
      icon: FaBook,
      github: "https://github.com/devils-angel/LitLens",
      demo: "#"
    },
    {
      title: "React-Notes-App",
      description: "A comprehensive note-taking application with advanced organization features and modern UI.",
      technologies: ["React", "TailwindCSS", "Context API", "Netlify"],
      features: [
        "Efficient note creation and management",
        "Pinned, starred, and archived notes",
        "Permanent deletion capability",
        "Modern, responsive UI design"
      ],
      icon: FaStickyNote,
      github: "https://github.com/devils-angel/React-Notes-App",
      demo: "#"
    }
    ,
    {
  title: "SAVI (Smart Assistant for Value Investing)",
  description: "A web-based stock trading simulator that integrates emotional intelligence through haptic feedback and physiological signal monitoring built during WeHack2025",
  technologies: [
    "React",
    "TailwindCSS",
    "Machine Learning",
    "Gemini API",
    "Hardware Sensors"
  ],
  features: [
    "Beginner-friendly stock trading simulation",
    "Historical trend analysis with predictive insights",
    "Integration with haptic device for emotion monitoring",
    "Trade validation based on emotional state",
    "Real-time feedback blending finance and behavioral psychology"
  ],
  icon: FaChartLine, // good alternative, you can change if you prefer
  github: "https://github.com/devils-angel/SAVI",
  demo: "#"
}
,
{
  title: "SprintBoard",
  description: "A secure task management system built with Spring Boot and JWT authentication, supporting efficient project and task tracking.",
  technologies: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "JUnit",
    "MySQL",
    "MongoDB",
    "Git"
  ],
  features: [
    "RESTful API for managing projects and tasks",
    "JWT-based authentication and authorization",
    "Secure CRUD operations with role-based access",
    "Relational database integration (MySQL)",
    "Unit testing with JUnit for reliability",
    "Support for hybrid data persistence with MongoDB"
  ],
  icon: FaTasks, // suitable icon for task management
  github: "https://github.com/devils-angel/SprintBoard",
  demo: "#"
}

  ]

  return (
    <section id="projects" className="py-20 bg-dark-light">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Academic Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-dark-lighter p-8 rounded-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <project.icon className="text-primary text-3xl mr-4" />
                  <h3 className="text-xl font-semibold text-secondary">
                    {project.title}
                  </h3>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary transition-colors duration-300"
                    aria-label="Demo"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              <p className="text-accent mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-secondary font-medium mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-accent text-sm">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-secondary font-medium mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-dark text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
