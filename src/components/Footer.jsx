import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import XIcon from '@mui/icons-material/X'

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
    { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com' },
    { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: XIcon, label: 'X (Twitter)', href: 'https://twitter.com' },
    { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
    { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#2f2042] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#f0bc2f] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">J.U</span>
              </div>
              <h3 className="text-2xl font-bold italic text-[#f9e3a6]">
               Jullisa Uwange
              </h3>
            </div>
            <p className="text-[#e6deef] text-sm leading-relaxed">
              Building elegant solutions for complex problems through full-stack development and enterprise networking expertise.
            </p>
            <div className="pt-4 border-t border-[#4a345f]">
              <p className="text-xs text-[#b7adc4] italic">
                Software Developer & Network Administrator
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold italic text-[#f9e3a6] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[#e6deef] hover:text-[#f0bc2f] transition duration-300 text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold italic text-[#f9e3a6] mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e6deef] hover:text-[#f0bc2f] transition duration-300 text-sm hover:underline"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold italic text-[#f9e3a6] mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <EmailIcon sx={{ fontSize: 18, color: '#f0bc2f', marginTop: '4px' }} />
                <div>
                  <p className="text-[#b7adc4] text-xs uppercase italic">Email</p>
                  <a
                    href="mailto:emmanuel@example.com"
                    className="text-[#e6deef] hover:text-[#f0bc2f] transition duration-300 text-sm"
                  >
                    jullisa@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <PhoneIcon sx={{ fontSize: 18, color: '#f0bc2f', marginTop: '4px' }} />
                <div>
                  <p className="text-[#b7adc4] text-xs uppercase italic">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-[#e6deef] hover:text-[#f0bc2f] transition duration-300 text-sm"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#4a345f] pt-8">
          <div className="flex justify-center gap-4 mb-6">
            {socialIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="w-11 h-11 bg-[#4a345f] rounded-lg flex items-center justify-center text-[#fffdf8] hover:bg-[#f0bc2f] hover:text-[#2f2042] transition-all duration-300"
              >
                <social.icon sx={{ fontSize: 20 }} />
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-[#b7adc4]">
            &copy; {currentYear} Jullisa Uwange. All rights reserved.
          </p>
        </div>

        {/* Divider */}
       
      </div>

      {/* Scroll to Top Button */}
      <div className="flex justify-center pb-6">
        <button
          onClick={scrollToTop}
          className="px-6 py-2 bg-[#f0bc2f] text-[#2f2042] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#2f2042]/30 transition-all duration-300 transform hover:scale-105 text-sm"
        >
          <span className="inline-flex items-center gap-1">
            <ArrowUpwardIcon sx={{ fontSize: 16 }} /> Back to Top
          </span>
        </button>
      </div>
    </footer>
  )
}

export default Footer