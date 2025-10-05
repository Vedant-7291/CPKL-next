const IconPlayerSection = () => {
  return (
    <section className="py-16 bg-[#180444]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Content - Taller white background */}
          <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[500px] lg:min-h-[600px]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-jaturat mb-6 text-gray-800">
              Featured Player
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                Meet our star player who has been dominating the field with exceptional performance and sportsmanship. 
                With numerous awards and recognition, they continue to inspire the next generation of athletes.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                This season alone, they've achieved remarkable statistics including a 92% pass completion rate, 
                15 goals scored, and 12 assists across all competitions. Their leadership on and off the field 
                has been instrumental to the team's success.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                Beyond their athletic achievements, they actively participate in community outreach programs, 
                mentoring young athletes and promoting sports education in underserved communities.
              </p>
            </div>
          </div>

          {/* Right Content - Responsive Player Picture */}
          <div className="flex justify-center lg:justify-end items-stretch">
            <div className="w-full max-w-md lg:max-w-none lg:w-[35vw] h-[400px] md:h-[500px] lg:h-[70vh] max-h-[600px] bg-gray-300 rounded-lg shadow-2xl overflow-hidden">
              <img 
                src="./assets/1.png" 
                alt="Featured Player" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IconPlayerSection