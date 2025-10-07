'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TeamsSection = () => {
  const teams = [
    { id: 1, image: "./assets/logos/team-1.jpg" },
    { id: 2, image: "./assets/logos/team-2.jpg" },
    { id: 3, image: "./assets/logos/team-3.jpg" },
    { id: 4, image: "./assets/logos/team-4.jpg" },
    { id: 5, image: "./assets/logos/team-5.jpg" },
    { id: 6, image: "./assets/logos/team-6.jpg" },
    { id: 7, image: "./assets/logos/team-7.jpg" },
    { id: 8, image: "./assets/logos/team-8.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive items to show
  useEffect(() => {
    const updateResponsiveSettings = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        // Mobile: Show 1 team
        setItemsToShow(1);
        setIsMobile(true);
      } else if (width >= 768 && width < 1024) {
        // Tablet: Show 2 teams
        setItemsToShow(2);
        setIsMobile(false);
      } else if (width >= 1024 && width < 1350) {
        // Large Tablet: Show 3 teams
        setItemsToShow(3);
        setIsMobile(false);
      } else {
        // Desktop: Show 4 teams
        setItemsToShow(4);
        setIsMobile(false);
      }
    };

    updateResponsiveSettings();
    window.addEventListener('resize', updateResponsiveSettings);
    return () => window.removeEventListener('resize', updateResponsiveSettings);
  }, []);

  // Auto carousel - only for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isMobile]);

  const handleNext = () => {
    if (isMobile) {
      // Mobile: Simple loop through all items
      setCurrentIndex((prevIndex) => 
        prevIndex === teams.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      // Desktop/Tablet: Show groups of items
      const maxIndex = teams.length - itemsToShow;
      setCurrentIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + itemsToShow
      );
    }
  };

  const handlePrev = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? teams.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? teams.length - itemsToShow : prevIndex - itemsToShow
      );
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Calculate transform for mobile carousel
  const calculateTransform = () => {
    if (isMobile) {
      return currentIndex * 100; // 100% per slide on mobile
    }
    const cardWidthPercentage = 100 / itemsToShow;
    return currentIndex * cardWidthPercentage;
  };

  const getCardWidth = () => {
    if (isMobile) {
      return '100%'; // Full width on mobile
    }
    return `calc(${100 / itemsToShow}% - ${(itemsToShow - 1) * 1}rem / ${itemsToShow})`;
  };

  return (
    <section className="py-2">
      <div className="relative py-6 md:py-12 lg:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./assets/team-bg.png')" }}>
        {/* Section Heading */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-black mb-3 md:mb-4" style={{ fontFamily: 'var(--font-jaturat)' }}>
            Our Teams
          </h2>
          <div className="w-16 md:w-20 lg:w-24 h-1 bg-secondary-light mx-auto"></div>
        </div>

        {/* Teams Carousel */}
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative overflow-hidden px-2 sm:px-4 lg:px-8">
            {/* Manual Navigation Buttons */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 md:left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-80 text-[#29066d] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-200 border border-gray-300"
              aria-label="Previous teams"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={handleNext}
              className="absolute right-0 md:right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-80 text-[#29066d] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-200 border border-gray-300"
              aria-label="Next teams"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden">
              <motion.div 
                className={`flex ${isMobile ? 'gap-0' : 'gap-3 md:gap-4 lg:gap-6'}`}
                animate={{ x: `-${calculateTransform()}%` }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                {teams.map((team) => (
                  <motion.div
                    key={team.id}
                    className="flex-shrink-0"
                    style={{ width: getCardWidth() }}
                    whileHover={{ scale: isMobile ? 1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`p-2 md:p-3 rounded-lg hover:shadow-xl transition-shadow duration-300 h-full mx-auto overflow-hidden bg-white bg-opacity-90 ${isMobile ? 'mx-1' : ''}`}>
                      <img 
                        src={team.image} 
                        alt={`Team ${team.id}`}
                        className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover rounded-md"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Dots Indicator - Only show on mobile */}
          {isMobile && (
            <div className="flex justify-center mt-4 md:mt-6 space-x-2">
              {teams.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-[#29066d] scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to team ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Group Dots Indicator - For desktop/tablet */}
          {!isMobile && (
            <div className="flex justify-center mt-4 md:mt-6 space-x-2">
              {Array.from({ length: Math.ceil(teams.length / itemsToShow) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsToShow)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsToShow) === index ? 'bg-[#29066d] scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to team group ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TeamsSection;