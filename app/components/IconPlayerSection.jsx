const IconPlayerSection = () => {
  return (
    <section className="py-20 bg-[#180444]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-jaturat mb-6 text-white">
              Featured Player
            </h2>
            <p className="text-lg mb-8 text-gray-200" style={{ fontFamily: 'var(--font-poppins)' }}>
              Meet our star player who has been dominating the field with exceptional performance and sportsmanship. 
              With numerous awards and recognition, they continue to inspire the next generation of athletes.
            </p>
            
            
            
           
          </div>

          {/* Right Content - Large Player Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-96 bg-gray-300 rounded-lg shadow-2xl overflow-hidden">
              <img 
                src="./assets/player-image.png" 
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