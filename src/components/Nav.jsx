import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='w-[80%] mx-auto h-20 flex items-center justify-between'>
        <h1 className='text-3xl font-extrabold'>Cook.</h1>
        <div className='flex gap-x-10 text-sm font-semibold'>
            <NavLink to="/" className={(e) => e.isActive ? "text-orange-600" : ""}>
                Home
            </NavLink>
            <NavLink to="/recipes" className={(e) => e.isActive ? "text-orange-600" : ""}>
                Recipes
            </NavLink>
            <NavLink to="/about" className={(e) => e.isActive ? "text-orange-600" : ""}>
                About Us
            </NavLink>
            <NavLink to="/contact" className={(e) => e.isActive ? "text-orange-600" : ""}>
                Contact
            </NavLink>
        </div>
        <button className='px-4 py-2 rounded-md bg-orange-600 hover:bg-orange-700 text-sm font-semibold text-white'>Latest Contest</button>
    </nav>
  )
}

export default Nav