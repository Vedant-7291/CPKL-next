import Layout from '../components/Layout'
import BannerSection from '../components/BannerSection'
import Link from 'next/link'
import { blogsData } from './blogsData'

const BlogPage = () => {
  return (
    <Layout>
     <section className="relative w-full bg-white">
        {/* Banner Container */}
        <div className="relative w-full h-[75vh] min-h-[500px]">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('/assets/Pages Banner imp.png')"
            }}
          ></div>
          
          {/* Overlay */}
          <div className="absolute "></div>
          
          {/* Content - Shifted upwards */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 transform -translate-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary text-center font-bold font-galantic">
              BLOGS
            </h1>
          </div>
        </div>
      </section>
      
      {/* Blog Page Header */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jaturat text-black-90 mb-6 md:mb-8 font-galantic">
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
            {blogsData.map((blog) => (
              <div key={blog.id} className="bg-[#29066d] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-[90%] max-w-sm mx-auto h-96">
                {/* Increased Image Height */}
                <div className="h-56 bg-cover bg-center m-4 rounded-lg" style={{ backgroundImage: `url('${blog.image}')` }}></div>
                <div className="p-4 flex-grow flex flex-col">
                  {/* Reduced Title Size and Margin */}
                  <h3 className="text-white text-base font-bold mb-1 line-clamp-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {blog.title}
                  </h3>
                  {/* Reduced Text Size and Optimized Spacing */}
                  <p className="text-white text-xs mb-3 flex-grow line-clamp-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {blog.description}
                  </p>
                  <div className="flex justify-end mt-auto">
                    <Link href={`/blogs/${blog.slug}`}>
                      <button className="text-white hover:text-secondary-light transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </Link>
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