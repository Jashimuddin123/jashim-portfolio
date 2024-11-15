const MyEducation = () => {
    return (
        <div id="education" className="py-10 px-4 bg-teal-800">
            <h1 className="text-center font-bold text-4xl text-white mb-8">My Education</h1> 
            
            {/* main container */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 max-w-6xl mx-auto">
                
                {/* experience content */}
                <div className="flex-1 space-y-6">
                    
                    {/* Experience card 1 */}
                    <div className="shadow-lg rounded-lg p-6 bg-teal-700 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h1 className="text-lg font-semibold text-white">Pursuing</h1>
                        <h2 className="text-2xl font-bold mt-2 text-white">
                            Bachelor Of Social  Science (B.SS)</h2>
                        <p className="text-white mt-2">
                            Chittagong University Collage
                        </p>
                    </div>
                    
                    {/* Experience card 2 */}
                    <div className="shadow-lg rounded-lg p-6 bg-teal-700 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h1 className="text-lg font-semibold text-white">2016 (Past)</h1>
                        <h2 className="text-2xl font-bold mt-2 text-white">
                        Higher Secondary Certificate (H.S.C)</h2>
                        <p className="text-white mt-2">
                            Imam Gazzali University Collage
                        </p>
                    
                    </div>
                    
                    {/* Experience card 3 */}
                    <div className="shadow-lg rounded-lg p-6 bg-teal-700 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h1 className="text-lg font-semibold text-white">2014 (Past)</h1>
                        <h2 className="text-2xl font-bold mt-2 text-white">
                        Secondary School Certificate (S.S.C)</h2>
                        <p className="text-white mt-2">
                           Cuet Engeniring University School & Collage
                        </p>
                    </div>
                </div>

                {/* image content */}
                <div className="flex-1 flex items-center justify-center">
                    <img 
                        src="https://i.ibb.co/4YSCyP3/learning.png" 
                        alt="Learning" 
                        className="w-full h-[500px] bg-white max-w-xs md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default MyEducation;
