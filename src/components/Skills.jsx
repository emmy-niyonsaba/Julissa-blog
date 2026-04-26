import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript/ES6+', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Responsive Design', level: 94 },
        { name: 'React Hooks', level: 93 }
      ]
    },
    {
      name: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 94 },
        { name: 'Express.js', level: 93 },
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'RESTful APIs', level: 95 },
        { name: 'JWT Authentication', level: 91 }
      ]
    },
    {
      name: 'Networking & Infrastructure',
      icon: '🌐',
      skills: [
        { name: 'Cisco Routing & Switching', level: 92 },
        { name: 'VLAN Configuration', level: 91 },
        { name: 'Network Security', level: 89 },
        { name: 'Linux Administration', level: 93 },
        { name: 'Server Management', level: 90 },
        { name: 'Network Monitoring', level: 88 }
      ]
    },
    {
      name: 'DevOps & Cloud',
      icon: '☁️',
      skills: [
        { name: 'Docker', level: 89 },
        { name: 'Kubernetes', level: 85 },
        { name: 'AWS', level: 87 },
        { name: 'CI/CD Pipelines', level: 88 },
        { name: 'GitHub Actions', level: 86 },
        { name: 'Terraform', level: 84 }
      ]
    },
    {
      name: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 96 },
        { name: 'VSCode', level: 95 },
        { name: 'Postman', level: 91 },
        { name: 'Socket.io', level: 87 },
        { name: 'GraphQL', level: 82 },
        { name: 'NPM/Yarn', level: 94 }
      ]
    },
    {
      name: 'Soft Skills',
      icon: '💡',
      skills: [
        { name: 'Problem Solving', level: 96 },
        { name: 'Team Leadership', level: 89 },
        { name: 'Communication', level: 92 },
        { name: 'Project Management', level: 88 },
        { name: 'Mentoring', level: 87 },
        { name: 'Technical Documentation', level: 90 }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 italic mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical skills across full-stack development, networking, and cloud infrastructure
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition duration-300"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 italic">{category.name}</h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-center gap-2 text-gray-700">
                    <span className="text-sky-600 font-bold">•</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-white rounded-lg border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-800 italic mb-6 text-center">
            Quick Skills Overview
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-sky-600 italic">15+</p>
              <p className="text-gray-600 font-medium">Programming Languages</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-sky-600 italic">20+</p>
              <p className="text-gray-600 font-medium">Frameworks & Libraries</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-sky-600 italic">30+</p>
              <p className="text-gray-600 font-medium">Tools & Platforms</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-sky-600 italic">5+</p>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills