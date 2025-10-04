const TeamsSection = () => {
  // Team data with image paths
  const teams = [
    { id: 1, image: "./assets/logos/team-1.jpg" },
    { id: 2, image: "./assets/logos/team-2.jpg" },
    { id: 3, image: "./assets/logos/team-3.jpg" },
    { id: 4, image: "./assets/logos/team-4.jpg" },
    { id: 5, image: "./assets/logos/team-5.jpg" },
    { id: 6, image: "./assets/logos/team-6.jpg" },
    { id: 7, image: "./assets/logos/team-7.jpg" },
    { id: 8, image: "./assets/logos/team-8.jpg" }
  ];

  return (
    <section className="py-20">
      {/* Entire Section Inside Background */}
      <div className="relative py-16 bg-cover bg-center" style={{ backgroundImage: "url('./assets/team-bg.png')" }}>
        <div className="absolute "></div>
        
        {/* Section Heading - Now Inside the background */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-3xl md:text-4xl text-center text-black mb-4" style={{ fontFamily: 'var(--font-jaturat)' }}>
            Our Teams
          </h2>
          <div className="w-24 h-1 bg-secondary-light mx-auto"></div>
        </div>

        {/* Teams Cards */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-6 pb-4">
            {teams.map((team) => (
              <div key={team.id} className="flex-shrink-0 w-64 h-80 rounded-lg shadow-lg overflow-hidden">
                {/* Team Image Only */}
                <img 
                  src={team.image} 
                  alt={`Team ${team.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamsSection