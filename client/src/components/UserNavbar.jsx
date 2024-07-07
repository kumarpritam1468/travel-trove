import React from 'react'
import { NavLink } from 'react-router-dom';

const UserNavbar = () => {
    return (
        <nav className=' fixed z-50 h-[10svh] w-full bg-transparent flex justify-center items-center px-8 text-white'>
            <div className=' rounded-full p-1 backdrop-blur-md flex items-center justify-center gap-2 text-lg border border-white'>
                <NavLink to="/likes" className='hover:bg-white/15 rounded-full py-1 px-6 transition-all duration-300 ease-in-out' >Likes</NavLink>
                <NavLink to="/bookings" className=' hover:bg-white/15 rounded-full py-1 px-6 transition-all duration-300 ease-in-out'>Bookings</NavLink>
                <NavLink to="/" className='hover:bg-white/15 rounded-full py-1 px-6 transition-all duration-300 ease-in-out' >Home</NavLink>
            </div>
        </nav>
    )
}

export default UserNavbar