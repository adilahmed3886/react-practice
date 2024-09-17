import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Contact from './Contact';

function About() {
    
    const location = useLocation();

  const isContactPage = location.pathname === '/about/contact';
  return (
    <div className='mt-20 flex justify-center'>
        {!isContactPage ? (
        <Link
          to="contact"
          className='w-[20rem] text-center hidden md:block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300'
        >
          Contact me
        </Link>
      ) : <Contact />}
    </div>
  )
}

export default About