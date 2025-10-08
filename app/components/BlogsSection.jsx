const BlogsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-main text-black-90 mb-4 md:mb-6 " >
              Our Blogs
            </h2>
            <div className="w-24 h-1 bg-secondary-light"></div>
          </div>
          <button 
            className="bg-secondary-light text-primary px-6 py-2 rounded-lg hover:bg-secondary-dark transition-colors duration-300"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            View More
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((blog) => (
            <div key={blog} className="bg-[#29066d] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-[90%] max-w-sm mx-auto h-96">
              <div className="h-48 bg-cover bg-center m-4 rounded-lg" style={{ backgroundImage: "url('./assets/Blog Img.png')" }}></div>
              <div className="p-6 pt-0 flex-grow flex flex-col">
                <h1 className="text-white text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-jaturat)' }}>Blog Title {blog}</h1>
                <p className="text-white text-sm mb-4 flex-grow" style={{ fontFamily: 'var(--font-poppins)' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex justify-end">
                  <button className="text-white hover:text-gray-300 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogsSection