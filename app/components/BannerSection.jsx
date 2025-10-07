'use client';
import { useState, useEffect } from 'react';

const BannerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bannerData = [
    {
      image: "./assets/Landing Site Banner.png",
      heading: "CPKL Season 2\nDUBAI mein bajega Kabaddi ka danka!",
      subheading: "The roar of kabaddi goes global! After a historic first season in India, the Canvi Premier Kabaddi League (CPKL) now arrives in Dubai for Season 2."
    },
    {
      image: "./assets/Landing Site Banner.png", // Replace with your second banner image path
      heading: "CPKL Season 2\nyeh hai Kabaddi ka asli Mahasangram!",
      subheading: "" // Empty subheading for second banner
    },
    {
      image: "./assets/Landing Site Banner.png", // Replace with your third banner image path
      heading: "THE HEROES OF KABADDI\nBACK IN SEASON 2!",
      subheading: "" // Empty subheading for third banner
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
      <div className="relative w-full h-[85vh] bg-white overflow-hidden">
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
                  className="w-full h-full object-fill"
                />
              </div>
              
              {/* Content Container */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Content Wrapper with proper alignment */}
                  <div className="flex flex-col items-center justify-center text-center w-full">
                    {/* Heading */}
                    <div className="w-full max-w-4xl mx-auto mb-6">
                      <h1 
                        className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-bold leading-tight md:leading-tight lg:leading-tight whitespace-pre-line"
                        style={{ fontFamily: 'var(--font-jaturat)' }}
                      >
                        {banner.heading}
                      </h1>
                    </div>
                    
                    {/* Subheading - Only show if content exists */}
                    {banner.subheading && (
                      <div className="w-full max-w-3xl mx-auto mt-4">
                        <p 
                          className="text-primary text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose whitespace-pre-line"
                          style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                          {banner.subheading}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
       
      </div>
    </section>
  );
};

export default BannerSection;