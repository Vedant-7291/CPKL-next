'use client';
import { useState, useEffect } from 'react';

const BannerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const bannerData = [
    {
      image: "./assets/Landing site Banner-3.png",
    },
    {
      image: "./assets/Landing site Banner-2.png",
    },
    {
      image: "./assets/Landing site Banner-1.png",
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % (bannerData.length + 1);
    setCurrentSlide(nextSlide);
    
    // If we reach the clone (last slide), reset to first without animation
    if (nextSlide === bannerData.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  };

  const handlePrev = () => {
    const prevSlide = currentSlide === 0 ? bannerData.length : currentSlide - 1;
    setCurrentSlide(prevSlide);
    
    if (currentSlide === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(bannerData.length - 1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full bg-white">
      {/* Banner Container */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] bg-white overflow-hidden">
        {/* Slides Container */}
        <div className="relative w-full h-full flex">
          {/* Original slides + clone of first slide */}
          {[...bannerData, bannerData[0]].map((banner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {/* Background Image */}
              <div className="w-full h-full flex items-center justify-center bg-white">
                <img 
                  src={banner.image} 
                  alt={`Sports World Banner ${index + 1}`}
                  className="w-full h-full object-cover md:object-fill"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Hidden on mobile */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 md:p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 md:p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator - Only show for original slides */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === (currentSlide >= bannerData.length ? 0 : currentSlide) ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;