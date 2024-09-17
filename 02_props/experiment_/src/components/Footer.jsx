import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          {/* <div className="flex items-center mb-6 md:mb-0">
            <img
              src="https://via.placeholder.com/100x40"
              alt="Logo"
              className="h-10"
            />
            <span className="ml-3 text-lg font-bold">My Website</span>
          </div> */}

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm mb-6 md:mb-0">
            <a href="#home" className="hover:text-orange-400">
              Home
            </a>
            <a href="#about" className="hover:text-orange-400">
              About
            </a>
            <a href="#services" className="hover:text-orange-400">
              Services
            </a>
            <a href="#contact" className="hover:text-orange-400">
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.729 0-1.325.596-1.325 1.325v21.351c0 .729.596 1.324 1.325 1.324h11.49v-9.284h-3.125v-3.622h3.125v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.794.143v3.24h-1.917c-1.504 0-1.795.715-1.795 1.764v2.313h3.589l-.467 3.622h-3.122v9.284h6.116c.729 0 1.325-.595 1.325-1.324v-21.35c0-.729-.596-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.719 0-4.924 2.206-4.924 4.924 0 .386.043.762.127 1.124-4.092-.205-7.719-2.166-10.141-5.144-.424.729-.666 1.575-.666 2.476 0 1.709.869 3.216 2.188 4.099-.807-.026-1.567-.248-2.229-.616v.062c0 2.386 1.698 4.374 3.955 4.828-.414.112-.85.171-1.299.171-.318 0-.626-.031-.928-.088.626 1.955 2.444 3.379 4.6 3.418-1.685 1.32-3.809 2.105-6.115 2.105-.397 0-.788-.023-1.175-.068 2.179 1.396 4.768 2.209 7.548 2.209 9.057 0 14.009-7.505 14.009-14.009 0-.213-.005-.426-.015-.637.961-.693 1.796-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.333 3.608 1.308.974.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.333 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.333-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.333-2.633 1.308-3.608.975-.974 2.242-1.246 3.608-1.308 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.519.068-2.89.354-3.962 1.425-1.071 1.072-1.357 2.443-1.425 3.962-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.068 1.519.354 2.89 1.425 3.962 1.072 1.071 2.443 1.357 3.962 1.425 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.519-.068 2.89-.354 3.962-1.425 1.071-1.072 1.357-2.443 1.425-3.962.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.068-1.519-.354-2.89-1.425-3.962-1.072-1.071-2.443-1.357-3.962-1.425-1.28-.058-1.688-.072-4.947-.072z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="text-center mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
       </div>
       </div>
      </footer> 

  )
}

export default Footer