const AboutMe = () => {
    return (
      <div  className="bg-gray-900">
        <h1 id="about" className="text-center text-white text-4xl font-bold py-4">About Me</h1>
        <div className="flex flex-col lg:flex-row gap-8 justify-center container mx-auto py-10 px-4">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl text-white font-bold">Who I Am?</h1>
            <p className="text-white text-lg py-6">
              I'm Jashim Uddin, a committed and enthusiastic coder. I'm always
              looking for new methods to improve my abilities, and I thrive on
              learning and accepting new technologies. As a coder, I have a strong
              desire to solve problems and a fast learning curve. My area of
              expertise is JavaScript, and I enjoy using its capabilities to create
              creative solutions.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 border-4 border-transparent rounded-lg hover:border border-gradient"></div>
            <img
              className="h-64 md:h-80 lg:h-96 w-full bg-teal-600 rounded-lg group-hover:scale-105 transition-transform duration-300"
              src="https://i.ibb.co/LRKJGBf/2150010129.jpg"
              alt="Jashim Uddin"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutMe;
  