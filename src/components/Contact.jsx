import React, { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import HandshakeIcon from '@mui/icons-material/Handshake'
import InstagramIcon from '@mui/icons-material/Instagram'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import PublicIcon from '@mui/icons-material/Public'
import SendIcon from '@mui/icons-material/Send'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import BoltIcon from '@mui/icons-material/Bolt'
import XIcon from '@mui/icons-material/X'

const Contact = () => {
  const WHATSAPP_NUMBER = '000000000000'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = [
      'Hello, I want to connect with you.',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Subject: ${formData.subject}`,
      `Message: ${formData.message}`
    ].join('\n')

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: '#',
      icon: GitHubIcon,
      color: 'hover:text-[#2f2042]'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: LinkedInIcon,
      color: 'hover:text-[#2f2042]'
    },
    {
      name: 'X (Twitter)',
      url: '#',
      icon: XIcon,
      color: 'hover:text-[#2f2042]'
    },
    {
      name: 'Instagram',
      url: '#',
      icon: InstagramIcon,
      color: 'hover:text-[#2f2042]'
    },
    {
      name: 'Facebook',
      url: '#',
      icon: FacebookIcon,
      color: 'hover:text-[#2f2042]'
    }
  ]

  const contactInfo = [
    {
      icon: EmailIcon,
      title: 'Email',
      value: 'emmanuel@example.com',
      link: 'mailto:emmanuel@example.com'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: LinkedInIcon,
      title: 'LinkedIn',
      value: 'linkedin.com/in/your-profile',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-[#f4efe3]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f2042] italic mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[#6f677d] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Reach out anytime!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.link}
              className="bg-[#fffdf8] rounded-xl border-2 border-[#e8dfcb] p-6 hover:border-[#f0bc2f] hover:shadow-lg transition duration-300 text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">
                <info.icon sx={{ fontSize: 48, color: '#2f2042' }} />
              </div>
              <h3 className="text-xl font-bold text-[#2f2042] italic mb-2">
                {info.title}
              </h3>
              <p className="text-[#6f677d] font-medium hover:text-[#2f2042] transition duration-300">
                {info.value}
              </p>
            </a>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="bg-[#fffdf8] rounded-xl border-2 border-[#e8dfcb] p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2f2042] italic mb-6">
              Send Me a Message
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-600 rounded-lg">
                <p className="text-green-700 font-semibold">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#4a345f] italic mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#e8dfcb] focus:border-[#2f2042] focus:outline-none transition duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#4a345f] italic mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#e8dfcb] focus:border-[#2f2042] focus:outline-none transition duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-[#4a345f] italic mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#e8dfcb] focus:border-[#2f2042] focus:outline-none transition duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#4a345f] italic mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#e8dfcb] focus:border-[#2f2042] focus:outline-none transition duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#2f2042] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#2f2042]/30 transition-all duration-300 transform hover:scale-105"
              >
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon sx={{ fontSize: 20 }} />
                  Send Message
                  <SendIcon sx={{ fontSize: 18 }} />
                </span>
              </button>
            </form>
          </div>

          {/* Right Side - Info & Social */}
          <div className="space-y-8">
            
            {/* Availability */}
            <div className="bg-[#fff7df] rounded-xl border-2 border-[#f3d57d] p-6">
              <h3 className="text-xl font-bold text-[#2f2042] italic mb-4">
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <AccessTimeIcon sx={{ fontSize: 28, color: '#2f2042' }} />
                  <div>
                    <p className="font-semibold text-[#2f2042] italic">Response Time</p>
                    <p className="text-[#6f677d] text-sm">Usually within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon sx={{ fontSize: 28, color: '#2f2042' }} />
                  <div>
                    <p className="font-semibold text-[#2f2042] italic">Current Status</p>
                    <p className="text-[#6f677d] text-sm">Open to new opportunities</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <PublicIcon sx={{ fontSize: 28, color: '#2f2042' }} />
                  <div>
                    <p className="font-semibold text-[#2f2042] italic">Work Mode</p>
                    <p className="text-[#6f677d] text-sm">Remote & On-site Projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#fffdf8] rounded-xl border-2 border-[#e8dfcb] p-6">
              <h3 className="text-xl font-bold text-[#2f2042] italic mb-4">
                Connect With Me
              </h3>
              <p className="text-[#6f677d] text-sm mb-6">
                Follow me on social media for updates and insights.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className={`flex items-center justify-center w-full py-3 bg-[#fff7df] rounded-lg border border-[#f3d57d] text-2xl transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon sx={{ fontSize: 28 }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#fff7df] rounded-xl border-2 border-[#f3d57d] p-6">
              <h3 className="text-lg font-bold text-[#2f2042] italic mb-4">
                Why Collaborate With Me?
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#4a345f]">
                  <BoltIcon sx={{ fontSize: 20, color: '#2f2042' }} /> Fast turnaround times
                </li>
                <li className="flex items-center gap-2 text-[#4a345f]">
                  <TrackChangesIcon sx={{ fontSize: 20, color: '#2f2042' }} /> Attention to detail
                </li>
                <li className="flex items-center gap-2 text-[#4a345f]">
                  <LightbulbIcon sx={{ fontSize: 20, color: '#2f2042' }} /> Creative solutions
                </li>
                <li className="flex items-center gap-2 text-[#4a345f]">
                  <HandshakeIcon sx={{ fontSize: 20, color: '#2f2042' }} /> Great communication
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact