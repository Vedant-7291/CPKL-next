'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const leftLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Standing', href: '/standing' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Gallery', href: '/gallery' },
  ]

  const rightLinks = [
    { name: 'Blog', href: '/blogs' },
    { name: 'Events', href: '/events' },
    { name: 'CPKL TV', href: '/cpkltv' },
    { name: 'Contact', href: '/contact' },
  ]

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActiveLink = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Continuous Running Line - Fixed version */}
      <div className="bg-[#29066d] py-2 overflow-hidden relative">
        <div className="marquee-wrapper">
          <div className="marquee-content whitespace-nowrap text-white font-sub text-sm md:text-base">
            CPKL Season 2 • Dubai mein bajega Kabaddi ka danka! • The roar of kabaddi goes global! • 8 powerhouse teams • Legendary icons like Pardeep Narwal • Fresh rising stars • Kabaddi like the world has never seen before • 
          </div>
        </div>
      </div>

      {/* Top Pattern - Full width outside the container */}
      <div className="w-full h-4 bg-repeat-x bg-cover" style={{ backgroundImage: "url('./assets/patternm.png')" }}></div>
      
      {/* Navbar with light purple background */}
      <div className="w-full bg-[#29066d] relative z-40 mb-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Links - 6 items with optimized spacing */}
            <div className="hidden md:flex items-center space-x-5 lg:space-x-6 flex-1">
              {leftLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-all duration-300 font-medium text-md px-2 py-1 rounded whitespace-nowrap ${
                    isActiveLink(link.href)
                      ? 'text-gray-300 font-semibold border-b-2 border-white'
                      : 'text-white hover:text-gray-300 hover:scale-105'
                  }`}
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Centered Logo with balanced spacing */}
            <div className="flex-shrink-0 mx-6 lg:mx-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                <img 
                  src="./assets/Logo CPKL.png" 
                  alt="Logo" 
                  className="w-16 h-16 object-cover"
                />
              </div>
            </div>

            {/* Right Links - 4 items with optimized spacing */}
            <div className="hidden md:flex items-center space-x-5 lg:space-x-6 flex-1 justify-end">
              {rightLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-all duration-300 font-medium text-md px-2 py-1 rounded whitespace-nowrap ${
                    isActiveLink(link.href)
                      ? 'text-gray-300 font-semibold border-b-2 border-white'
                      : 'text-white hover:text-gray-300 hover:scale-105'
                  }`}
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {link.name}
                </a>
              ))}

              {/* Register Now CTA Button with proper spacing */}
              <div className="ml-6 lg:ml-8">
                <a
                  href="/registration"
                  className="bg-gradient-to-r from-white to-gray-200 text-[#29066d] font-bold px-5 py-2.5 rounded-lg hover:from-gray-200 hover:to-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  Register Now
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex-shrink-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 p-2 transition-colors duration-300"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden pb-4">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#29066d] border-t border-gray-600">
                {/* All links in mobile view */}
                {[...leftLinks, ...rightLinks].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2 text-sm font-medium rounded transition-all duration-300 ${
                      isActiveLink(link.href)
                        ? 'text-white bg-white bg-opacity-10 font-semibold border-l-4 border-white'
                        : 'text-white hover:text-gray-300 hover:bg-white hover:bg-opacity-5'
                    }`}
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Register Now in mobile menu */}
                <div className="border-t border-gray-600 pt-2 mt-2">
                  <a
                    href="/registration"
                    className="block px-3 py-3 text-sm font-medium bg-gradient-to-r from-white to-gray-200 text-[#29066d] rounded text-center font-bold hover:from-gray-200 hover:to-white transition-all duration-300"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .marquee-content {
          display: inline-block;
          animation: marquee 30s linear infinite;
          padding-left: 100%;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  )
}

export default Navbar