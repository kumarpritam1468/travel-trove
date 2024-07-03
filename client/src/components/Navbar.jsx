import React from 'react'

const Navbar = () => {
  return (
    <nav className=' fixed h-[10svh] w-full bg-transparent flex justify-between items-center px-8 text-white'>
      <div className=' rounded-3xl px-4 py-0.5 backdrop-blur-md border border-white flex gap-2 items-center max-md:hidden hover:bg-white/15 hover:rounded-md transition-all duration-300 ease-in-out'>
        <img src="./logo.png" alt="Logo" width={40} />
        <h1>Travel-Trove</h1>
      </div>
      <div className=' rounded-full p-1 backdrop-blur-md flex items-center justify-center gap-2 text-lg border border-white'>
        <a href="" className=' bg-white/25 rounded-full py-1 px-6' >Home</a>
        <a href="" className=' hover:bg-white/15 rounded-full py-1 px-6 transition-all duration-300 ease-in-out'>Discover</a>
        <a href="" className=' hover:bg-white/15 rounded-full py-1 px-6 transition-all duration-300 ease-in-out max-md:hidden'>About</a>
        <a href="" className=' hover:bg-white/15 rounded-full py-1 px-6 transition-all duration-300 ease-in-out'>Contact</a>
      </div>
      {/* <div className=' rounded-full px-4 py-2 backdrop-blur-md border border-white'> */}
      {/* </div> */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className=" rounded-3xl max-md:rounded-full px-4 py-0.5 max-md:p-0 backdrop-blur-sm hover:bg-white/15 hover:rounded-md transition-all duration-300 ease-in-out border border-white flex items-center justify-center">
          <div className="rounded-full flex items-center justify-center ">
            <h1 className=' max-md:hidden'>My profile</h1>
            <img src="./avatar.png" alt="Avatar" width={40} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content backdrop-blur-md rounded-box z-[1] mt-3 w-52 p-3 shadow border border-white ">
          <li>
            <a className=' max-md:text-xl'>
              Wishlist
            </a>
          </li>
          <li><a className=' max-md:text-xl'>My Bookings</a></li>
          <li><a className=' max-md:text-xl'>Logout</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar