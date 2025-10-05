const IconPlayerSection = () => {
  return (
    <section className="py-16 bg-[#180444]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CPKL Icon Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-jaturat text-white font-bold">
            CPKL ICON
          </h2>
        </div>

        {/* Main White Container */}
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 lg:p-10 min-h-[500px] lg:min-h-[600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-jaturat mb-4 text-gray-800">
                Pradeep Narwal
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-jaturat mb-6 text-[#29066d]">
                - The Dubki King Returns
              </h3>
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-poppins">
                  Every sport has an icon who changes the way the game is played. For kabaddi, that icon is Pardeep Narwal. Known across the world as the Dubki King, Pardeep has not only broken records but has also redefined what it means to be a raider.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-poppins">
                  The roar just got louder. Pardeep Narwal will now bring his unmatched skill and superstar aura to the Canvi Premier Kabaddi League Season 2. Pardeep isn't just here to play. He's here to inspire the next generation, to prove that kabaddi is India's gift to the world, and to remind everyone why he is still the most feared raider of all time.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-poppins">
                  Now, he's ready to light up CPKL Season 2 in Dubai. Fans will see his fearless raids, iconic moves, and unmatched energy as he takes the mat with the league's best.
                </p>
              </div>
            </div>

            {/* Right Content - Larger Image */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="w-full max-w-[350px] lg:max-w-[450px] xl:max-w-[500px] h-[450px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden">
                <img 
                  src="./assets/icon.png" 
                  alt="Pradeep Narwal - The Dubki King" 
                  className="w-full h-full object-fill rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IconPlayerSection