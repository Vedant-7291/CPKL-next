import Layout from '../components/Layout'
import BannerSection from '../components/BannerSection'

const BlogPage = () => {
  return (
    <Layout>
      <section className="relative w-full bg-secondary-light">
      {/* Banner Container */}
      <div className="relative w-full h-[75vh] min-h-[500px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('./assets/Pages Banner imp.png')"
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary text-center" style={{ fontFamily: 'var(--font-jaturat)' }}>
            Welcome to Sports World
          </h1>
          <p className="text-primary text-base md:text-lg lg:text-xl mt-4 text-center max-w-2xl" style={{ fontFamily: 'var(--font-poppins)' }}>
            Experience the thrill of sports like never before
          </p>
        </div>
      </div>
    </section>
      
      {/* Blog Page Header */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jaturat text-black-90 mb-6 md:mb-8">
              Our Blogs
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, insights, and stories from the world of CPKL. 
              From player spotlights to match analyses and behind-the-scenes content, 
              our blogs bring you closer to the action and passion of kabaddi.
            </p>
          </div>
        </div>
      </section>

      {/* Blogs Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3x3 Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((blog) => (
              <div key={blog} className="bg-[#29066d] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-[90%] max-w-sm mx-auto h-96">
                <div className="h-48 bg-cover bg-center m-4 rounded-lg" style={{ backgroundImage: "url('./assets/Blog Img.png')" }}></div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-white text-sm mb-4 flex-grow" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="flex justify-end">
                    <button className="text-white hover:text-secondary-light transition-colors duration-300">
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
    </Layout>
  )
}

export default BlogPage