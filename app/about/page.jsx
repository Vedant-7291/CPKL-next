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
  <div className="relative w-full h-[75vh] min-h-[500px]">
    <div 
      className="absolute inset-0 bg-no-repeat"
      style={{ 
        backgroundImage: "url('./assets/allpb.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center"
      }}
    ></div>
    
    {/* Content with left positioning */}
    <div className="absolute inset-0 z-10 flex items-center transform -translate-y-8">
      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-bold font-galantic absolute left-[20%]">
        ABOUT 
      </h1>
    </div>
  </div>
</section>
      
      {/* About CPKL Section */}
      <section className="bg-white pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-main text-black-90 mb-4 md:mb-6">
              Local Roots to Global Heights
            </h2>
            <div className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-sub space-y-4">
              <p>
                The Canvi Premier Kabaddi League (CPKL), founded by Canvi Sports Federation, is a professional franchise-based kabaddi league with one mission: to nurture India's raw talent and bring kabaddi to the global stage.
              </p>
              <p>
                <strong>Season 1 (2023–24):</strong> Conducted successfully in India, uniting hundreds of athletes from across the nation.
              </p>
              <p>
                <strong>Season 2 (2025):</strong> Now stepping into Dubai, CPKL combines the soul of Indian kabaddi with the glamour of an international sporting arena.
              </p>
              <p>
                With world-class players, elite franchises, and thrilling competition, CPKL is more than a league. It's a movement to make kabaddi a global spectacle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Container Section - Reduced gap between content and images */}
      <div className="relative">
        {/* First Div - White Background with REDUCED height */}
        <div className="bg-white h-24 sm:h-28 md:h-32 lg:h-36"></div>
        
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

        {/* Second Div - Purple Background with REDUCED height */}
        <div className="bg-[#29066d] h-24 sm:h-28 md:h-32 lg:h-36"></div>
      </div>

      {/* Main Purple Content Section */}
      <section className="bg-[#29066d] pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#180444] rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12 xl:p-16">
            
            {/* Mission Section */}
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
              <div className="lg:w-1/2">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-main text-white mb-4 sm:mb-6">Our Mission</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-sub italic">
                  "To create a world-class kabaddi ecosystem that nurtures raw talent, celebrates legends, and inspires communities by taking India's traditional sport to global arenas."
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
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-main text-white mb-4 sm:mb-6">Our Vision</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-sub italic">
                  "To establish kabaddi as a truly international sport, with CPKL as its premier stage — uniting players, fans, and nations through the spirit of strength, skill, and sportsmanship."
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
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-main text-black-90 mb-4 md:mb-6">
            Building Champions, Creating Legends
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto font-sub">
            Join us in our journey to transform kabaddi and create a lasting legacy in sports. 
            Be part of the revolution that's changing the face of kabaddi in India.
          </p>
          <button 
            onClick={handleJoinUsClick}
            className="bg-secondary-light text-white px-5 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-secondary-dark transition-colors duration-300 font-sub text-sm sm:text-base md:text-lg font-semibold cursor-pointer"
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
      <div className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-8 lg:gap-12">
        {/* Image Section - Full height matching text content */}
        <div className="lg:w-2/5 flex items-stretch">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src="./assets/Founder.png" 
              alt="CPKL Team" 
              className="w-full h-full max-h-[700px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
        
        {/* Text Content Section - Founder's Note */}
        <div className="lg:w-3/5 text-white flex items-center">
          <div className="w-full p-4 sm:p-6 md:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-main mb-4 sm:mb-6 text-white text-left font-bold">
              Founder's Note
            </h3>
            <div className="space-y-4 sm:space-y-6 font-sub text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                When we started Canvi Premier Kabaddi League (CPKL), the vision was simple, to bring India's most rooted sport to a new-age stage. Kabaddi has always been a game of grit, teamwork, and heart and through CPKL, we aim to celebrate that essence while giving young athletes a platform to rise, shine, and inspire.
              </p>
              <p>
                Our mission goes beyond just competition, it's about creating opportunities, building communities, and redefining how India experiences kabaddi. From every trial and training camp to every match and moment of victory, we see not just players, but stories of determination and dreams coming alive.
              </p>
              <p>
                CPKL is built on the belief that sports have the power to unite and uplift. With teams representing different states and fans connecting from across the nation, we are crafting more than a league — we're building a movement that honors the spirit of kabaddi and the pride of every player who steps on the mat.
              </p>
              <p>
                To everyone who has been part of this journey, our teams, athletes, partners, and fans, thank you for believing in the vision of CPKL. Together, we are reviving a legacy.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 text-left">
              <p className="font-bold text-lg sm:text-xl md:text-2xl font-main">
                Mr. Shiv Kumar Beniwal
              </p>
              <p className="text-sm sm:text-base md:text-lg font-sub">
                Founder, Canvi Sports Federation & CPKL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   {/* Our Management Section */}
