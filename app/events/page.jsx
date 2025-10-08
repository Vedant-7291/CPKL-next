'use client';
import { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout'

const EventsPage = () => {
  const [activeEvent, setActiveEvent] = useState('Selection Trials');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Define different image sets for each event
  const eventImages = {
    'Selection Trials': [
      './assets/events/e1.webp',
      './assets/events/e2.webp',
      './assets/events/e3.webp',
      './assets/events/e4.webp',
      './assets/events/e5.webp',
      './assets/events/e6.webp',
      './assets/events/e7.webp',
      './assets/events/e8.webp',
      './assets/events/e9.webp',
      './assets/events/e10.webp',
      './assets/events/e11.webp'
    ],
    'League Mega Launch': [
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
    'Jersey Launch & Auction': [
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
    'The League': [
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
    'Closing Ceremony': [
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

  // Get current images based on active event
  const currentImages = eventImages[activeEvent];

  const handleEventSelect = (event) => {
    setActiveEvent(event);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Layout>
 <section className="relative w-full bg-white">
  <div className="relative w-full h-[75vh] min-h-[500px]">
    <div 
      className="absolute inset-0 bg-no-repeat"
      style={{ 
        backgroundImage: "url('./assets/allpb.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center"
      }}
    ></div>
    
    {/* Content with left positioning */}
    <div className="absolute inset-0 z-10 flex items-center transform -translate-y-8">
      <h1 className="text-3xl md:text-6xl lg:text-8xl text-primary font-bold font-galantic absolute left-[15%]">
        EVENTS
      </h1>
    </div>
  </div>
</section>
      {/* Events Header Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-main text-black-90 mb-6 md:mb-8">
              Celebrating Kabaddi's Finest Moments
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-sub">
              Experience the complete CPKL journey through our spectacular events. From talent discovery 
              to grand celebrations, each event marks a milestone in our kabaddi legacy.
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
                <span>{activeEvent}</span>
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
                  {Object.keys(eventImages).map((event) => (
                    <button
                      key={event}
                      onClick={() => handleEventSelect(event)}
                      className={`w-full px-6 py-4 text-left transition-all duration-200 border-b border-gray-100 last:border-b-0 ${
                        activeEvent === event 
                          ? 'bg-[#180444] text-white' 
                          : 'text-gray-800 hover:bg-[#180444] hover:text-white'
                      }`}
                    >
                      {event}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
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
                  alt={`CPKL ${activeEvent} Image ${index + 1}`} 
                  className="w-full h-full object-fill"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default EventsPage