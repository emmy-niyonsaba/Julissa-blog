import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  const resources = [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'Resume', href: '#' },
    { label: 'Privacy Policy', href: '#' }
  ]

  const socialIcons = [
    { icon: '⚙️', label: 'GitHub', href: 'https://github.com' },
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: '🐦', label: 'Twitter', href: 'https://twitter.com' },
    { icon: '📸', label: 'Instagram', href: 'https://instagram.com' },
    { icon: '👥', label: 'Facebook', href: 'https://facebook.com' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <h3 className="text-2xl font-bold italic text-sky-300">
                Emmanuel Dev
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building elegant solutions for complex problems through full-stack development and enterprise networking expertise.
            </p>
            <div className="pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-400 italic">
                Software Developer & Network Administrator
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold italic text-sky-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-sky-400 transition duration-300 text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold italic text-sky-300 mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-sky-400 transition duration-300 text-sm hover:underline"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold italic text-sky-300 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">✉️</span>
                <div>
                  <p className="text-gray-400 text-xs uppercase italic">Email</p>
                  <a
                    href="mailto:emmanuel@example.com"
                    className="text-gray-300 hover:text-sky-400 transition duration-300 text-sm"
                  >
                    emmanuel@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">📞</span>
                <div>
                  <p className="text-gray-400 text-xs uppercase italic">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-gray-300 hover:text-sky-400 transition duration-300 text-sm"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-xl hover:shadow-lg hover:shadow-sky-400/50 transition-all duration-300 transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <p>
              &copy; {currentYear} <span className="text-sky-300 font-semibold italic">Emmanuel Dev</span>. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-4 md:mt-0">
              Designed & Built with <span className="text-red-500">❤️</span> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="flex justify-center pb-6">
        <button
          onClick={scrollToTop}
          className="px-6 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-400/50 transition-all duration-300 transform hover:scale-105 text-sm"
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  )
}

export default Footer