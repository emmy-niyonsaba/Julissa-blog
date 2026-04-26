import React from 'react'

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-24 pb-16 md:pb-24 bg-gradient-to-b from-white via-sky-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 italic leading-tight">
                Software Developer <span className="text-sky-600">&</span> Network Administrator
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                5+ years of expertise in building scalable web applications and robust network infrastructure
              </p>
            </div>

            <div className="space-y-3 text-gray-700">
              <p className="text-lg">
                I craft elegant solutions for complex problems, combining full-stack development with enterprise networking expertise. Passionate about clean code, security, and continuous learning.
              </p>
              <p className="text-base italic text-sky-700 font-medium">
                Let's build something extraordinary together.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('blog')}
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-400/50 transition-all duration-300 transform hover:scale-105"
              >
                View Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-white text-sky-600 font-semibold rounded-lg border-2 border-sky-400 hover:bg-sky-50 transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>

            {/* Social Quick Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition duration-300">
                <span className="text-lg">⚙️</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition duration-300">
                <span className="text-lg">💼</span>
              </a>
              <a href="mailto:hello@example.com" className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300">
                <span className="text-lg">✉️</span>
              </a>
            </div>
          </div>

          {/* Right Side - Avatar/Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl blur-2xl opacity-40"></div>
              <div className="relative w-72 h-72 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl border-4 border-sky-300 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-gray-600 font-semibold italic">Software Developer</p>
                  <p className="text-gray-500 text-sm">&</p>
                  <p className="text-gray-600 font-semibold italic">Network Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
