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
    <section id="projects" className="py-20 bg-[#f4efe3]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f2042] italic mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[#6f677d] max-w-2xl mx-auto">
            Showcase of innovative solutions combining development expertise and networking knowledge
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#fffdf8] rounded-xl border-2 border-[#e8dfcb] overflow-hidden hover:shadow-2xl hover:border-[#f0bc2f] transition-all duration-300 hover:transform hover:-translate-y-2"
            >
             
              {/* Project Body */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-[#2f2042] italic">
                  {project.title}
                </h3>
                
                <p className="text-[#6f677d] leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#4a345f]">
                      <span className="text-[#2f2042] font-bold">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-[#e8dfcb]">
                  <p className="text-xs font-semibold text-[#81798d] mb-2 uppercase italic">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#fff7df] text-[#4a345f] border border-[#f3d57d] rounded-full text-xs font-semibold"
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
                    className=' border-2 border-[#f86868] rounded-md p-2  hover:scale-x-[1.1] hover:scale-y-[1.1]'
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.live}
                    className=' bg-[#f86868] p-2 rounded-md text-white hover:scale-x-[1.1] hover:scale-y-[1.1]'
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
          <p className="text-[#6f677d] mb-4">
            Interested in more projects? Check out my GitHub for additional work.
          </p>
          <a
            href="https://github.com"
             className=' border-2 border-[#f86868] rounded-md p-2 hover:scale-yyyx-[1.1] hover:scale-y-[1.1]' 
cl          >
            View All Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects