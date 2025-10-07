'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Standing', href: '/standing' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Events', href: '/events' },
    { name: 'CPKL TV', href: '/cpkl-tv' },
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
          {/* Navigation Links */}
          <div className="flex items-center justify-between h-16">
            {/* Logo aligned to left corner */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <img 
                  src="./assets/Logo CPKL.png" 
                  alt="Logo" 
                  className="w-16 h-16 object-cover"
                />
              </div>
            </div>

            {/* Navigation Links with reduced spacing */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-1 ml-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-300 font-medium text-md px-2 py-1 rounded whitespace-nowrap ${
                    isActiveLink(link.href)
                      ? 'text-gray-300 font-semibold border-b-2 border-white'
                      : 'text-white hover:text-gray-300'
                  }`}
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Register Now CTA Button with padding */}
            <div className="hidden md:flex items-center ml-8">
              <a
                href="/registration"
                className="bg-white text-[#29066d] font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg whitespace-nowrap"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Register Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex-shrink-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 p-2"
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
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2 text-sm font-medium rounded ${
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
                    className="block px-3 py-2 text-sm font-medium bg-white text-[#29066d] rounded text-center font-semibold"
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