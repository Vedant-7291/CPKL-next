import Layout from '../components/Layout'
import BannerSection from '../components/BannerSection'

const PointsTablePage = () => {
  // Updated team data with new names and zero values
  const teams = [
    { position: 1, name: "MP Titans", played: 0, won: 0, lost: 0, scoreDiff: "+0", form: ["-", "-", "-", "-", "-"], points: 0 },
    { position: 2, name: "Haryana Heroes", played: 0, won: 0, lost: 0, scoreDiff: "+0", form: ["-", "-", "-", "-", "-"], points: 0 },
    { position: 3, name: "Gujarat Gladiators", played: 0, won: 0, lost: 0, scoreDiff: "+0", form: ["-", "-", "-", "-", "-"], points: 0 },
    { position: 4, name: "Dhakad Delhi", played: 0, won: 0, lost: 0, scoreDiff: "+0", form: ["-", "-", "-", "-", "-"], points: 0 },
    { position: 5, name: "Mumbai Monarchs", played: 0, won: 0, lost: 0, scoreDiff: "+0", form: ["-", "-", "-", "-", "-"], points: 0 },
    { position: 6, name: "Rajasthan Rebels", played: 0, won: 0, lost: 0, scoreDiff: "+0", form: ["-", "-", "-", "-", "-"], points: 0 },
    { position: 7, name: "Kolkata Kings", played: 0, won: 0, lost: 0, scoreDiff: "+0", form: ["-", "-", "-", "-", "-"], points: 0 },
    { position: 8, name: "Dabang UP", played: 0, won: 0, lost: 0, scoreDiff: "+0", form: ["-", "-", "-", "-", "-"], points: 0 }
  ];

  const getFormIcon = (result) => {
    if (result === "W") {
      return <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">W</div>;
    } else if (result === "L") {
      return <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">L</div>;
    } else {
      return <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold">-</div>;
    }
  };

  return (
    <Layout>
       <section className="relative w-full bg-white ">
  <div className="relative w-full h-[75vh] min-h-[500px]">
    <div 
      className="absolute inset-0 bg-no-repeat"
      style={{ 
        backgroundImage: "url('./assets/allpb.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center"
      }}
    ></div>
    
    {/* Content with left positioning */}
    <div className="absolute inset-0 z-10 flex items-center transform -translate-y-8">
      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-bold font-galantic absolute left-[20%]">
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

          {/* New Heading Line and CTA Button */}
          <div className="mt-12 mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#180444] mb-6">
              Who Rules the Court? Follow the Action Live.
            </h2>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              View Live Stats
            </button>
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