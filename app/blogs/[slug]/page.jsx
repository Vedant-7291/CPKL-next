import Layout from '../../components/Layout'
import Link from 'next/link'
import { blogsData } from '../blogsData'

const BlogDetailPage = ({ params }) => {
  const { slug } = params;
  const blog = blogsData.find(blog => blog.slug === slug);

  if (!blog) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Blog Not Found</h1>
            <Link href="/blogs" className="text-[#29066d] hover:underline text-lg">
              ← Return to blogs
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Banner Section - Same as main blog page */}
      <section className="relative w-full bg-white">
        {/* Banner Container */}
        <div className="relative w-full h-[75vh] min-h-[500px]">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('./assets/Pages Banner imp.png')" // Using same path as Gallery
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
      
      {/* Blog Content Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/blogs"
              className="inline-flex items-center text-[#29066d] hover:text-purple-800 font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blogs
            </Link>
          </div>

          {/* Blog Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jaturat text-black-90 mb-6 md:mb-8 font-galantic">
              {blog.title}
            </h1>
            <div className="w-24 h-1 bg-[#29066d] mx-auto mb-8"></div>
            
            {/* Sub-heading as requested */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-jaturat text-gray-800 mb-8 font-galantic">
              Player Voices League Stories Fan Passion
            </h2>
          </div>

          {/* Main Content Image - 70vw centered */}
          <div className="mb-12 flex justify-center">
            <div 
              className="w-full max-w-[70vw] h-96 bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: `url('./assets/Blog Img.png')` }} // Using same path as Gallery
            ></div>
          </div>

          {/* Blog Content Paragraphs */}
          <div className="prose prose-lg max-w-none">
            {blog.content.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-gray-700 mb-6 leading-relaxed text-lg text-justify"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {paragraph.text}
              </p>
            ))}
          </div>

          {/* Bottom Back Button - Bottom Left */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-start">
            <Link 
              href="/blogs"
              className="inline-flex items-center text-[#29066d] hover:text-purple-800 font-medium transition-colors text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Blogs
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = blogsData.find(blog => blog.slug === slug);

  return {
    title: blog?.title || 'Blog Not Found',
    description: blog?.description || 'Blog post not available',
  };
}

export default BlogDetailPage