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
    { name: 'Contact', href: '/contact' },
  ]

  const leftLinks = navLinks.slice(0, 4)
  const rightLinks = navLinks.slice(4)

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
      {/* Top Pattern - Full width outside the container */}
      <div className="w-full h-4 bg-repeat-x bg-cover" style={{ backgroundImage: "url('./assets/patternm.png')" }}></div>
      
      {/* Navbar with light purple background */}
      <div className="w-full bg-[#29066d] relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Links */}
          <div className="flex items-center justify-between h-16">
            {/* Left Links */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {leftLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-300 font-medium text-md px-2 py-1 rounded ${
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

            {/* Empty space for logo - logo will be positioned absolutely below */}
            <div className="flex-shrink-0 w-16"></div>

            {/* Right Links */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {rightLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-300 font-medium text-md px-2 py-1 rounded ${
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

            {/* Mobile menu button */}
            <div className="md:hidden">
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
              </div>
            </div>
          )}

          {/* Logo positioned between navbar and banner */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-50">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
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