'use client';
import Layout from '../components/Layout';

const MatchSchedulePage = () => {
  const matches = [
    {
      id: 1,
      team1: { name: 'Team Raiders', logo: './assets/logo CPKL.png' },
      team2: { name: 'Team Warriors', logo: './assets/logo CPKL.png' },
      date: 'Monday - 30 Oct',
      time: '6:00 PM',
      stadium: 'Raipur Stadium'
    },
    {
      id: 2,
      team1: { name: 'Team Titans', logo: './assets/logo CPKL.png' },
      team2: { name: 'Team Champions', logo: './assets/logo CPKL.png' },
      date: 'Tuesday - 31 Oct',
      time: '7:30 PM',
      stadium: 'Bhilai Arena'
    },
    {
      id: 3,
      team1: { name: 'Team Vikings', logo: './assets/logo CPKL.png' },
      team2: { name: 'Team Spartans', logo: './assets/logo CPKL.png' },
      date: 'Wednesday - 1 Nov',
      time: '5:00 PM',
      stadium: 'Durg Sports Complex'
    },
    {
      id: 4,
      team1: { name: 'Team Phoenix', logo: './assets/logo CPKL.png' },
      team2: { name: 'Team Dragons', logo: './assets/logo CPKL.png' },
      date: 'Thursday - 2 Nov',
      time: '8:00 PM',
      stadium: 'Naya Raipur Stadium'
    }
  ];

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
          
          {/* Overlay */}
          <div className="absolute "></div>
          
          {/* Content - Shifted upwards */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 transform -translate-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary text-center font-bold font-galantic">
              SCHEDULE
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jaturat text-black-90 mb-6 md:mb-8">
              Match Schedule
            </h1>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {matches.map((match) => (
              <div key={match.id} className="relative">
                {/* White gap between cards */}
                <div className="h-4 bg-white"></div>
                
                {/* Match card */}
                <div className="bg-[#29066d] rounded-t-[20px] shadow-2xl overflow-hidden border-2 border-[#180444]">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                      <div className="flex items-center space-x-4 md:space-x-8 mb-6 lg:mb-0">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 md:w-20 md:h-20  rounded-full flex items-center justify-center border-[#180444] mb-2">
                            <img 
                              src={match.team1.logo} 
                              alt={match.team1.name}
                              className="w-16 h-16 md:w-16 md:h-16 object-contain"
                            />
                          </div>
                          <span className="text-white font-bold text-sm md:text-base text-center">
                            {match.team1.name}
                          </span>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="bg-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-2 border-[#180444]">
                            <span className="text-[#180444] font-extrabold text-lg md:text-xl">
                              VS
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 md:w-20 md:h-20  rounded-full flex items-center justify-center border-[#180444] mb-2">
                            <img 
                              src={match.team2.logo} 
                              alt={match.team2.name}
                              className="w-16 h-16 md:w-16 md:h-16 object-contain"
                            />
                          </div>
                          <span className="text-white font-bold text-sm md:text-base text-center">
                            {match.team2.name}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center lg:items-end">
                        <div className="text-white font-semibold text-lg md:text-xl mb-4 text-center lg:text-right">
                          {match.date}
                        </div>
                        
                        <div className="flex flex-col items-center lg:items-end">
                          <div className="text-white font-bold text-xl md:text-2xl mb-2">
                            {match.time}
                          </div>
                          <div className="text-white font-semibold text-lg md:text-xl">
                            {match.stadium}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MatchSchedulePage;