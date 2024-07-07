import React from 'react'
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <nav className=' fixed z-50 h-[10svh] w-full bg-transparent flex justify-center items-center px-8 text-white'>
            <div className=' rounded-full p-1 backdrop-blur-md flex items-center justify-center gap-2 text-lg border border-white'>
                <NavLink to="/admin/bookings" className='hover:bg-white/15 rounded-full py-1 px-6 transition-all duration-300 ease-in-out' >All Bookings</NavLink>
                <NavLink to="/admin/places" className=' hover:bg-white/15 rounded-full py-1 px-6 transition-all duration-300 ease-in-out'>All Places</NavLink>
                <NavLink to="/" className='hover:bg-white/15 rounded-full py-1 px-6 transition-all duration-300 ease-in-out' >Home</NavLink>
            </div>
        </nav>
    )
}

export default AdminNavbar