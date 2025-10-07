'use client';
import { useState } from 'react';
import Layout from '../components/Layout'
import BannerSection from '../components/BannerSection'

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('matchDay');

  // Define different image sets for each category
  const imageSets = {
    auction: [
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png'
    ],
    matchDay: [
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png'
    ],
    team: [
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png'
    ],
    pastSeason: [
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png'
    ]
  };

  // Get current images based on active category
  const currentImages = imageSets[activeCategory];

  const handleButtonClick = (category) => {
    setActiveCategory(category);
  };

  const getButtonClass = (category) => {
    const baseClass = "px-8 py-1 font-semibold rounded-lg border-2 border-[#180444] transition-colors duration-300 shadow-md text-base w-full sm:w-auto";
    if (activeCategory === category) {
      return `${baseClass} bg-[#180444] text-white`;
    } else {
      return `${baseClass} bg-white text-[#180444] hover:bg-gray-50`;
    }
  };

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
          
          {/* Content - Shifted upwards */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 transform -translate-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary text-center font-bold font-galantic">
              GALLERY
            </h1>
          </div>
        </div>
      </section>
      
      {/* Gallery Header Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jaturat text-black-90 mb-6 md:mb-8">
              Where Every Raid Lives Forever
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Step into the world of CPKL through our visual journey. From intense auction moments to 
              thrilling match days and team celebrations, experience the passion and energy that defines 
              Chhattisgarh Premier Kabaddi League.
            </p>
          </div>
        </div>
      </section>

      {/* Four Category Buttons */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Auction Button */}
            <button 
              onClick={() => handleButtonClick('auction')}
              className={getButtonClass('auction')}
            >
              Auction
            </button>
            
            {/* Match Day Button */}
            <button 
              onClick={() => handleButtonClick('matchDay')}
              className={getButtonClass('matchDay')}
            >
              Match Day
            </button>
            
            {/* Team Button */}
            <button 
              onClick={() => handleButtonClick('team')}
              className={getButtonClass('team')}
            >
              Team
            </button>

            {/* Past Season Button */}
            <button 
              onClick={() => handleButtonClick('pastSeason')}
              className={getButtonClass('pastSeason')}
            >
              Past Season
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3x3 Square Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentImages.map((imageSrc, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200 aspect-square"
              >
                <img 
                  src={imageSrc} 
                  alt={`CPKL ${activeCategory} Image ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default GalleryPage