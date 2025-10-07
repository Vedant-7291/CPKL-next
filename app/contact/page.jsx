import Layout from '../components/Layout'
import BannerSection from '../components/BannerSection'

const ContactPage = () => {
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
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-jaturat mb-4 text-white">
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
                        Sports Complex, Rajpur<br />
                        Raipur, Chhattisgarh - 492001<br />
                        India
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
                        Phone: +91 98765 43210<br />
                        Phone: +91 98765 43211<br />
                        Email: info@cpkl.com<br />
                        Email: support@cpkl.com
                      </p>
                    </div>
                    
                    {/* Social Media */}
                    <div>
                      <h3 className="text-lg font-jaturat mb-2 text-white">Social Media</h3>
                      <div className="flex space-x-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-secondary-light transition-colors cursor-pointer">
                          <span className="text-[#29066d] font-bold text-xs">FB</span>
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-secondary-light transition-colors cursor-pointer">
                          <span className="text-[#29066d] font-bold text-xs">TW</span>
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-secondary-light transition-colors cursor-pointer">
                          <span className="text-[#29066d] font-bold text-xs">IN</span>
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-secondary-light transition-colors cursor-pointer">
                          <span className="text-[#29066d] font-bold text-xs">IG</span>
                        </div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.39636648989!2d81.6292149759967!3d21.251780980376836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23d82c16d%3A0x4a5f3f5a1b2b3c4d!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CPKL Headquarters Location"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="bg-[#29066d] text-white p-4 text-center">
              <p className="text-sm md:text-base font-semibold">
                CPKL Headquarters - Sports Complex, Rajpur, Raipur, Chhattisgarh 492001
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage