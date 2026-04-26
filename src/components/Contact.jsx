import React, { useState } from 'react'

const Contact = () => {
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
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: '⚙️',
      color: 'hover:text-gray-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: '💼',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: '🐦',
      color: 'hover:text-sky-500'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: '📸',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: '👥',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      url: 'mailto:hello@example.com',
      icon: '✉️',
      color: 'hover:text-red-500'
    }
  ]

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'emmanuel@example.com',
      link: 'mailto:emmanuel@example.com'
    },
    {
      icon: '💬',
      title: 'Telegram',
      value: '@emmanueldev',
      link: '#'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 italic mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Reach out anytime!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.link}
              className="bg-white rounded-xl border-2 border-sky-200 p-6 hover:border-sky-400 hover:shadow-lg transition duration-300 text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 italic mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600 font-medium hover:text-sky-600 transition duration-300">
                {info.value}
              </p>
            </a>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl border-2 border-sky-200 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 italic mb-6">
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
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 italic mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-sky-200 focus:border-sky-600 focus:outline-none transition duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 italic mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-sky-200 focus:border-sky-600 focus:outline-none transition duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 italic mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-sky-200 focus:border-sky-600 focus:outline-none transition duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 italic mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-2 border-sky-200 focus:border-sky-600 focus:outline-none transition duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-sky-400/50 transition-all duration-300 transform hover:scale-105"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Right Side - Info & Social */}
          <div className="space-y-8">
            
            {/* Availability */}
            <div className="bg-gradient-to-br from-sky-100 to-blue-50 rounded-xl border-2 border-sky-300 p-6">
              <h3 className="text-xl font-bold text-gray-800 italic mb-4">
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-semibold text-gray-800 italic">Response Time</p>
                    <p className="text-gray-600 text-sm">Usually within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-gray-800 italic">Current Status</p>
                    <p className="text-gray-600 text-sm">Open to new opportunities</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <p className="font-semibold text-gray-800 italic">Work Mode</p>
                    <p className="text-gray-600 text-sm">Remote & On-site Projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl border-2 border-sky-200 p-6">
              <h3 className="text-xl font-bold text-gray-800 italic mb-4">
                Connect With Me
              </h3>
              <p className="text-gray-600 text-sm mb-6">
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
                    className={`flex items-center justify-center w-full py-3 bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg border border-sky-200 text-2xl transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl border-2 border-blue-300 p-6">
              <h3 className="text-lg font-bold text-gray-800 italic mb-4">
                Why Collaborate With Me?
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-sky-600 text-lg">⚡</span> Fast turnaround times
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-sky-600 text-lg">🎯</span> Attention to detail
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-sky-600 text-lg">💡</span> Creative solutions
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-sky-600 text-lg">🤝</span> Great communication
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