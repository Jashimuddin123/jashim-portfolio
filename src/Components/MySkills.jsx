const MySkills = () => {
  return (
      <div id="skills" className="mx-auto w-full px-4 md:px-8">
          <h1 className="text-center font-bold text-4xl text-white my-6">My Skills</h1>

          {/* icons div */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-4">
              <div className="relative w-full h-40 border bg-teal-700 text-center p-4 rounded shadow-2xl overflow-hidden hover:border-violet-700 hover:border-4 hover:scale-105 transform transition-transform duration-300">
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                      className="w-20 mx-auto mb-2 relative z-10"
                      src="https://i.ibb.co/PhYRWCK/html-removebg-preview.webp"
                      alt="HTML"
                  />
                  <h1 className="text-white font-semibold relative z-10">HTML</h1>
              </div>

              {/* CSS */}
              <div className="relative w-full h-40 border bg-teal-700 text-center p-4 rounded shadow-2xl overflow-hidden hover:border-violet-700 hover:border-4 hover:scale-105 transform transition-transform duration-300">
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                      className="w-20 mx-auto mb-2 relative z-10"
                      src="https://i.ibb.co/hgSHHnV/css.webp"
                      alt="CSS"
                  />
                  <h1 className="text-white font-semibold relative z-10">CSS</h1>
              </div>

              {/* Bootstrap */}
              <div className="relative w-full h-40 border bg-teal-700 text-center p-4 rounded shadow-2xl overflow-hidden hover:border-violet-700 hover:border-4 hover:scale-105 transform transition-transform duration-300">
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                      className="w-20 mx-auto mb-2 relative z-10"
                      src="https://i.ibb.co/Q83nQd6/800px-Bootstrap-logo.png"
                      alt="Bootstrap"
                  />
                  <h1 className="text-white font-semibold relative z-10">Bootstrap</h1>
              </div>

              {/* JavaScript */}
              <div className="relative w-full h-40 border bg-teal-700 text-center p-4 rounded shadow-2xl overflow-hidden hover:border-violet-700 hover:border-4 hover:scale-105 transform transition-transform duration-300">
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                      className="w-20 mx-auto mb-2 relative z-10"
                      src="https://i.ibb.co/gSyKmrW/Java-Script-logo.png"
                      alt="JavaScript"
                  />
                  <h1 className="text-white font-semibold relative z-10">JavaScript</h1>
              </div>

              {/* React */}
              <div className="relative w-full h-40 border bg-teal-700 text-center p-4 rounded shadow-2xl overflow-hidden hover:border-violet-700 hover:border-4 hover:scale-105 transform transition-transform duration-300">
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                      className="w-20 mx-auto mb-2 relative z-10"
                      src="https://i.ibb.co/fqPkcVk/react-removebg-preview.webp"
                      alt="React"
                  />
                  <h1 className="text-white font-semibold relative z-10">React</h1>
              </div>

              {/* Tailwind CSS */}
              <div className="relative w-full h-40 border bg-teal-700 text-center p-4 rounded shadow-2xl overflow-hidden hover:border-violet-700 hover:border-4 hover:scale-105 transform transition-transform duration-300">
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                      className="w-20 mx-auto mb-2 relative z-10"
                      src="https://i.ibb.co/dMSs8z2/tailwind-removebg-preview.png"
                      alt="Tailwind CSS"
                  />
                  <h1 className="text-white font-semibold relative z-10">Tailwind CSS</h1>
              </div>

              {/* Next.js */}
              <div className="relative w-full h-40 border bg-teal-700 text-center p-4 rounded shadow-2xl overflow-hidden hover:border-violet-700 hover:border-4 hover:scale-105 transform transition-transform duration-300">
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                      className="w-20 mx-auto mb-2 relative z-10"
                      src="https://i.ibb.co/7JBv84n/nsxt2-removebg-preview.webp"
                      alt="Next.js"
                  />
                  <h1 className="text-white font-semibold relative z-10">Next.js</h1>
              </div>

              {/* MongoDB */}
              <div className="relative w-full h-40 border bg-teal-700 text-center p-4 rounded shadow-2xl overflow-hidden hover:border-violet-700 hover:border-4 hover:scale-105 transform transition-transform duration-300">
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                      className="w-20 mx-auto mb-2 relative z-10"
                      src="https://i.ibb.co/4sJkbzs/mongo-DB-removebg-preview.webp"
                      alt="MongoDB"
                  />
                  <h1 className="text-white font-semibold relative z-10">MongoDB</h1>
              </div>

              {/* Figma */}
              <div className="relative w-full h-40 border bg-teal-700 text-center p-4 rounded shadow-2xl overflow-hidden hover:border-violet-700 hover:border-4 hover:scale-105 transform transition-transform duration-300">
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                      className="w-20 mx-auto mb-2 relative z-10"
                      src="https://i.ibb.co/z5vv9rz/figma.webp"
                      alt="Figma"
                  />
                  <h1 className="text-white font-semibold relative z-10">Figma</h1>
              </div>

              {/* Git */}
              <div className="relative w-full h-40 border bg-teal-700 text-center p-4 rounded shadow-2xl overflow-hidden hover:border-violet-700 hover:border-4 hover:scale-105 transform transition-transform duration-300">
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                      className="w-20 mx-auto mb-2 relative z-10"
                      src="https://i.ibb.co/KLGbsPJ/git-removebg-preview.webp"
                      alt="Git"
                  />
                  <h1 className="text-white font-semibold relative z-10">Git</h1>
              </div>

              {/* GitHub */}
              <div className="relative w-full h-40 border bg-teal-700 text-center p-4 rounded shadow-2xl overflow-hidden hover:border-violet-700 hover:border-4 hover:scale-105 transform transition-transform duration-300">
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                      className="w-20 mx-auto mb-2 relative z-10"
                      src="https://i.ibb.co/gFwQ2DV/github.webp"
                      alt="GitHub"
                  />
                  <h1 className="text-white font-semibold relative z-10">GitHub</h1>
              </div>

              {/* Firebase */}
              <div className="relative w-full h-40 border bg-teal-700 text-center p-4 rounded shadow-2xl overflow-hidden hover:border-violet-700 hover:border-4 hover:scale-105 transform transition-transform duration-300">
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                      className="w-20 mx-auto mb-2 relative z-10"
                      src="https://i.ibb.co/thZxmSZ/firebase.jpg"
                      alt="Firebase"
                  />
                  <h1 className="text-white font-semibold relative z-10">Firebase</h1>
              </div>
          </div>
      </div>
  );
};

export default MySkills;
