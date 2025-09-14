import React from 'react'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaAward } from 'react-icons/fa'

const Education = () => {
  const educationData = [
    {
      degree: "Master's in Computer Science",
      university: "University of Texas at Dallas",
      location: "Texas",
      duration: "Aug 2024 – May 2026",
      gpa: "3.5",
      coursework: ["Computer Networks", "DBMS", "Algorithms", "Operating System", "Artificial Intelligence"],
      icon: FaGraduationCap
    },
    {
      degree: "Bachelor's in Computer Engineering",
      university: "Sardar Vallabhbhai National Institute Of Technology",
      location: "India",
      duration: "Jul 2018 – Jul 2022",
      gpa: "3.6",
      coursework: ["Software Engineering", "IoT Security", "Data Structures", "Machine Learning", "Cloud Computing"],
      icon: FaGraduationCap
    }
  ]

  return (
    <section id="education" className="py-20">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-dark-light p-8 rounded-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <edu.icon className="text-primary text-3xl" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-secondary mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center text-accent text-sm mb-2 md:mb-0">
                      <FaAward className="mr-2 text-primary" />
                      CGPA: {edu.gpa}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center text-accent mb-2 md:mb-0">
                      <FaMapMarkerAlt className="mr-2 text-primary" />
                      {edu.university}, {edu.location}
                    </div>
                    <div className="flex items-center text-accent text-sm">
                      <FaCalendarAlt className="mr-2 text-primary" />
                      {edu.duration}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-secondary font-medium mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span 
                          key={courseIndex}
                          className="bg-dark-lighter text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
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

export default Education
