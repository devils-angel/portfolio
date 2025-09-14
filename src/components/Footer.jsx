import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/devils-angel', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/yukta-shah/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:yuktaxs2000@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-lighter py-12">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
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
          
          <p className="text-accent text-sm mb-4">
            Built with React, TailwindCSS, and lots of{' '}
            <FaHeart className="inline text-red-500 mx-1" />
          </p>
          
          <p className="text-accent text-sm">
            © 2025 Yukta Piyush Shah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
