import React from 'react'
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div>
      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl text-blue-600 font-bold mb-8">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Alumni Directory</h3>
              <p className="text-gray-600 mb-4">Find and connect with alumni from BU-CS.</p>
              <Link to="/alumni-directory" className="text-blue-500 hover:underline font-semibold">
                Explore
              </Link>
            </div>
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Events</h3>
              <p className="text-gray-600 mb-4">Stay updated with upcoming events and reunions.</p>
              <Link to="/events" className="text-blue-500 hover:underline font-semibold">
                View Events
              </Link>
            </div>
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Blog</h3>
              <p className="text-gray-600 mb-4">Read and share stories and experiences.</p>
              <Link to="/blog" className="text-blue-500 hover:underline font-semibold">
                Read Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
