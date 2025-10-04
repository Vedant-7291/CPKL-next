const IconPlayerSection = () => {
  return (
    <section className="py-20 bg-[#180444]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <h2 className="text-4xl md:text-5xl font-jaturat mb-6 text-gray-800">
              Featured Player
            </h2>
            <p className="text-lg mb-6 text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
              Meet our star player who has been dominating the field with exceptional performance and sportsmanship. 
              With numerous awards and recognition, they continue to inspire the next generation of athletes.
            </p>
            <p className="text-lg mb-4 text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
              This season alone, they've achieved remarkable statistics including a 92% pass completion rate, 
              15 goals scored, and 12 assists across all competitions. Their leadership on and off the field 
              has been instrumental to the team's success.
            </p>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
              Beyond their athletic achievements, they actively participate in community outreach programs, 
              mentoring young athletes and promoting sports education in underserved communities.
            </p>
          </div>

          {/* Right Content - Large Player Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[30vw] h-[70vh] bg-gray-300 rounded-lg shadow-2xl overflow-hidden">
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