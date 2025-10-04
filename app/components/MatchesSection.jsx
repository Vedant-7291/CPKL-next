// MatchesSection.jsx
const MatchesSection = () => {
  return (
    <section className="py-20">
      {/* Section Heading - Outside the background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl text-center text-black-90 mb-4" style={{ fontFamily: 'var(--font-jaturat)' }}>
          Upcoming Matches
        </h2>
        <div className="w-24 h-1 bg-secondary-light mx-auto"></div>
      </div>

      {/* Background Section - Fixed to show full image */}
      <div className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ 
        backgroundImage: "url('./assets/Landing site match schedule bg img.png')",
        minHeight: '80vh',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center'
      }}>
        <div className="absolute "></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
            {/* Match 1 */}
            <div className="relative bg-[#29066d] rounded-lg shadow-lg overflow-hidden border-2 border-white w-full max-w-md">
              {/* Pattern on top with heading */}
              <div className="h-14 bg-cover flex items-center justify-center" style={{ backgroundImage: "url('./assets/Match-1.png')" }}>
                <h3 className="text-xl text-black font-bold" style={{ fontFamily: 'var(--font-jaturat)' }}>Match 1</h3>
              </div>
              
              <div className="p-6">
                {/* Teams with logos */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
                      <img 
                        src="./assets/Logo CPKL.png" 
                        alt="Team A" 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <span className="text-white text-sm font-semibold text-center" style={{ fontFamily: 'var(--font-poppins)' }}>Team A</span>
                  </div>
                  
                  {/* Special VS Design with Sparkles */}
                  <div className="mx-2 flex items-center justify-center relative">
                    <div className="relative">
                      {/* Main VS Circle */}
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-300 relative z-10">
                        <span className="text-[#29066d] font-bold text-sm" style={{ fontFamily: 'var(--font-jaturat)' }}>VS</span>
                      </div>
                      
                      {/* Sparkle Effects */}
                    
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
                      <img 
                        src="./assets/Logo CPKL.png" 
                        alt="Team B" 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <span className="text-white text-sm font-semibold text-center" style={{ fontFamily: 'var(--font-poppins)' }}>Team B</span>
                  </div>
                </div>

                {/* Match details - Stacked layout */}
                <div className="text-center space-y-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                  <div className="text-white font-bold text-lg">MONDAY - 30 OCT 6:00 PM</div>
                  <div className="text-white text-sm">ABC Stadium XYZ</div>
                </div>
              </div>
            </div>

            {/* Match 2 */}
            <div className="relative bg-[#29066d] rounded-lg shadow-lg overflow-hidden border-2 border-white w-full max-w-md">
              {/* Pattern on top with heading */}
              <div className="h-14 bg-cover flex items-center justify-center" style={{ backgroundImage: "url('./assets/Match-1.png')" }}>
                <h3 className="text-xl text-black font-bold" style={{ fontFamily: 'var(--font-jaturat)' }}>Match 2</h3>
              </div>
              
              <div className="p-6">
                {/* Teams with logos */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
                      <img 
                        src="./assets/Logo CPKL.png" 
                        alt="Team C" 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <span className="text-white text-sm font-semibold text-center" style={{ fontFamily: 'var(--font-poppins)' }}>Team C</span>
                  </div>
                  
                  {/* Special VS Design with Sparkles */}
                  <div className="mx-2 flex items-center justify-center relative">
                    <div className="relative">
                      {/* Main VS Circle */}
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-300 relative z-10">
                        <span className="text-[#29066d] font-bold text-sm" style={{ fontFamily: 'var(--font-jaturat)' }}>VS</span>
                      </div>
                      
                   
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
                      <img 
                        src="./assets/Logo CPKL.png" 
                        alt="Team D" 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <span className="text-white text-sm font-semibold text-center" style={{ fontFamily: 'var(--font-poppins)' }}>Team D</span>
                  </div>
                </div>

                {/* Match details - Stacked layout */}
                <div className="text-center space-y-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                  <div className="text-white font-bold text-lg">TUESDAY - 31 OCT 3:00 PM</div>
                  <div className="text-white text-sm">XYZ Arena Center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MatchesSection