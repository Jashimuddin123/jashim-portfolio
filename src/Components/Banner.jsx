const Banner = () => {
  return (
      <div className="hero bg-teal-800 text-white min-h-screen px-4 md:px-8 lg:px-12">
          <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:justify-around">
              <img
                  src="https://i.ibb.co.com/h1gGCfB/Whats-App-Image-2024-11-14-at-14-31-38-c48e7683.jpg"
                  className="w-72 md:w-96 lg:max-w-sm rounded-lg shadow-2xl bg-black"
                  alt="Jashim Uddin"
              />
              <div className="text-center lg:text-left mt-6 lg:mt-0">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                      This is Jashim Uddin.
                  </h1>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                      I am a Professional Web Developer.
                  </h1>
                  <p className="py-4 text-sm md:text-base lg:text-lg">
                      With a keen eye for design and expertise in front-end development, I strive to
                      create visually appealing and intuitive digital experiences focused on crafting
                      clean & user-friendly experiences. Driven by a passion for user-centric design,
                      my aim is to craft websites and applications that not only look great but also
                      provide seamless and enjoyable interactions. Attention to detail is at the core
                      of my work. I strive for pixel-perfect designs and meticulously crafted code to
                      ensure the highest level of quality in every project.
                  </p>
                  <button className="btn btn-primary px-6 py-2 text-sm md:text-base">
                      Download My CV
                  </button>
              </div>
          </div>
      </div>
  );
};

export default Banner;
