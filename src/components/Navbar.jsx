import React, { useState } from "react";
// We need more components from react-router-dom to set up the routing context
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "../assets/logo.png";

// --- Placeholder Page Components ---
// These are simple components to show that routing is working.
const Home = () => (
  <div className="text-white text-center p-10 text-4xl font-bold">
    Welcome to the Home Page
  </div>
);
const Portfolio = () => (
  <div className="text-white text-center p-10 text-4xl font-bold">
    Our Portfolio
  </div>
);
const Contact = () => (
  <div className="text-white text-center p-10 text-4xl font-bold">
    Contact Us
  </div>
);

// --- Your Navbar Component (largely unchanged) ---
const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to determine link styles for active/inactive states
  const getLinkClassName = ({ isActive }) =>
    `block lg:inline-block w-full text-center lg:w-auto  text-lg font-medium transition-colors duration-300 ${
      isActive ? "text-orange-100 " : "text-gray-300 hover:text-orange-500 "
    }`;

  return (
    <header className="w-full bg-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-white">
              <img src={logo} alt="" width={50} />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-4">
              <li>
                <NavLink to="/" className={getLinkClassName}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className={getLinkClassName}>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={getLinkClassName}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon: Hamburger (hidden when menu is open) */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon: Close (X) (hidden when menu is closed) */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out bg-black ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
        id="mobile-menu"
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* We add an onClick to each link to close the menu upon navigation */}
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/" className={getLinkClassName} end>
              Home
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/portfolio" className={getLinkClassName}>
              Portfolio
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/contact" className={getLinkClassName}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
