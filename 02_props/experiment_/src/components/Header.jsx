import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="position-absolute bg-gray-800 text-white fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to=''>
          <img
            src="https://wallpapers.com/images/featured/spongebob-png-apowe016vnzlbutx.jpg"
            alt="Logo"
            className="h-10"
          />
          </Link>
          <span className="ml-3 text-xl font-bold">My Website</span>
        </div>

        {/* Navbar links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink to="" className={({isActive}) => `hover:text-orange-400 ${isActive? `text-orange-400`: `text-gray-300`}`}>
              Home
            </NavLink>
          </li>
          <li>
          <NavLink to="about" className={({isActive}) => `hover:text-orange-400 ${isActive? `text-orange-400`: `text-gray-300`}`}>
              About
            </NavLink>
          </li>
          
          <li>
          <NavLink to="github" className={({isActive}) => `hover:text-orange-400 ${isActive? `text-orange-400`: `text-gray-300`}`}>
              Github
            </NavLink>
          </li>
        </ul>

        {/* Download Button */}
        <NavLink
          to="/download"
          className={({isActive}) =>  `hidden md:block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ${isActive? `bg-black` : `bg-orange-500`}`}
        >
          Download
        </NavLink>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white hover:text-orange-400 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
