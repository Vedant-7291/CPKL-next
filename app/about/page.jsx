import Layout from '../components/Layout'
import BannerSection from '../components/BannerSection'
import PartnersSection from '../components/PartnersSection'

const AboutPage = () => {
  return (
    <Layout>
      <BannerSection />
      
      {/* About CPKL Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-jaturat text-black-90 mb-6 md:mb-8">
              About CPKL
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              CPKL (Chhattisgarh Premier Kabaddi League) is a professional kabaddi league that brings together 
              the most talented players from across the region. We are committed to promoting kabaddi as a sport 
              and providing a platform for athletes to showcase their skills at the highest level.
            </p>
          </div>
        </div>
      </section>

      {/* Image Container Section - Using margin instead of absolute positioning */}
      <div className="relative">
        {/* First Div - White Background with bottom margin for images */}
        <div className="bg-white h-16 sm:h-20 md:h-24 lg:h-28"></div>
        
        {/* Images Container - Using negative margin instead of absolute positioning */}
        <div className="relative -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Image 1 */}
            <div className="bg-white rounded-lg shadow-2xl p-2 sm:p-3 md:p-4 transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200">
              <img 
                src="./assets/floating-img-1.png" 
                alt="CPKL Action 1" 
                className="w-full h-24 sm:h-28 md:h-32 lg:h-36 object-cover rounded-md"
              />
            </div>
            
            {/* Image 2 */}
            <div className="bg-white rounded-lg shadow-2xl p-2 sm:p-3 md:p-4 transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200">
              <img 
                src="./assets/floating-img-2.png" 
                alt="CPKL Action 2" 
                className="w-full h-24 sm:h-28 md:h-32 lg:h-36 object-cover rounded-md"
              />
            </div>
            
            {/* Image 3 */}
            <div className="bg-white rounded-lg shadow-2xl p-2 sm:p-3 md:p-4 transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200">
              <img 
                src="./assets/floating-img-3.png" 
                alt="CPKL Action 3" 
                className="w-full h-24 sm:h-28 md:h-32 lg:h-36 object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Second Div - Purple Background */}
        <div className="bg-[#29066d] h-20 sm:h-24 md:h-28 lg:h-32 -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14"></div>
      </div>

      {/* Main Purple Content Section */}
      <section className="bg-[#29066d] pt-4 sm:pt-6 md:pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#180444] rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12 xl:p-16">
            
            {/* Mission Section */}
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
              <div className="lg:w-1/2">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-jaturat text-white mb-4 sm:mb-6">Our Mission</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                  To revolutionize kabaddi in Chhattisgarh by creating a sustainable ecosystem that nurtures 
                  local talent, promotes healthy competition, and brings world-class kabaddi entertainment 
                  to fans across the state and beyond. We aim to build a platform where young athletes can 
                  realize their potential and kabaddi enthusiasts can experience the thrill of professional sports.
                </p>
              </div>
              <div className="lg:w-1/2 mt-6 lg:mt-0">
                <img 
                  src="./assets/1.png" 
                  alt="Our Mission" 
                  className="w-full h-40 sm:h-48 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-8 lg:gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-jaturat text-white mb-4 sm:mb-6">Our Vision</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                  To establish CPKL as the premier kabaddi league in India, recognized for its excellence in 
                  sports management, player development, and fan engagement while contributing to the growth 
                  of kabaddi as an Olympic sport. We envision a future where Chhattisgarh becomes the hub of 
                  kabaddi excellence, producing world-class players and setting new standards in sports administration.
                </p>
              </div>
              <div className="lg:w-1/2 mt-6 lg:mt-0">
                <img 
                  src="./assets/2.png" 
                  alt="Our Vision" 
                  className="w-full h-40 sm:h-48 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg border-r"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      {/* Tagline and Join Us Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-jaturat text-black-90 mb-4 md:mb-6">
            Building Champions, Creating Legends
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto">
            Join us in our journey to transform kabaddi and create a lasting legacy in sports. 
            Be part of the revolution that's changing the face of kabaddi in India.
          </p>
          <button className="bg-secondary-light text-white px-5 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-secondary-dark transition-colors duration-300 font-poppins text-sm sm:text-base md:text-lg font-semibold">
            Join Us Now
          </button>
        </div>
      </section>

      {/* Simple Full Width Strip */}
      <div className="w-full h-[3vh] bg-[#29066d]"></div>

      {/* Final Content Section */}
<section className="relative bg-gray-900">
  {/* Background Image Container */}
  <div className="w-full min-h-[90vh] flex items-center justify-center py-8 md:py-0"> {/* Changed to min-height and added vertical padding */}
    <div 
      className="absolute inset-0 bg-center"
      style={{ 
        backgroundImage: "url('./assets/coach.png')",
        backgroundSize: 'cover', /* Changed to cover for better responsive behavior */
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    ></div>
    
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    
    {/* Content with better alignment */}
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"> {/* Added vertical padding */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md"> {/* Added container div */}
            <img 
              src="./assets/1.png" 
              alt="CPKL Team" 
              className="w-full h-auto max-h-64 sm:max-h-72 md:max-h-80 object-contain rounded-lg shadow-2xl" /* Changed to max-height and object-contain */
            />
          </div>
        </div>
        <div className="lg:w-1/2 text-white flex items-center"> {/* Added flex items-center */}
          <div className="w-full p-4 sm:p-6 md:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-jaturat mb-3 sm:mb-4 md:mb-6 text-white">The Future of Kabaddi</h3>
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 leading-relaxed">
              CPKL represents the next generation of kabaddi - faster, smarter, and more exciting than ever before. 
              With state-of-the-art facilities, professional coaching, and international standards, we're setting 
              new benchmarks in sports excellence.
            </p>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                Professional player development programs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                World-class tournament organization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                Grassroots kabaddi initiatives
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                International exposure for players
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Partners Section */}
      <PartnersSection />
    </Layout>
  )
}

export default AboutPage