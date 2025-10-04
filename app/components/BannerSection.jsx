const BannerSection = () => {
  return (
    <section className="relative w-full bg-secondary-light">
      {/* Banner Container */}
      <div className="relative w-full h-[85vh] min-h-[500px] max-h-[800px]">
        {/* Background Image - Updated approach */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="./assets/Landing Site Banner.png" 
            alt="Sports World Banner"
            className="w-full h-full object-cover"
          />
        </div>
        
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
  )
}

export default BannerSection