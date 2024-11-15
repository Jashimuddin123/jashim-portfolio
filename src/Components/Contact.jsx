
const Contact = () => {
    return (
     <div id="contact">
        <h1 className="text-center font-bold text-4xl my-6 text-white">Contact</h1>
           <div className="flex flex-col md:flex-row gap-10 p-10 bg-teal-800 text-white min-h-screen">
          {/* Left Section */}
          <div className="flex-1 space-y-6 bg-teal-950 p-6 rounded-md">
            <h2 className="text-2xl font-bold">GET IN TOUCH</h2>
            <p className="text-gray-300">
              DON'T BE SHY. I appreciate your openness to collaboration and discussion. If you have any new projects, creative ideas, or opportunities that align with my expertise, I would be delighted to explore them further with you. Together, we can work towards bringing your visions to life and achieving great results. Please feel free to reach out to me anytime; I'm always here to listen and contribute to meaningful endeavors.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold">Mail Me</p>
                  <p className="text-gray-400">adnanmahmud3394@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold">WhatsApp || Phone</p>
                  <p className="text-gray-400">+88 01820339433</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2">
              <a href="#" className="text-blue-500">Facebook</a>
              <a href="#" className="text-pink-500">Instagram</a>
              <a href="#" className="text-blue-400">LinkedIn</a>
              <a href="#" className="text-cyan-500">Twitter</a>
              <a href="#" className="text-red-600">Pinterest</a>
            </div>
          </div>
    
          {/* Right Section */}
          <div className="flex-1 bg-teal-950 p-6 rounded-md">
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 border border-purple-500 rounded-md bg-gray-900 text-white"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-2 border border-purple-500 rounded-md bg-gray-900 text-white"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-2 border border-purple-500 rounded-md bg-gray-900 text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-purple-500 rounded-md bg-gray-900 text-white"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border border-purple-500 rounded-md bg-gray-900 text-white"
              />
              <textarea
                placeholder="Message or description"
                className="w-full p-2 border border-purple-500 rounded-md bg-gray-900 text-white"
                rows="4"
              />
              <button type="submit" className="w-full p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-md text-white font-semibold">
                Send message
              </button>
            </form>
          </div>
        </div>
     </div>
      );
};

export default Contact;