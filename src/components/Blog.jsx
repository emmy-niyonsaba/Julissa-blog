import React, { useState } from 'react'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable REST APIs with Node.js',
      description: 'Learn best practices for designing and implementing scalable REST APIs using Node.js and Express.',
      date: 'March 15, 2024',
      category: 'Programming',
      author: 'Emmanuel',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Understanding VLANs and Network Segmentation',
      description: 'A comprehensive guide to implementing VLANs for better network organization and security.',
      date: 'March 10, 2024',
      category: 'Networking',
      author: 'Emmanuel',
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'React Hooks: From Basics to Advanced Patterns',
      description: 'Master React Hooks with practical examples and real-world use cases.',
      date: 'March 5, 2024',
      category: 'Tutorials',
      author: 'Emmanuel',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Securing Your Linux Server',
      description: 'Essential security practices for hardening Linux servers in production environments.',
      date: 'February 28, 2024',
      category: 'Networking',
      author: 'Emmanuel',
      readTime: '15 min read'
    },
    {
      id: 5,
      title: 'MongoDB Optimization Tips',
      description: 'Performance optimization techniques for MongoDB databases at scale.',
      date: 'February 20, 2024',
      category: 'Programming',
      author: 'Emmanuel',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Docker for Development: A Beginner\'s Guide',
      description: 'Get started with Docker containerization for consistent development environments.',
      date: 'February 15, 2024',
      category: 'Tutorials',
      author: 'Emmanuel',
      readTime: '11 min read'
    },
    {
      id: 7,
      title: 'Network Monitoring and Troubleshooting',
      description: 'Tools and techniques for effective network monitoring and issue resolution.',
      date: 'February 10, 2024',
      category: 'Networking',
      author: 'Emmanuel',
      readTime: '14 min read'
    },
    {
      id: 8,
      title: 'Building a Real-time Chat Application',
      description: 'Step-by-step tutorial on creating a real-time chat app with Socket.io and React.',
      date: 'February 1, 2024',
      category: 'Projects',
      author: 'Emmanuel',
      readTime: '16 min read'
    }
  ]

  const categories = ['All', 'Programming', 'Networking', 'Tutorials', 'Projects']

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 italic mb-4">
            Blog & Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Articles, tutorials, and insights on software development, networking, and technology
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-lg border-2 border-sky-200 focus:border-sky-600 focus:outline-none transition duration-300 shadow-sm"
            />
            <span className="absolute right-4 top-3 text-sky-600 text-xl">🔍</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg'
                  : 'bg-sky-100 text-gray-700 hover:bg-sky-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-sky-50 rounded-xl border border-sky-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-sky-400 hover:transform hover:scale-105 cursor-pointer"
              >
                {/* Card Header */}
                <div className="h-32 bg-gradient-to-br from-sky-400 to-blue-600 p-6 flex items-end">
                  <span className="text-sm font-semibold bg-white bg-opacity-20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 italic line-clamp-2 hover:text-sky-600 transition">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {post.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-sky-200">
                    <div className="flex items-center gap-2">
                      <span>📅 {post.date}</span>
                    </div>
                    <span className="text-sky-600 font-medium">{post.readTime}</span>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full mt-4 px-4 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition duration-300 transform hover:translate-y-[-2px]">
                    Read More →
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-600">No articles found. Try adjusting your filters.</p>
            </div>
          )}
        </div>

        {/* Pagination or Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border-2 border-sky-400 text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog