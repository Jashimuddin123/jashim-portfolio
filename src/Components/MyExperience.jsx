const MyExperience = () => {
    return (
        <div id="experience" className="px-4 py-10">
            <h1 className="text-center text-white text-4xl font-bold mb-8">My Experience</h1>
            
            {/* Main container */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                
                {/* Image container */}
                <div className="flex-1">
                    <img 
                        src="https://i.ibb.co/LRKJGBf/2150010129.jpg" 
                        alt="Experience Image" 
                        className="w-full h-[650px] object-cover rounded-lg shadow-lg " 
                    />
                </div>

                {/* Content container */}
                <div className="flex-1 space-y-6">
                    
                    {/* Experience card 1 */}
                    <div className="relative p-1 rounded-lg overflow-hidden group">
      <div className="absolute -inset-10  bg-gradient-to-r from-red-400 via-blue-800
       to-purple-800 rounded-lg blur-sm opacity-10 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-border"></div>
      <div className="relative z-20 shadow-lg rounded-lg p-6 bg-teal-700">
        <h1 className="text-lg font-semibold text-white">Jun 2023 - Present</h1>
        <h2 className="text-2xl text-white font-bold mt-2">Front End Developer</h2>
        <p className="text-white mt-2">
          I am employed as a MERN Stack Developer at ASAIN IT INC, where I specialize in building applications using TypeScript, React, Redux, NextJS, MongoDB, Express.js, & Node.js.
        </p>
      </div>
    </div>


                    
<div className="relative p-1 rounded-lg overflow-hidden group">
      <div className="absolute -inset-10  bg-gradient-to-r from-red-400 via-blue-800
       to-purple-800 rounded-lg blur-sm opacity-10 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-border"></div>
      <div className="relative z-20 shadow-lg rounded-lg p-6 bg-teal-700">
        <h1 className="text-lg font-semibold text-white">Jun 2023 - Present</h1>
        <h2 className="text-2xl text-white font-bold mt-2">Backend Fundamental</h2>
        <p className="text-white mt-2">
          I am employed as a MERN Stack Developer at ASAIN IT INC, where I specialize in building applications using TypeScript, React, Redux, NextJS, MongoDB, Express.js, & Node.js.
        </p>
      </div>
    </div>
                    
    <div className="relative p-1 rounded-lg overflow-hidden group">
      <div className="absolute -inset-10  bg-gradient-to-r from-red-400 via-blue-800
       to-purple-800 rounded-lg blur-sm opacity-10 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-border"></div>
      <div className="relative z-20 shadow-lg rounded-lg p-6 bg-teal-700">
        <h1 className="text-lg font-semibold text-white">Jun 2023 - Present</h1>
        <h2 className="text-2xl text-white font-bold mt-2">React Developer</h2>
        <p className="text-white mt-2">
          I am employed as a MERN Stack Developer at ASAIN IT INC, where I specialize in building applications using TypeScript, React, Redux, NextJS, MongoDB, Express.js, & Node.js.
        </p>
      </div>
    </div>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default MyExperience;
