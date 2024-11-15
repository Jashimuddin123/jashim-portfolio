import { Link } from 'react-scroll';

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <Link to="banner" smooth={true} duration={500} className="lg:text-white text-xl">
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500} className="lg:text-white text-xl">
          About
        </Link>
      </li>
      <li>
        <Link to="experience" smooth={true} duration={500} className="lg:text-white text-xl">
          Experience
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={500} className="lg:text-white text-xl">
          Skills
        </Link>
      </li>
      <li>
        <Link to="education" smooth={true} duration={500} className="lg:text-white text-xl">
          Education
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500} className="lg:text-white text-xl">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-teal-800 border-b-2 sticky top-0 z-50">
      {/* Logo and Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Menu Dropdown */}
        <div className="dropdown lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost"
            role="button"
            aria-label="Mobile Menu Toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 w-52 bg-base-100 p-2 shadow rounded-box z-[1]"
          >
            {navlinks}
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-xl flex items-center">
          <span className="text-violet-950 text-3xl font-bold">Jashim</span>
          <span className="text-red-900 font-bold text-3xl">Uddin</span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
