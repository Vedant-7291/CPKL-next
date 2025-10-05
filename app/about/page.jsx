'use client'
import Layout from '../components/Layout'
import PartnersSection from '../components/PartnersSection'
import { useRouter } from 'next/navigation'

const AboutPage = () => {
  const router = useRouter()

  const handleJoinUsClick = () => {
    router.push('/registration')
  }

  return (
    <Layout>
      <section className="relative w-full bg-white">
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
          <div className="absolute "></div>
          
          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary text-center font-bold font-jaturat">
              ABOUT US
            </h1>
          </div>
        </div>
      </section>
      
      {/* About CPKL Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-jaturat text-black-90 mb-6 md:mb-8">
              About CPKL
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-poppins">
              CPKL (Chhattisgarh Premier Kabaddi League) is a professional kabaddi league that brings together 
              the most talented players from across the region. We are committed to promoting kabaddi as a sport 
              and providing a platform for athletes to showcase their skills at the highest level.
            </p>
          </div>
        </div>
      </section>

      {/* Image Container Section - Equal white and purple background */}
      <div className="relative">
        {/* First Div - White Background with bottom margin for images */}
        <div className="bg-white h-40 sm:h-44 md:h-48 lg:h-52"></div>
        
        {/* Images Container - Centered between white and purple */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Image 1 */}
            <div className="rounded-lg p-2 sm:p-3 md:p-4 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="./assets/1.png" 
                alt="CPKL Action 1" 
                className="w-full h-24 sm:h-28 md:h-32 lg:h-56 object-cover rounded-md"
              />
            </div>
            
            {/* Image 2 */}
            <div className="rounded-lg p-2 sm:p-3 md:p-4 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="./assets/2.png" 
                alt="CPKL Action 2" 
                className="w-full h-24 sm:h-28 md:h-32 lg:h-56 object-cover rounded-md"
              />
            </div>
            
            {/* Image 3 */}
            <div className="rounded-lg p-2 sm:p-3 md:p-4 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="./assets/1.png" 
                alt="CPKL Action 3" 
                className="w-full h-24 sm:h-28 md:h-32 lg:h-56 object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Second Div - Purple Background */}
        <div className="bg-[#29066d] h-40 sm:h-44 md:h-48 lg:h-52"></div>
      </div>

      {/* Main Purple Content Section */}
      <section className="bg-[#29066d] pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#180444] rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12 xl:p-16">
            
            {/* Mission Section */}
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
              <div className="lg:w-1/2">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-jaturat text-white mb-4 sm:mb-6">Our Mission</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-poppins">
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
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-poppins">
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

      {/* Tagline and Join Us Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-jaturat text-black-90 mb-4 md:mb-6">
            Building Champions, Creating Legends
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto font-poppins">
            Join us in our journey to transform kabaddi and create a lasting legacy in sports. 
            Be part of the revolution that's changing the face of kabaddi in India.
          </p>
          <button 
            onClick={handleJoinUsClick}
            className="bg-secondary-light text-white px-5 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-secondary-dark transition-colors duration-300 font-poppins text-sm sm:text-base md:text-lg font-semibold cursor-pointer"
          >
            Join Us Now
          </button>
        </div>
      </section>

      {/* Simple Full Width Strip */}
      <div className="w-full h-[3vh] bg-[#29066d]"></div>

      {/* Final Content Section - UPDATED WITH FOUNDER'S NOTE */}
      <section className="relative bg-gray-900">
        <div className="w-full min-h-[90vh] flex items-center justify-center py-8 md:py-0">
          <div 
            className="absolute inset-0 bg-center"
            style={{ 
              backgroundImage: "url('./assets/coach.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          
          {/* Content with founder's note */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-8 lg:gap-12 min-h-[500px]">
              {/* Image Section - Reduced width, same height */}
              <div className="lg:w-2/5 flex items-stretch">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="./assets/Founders img.png" 
                    alt="CPKL Team" 
                    className="w-full h-full max-h-[600px] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Text Content Section - Founder's Note */}
              <div className="lg:w-3/5 text-white flex items-center">
                <div className="w-full p-4 sm:p-6 md:p-8 rounded-lg">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-jaturat mb-4 sm:mb-6 text-white text-left font-bold">
                    " Founder Note
                  </h3>
                  <div className="space-y-4 sm:space-y-6 font-poppins text-sm sm:text-base md:text-lg leading-relaxed">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </p>
                    <p>
                      Doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </p>
                  </div>
                  <div className="mt-6 sm:mt-8 text-center">
                    <p className="font-bold text-lg sm:text-xl md:text-2xl font-jaturat text-left">
                      Founder's Name
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-poppins text-left ">
                      Founder, CPKL
                    </p>
                  </div>
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