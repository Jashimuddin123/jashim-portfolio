const MyService = () => {
  return (
      <div className="bg-gray-800 p-4">
          <h1 className="text-center font-bold text-2xl md:text-4xl my-6 text-white">
              My Services
          </h1>
          {/* Main card container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {/* Card 1 */}
              <div>
                  <div className="card card-compact bg-teal-700 w-full sm:w-72 lg:w-96 h-full shadow-xl">
                      <figure>
                          <img
                              src="https://i.ibb.co.com/LNCpyJs/120436-1.jpg"
                              alt="Custom Website Development"
                              className="w-full h-48 object-cover"
                          />
                      </figure>
                      <div className="card-body">
                          <h2 className="card-title text-white text-lg md:text-xl">
                              Custom Website Development
                          </h2>
                          <p className="text-white text-sm md:text-base">
                              I specialize in delivering exceptional custom website development with MERN stack services tailored to your unique business needs. Trust me to transform your vision into a fully functional, visually captivating online presence that drives results and boosts your online success.
                          </p>
                      </div>
                  </div>
              </div>
              {/* Card 2 */}
              <div>
                  <div className="card card-compact bg-teal-700 w-full sm:w-72 lg:w-96 h-full shadow-xl">
                      <figure>
                          <img
                              src="https://i.ibb.co.com/qnMknWv/rb-61196.png"
                              alt="Responsive Web Design"
                              className="w-full h-48 object-cover"
                          />
                      </figure>
                      <div className="card-body">
                          <h2 className="card-title text-white text-lg md:text-xl">
                              Responsive Web Design
                          </h2>
                          <p className="text-white text-sm md:text-base">
                              Responsive web design is the key to reaching and engaging users across multiple devices. With my expertise, your website will shine on desktops, tablets, and mobile devices, enhancing user satisfaction and maximizing your online impact.
                          </p>
                      </div>
                  </div>
              </div>
              {/* Card 3 */}
              <div>
                  <div className="card card-compact bg-teal-700 w-full sm:w-72 lg:w-96 h-full shadow-xl">
                      <figure>
                          <img
                              src="https://i.ibb.co.com/LNCpyJs/120436-1.jpg"
                              alt="React Performance Optimization"
                              className="w-full h-48 object-cover"
                          />
                      </figure>
                      <div className="card-body">
                          <h2 className="card-title text-white text-lg md:text-xl">
                              React Performance Optimization
                          </h2>
                          <p className="text-white text-sm md:text-base">
                              Unlocking the Full Potential of React: Accelerating Performance and Efficiency through Expert Optimization Techniques. I ensure that your website not only looks great but also performs flawlessly across all devices.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default MyService;
