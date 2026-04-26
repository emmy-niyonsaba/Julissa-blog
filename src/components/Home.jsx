import React, { useState, useEffect } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoSlide, setAutoSlide] = useState(true)

  const slides = [
    { id: 0, image: '/images/photo.png', title: 'Portfolio' },
    { id: 1, image: '/images/photo1.png', title: 'Project 1' },
    { id: 2, image: '/images/photo2.png', title: 'Project 2' }
  ]

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    if (!autoSlide) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [autoSlide, slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setAutoSlide(false)
    // Resume auto-slide after 5 seconds of manual interaction
    setTimeout(() => setAutoSlide(true), 5000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setAutoSlide(false)
    setTimeout(() => setAutoSlide(true), 5000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoSlide(false)
    setTimeout(() => setAutoSlide(true), 5000)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-24 pb-16 md:pb-24 bg-[#f4efe3] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo Carousel */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Carousel Container */}
              <div className="relative h-96 rounded-2xl overflow-hidden border-4 border-[#f0bc2f] shadow-2xl bg-[#fffdf8]">
                {/* Slides */}
                <div className="relative w-full h-full">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#2f2042] text-white rounded-full flex items-center justify-center hover:bg-[#4a345f] transition-all duration-300 hover:scale-110 shadow-lg z-10"
                  aria-label="Previous slide"
                >
                  <ChevronLeftIcon sx={{ fontSize: 22 }} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#2f2042] text-white rounded-full flex items-center justify-center hover:bg-[#4a345f] transition-all duration-300 hover:scale-110 shadow-lg z-10"
                  aria-label="Next slide"
                >
                  <ChevronRightIcon sx={{ fontSize: 22 }} />
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-3 mt-6">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-[#2f2042] w-8'
                        : 'bg-[#f0bc2f] w-3 hover:bg-[#4a345f]'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="text-center mt-4">
                <p className="text-[#4a345f] font-semibold italic">
                  {currentSlide + 1} / {slides.length}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-[#2f2042] italic leading-tight">
                Software Developer <span className="text-[#f0bc2f]">&</span> Network Administrator
              </h1>
              <p className="text-xl text-[#6f677d] font-medium">
                5+ years of expertise in building scalable web applications and robust network infrastructure
              </p>
            </div>

            <div className="space-y-3 text-[#4a345f]">
              <p className="text-lg">
                I craft elegant solutions for complex problems, combining full-stack development with enterprise networking expertise. Passionate about clean code, security, and continuous learning.
              </p>
              <p className="text-base italic text-[#2f2042] font-medium">
                Let's build something extraordinary together.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('blog')}
                className="px-8 py-3 bg-[#2f2042] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#2f2042]/30 transition-all duration-300 transform hover:scale-105"
              >
                View Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-[#fffdf8] text-[#2f2042] font-semibold rounded-lg border-2 border-[#f0bc2f] hover:bg-[#f9e9b8] transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>

            {/* Social Quick Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#4a345f] text-white rounded-lg flex items-center justify-center hover:bg-[#2f2042] transition duration-300">
                <GitHubIcon sx={{ fontSize: 18 }} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#4a345f] text-white rounded-lg flex items-center justify-center hover:bg-[#2f2042] transition duration-300">
                <LinkedInIcon sx={{ fontSize: 18 }} />
              </a>
              <a href="mailto:hello@example.com" className="w-10 h-10 bg-[#f0bc2f] text-[#2f2042] rounded-lg flex items-center justify-center hover:bg-[#ddb025] transition duration-300">
                <EmailIcon sx={{ fontSize: 18 }} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home

