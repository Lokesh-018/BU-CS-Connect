import React from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl text-blue-600 font-bold mb-8">Latest Blogs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/" className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition duration-300">
              <img src="https://via.placeholder.com/400x200" alt="Blog 1" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-blue-600">Blog 1</h3>
              <p className="text-gray-700">
                A brief description of the first blog post.
              </p>
            </Link>
            <Link to="/" className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition duration-300">
              <img src="https://via.placeholder.com/400x200" alt="Blog 2" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-blue-600">Blog 2</h3>
              <p className="text-gray-700">
                A brief description of the second blog post.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
