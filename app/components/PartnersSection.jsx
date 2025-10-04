const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-jaturat text-black-90 text-center mb-12">Our Partners</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {[1, 2, 3, 4, 5, 6].map((partner) => (
            <div key={partner} className="flex items-center justify-center h-20 bg-gray-100 rounded-lg">
              <div className="text-gray-400 font-semibold">Partner {partner}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection