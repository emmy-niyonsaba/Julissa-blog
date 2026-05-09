
import React from 'react'

const About = () => {
  return (c
    <section id="about" className="py-20 bg-[#f4efe3]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f2042] italic mb-4">
            About Me
          </h2>
          <p className="text-lg text-[#6f677d] max-w-2xl mx-auto">
            Software developer and networking specialist with proven expertise in full-stack development and enterprise infrastructure
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left - Bio */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[#2f2042] italic">My Journey</h3>
              <p className="text-[#4a345f] leading-relaxed">
                With 5+ years of experience in software development and network administration, I've worked with diverse technologies and teams to solve complex technical challenges. My journey started with a passion for technology and has evolved into a career of building scalable solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#2f2042] italic">Core Expertise</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#f0bc2f] text-2xl mt-1">💻</span>
                  <div>
                    <p className="font-semibold text-[#2f2042] italic">Web Development</p>
                    <p className="text-[#6f677d] text-sm">React, Node.js, Express, MongoDB, REST APIs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#f0bc2f] text-2xl mt-1">🌐</span>
                  <div>
                    <p className="font-semibold text-[#2f2042] italic">Networking Administration</p>
                    <p className="text-[#6f677d] text-sm">Cisco routing, VLANs, network security, server configuration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#f0bc2f] text-2xl mt-1">🔒</span>
                  <div>
                    <p className="font-semibold text-[#2f2042] italic">Security & DevOps</p>
                    <p className="text-[#6f677d] text-sm">Cloud platforms, CI/CD pipelines, infrastructure security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats & Highlights */}
          <div className="space-y-8">
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#fff7df] rounded-xl p-6 border border-[#f3d57d] text-center hover:shadow-lg transition duration-300">
                <p className="text-4xl font-bold text-[#2f2042] italic">5+</p>
                <p className="text-[#4a345f] font-medium mt-2">Years Experience</p>
              </div>
              <div className="bg-[#fff7df] rounded-xl p-6 border border-[#f3d57d] text-center hover:shadow-lg transition duration-300">
                <p className="text-4xl font-bold text-[#2f2042] italic">50+</p>
                <p className="text-[#4a345f] font-medium mt-2">Projects Completed</p>
              </div>
              <div className="bg-[#fff7df] rounded-xl p-6 border border-[#f3d57d] text-center hover:shadow-lg transition duration-300">
                <p className="text-4xl font-bold text-[#2f2042] italic">20+</p>
                <p className="text-[#4a345f] font-medium mt-2">Happy Clients</p>
              </div>
              <div className="bg-[#fff7df] rounded-xl p-6 border border-[#f3d57d] text-center hover:shadow-lg transition duration-300">
                <p className="text-4xl font-bold text-[#2f2042] italic">15+</p>
                <p className="text-[#4a345f] font-medium mt-2">Tech Skills</p>
              </div>
            </div>

            {/* Certifications/Highlights */}
            <div className="bg-[#fffdf8] border-l-4 border-[#f0bc2f] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#2f2042] italic mb-4">Highlights</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#4a345f]">
                  <span className="text-[#2f2042]">✓</span> Full-stack web application development
                </li>
                <li className="flex items-center gap-2 text-[#4a345f]">
                  <span className="text-[#2f2042]">✓</span> Enterprise network infrastructure design
                </li>
                <li className="flex items-center gap-2 text-[#4a345f]">
                  <span className="text-[#2f2042]">✓</span> Cloud platform expertise (AWS, Azure)
                </li>
                <li className="flex items-center gap-2 text-[#4a345f]">
                  <span className="text-[#2f2042]">✓</span> Security-first development practices
                </li>
                <li className="flex items-center gap-2 text-[#4a345f]">
                  <span className="text-[#2f2042]">✓</span> Team leadership and mentoring
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
