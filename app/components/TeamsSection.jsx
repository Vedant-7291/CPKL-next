'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TeamsSection = () => {
  // Team data with image paths
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
  const itemsToShow = 3; // Number of team members to show at once

  // Auto carousel with 3 second interval
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Manual navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= teams.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  // Calculate the exact transform percentage
  const calculateTransform = () => {
    const cardWidthPercentage = 100 / itemsToShow;
    return currentIndex * cardWidthPercentage;
  };

  return (
    <section className="py-2">
      {/* Entire Section Inside Background */}
      <div className="relative py-16 bg-cover bg-center" style={{ backgroundImage: "url('./assets/team-bg.png')" }}>
        <div className="absolute "></div>
        
        {/* Section Heading - Now Inside the background */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-3xl md:text-4xl text-center text-black mb-4" style={{ fontFamily: 'var(--font-jaturat)' }}>
            Our Teams
          </h2>
          <div className="w-24 h-1 bg-secondary-light mx-auto"></div>
        </div>

        {/* Teams Cards with Auto Scroll */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden px-8">
            {/* Carousel Track */}
            <motion.div 
              className="flex gap-8"
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
                  className="flex-shrink-0 w-[calc(33.333%-21px)]" // 33.333% for 3 items
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-3 rounded-lg hover:shadow-xl transition-shadow duration-300 h-full mx-1 overflow-hidden">
                    <img 
                      src={team.image} 
                      alt={`Team ${team.id}`}
                      className="w-full h-96 object-cover rounded-md" // Increased to h-96 (24rem / 384px)
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hide scrollbar */}
          <style jsx>{`
            .overflow-hidden {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .overflow-hidden::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

export default TeamsSection