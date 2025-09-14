import React from 'react'
import { FaTrophy, FaMedal, FaUsers, FaAward, FaLaptopCode} from 'react-icons/fa'

const Achievements = () => {
  const achievements = [
    {
      title: "Smart India Hackathon 2020 Winner",
      description: "Won the Best Project award for Cyber Ally, a cybercrime prevention application developed for MHRD, India.",
      icon: FaTrophy,
      type: "Hackathon",
      year: "2020"
    },
    {
      title: "ASEAN India Hackathon 2021 Winner",
      description: "Won the ASEAN India Hackathon by collaborating with an international team to develop an AI-powered prototype using satellite imagery to optimize Traffic Management in Coastal Regions.",
      icon: FaMedal,
      type: "International Hackathon",
      year: "2021"
    },
    {
      title: "Student Assistant, UT Dallas",
      description: "Supported campus operations, streamlining parking and transportation services and improving efficiency for over 5,000 students and staff",
      icon: FaUsers,
      type: "Leadership",
      year: "2024"
    }
  ]

  return (
    <section id="achievements" className="py-20">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Leadership & Achievements
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="bg-dark-light p-8 rounded-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <achievement.icon className="text-primary text-4xl mx-auto mb-4" />
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="bg-primary text-dark px-3 py-1 rounded-full text-sm font-medium">
                    {achievement.type}
                  </span>
                  <span className="text-accent text-sm">
                    {achievement.year}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-secondary mb-4 text-center">
                {achievement.title}
              </h3>
              
              <p className="text-accent text-sm leading-relaxed text-center">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-dark-lighter p-8 rounded-lg">
            <FaLaptopCode className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Hackathon Enthusiast
            </h3>
            <p className="text-accent max-w-2xl mx-auto">
              I actively participate in hackathons and coding competitions, where I've won multiple awards 
              and collaborated with international teams to solve complex problems using innovative technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
