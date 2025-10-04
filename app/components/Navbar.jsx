'use client'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

 const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Matches', href: '/matches' },
  { name: 'Teams', href: '/teams' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'News', href: '/news' },
  { name: 'Partners', href: '/partners' },
  { name: 'About', href: '/about' }, // Updated from 'About' to 'About'
  { name: 'Contact', href: '/contact' },
]
  const leftLinks = navLinks.slice(0, 4)
  const rightLinks = navLinks.slice(4)

  return (
    <>
      {/* Top Pattern - Full width outside the container */}
      <div className="w-full h-4 bg-repeat-x bg-cover" style={{ backgroundImage: "url('./assets/patternm.png')" }}></div>
      
      {/* Navbar with light purple background */}
      <div className="w-full bg-[#29066d] relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Links */}
          <div className="flex items-center justify-between h-16">
            {/* Left Links */}
            <div className="hidden md:flex items-center space-x-6">
              {leftLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-secondary-light transition-colors duration-300 font-medium text-md"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Empty space for logo - logo will be positioned absolutely below */}
            <div className="flex-shrink-0 w-16"></div>

            {/* Right Links */}
            <div className="hidden md:flex items-center space-x-6">
              {rightLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-secondary-light transition-colors duration-300 font-medium text-md"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-secondary-light"
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
                    className="text-white hover:text-secondary-light block px-3 py-2 text-sm font-medium"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Logo positioned between navbar and banner */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-50">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg ">
              <img 
                src="./assets/Logo CPKL.png" 
                alt="Logo" 
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar