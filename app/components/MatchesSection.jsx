// MatchesSection.jsx
'use client';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

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
    },
    {
      id: 5,
      title: "Match 5",
      teamA: "Team I",
      teamB: "Team J",
      date: "FRIDAY - 3 NOV 4:00 PM",
      venue: "Sports Arena Delhi"
    },
    {
      id: 6,
      title: "Match 6",
      teamA: "Team K",
      teamB: "Team L",
      date: "SATURDAY - 4 NOV 8:00 PM",
      venue: "Mumbai Ground"
    },
    {
      id: 7,
      title: "Match 7",
      teamA: "Team M",
      teamB: "Team N",
      date: "SUNDAY - 5 NOV 2:00 PM",
      venue: "Chennai Stadium"
    },
    {
      id: 8,
      title: "Match 8",
      teamA: "Team O",
      teamB: "Team P",
      date: "MONDAY - 6 NOV 6:30 PM",
      venue: "Kolkata Arena"
    },
    {
      id: 9,
      title: "Quarter Final 1",
      teamA: "Winner A",
      teamB: "Winner B",
      date: "TUESDAY - 7 NOV 5:00 PM",
      venue: "National Stadium"
    },
    {
      id: 10,
      title: "Quarter Final 2",
      teamA: "Winner C",
      teamB: "Winner D",
      date: "WEDNESDAY - 8 NOV 7:00 PM",
      venue: "City Sports Complex"
    },
    {
      id: 11,
      title: "Semi Final 1",
      teamA: "QF Winner 1",
      teamB: "QF Winner 2",
      date: "FRIDAY - 10 NOV 6:00 PM",
      venue: "ABC Stadium XYZ"
    },
    {
      id: 12,
      title: "Semi Final 2",
      teamA: "QF Winner 3",
      teamB: "QF Winner 4",
      date: "SATURDAY - 11 NOV 8:00 PM",
      venue: "XYZ Arena Center"
    },
    {
      id: 13,
      title: "GRAND FINALE",
      teamA: "SF Winner 1",
      teamB: "SF Winner 2",
      date: "SUNDAY - 12 NOV 7:00 PM",
      venue: "National Stadium"
    }
  ];

  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);

  // Calculate card width based on screen size and visible cards
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setIsMobile(true);
        setVisibleCards(1); // Show 1 card on mobile
      } else if (width < 768) {
        setIsMobile(true);
        setVisibleCards(2); // Show 2 cards on small tablets
      } else if (width < 1024) {
        setIsMobile(false);
        setVisibleCards(3); // Show 3 cards on tablets
      } else {
        setIsMobile(false);
        setVisibleCards(4); // Show 4 cards on desktop
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / visibleCards;
      const scrollPosition = index * cardWidth;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scrollNext = () => {
    const maxIndex = Math.ceil(matches.length / visibleCards) - 1;
    const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    scrollToIndex(nextIndex);
  };

  const scrollPrev = () => {
    const maxIndex = Math.ceil(matches.length / visibleCards) - 1;
    const prevIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

  // Calculate total pages
  const totalPages = Math.ceil(matches.length / visibleCards);

  return (
    <section className="py-0 pt-12 md:pt-20">
      {/* Section Heading - Outside the background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-black-90 mb-4" style={{ fontFamily: 'var(--font-jaturat)' }}>
          Upcoming Matches
        </h2>
        <div className="w-20 md:w-24 h-1 bg-secondary-light mx-auto"></div>
      </div>

      {/* Background Section - Full width */}
      <div className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center w-full" style={{ 
        backgroundImage: "url('./assets/Landing site match schedule bg img.png')",
        minHeight: isMobile ? '60vh' : '70vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}>
        <div className="absolute"></div>
        <div className="relative z-10 w-full px-2 sm:px-4 lg:px-8 py-4 md:py-8">
          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-7xl">
              {/* Scrolling Container - Full width */}
              <div 
                ref={scrollContainerRef}
                className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-2 w-full"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  overflowY: 'hidden'
                }}
              >
                {matches.map((match, index) => (
                  <motion.div 
                    key={match.id}
                    className="flex-shrink-0 relative bg-[#29066d] rounded-lg shadow-lg overflow-hidden border-2 border-white snap-center"
                    style={{ 
                      width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 16 / visibleCards}px)`,
                      minWidth: isMobile ? '280px' : '300px',
                      height: 'fit-content'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Pattern on top with heading */}
                    <div className="h-10 md:h-12 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('./assets/Match-1.png')" }}>
                      <h3 className="text-lg md:text-xl text-black font-bold px-2 text-center" style={{ fontFamily: 'var(--font-jaturat)' }}>{match.title}</h3>
                    </div>
                    
                    <div className="p-4 md:p-6">
                      {/* Teams with logos */}
                      <div className="flex items-center justify-between mb-4 md:mb-6">
                        <div className="flex flex-col items-center flex-1">
                          <motion.div 
                            className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-2"
                            whileHover={{ scale: 1.1 }}
                          >
                            <img 
                              src="./assets/Logo CPKL.png" 
                              alt={match.teamA} 
                              className="w-12 h-12 md:w-16 md:h-16 object-contain"
                            />
                          </motion.div>
                          <span className="text-white text-xs md:text-sm font-semibold text-center px-1" style={{ fontFamily: 'var(--font-poppins)' }}>{match.teamA}</span>
                        </div>
                        
                        {/* Special VS Design */}
                        <div className="mx-1 md:mx-2 flex items-center justify-center relative">
                          <motion.div 
                            className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-300 relative z-10"
                            whileHover={{ scale: 1.1 }}
                          >
                            <span className="text-[#29066d] font-bold text-xs md:text-sm" style={{ fontFamily: 'var(--font-jaturat)' }}>VS</span>
                          </motion.div>
                        </div>
                        
                        <div className="flex flex-col items-center flex-1">
                          <motion.div 
                            className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-2"
                            whileHover={{ scale: 1.1 }}
                          >
                            <img 
                              src="./assets/Logo CPKL.png" 
                              alt={match.teamB} 
                              className="w-12 h-12 md:w-16 md:h-16 object-contain"
                            />
                          </motion.div>
                          <span className="text-white text-xs md:text-sm font-semibold text-center px-1" style={{ fontFamily: 'var(--font-poppins)' }}>{match.teamB}</span>
                        </div>
                      </div>

                      {/* Match details - Stacked layout */}
                      <div className="text-center space-y-1 md:space-y-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                        <div className="text-white font-bold text-sm md:text-lg px-1">
                          {match.date}
                        </div>
                        <div className="text-white text-xs md:text-sm px-1">{match.venue}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Buttons - Bottom Center */}
              <div className="flex justify-center items-center gap-4 mt-6 md:mt-8">
                <button 
                  onClick={scrollPrev}
                  className="bg-white text-[#29066d] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-300 border-2 border-[#29066d]"
                  aria-label="Previous match"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Page Indicators */}
                <div className="flex gap-2 mx-4">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToIndex(i)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        i === currentIndex ? 'bg-[#29066d]' : 'bg-gray-400'
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={scrollNext}
                  className="bg-white text-[#29066d] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-300 border-2 border-[#29066d]"
                  aria-label="Next match"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Hide scrollbar for webkit browsers */}
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MatchesSection;