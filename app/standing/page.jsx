import Layout from '../components/Layout'
import BannerSection from '../components/BannerSection'

const PointsTablePage = () => {
  // Sample team data
  const teams = [
    { position: 1, name: "Raipur Raiders", played: 7, won: 6, lost: 1, scoreDiff: "+45", form: ["W", "W", "L", "W", "W"], points: 12 },
    { position: 2, name: "Bilaspur Warriors", played: 7, won: 5, lost: 2, scoreDiff: "+32", form: ["W", "L", "W", "W", "W"], points: 10 },
    { position: 3, name: "Durg Defenders", played: 7, won: 5, lost: 2, scoreDiff: "+28", form: ["W", "W", "W", "L", "W"], points: 10 },
    { position: 4, name: "Rajnandgaon Royals", played: 7, won: 4, lost: 3, scoreDiff: "+18", form: ["L", "W", "W", "W", "L"], points: 8 },
    { position: 5, name: "Korba Kings", played: 7, won: 3, lost: 4, scoreDiff: "+5", form: ["W", "L", "L", "W", "W"], points: 6 },
    { position: 6, name: "Raigarh Riders", played: 7, won: 2, lost: 5, scoreDiff: "-12", form: ["L", "L", "W", "L", "W"], points: 4 },
    { position: 7, name: "Jagdalpur Jaguars", played: 7, won: 1, lost: 6, scoreDiff: "-25", form: ["L", "L", "L", "W", "L"], points: 2 },
    { position: 8, name: "Ambikapur Avengers", played: 7, won: 0, lost: 7, scoreDiff: "-91", form: ["L", "L", "L", "L", "L"], points: 0 }
  ];

  const getFormIcon = (result) => {
    if (result === "W") {
      return <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">W</div>;
    } else {
      return <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">L</div>;
    }
  };

  return (
    <Layout>
      <section className="relative w-full bg-white">
        {/* Banner Container */}
        <div className="relative w-full h-[75vh] min-h-[500px]">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('./assets/Pages Banner imp.png')"
            }}
          ></div>
          
          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary text-center font-bold" style={{ fontFamily: 'var(--font-jaturat)' }}>
              STANDINGS
            </h1>
            
          </div>
        </div>
      </section>
      
      {/* Points Table Header Section with Logo */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            {/* Logo Image */}
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-xl overflow-hidden">
              <img 
                src="./assets/logo CPKL.png" 
                alt="League Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Vertical Line */}
            <div className="h-32 bg-purple-600 w-1"></div>
            
            {/* Points Table Text */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-jaturat text-[#180444] mb-4">
                Points Table
              </h1>
              <p className="text-lg text-gray-600">
                Season 2024 Standings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Points Table Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-0 text-black text-sm md:text-base pb-2">
              {/* Position Column */}
              <div className="col-span-1 bg-gray-400 py-4 px-2 text-center rounded-tl-2xl">
                #
              </div>
              
              {/* Team Column */}
              <div className="col-span-3 bg-gray-400 py-4 px-4">
                TEAM
              </div>
              
              {/* P Column */}
              <div className="col-span-1 bg-gray-400 py-4 px-2 text-center">
                P
              </div>
              
              {/* W Column */}
              <div className="col-span-1 bg-gray-400 py-4 px-2 text-center">
                W
              </div>
              
              {/* L Column */}
              <div className="col-span-1 bg-gray-400 py-4 px-2 text-center">
                L
              </div>
              
              {/* Score Diff Column */}
              <div className="col-span-2 bg-gray-400 py-4 px-2 text-center">
                SCORE DIFF
              </div>
              
              {/* Form Column */}
              <div className="col-span-2 bg-gray-400 py-4 px-2 text-center">
                FORM
              </div>
              
              {/* Points Column */}
              <div className="col-span-1 bg-gray-400 py-4 px-2 text-center rounded-tr-2xl">
                PTS
              </div>
            </div>

            {/* Table Rows with White Gaps */}
            {teams.map((team, index) => (
              <div key={team.position}>
                {/* White Gap between rows */}
                {index > 0 && <div className="h-1 bg-white"></div>}
                
                {/* Team Row */}
                <div className={`grid grid-cols-12 gap-0 text-white text-sm md:text-base`}>
                  {/* Position */}
                  <div className="col-span-1 bg-[#180444] py-4 px-2 text-center font-bold border-r border-purple-800">
                    {team.position}
                  </div>
                  
                  {/* Team Name */}
                  <div className="col-span-3 bg-[#29066d] py-4 px-4 border-r border-purple-800 font-medium">
                    {team.name}
                  </div>
                  
                  {/* Played */}
                  <div className="col-span-1 bg-[#180444] py-4 px-2 text-center border-r border-purple-800">
                    {team.played}
                  </div>
                  
                  {/* Won */}
                  <div className="col-span-1 bg-[#180444] py-4 px-2 text-center border-r border-purple-800">
                    {team.won}
                  </div>
                  
                  {/* Lost */}
                  <div className="col-span-1 bg-[#180444] py-4 px-2 text-center border-r border-purple-800">
                    {team.lost}
                  </div>
                  
                  {/* Score Difference */}
                  <div className="col-span-2 bg-[#180444] py-4 px-2 text-center border-r border-purple-800 font-medium">
                    {team.scoreDiff}
                  </div>
                  
                  {/* Form */}
                  <div className="col-span-2 bg-[#180444] py-4 px-2 text-center border-r border-purple-800">
                    <div className="flex justify-center space-x-1">
                      {team.form.map((result, idx) => (
                        <div key={idx}>
                          {getFormIcon(result)}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Points */}
                  <div className="col-span-1 bg-[#180444] py-4 px-2 text-center font-bold">
                    {team.points}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PointsTablePage