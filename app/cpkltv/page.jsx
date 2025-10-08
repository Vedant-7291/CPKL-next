'use client';
import { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout'

const CpklTvPage = () => {
  const [activeCategory, setActiveCategory] = useState('Live Matches');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [videoData, setVideoData] = useState({});
  const dropdownRef = useRef(null);

  // Define different video sets for each category with thumbnails
  const tvCategories = {
    'Live Matches': [
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-4640-large.mp4',
        thumbnail: '/assets/reg.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-skateboarding-in-a-parking-lot-34558-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-skateboarding-in-a-parking-lot-34558-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-34554-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-34554-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2402-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2402-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-sky-1180-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-sky-1180-large.png'
      }
    ],
    'Player Interviews': [
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-skateboarding-in-a-parking-lot-34558-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-skateboarding-in-a-parking-lot-34558-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-4640-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-4640-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-34554-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-34554-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2402-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2402-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-sky-1180-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-sky-1180-large.png'
      }
    ],
    'Behind-the-Scenes Specials': [
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-4640-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-4640-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-skateboarding-in-a-parking-lot-34558-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-skateboarding-in-a-parking-lot-34558-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-34554-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-34554-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2402-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2402-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-sky-1180-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-sky-1180-large.png'
      }
    ],
    'Best Raids & Tackles of the Season': [
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-34554-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-34554-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-4640-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-4640-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-skateboarding-in-a-parking-lot-34558-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-skateboarding-in-a-parking-lot-34558-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2402-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2402-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-sky-1180-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-sky-1180-large.png'
      }
    ],
    'Match Highlights': [
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-4640-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-4640-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-skateboarding-in-a-parking-lot-34558-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-skateboarding-in-a-parking-lot-34558-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-34554-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-34554-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2402-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2402-large.png'
      },
      { 
        video: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-sky-1180-large.mp4',
        thumbnail: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-sky-1180-large.png'
      }
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

  // Get current videos based on active category
  const currentVideos = tvCategories[activeCategory];

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle video play to hide thumbnail
  const handleVideoPlay = (index) => {
    setVideoData(prev => ({
      ...prev,
      [index]: { ...prev[index], isPlaying: true }
    }));
  };

  // Handle video pause to show thumbnail
  const handleVideoPause = (index) => {
    setVideoData(prev => ({
      ...prev,
      [index]: { ...prev[index], isPlaying: false }
    }));
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
            <h1 className="text-7xl md:text-6xl lg:text-8xl text-primary font-bold font-galantic absolute left-[15%]">
              CPKL TV
            </h1>
          </div>
        </div>
      </section>
      
      {/* CPKL TV Header Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-main text-black-90 mb-6 md:mb-8">
              Your Official Kabaddi Streaming Hub
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-sub">
              Dive into the world of professional kabaddi with CPKL TV. Watch live matches, exclusive 
              interviews, behind-the-scenes content, and the most thrilling moments from the season.
            </p>
          </div>
        </div>
      </section>

      {/* Dropdown Button Section */}
      <section className="py-8 pt-0">
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
          {/* 3x3 Square Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentVideos.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200 aspect-square relative"
              >
                {/* Video Thumbnail */}
                {!videoData[index]?.isPlaying && (
                  <div className="absolute inset-0 z-10 cursor-pointer">
                    <img 
                      src={item.thumbnail} 
                      alt={`${activeCategory} Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                        <svg 
                          className="w-8 h-8 text-[#180444] ml-1" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Video Player */}
                <video 
                  src={item.video} 
                  className="w-full h-full object-cover"
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => handleVideoPlay(index)}
                  onPause={() => handleVideoPause(index)}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CpklTvPage