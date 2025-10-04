import Layout from '../components/Layout'
import BannerSection from '../components/BannerSection'

const RegistrationPage = () => {
  return (
    <Layout>
       <section className="relative w-full bg-secondary-light">
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
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary text-center" style={{ fontFamily: 'var(--font-jaturat)' }}>
            Welcome to Sports World
          </h1>
          <p className="text-primary text-base md:text-lg lg:text-xl mt-4 text-center max-w-2xl" style={{ fontFamily: 'var(--font-poppins)' }}>
            Experience the thrill of sports like never before
          </p>
        </div>
      </div>
    </section>
      
      {/* Main Content Section */}
      <section className="py-8 bg-gray-50">
        <div className="w-full mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-jaturat text-[#29066d] mb-4">
              CPKL Season
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Join the exciting world of professional kabaddi by registering for the upcoming CPKL season. 
              Showcase your skills and become part of India's premier kabaddi league.
            </p>
          </div>

          {/* Main Registration Container - Full Width Background with Fixed Height */}
          <div className="w-full h-[95vh] bg-cover bg-center flex items-center justify-center p-8" 
               style={{ backgroundImage: "url('./assets/coach.png')" }}>
            
            {/* Centered White Container with Increased Width - No Scroll */}
            <div className="w-full max-w-[85vw] h-[80vh] mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              <div className="p-6 md:p-8 flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 h-full">
                  
                  {/* Left Side - Registration Form */}
                  <div className="flex flex-col h-full">
                    <h2 className="text-2xl md:text-3xl font-jaturat text-[#29066d] mb-4 pb-3 border-b-2 border-gray-200">
                      Registration Form
                    </h2>
                    
                    <form className="space-y-3 flex-1">
                      {/* First Name & Last Name - Side by Side */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            First Name *
                          </label>
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-sm"
                            placeholder="Enter first name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Last Name *
                          </label>
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-sm"
                            placeholder="Enter last name"
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Father's Name - Full Width */}
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Father's Name *
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-sm"
                          placeholder="Enter father's name"
                          required
                        />
                      </div>
                      
                      {/* Email & Mobile - Side by Side */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input 
                            type="email" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-sm"
                            placeholder="Enter email address"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Mobile Number *
                          </label>
                          <input 
                            type="tel" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-sm"
                            placeholder="Enter mobile number"
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Select State */}
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Select State *
                        </label>
                        <select 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-sm"
                          required
                        >
                          <option value="">Choose your state</option>
                          <option value="chhattisgarh">Chhattisgarh</option>
                          <option value="madhya-pradesh">Madhya Pradesh</option>
                          <option value="maharashtra">Maharashtra</option>
                          <option value="odisha">Odisha</option>
                          <option value="jharkhand">Jharkhand</option>
                          <option value="bihar">Bihar</option>
                          <option value="uttar-pradesh">Uttar Pradesh</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      {/* Select District */}
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Select District *
                        </label>
                        <select 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-sm"
                          required
                        >
                          <option value="">Choose your district</option>
                          <option value="raipur">Raipur</option>
                          <option value="bilaspur">Bilaspur</option>
                          <option value="durg">Durg</option>
                          <option value="rajnandgaon">Rajnandgaon</option>
                          <option value="korba">Korba</option>
                          <option value="raigarh">Raigarh</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      {/* Aadhar Card Upload */}
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Attach Aadhar Card *
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 text-center hover:border-[#29066d] transition-colors cursor-pointer">
                          <div className="flex flex-col items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="text-xs text-gray-600">
                              <span className="font-semibold text-[#29066d]">Click to upload</span>
                            </p>
                            <p className="text-xs text-gray-500">Aadhar Card (MAX. 5MB)</p>
                          </div>
                          <input 
                            type="file" 
                            className="hidden" 
                            accept=".pdf,.jpg,.jpeg,.png"
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Terms and Conditions */}
                      <div className="flex items-start space-x-2 pt-1">
                        <input 
                          type="checkbox" 
                          id="terms"
                          className="mt-0.5 w-3 h-3 text-[#29066d] border-gray-300 rounded focus:ring-[#29066d]"
                          required
                        />
                        <label htmlFor="terms" className="text-xs text-gray-700">
                          I agree to the <span className="text-[#29066d] font-semibold cursor-pointer hover:underline">Terms and Conditions</span>
                        </label>
                      </div>
                    </form>
                  </div>
                  
                  {/* Right Side - Image */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="w-full h-full bg-cover bg-center rounded-xl shadow-lg"
                         style={{ backgroundImage: "url('./assets/1.jpg')" }}>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button - Bottom Center of White Div */}
              <div className="p-6 border-t border-gray-200">
                <div className="text-center">
                  <button 
                    type="submit"
                    className="bg-[#29066d] text-white py-3 px-12 rounded-lg hover:bg-[#180444] duration-300 font-semibold text-base shadow-lg transform hover:scale-105 transition-transform"
                  >
                    Submit Registration Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RegistrationPage