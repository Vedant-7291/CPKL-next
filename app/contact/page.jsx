import Layout from '../components/Layout'
import BannerSection from '../components/BannerSection'

const ContactPage = () => {
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
        CONTACT US
      </h1>
    </div>
  </div>
</section>
      
      {/* Main Contact Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Big Center Div with 70vw width and split background */}
          <div className="w-full max-w-[70vw] mx-auto overflow-hidden mb-16 relative min-h-[600px]">
            
            {/* Background Sections */}
            <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-10">
              {/* Left Side - 60% Dark Background */}
              <div className="lg:col-span-6 bg-[#29066d]"></div>
              
              {/* Right Side - 40% Background Image with top-right border radius */}
              <div className="lg:col-span-4 bg-cover bg-center rounded-tr-[100px]" 
                   style={{ backgroundImage: "url('./assets/contact.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-tr-[100px]"></div>
              </div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 md:gap-8 lg:gap-10 h-full">
                
                {/* Left Side - Contact Information */}
                <div className="lg:col-span-5 text-white flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-main mb-4 text-white">
                    Contact Us
                  </h2>
                  <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed">
                    Get in touch with CPKL for any inquiries, partnerships, or information about 
                    upcoming tournaments and events.
                  </p>
                  
                  {/* Contact Details */}
                  <div className="space-y-4">
                    {/* Office Address */}
                    <div>
                      <h3 className="text-lg font-jaturat mb-2 text-white">Office Address</h3>
                      <p className="text-gray-200 text-xs md:text-sm">
                        CPKL Headquarters<br />
                        Sanganer, Jaipur<br />
                        Rajasthan, India
                      </p>
                    </div>
                    
                    {/* Training Fields */}
                    <div>
                      <h3 className="text-lg font-jaturat mb-2 text-white">Training Fields</h3>
                      <p className="text-gray-200 text-xs md:text-sm">
                        Raipur Sports Academy<br />
                        Bilaspur Stadium<br />
                        Durg Kabaddi Ground<br />
                        Rajnandgaon Arena
                      </p>
                    </div>
                    
                    {/* Contact Details */}
                    <div>
                      <h3 className="text-lg font-jaturat mb-2 text-white">Contact Details</h3>
                      <p className="text-gray-200 text-xs md:text-sm">
                        Phone: +91 86027 63069<br />
                        Phone: +91 86961 43069<br />
                        Email: info@canvisports.com
                      </p>
                    </div>
                    
                    {/* Social Media */}
                    <div>
                      <h3 className="text-lg font-jaturat mb-2 text-white">Social Media</h3>
                      <div className="flex space-x-3">
                        {/* Facebook */}
                        <a 
                          href="https://www.facebook.com/61580250114834/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer group"
                        >
                          <svg className="w-4 h-4 text-[#29066d] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        
                        {/* Twitter/X */}
                        <a 
                          href="https://x.com/cpkleague" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-black transition-colors cursor-pointer group"
                        >
                          <svg className="w-4 h-4 text-[#29066d] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                        
                        {/* LinkedIn */}
                        <a 
                          href="https://www.linkedin.com/company/cpkl-official" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer group"
                        >
                          <svg className="w-4 h-4 text-[#29066d] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        
                        {/* Instagram */}
                        <a 
                          href="https://www.instagram.com/cpklofficial" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer group"
                        >
                          <svg className="w-4 h-4 text-[#29066d] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C8.396 0 7.987.012 6.756.06 2.702.227.228 2.698.06 6.756.012 7.987 0 8.396 0 12.017c0 3.62.012 4.029.06 5.26.167 4.054 2.698 6.528 6.756 6.696 1.231.048 1.64.06 5.26.06 3.62 0 4.029-.012 5.26-.06 4.054-.167 6.528-2.698 6.696-6.756.048-1.231.06-1.64.06-5.26 0-3.62-.012-4.029-.06-5.26-.167-4.054-2.698-6.528-6.756-6.696C16.046.012 15.637 0 12.017 0zm0 2.16c3.203 0 3.585.012 4.804.06 3.252.15 4.77 1.69 4.92 4.92.048 1.219.06 1.6.06 4.804 0 3.204-.012 3.585-.06 4.804-.15 3.23-1.668 4.77-4.92 4.92-1.219.048-1.6.06-4.804.06-3.204 0-3.585-.012-4.804-.06-3.252-.15-4.77-1.69-4.92-4.92-.048-1.219-.06-1.6-.06-4.804 0-3.204.012-3.585.06-4.804.15-3.23 1.668-4.77 4.92-4.92 1.219-.048 1.6-.06 4.804-.06z"/>
                            <path d="M12.017 5.838a6.18 6.18 0 1 0 0 12.36 6.18 6.18 0 0 0 0-12.36zm0 10.18a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                            <circle cx="18.406" cy="5.594" r="1.44"/>
                          </svg>
                        </a>
                        
                        {/* YouTube */}
                        <a 
                          href="https://m.youtube.com/@Cpkl.official" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer group"
                        >
                          <svg className="w-4 h-4 text-[#29066d] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Contact Form (Spanning over both backgrounds) */}
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg w-full">
                    <h3 className="text-xl md:text-2xl font-jaturat text-[#29066d] mb-4 pb-3 border-b-2 border-gray-200">
                      Send a Message
                    </h3>
                    
                    <form className="space-y-4">
                      {/* First Name & Last Name - Side by Side */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all"
                            placeholder="Enter first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all"
                            placeholder="Enter last name"
                          />
                        </div>
                      </div>
                      
                      {/* Phone Number */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all"
                          placeholder="Enter phone number"
                        />
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all"
                          placeholder="Enter email address"
                        />
                      </div>
                      
                      {/* Message Textarea */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Message
                        </label>
                        <textarea 
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all resize-none"
                          placeholder="Type your message here..."
                        ></textarea>
                      </div>
                      
                      {/* Submit Button */}
                      <button 
                        type="submit"
                        className="w-full bg-[#29066d] text-white py-3 px-6 rounded-lg hover:bg-[#180444] transition-colors duration-300 font-semibold text-lg mt-2"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Maps Section */}
          <div className="w-full max-w-[70vw] mx-auto rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-300">
            <div className="h-64 md:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.78323487002!2d75.7677229759967!3d26.81246847670915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc91d4f3b7f7d%3A0x6e6542e2e1e3e3e3!2sSanganer%2C%20Jaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CPKL Headquarters Location - Sanganer, Jaipur"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="bg-[#29066d] text-white p-4 text-center">
              <p className="text-sm md:text-base font-semibold">
                CPKL Headquarters - Sanganer, Jaipur, Rajasthan, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage