
import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 italic mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Software developer and networking specialist with proven expertise in full-stack development and enterprise infrastructure
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left - Bio */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-800 italic">My Journey</h3>
              <p className="text-gray-700 leading-relaxed">
                With 5+ years of experience in software development and network administration, I've worked with diverse technologies and teams to solve complex technical challenges. My journey started with a passion for technology and has evolved into a career of building scalable solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 italic">Core Expertise</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-sky-600 text-2xl mt-1">💻</span>
                  <div>
                    <p className="font-semibold text-gray-800 italic">Web Development</p>
                    <p className="text-gray-600 text-sm">React, Node.js, Express, MongoDB, REST APIs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sky-600 text-2xl mt-1">🌐</span>
                  <div>
                    <p className="font-semibold text-gray-800 italic">Networking Administration</p>
                    <p className="text-gray-600 text-sm">Cisco routing, VLANs, network security, server configuration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sky-600 text-2xl mt-1">🔒</span>
                  <div>
                    <p className="font-semibold text-gray-800 italic">Security & DevOps</p>
                    <p className="text-gray-600 text-sm">Cloud platforms, CI/CD pipelines, infrastructure security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats & Highlights */}
          <div className="space-y-8">
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-sky-100 to-blue-50 rounded-xl p-6 border border-sky-200 text-center hover:shadow-lg transition duration-300">
                <p className="text-4xl font-bold text-sky-600 italic">5+</p>
                <p className="text-gray-700 font-medium mt-2">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-sky-100 to-blue-50 rounded-xl p-6 border border-sky-200 text-center hover:shadow-lg transition duration-300">
                <p className="text-4xl font-bold text-sky-600 italic">50+</p>
                <p className="text-gray-700 font-medium mt-2">Projects Completed</p>
              </div>
              <div className="bg-gradient-to-br from-sky-100 to-blue-50 rounded-xl p-6 border border-sky-200 text-center hover:shadow-lg transition duration-300">
                <p className="text-4xl font-bold text-sky-600 italic">20+</p>
                <p className="text-gray-700 font-medium mt-2">Happy Clients</p>
              </div>
              <div className="bg-gradient-to-br from-sky-100 to-blue-50 rounded-xl p-6 border border-sky-200 text-center hover:shadow-lg transition duration-300">
                <p className="text-4xl font-bold text-sky-600 italic">15+</p>
                <p className="text-gray-700 font-medium mt-2">Tech Skills</p>
              </div>
            </div>

            {/* Certifications/Highlights */}
            <div className="bg-sky-50 border-l-4 border-sky-600 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-800 italic mb-4">Highlights</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-sky-600">✓</span> Full-stack web application development
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-sky-600">✓</span> Enterprise network infrastructure design
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-sky-600">✓</span> Cloud platform expertise (AWS, Azure)
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-sky-600">✓</span> Security-first development practices
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-sky-600">✓</span> Team leadership and mentoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
