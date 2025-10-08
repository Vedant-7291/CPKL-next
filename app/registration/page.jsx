import Layout from '../components/Layout'
import BannerSection from '../components/BannerSection'

const RegistrationPage = () => {
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
      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-bold font-galantic absolute left-[20%]">
        REGISTRATION
      </h1>
    </div>
  </div>
</section>
      
      {/* Main Content Section */}
      <section className="py-4 pb-20">
        <div className="w-full mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-main text-black mb-3">
              Your Chance to Join the Big Stage.
            </h1>
            <p className="text-black text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-sub">
              The Canvi Premier Kabaddi League offers every athlete — from rural villages to city gyms — a chance to step up.
            </p>
          </div>

          {/* How to Register Section */}
          <div className="text-center mb-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-main text-black mb-4">
              How to Register:
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <ul className="text-left space-y-3 font-sub text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-black font-bold mr-3 mt-1">•</span>
                  <span>Fill out the online form with personal details.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-3 mt-1">•</span>
                  <span>Upload fitness & kabaddi credentials.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-3 mt-1">•</span>
                  <span>Attend state-level trials.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-3 mt-1">•</span>
                  <span>Get shortlisted for franchise selections.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Registration Container - Full Width Background */}
          <div className="w-full min-h-[85vh] bg-cover bg-center flex items-center justify-center p-4 pt-5" 
               style={{ backgroundImage: "url('./assets/coach.png')" }}>
            
            <div className="w-full max-w-[90vw] mx-auto py-8">
              {/* White Container with Button Inside */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-4 md:p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    
                    {/* Left Side - Registration Form */}
                    <div className="flex flex-col pt-6 pb-4">
                      <h2 className="text-xl md:text-2xl font-main text-[#29066d] mb-4 pb-2 border-b-2 border-gray-200">
                        Registration Form
                      </h2>
                      
                      <form className="space-y-3">
                        {/* First Name & Last Name - Side by Side */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 font-sub">
                              First Name *
                            </label>
                            <input 
                              type="text" 
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-xs font-sub"
                              placeholder="Enter first name"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 font-sub">
                              Last Name *
                            </label>
                            <input 
                              type="text" 
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-xs font-sub"
                              placeholder="Enter last name"
                              required
                            />
                          </div>
                        </div>
                        
                        {/* Father's Name - Full Width */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1 font-sub">
                            Father's Name *
                          </label>
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-xs font-sub"
                            placeholder="Enter father's name"
                            required
                          />
                        </div>
                        
                        {/* Email & Mobile - Side by Side */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 font-sub">
                              Email Address *
                            </label>
                            <input 
                              type="email" 
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-xs font-sub"
                              placeholder="Enter email address"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 font-sub">
                              Mobile Number *
                            </label>
                            <input 
                              type="tel" 
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-xs font-sub"
                              placeholder="Enter mobile number"
                              required
                            />
                          </div>
                        </div>
                        
                        {/* Select State */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1 font-sub">
                            Select State *
                          </label>
                          <select 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-xs font-sub"
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
                          <label className="block text-sm font-medium text-gray-700 mb-1 font-sub">
                            Select District *
                          </label>
                          <select 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29066d] focus:border-transparent transition-all text-xs font-sub"
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
                          <label className="block text-sm font-medium text-gray-700 mb-1 font-sub">
                            Attach Aadhar Card *
                          </label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 text-center hover:border-[#29066d] transition-colors cursor-pointer">
                            <div className="flex flex-col items-center justify-center">
                              <svg className="w-6 h-6 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                              <p className="text-xs text-gray-600 font-sub">
                                <span className="font-semibold text-[#29066d]">Click to upload</span>
                              </p>
                              <p className="text-xs text-gray-500 font-sub">Aadhar Card (MAX. 5MB)</p>
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
                        <div className="flex items-start space-x-2">
                          <input 
                            type="checkbox" 
                            id="terms"
                            className="mt-0.5 w-3 h-3 text-[#29066d] border-gray-300 rounded focus:ring-[#29066d]"
                            required
                          />
                          <label htmlFor="terms" className="text-xs text-gray-700 font-sub">
                            I agree to the <span className="text-[#29066d] font-semibold cursor-pointer hover:underline">Terms and Conditions</span>
                          </label>
                        </div>
                      </form>
                    </div>
                    
                    {/* Right Side - Full Height Image */}
                    <div className="hidden lg:flex flex-col pt-6 pb-4">
                      <div className="flex-1 bg-cover bg-center rounded-xl shadow-lg"
                           style={{ backgroundImage: "url('./assets/reg.png')" }}>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button - Inside White Div at Bottom Center */}
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <div className="text-center">
                    <button 
                      type="submit"
                      className="bg-[#29066d] text-white py-3 px-12 rounded-lg hover:bg-[#180444] transition-colors duration-300 font-semibold text-base shadow-lg transform hover:scale-105 transition-transform font-main"
                    >
                      Submit Registration Form
                    </button>
                  </div>
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