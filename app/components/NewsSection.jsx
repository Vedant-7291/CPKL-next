// NewsSection.jsx
const NewsSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{ 
      backgroundImage: "url('./assets/landing site Latest news section bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        {/* Heading with equal spacing */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-main text-primary text-center">
            Latest News
          </h2>
        </div>
        
        {/* News Cards Grid with equal gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
          {[1, 2, 3].map((news) => (
            <div key={news} className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center bg-no-repeat w-full relative p-6 flex flex-col justify-end" 
                style={{ 
                  backgroundImage: "url('./assets/News img.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center'
                }}
              >
                <div className="text-white bg-gradient-to-t from-black/70 to-transparent p-4 rounded-lg">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-jaturat mb-2 text-white">
                    News Title {news}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                    Latest updates and news from the sports world. Stay informed with our comprehensive coverage.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Button with equal spacing */}
        <div className="text-center">
          <button className="bg-primary text-secondary-dark px-8 py-3 md:px-10 md:py-4 lg:px-6 lg:py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-base md:text-lg lg:text-xl shadow-lg hover:shadow-xl transform hover:scale-105">
            View More News
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;