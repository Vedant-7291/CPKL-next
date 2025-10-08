'use client';
const PartnersSection = () => {
  // Partner data with image sources
  const broadcastingPartners = [
    { id: 1, name: "Broadcast Partner 1", logo: "/assets/partners/Official partner2.png" },
    { id: 2, name: "Broadcast Partner 2", logo: "/assets/partners/Official partner.png" }
  ];

  const otherPartners = [
    { id: 1, name: "League Organisers", logo: "/assets/partners/League organiser.png" },
    { id: 2, name: "Media & Marketing Partners", logo: "/assets/partners/media and marketing partner.png" },
    { id: 3, name: "Kit Partner", logo: "/assets/partners/kit partner.png" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black-90 text-center mb-12 font-main">Our Partners</h2>
        
        {/* Official Broadcasting Partners - 2 logos */}
        <div className="mb-16">
          <h3 className="text-xl text-gray-600 text-center mb-8">Official Broadcasting Partners</h3>
          <div className="flex flex-wrap justify-center gap-12">
            {broadcastingPartners.map((partner) => (
              <div key={partner.id} className="flex flex-col items-center">
                <div className="flex items-center justify-center h-32 w-48 mb-3">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-full w-full object-contain"
                  />
                </div>
               
              </div>
            ))}
          </div>
        </div>
        
        {/* Other Partners - 3 logos with individual titles */}
        <div>
          <div className="flex flex-wrap justify-center gap-12">
            {otherPartners.map((partner) => (
              <div key={partner.id} className="flex flex-col items-center">
                <div className="flex items-center justify-center h-32 w-48 mb-3">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h4 className="text-sm text-gray-600 text-center font-medium">
                  {partner.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection