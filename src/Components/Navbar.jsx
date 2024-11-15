// import { Link } from "react-router-dom";
import { Link } from 'react-scroll'; 
const Navbar = () => {
  const navlinks = (
    <>
      <div>
      <Link to="banner" smooth={true} duration={500} className="mr-4 text-xl text-white ">
        Home
      </Link>
      <Link to="about" smooth={true} duration={500} className="mr-4 text-xl text-white ">
        About
      </Link>
      <Link to="experience" smooth={true} duration={500} className="mr-4 text-xl text-white ">
        Experience
      </Link>
      <Link to="skills" smooth={true} duration={500} className="mr-4 text-xl text-white ">
        Skills
      </Link>
      <Link to="education" smooth={true} duration={500} className="mr-4 text-xl text-white ">
        Education
      </Link>
      <Link to="contact" smooth={true} duration={500} className="mr-4 text-xl text-white ">
        Contact
      </Link>
    </div>
    </>
  );

  return (
    <div className="navbar bg-teal-800 border-b-2 sticky top-0 z-50 ">
      <div className="navbar">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <span className="text-violet-950 text-3xl font-bold">Jashim</span>
          <span className="text-red-900 font-bold text-3xl">Uddin</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
