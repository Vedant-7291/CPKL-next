const BlogsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl text-black-90 mb-4 font-jaturat" >
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {[1, 2, 3, 4, 5, 6].map((blog) => (
            <div key={blog} className="bg-[#29066d] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('./assets/Blog Img.png')" }}></div>
              <div className="p-6">
              
                <p className="text-white text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogsSection