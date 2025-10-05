// NewsSection.jsx
const NewsSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{ 
      backgroundImage: "url('./assets/landing site Latest news section bg.png')",
      minHeight: '80vh',
      backgroundSize: '100% 100%', // Stretches to fill exactly
      backgroundPosition: 'center center'
    }}>
      <div className="absolute inset-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-jaturat text-primary text-center mb-8">Latest News</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[1, 2, 3].map((news) => (
            <div key={news} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* News card with background image and content positioned at bottom */}
              <div 
                className="h-80 bg-cover bg-center bg-no-repeat w-full relative p-6 flex flex-col justify-end" 
                style={{ 
                  backgroundImage: "url('./assets/News img.png')",
                  backgroundSize: '100% 100%', // Apply same approach to news cards
                  backgroundPosition: 'center center'
                }}
              >
                {/* Content positioned at bottom without background */}
                <div className="text-white">
                  <h3 className="text-xl font-jaturat mb-2 text-white">News Title {news}</h3>
                  <p className="text-sm">
                    Latest updates and news from the sports world. Stay informed with our comprehensive coverage.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-primary text-secondary-dark px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold">
            View More News
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection