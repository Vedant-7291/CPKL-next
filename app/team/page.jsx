import Layout from '../components/Layout'
import BannerSection from '../components/BannerSection'
import PartnersSection from '../components/PartnersSection'

const TeamsPage = () => {
  return (
    <Layout>
      <BannerSection />
      
      {/* Our Teams Heading Section */}
      <section className="bg-white py-12 md:py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jaturat text-black-90 mb-6 md:mb-8">
              Our Teams
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover the powerhouse teams of CPKL, each representing different regions of Chhattisgarh. 
              Our teams comprise of the most talented kabaddi players who showcase exceptional skills, 
              strategy, and sportsmanship. Get to know the squads that make CPKL the most exciting 
              kabaddi league in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid Section with Background */}
      <section className="relative bg-gray-900">
        {/* Background Image Container */}
        <div className="w-full min-h-[100vh] flex items-center justify-center py-16 md:py-20"> {/* Increased vertical padding */}
          <div 
            className="absolute inset-0 bg-center"
            style={{ 
              backgroundImage: "url('./assets/coach.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          
          {/* Lighter Overlay for better background visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div> {/* Reduced opacity */}
          
          {/* Teams Grid with proper spacing */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"> {/* Added vertical padding */}
            {/* 3x3 Grid with better spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"> {/* Increased gaps */}
              
              {/* Team Card 1 */}
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200">
                <img 
                  src="./assets/logos/team-1.jpg" 
                  alt="Team Raipur Raiders" 
                  className="w-full h-60 sm:h-68 md:h-72 lg:h-80 object-cover"
                />
              </div>
              
              {/* Team Card 2 */}
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200">
                <img 
                  src="./assets/logos/team-2.jpg" 
                  alt="Team Bilaspur Warriors" 
                  className="w-full h-60 sm:h-68 md:h-72 lg:h-80 object-cover"
                />
              </div>
              
              {/* Team Card 3 */}
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200">
                <img 
                  src="./assets/logos/team-3.jpg" 
                  alt="Team Durg Defenders" 
                  className="w-full h-60 sm:h-68 md:h-72 lg:h-80 object-cover"
                />
              </div>
              
              {/* Team Card 4 */}
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200">
                <img 
                  src="./assets/logos/team-4.jpg" 
                  alt="Team Rajnandgaon Royals" 
                  className="w-full h-60 sm:h-68 md:h-72 lg:h-80 object-cover"
                />
              </div>
              
              {/* Team Card 5 */}
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200">
                <img 
                  src="./assets/logos/team-5.jpg" 
                  alt="Team Korba Kings" 
                  className="w-full h-60 sm:h-68 md:h-72 lg:h-80 object-cover"
                />
              </div>
              
              {/* Team Card 6 */}
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200">
                <img 
                  src="./assets/logos/team-6.jpg" 
                  alt="Team Raigarh Riders" 
                  className="w-full h-60 sm:h-68 md:h-72 lg:h-80 object-cover"
                />
              </div>
              
              {/* Team Card 7 */}
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200">
                <img 
                  src="./assets/logos/team-7.jpg" 
                  alt="Team Jagdalpur Jaguars" 
                  className="w-full h-60 sm:h-68 md:h-72 lg:h-80 object-cover"
                />
              </div>
              
              {/* Team Card 8 */}
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200">
                <img 
                  src="./assets/logos/team-8.jpg" 
                  alt="Team Ambikapur Avengers" 
                  className="w-full h-60 sm:h-68 md:h-72 lg:h-80 object-cover"
                />
              </div>
              
              {/* Team Card 9 */}
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200">
                <img 
                  src="./assets/logos/team-9.jpg" 
                  alt="Team Bhilai Bulls" 
                  className="w-full h-60 sm:h-68 md:h-72 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
            <div className="bg-white h-[8vh]"></div>
   
    </Layout>
  )
}

export default TeamsPage