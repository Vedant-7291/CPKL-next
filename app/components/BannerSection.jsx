'use client';
import { useState, useEffect } from 'react';

const BannerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bannerData = [
    {
      image: "./assets/Landing site Banner-1.png",
    },
    {
      image: "./assets/Landing site Banner-2.png",
    },
    {
      image: "./assets/Landing site Banner-3.png",
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [bannerData.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
  };

  return (
    <section className="relative w-full bg-white">
      {/* Banner Container */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] bg-white overflow-hidden">
        {/* Slides Container */}
        <div className="relative w-full h-full">
          {bannerData.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 flex items-center justify-center bg-white">
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
          onClick={goToPrevSlide}
          className="hidden sm:flex absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 md:p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          className="hidden sm:flex absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 md:p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>


      </div>
    </section>
  );
};

export default BannerSection;