<section className="bg-white py-8 md:py-12 lg:py-16">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <div className="text-center mb-6 md:mb-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-main text-black-90 font-bold">
        Our Management
      </h2>
    </div>

    {/* Management Grid - 2x2 layout with equal height cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-3xl mx-auto">
      {/* Management Member 1 - Rakesh ji Bajiya */}
      <div className="text-center">
        <div>
          <img 
            src="./assets/management/1.png" 
            alt="Rakesh ji Bajiya" 
            className="w-40 h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 xl:w-64 xl:h-72 mx-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-[#180444] p-3 md:p-4 w-40 md:w-48 lg:w-56 xl:w-64 mx-auto min-h-[120px] md:min-h-[140px] flex flex-col justify-center mt-0">
          <h3 className="text-lg md:text-xl lg:text-2xl font-main font-bold text-white mb-1">
            Rakesh ji Bajiya
          </h3>
          <p className="text-xs md:text-sm text-gray-300 font-sub leading-tight">
            Vice President<br />
            Canvi Premier Kabaddi League<br />
            Chairman<br />
            Canvi Sports Federation
          </p>
        </div>
      </div>

      {/* Management Member 2 - Vandana Kundu */}
      <div className="text-center">
        <div>
          <img 
            src="./assets/management/2.png" 
            alt="Vandana Kundu" 
            className="w-40 h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 xl:w-64 xl:h-72 mx-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-[#180444] p-3 md:p-4 w-40 md:w-48 lg:w-56 xl:w-64 mx-auto min-h-[120px] md:min-h-[140px] flex flex-col justify-center mt-0">
          <h3 className="text-lg md:text-xl lg:text-2xl font-main font-bold text-white mb-1">
            Vandana Kundu
          </h3>
          <p className="text-xs md:text-sm text-gray-300 font-sub leading-tight">
            Management<br />
            Canvi Premier Kabaddi League
          </p>
        </div>
      </div>

      {/* Management Member 3 - Anil Kajla */}
      <div className="text-center">
        <div>
          <img 
            src="./assets/management/3.png" 
            alt="Anil Kajla" 
            className="w-40 h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 xl:w-64 xl:h-72 mx-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-[#180444] p-3 md:p-4 w-40 md:w-48 lg:w-56 xl:w-64 mx-auto min-h-[120px] md:min-h-[140px] flex flex-col justify-center mt-0">
          <h3 className="text-lg md:text-xl lg:text-2xl font-main font-bold text-white mb-1">
            Anil Kajla
          </h3>
          <p className="text-xs md:text-sm text-gray-300 font-sub leading-tight">
            Management<br />
            Canvi Premier Kabaddi League
          </p>
        </div>
      </div>

      {/* Management Member 4 - Kuldeep Kaswan */}
      <div className="text-center">
        <div>
          <img 
            src="./assets/management/4.png" 
            alt="Kuldeep Kaswan" 
            className="w-40 h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 xl:w-64 xl:h-72 mx-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-[#180444] p-3 md:p-4 w-40 md:w-48 lg:w-56 xl:w-64 mx-auto min-h-[120px] md:min-h-[140px] flex flex-col justify-center mt-0">
          <h3 className="text-lg md:text-xl lg:text-2xl font-main font-bold text-white mb-1">
            Kuldeep Kaswan
          </h3>
          <p className="text-xs md:text-sm text-gray-300 font-sub leading-tight">
            Management<br />
            Canvi Premier Kabaddi League
          </p>
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