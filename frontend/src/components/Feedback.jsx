import React from 'react'

const Feedback = () => {
  return (
    <div>
      {/* Feedback Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Feedback</h2>
          <textarea
            className="w-full h-24 border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Type here..."
          ></textarea>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </div>
      </section>
    </div>
  )
}

export default Feedback
