import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Inventory System',
      description: 'A full-stack inventory management system with real-time stock tracking, multi-user access, and comprehensive analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Chart.js'],
      image: '📦',
      github: '#',
      live: '#',
      highlights: ['Real-time inventory sync', 'Admin dashboard', 'Multi-store support']
    },
    {
      id: 2,
      title: 'Enterprise Network Infrastructure',
      description: 'Designed and implemented a scalable network infrastructure for a mid-size enterprise with VLAN segmentation, redundancy, and security protocols.',
      technologies: ['Cisco IOS', 'VLANs', 'BGP', 'Firewalls', 'Monitoring Tools'],
      image: '🌐',
      github: '#',
      live: '#',
      highlights: ['99.9% uptime', 'Segmented security zones', 'Load balancing']
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'A modern chat application with Socket.io integration, user authentication, message history, and presence indicators.',
      technologies: ['React', 'Node.js', 'Socket.io', 'JWT', 'PostgreSQL'],
      image: '💬',
      github: '#',
      live: '#',
      highlights: ['Real-time messaging', 'User authentication', 'Message persistence']
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Automation',
      description: 'Automated cloud infrastructure provisioning and management using Infrastructure as Code, reducing deployment time by 80%.',
      technologies: ['Terraform', 'AWS', 'Docker', 'CI/CD', 'Kubernetes'],
      image: '☁️',
      github: '#',
      live: '#',
      highlights: ['Automated deployment', 'Container orchestration', 'Cost optimization']
    },
    {
      id: 5,
      title: 'Server Security Hardening Suite',
      description: 'Comprehensive security suite for Linux servers including automated hardening scripts, monitoring, and threat detection.',
      technologies: ['Linux', 'Bash', 'Python', 'OpenSSL', 'Fail2ban'],
      image: '🔒',
      github: '#',
      live: '#',
      highlights: ['Automated hardening', 'Intrusion detection', 'Log monitoring']
    },
    {
      id: 6,
      title: 'Developer Analytics Dashboard',
      description: 'Interactive analytics dashboard for tracking development metrics, code quality, and team performance.',
      technologies: ['React', 'D3.js', 'Node.js', 'GraphQL', 'PostgreSQL'],
      image: '📊',
      github: '#',
      live: '#',
      highlights: ['Real-time metrics', 'Data visualization', 'Custom reports']
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 italic mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcase of innovative solutions combining development expertise and networking knowledge
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border-2 border-sky-100 overflow-hidden hover:shadow-2xl hover:border-sky-400 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className="h-40 bg-gradient-to-br from-sky-300 to-blue-500 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              {/* Project Body */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 italic">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-sky-600 font-bold">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-sky-100">
                  <p className="text-xs font-semibold text-gray-500 mb-2 uppercase italic">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    className="flex-1 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-300 text-center text-sm"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 px-4 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition duration-300 text-center text-sm"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Interested in more projects? Check out my GitHub for additional work.
          </p>
          <a
            href="https://github.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-400/50 transition-all duration-300 transform hover:scale-105"
          >
            View All Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects