import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/devils-angel', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/yukta-shah/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:yuktaxs2000@gmail.com', label: 'Email' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-padding max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6">
            Hi, I'm{' '}
            <span className="text-gradient">Yukta Piyush Shah</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent mb-8">
            Software Engineer & AI Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl text-accent max-w-3xl mx-auto mb-12 leading-relaxed">
            I create scalable applications and intelligent systems that tackle real-world problems. Driven by a passion for innovation and technology, I’m actively looking for internship and full-time roles where I can make an impact and grow my expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {/* <button className="btn-primary flex items-center gap-2">
              <FaDownload />
              Download Resume
            </button> */}
            <a 
  href="/Yukta_Shah_Resume.pdf" 
  download 
  className="btn-primary flex items-center gap-2"
>
  <FaDownload />
  Download Resume
</a>
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Learn More
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors duration-300 text-2xl"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
