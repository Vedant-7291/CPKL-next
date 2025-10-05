// MatchesSection.jsx
'use client';
import { motion } from 'framer-motion';

const MatchesSection = () => {
  const matches = [
    {
      id: 1,
      title: "Match 1",
      teamA: "Team A",
      teamB: "Team B",
      date: "MONDAY - 30 OCT 6:00 PM",
      venue: "ABC Stadium XYZ"
    },
    {
      id: 2,
      title: "Match 2", 
      teamA: "Team C",
      teamB: "Team D",
      date: "TUESDAY - 31 OCT 3:00 PM",
      venue: "XYZ Arena Center"
    },
    {
      id: 3,
      title: "Match 3",
      teamA: "Team E",
      teamB: "Team F",
      date: "WEDNESDAY - 1 NOV 5:00 PM",
      venue: "National Stadium"
    },
    {
      id: 4,
      title: "Match 4",
      teamA: "Team G",
      teamB: "Team H",
      date: "THURSDAY - 2 NOV 7:00 PM",
      venue: "City Sports Complex"
    }
  ];

  // Duplicate matches for seamless looping
  const allMatches = [...matches, ...matches];

  return (
    <section className="py-0 pt-20">
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
        minHeight: '70vh',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center'
      }}>
        <div className="absolute"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
          <div className="flex justify-center">
            <div className="relative w-full overflow-hidden">
              {/* Scrolling Container */}
              <motion.div
                className="flex gap-8"
                animate={{
                  x: ['0%', '-50%'] // Move by half the total width for seamless loop
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {allMatches.map((match, index) => (
                  <motion.div 
                    key={`${match.id}-${index}`}
                    className="flex-shrink-0 relative bg-[#29066d] rounded-lg shadow-lg overflow-hidden border-2 border-white w-80"
                   
                  >
                    {/* Pattern on top with heading */}
                    <div className="h-5 bg-cover flex items-center justify-center" style={{ backgroundImage: "url('./assets/Match-1.png')" }}>
                      <h3 className="text-xl text-black font-bold" style={{ fontFamily: 'var(--font-jaturat)' }}>{match.title}</h3>
                    </div>
                    
                    <div className="p-6">
                      {/* Teams with logos */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex flex-col items-center flex-1">
                          <motion.div 
                            className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2"
                            
                          >
                            <img 
                              src="./assets/Logo CPKL.png" 
                              alt={match.teamA} 
                              className="w-16 h-16 object-contain"
                            />
                          </motion.div>
                          <span className="text-white text-sm font-semibold text-center" style={{ fontFamily: 'var(--font-poppins)' }}>{match.teamA}</span>
                        </div>
                        
                        {/* Special VS Design */}
                        <div className="mx-2 flex items-center justify-center relative">
                          <motion.div 
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-300 relative z-10"
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <span className="text-[#29066d] font-bold text-sm" style={{ fontFamily: 'var(--font-jaturat)' }}>VS</span>
                          </motion.div>
                        </div>
                        
                        <div className="flex flex-col items-center flex-1">
                          <motion.div 
                            className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2"
                            whileHover={{ scale: 1.1 }}
                          >
                            <img 
                              src="./assets/Logo CPKL.png" 
                              alt={match.teamB} 
                              className="w-16 h-16 object-contain"
                            />
                          </motion.div>
                          <span className="text-white text-sm font-semibold text-center" style={{ fontFamily: 'var(--font-poppins)' }}>{match.teamB}</span>
                        </div>
                      </div>

                      {/* Match details - Stacked layout */}
                      <div className="text-center space-y-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                        <motion.div 
                          className="text-white font-bold text-lg"
                          initial={{ opacity: 0.8 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        >
                          {match.date}
                        </motion.div>
                        <div className="text-white text-sm">{match.venue}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#29066d] to-transparent z-20 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#29066d] to-transparent z-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MatchesSection;