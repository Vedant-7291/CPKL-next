'use client';
import { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout'

const CpklTvPage = () => {
  const [activeCategory, setActiveCategory] = useState('Live Matches');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Define different image sets for each category
  const tvCategories = {
    'Live Matches': [
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
    'Player Interviews': [
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png'
    ],
    'Behind-the-Scenes Specials': [
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
    'Best Raids & Tackles of the Season': [
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png',
      './assets/1.png',
      './assets/2.png'
    ],
    'Match Highlights': [
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get current images based on active category
  const currentImages = tvCategories[activeCategory];

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
              CPKL TV
            </h1>
          </div>
        </div>
      </section>
      
      {/* CPKL TV Header Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jaturat text-black-90 mb-6 md:mb-8">
              Your Official Kabaddi Streaming Hub
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Dive into the world of professional kabaddi with CPKL TV. Watch live matches, exclusive 
              interviews, behind-the-scenes content, and the most thrilling moments from the season.
            </p>
          </div>
        </div>
      </section>

      {/* Dropdown Button Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[50vw] min-w-[350px]" ref={dropdownRef}>
              {/* Main Dropdown Button */}
              <button 
                onClick={toggleDropdown}
                className="w-full px-8 py-4 bg-[#180444] text-white font-semibold rounded-lg border-2 border-[#180444] transition-colors duration-300 shadow-md text-lg flex items-center justify-between hover:bg-[#2a0a66] hover:border-[#2a0a66]"
              >
                <span>{activeCategory}</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-10 overflow-hidden">
                  {Object.keys(tvCategories).map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`w-full px-6 py-4 text-left transition-all duration-200 border-b border-gray-100 last:border-b-0 ${
                        activeCategory === category 
                          ? 'bg-[#180444] text-white' 
                          : 'text-gray-800 hover:bg-[#180444] hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CPKL TV Grid Section */}
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
                  alt={`CPKL TV ${activeCategory} Image ${index + 1}`} 
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

export default CpklTvPage