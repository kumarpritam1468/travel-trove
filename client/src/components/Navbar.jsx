import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import toast from 'react-hot-toast';
import { Link, Navigate, NavLink } from 'react-router-dom';

const Navbar = () => {

  const queryClient = useQueryClient();
  const { data: authUser } = useQuery({ queryKey: ['authUser'] });

  const { mutate: logout, isPending } = useMutation({
    mutationFn: async () => {
      try {
        const response = await fetch('/api/auth/signout');
        const data = await response.json();

        if (!response.ok) throw new Error(data.error || 'Something Went Wrong');
      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      toast.success('Logged Out');
      queryClient.invalidateQueries({ queryKey: ['authUser'] });
      window.location.reload();
    },
    onError: () => {
      toast.error("Logout Failed");
    }
  })

  return (
    <nav className=' fixed z-50 h-[10svh] w-full bg-transparent flex justify-between items-center px-8 text-white'>
      <div className=' rounded-3xl px-4 py-0.5 backdrop-blur-md border border-white flex gap-2 items-center max-md:hidden hover:bg-white/15 hover:rounded-md transition-all duration-300 ease-in-out'>
        <img src="./logo.png" alt="Logo" width={40} />
        <h1>Travel-Trove</h1>
      </div>
      <div className=' rounded-full p-1 backdrop-blur-md flex items-center justify-center gap-2 text-lg border border-white'>
        <NavLink to="/" className='hover:bg-white/15 rounded-full py-1 px-6 transition-all duration-300 ease-in-out' >Home</NavLink>
        <NavLink to="/discover" className=' hover:bg-white/15 rounded-full py-1 px-6 transition-all duration-300 ease-in-out'>Discover</NavLink>
        <NavLink to="/contact" className=' hover:bg-white/15 rounded-full py-1 px-6 transition-all duration-300 ease-in-out'>Contact</NavLink>
        {authUser?.isAdmin ? <NavLink to="/admin/bookings" className=' hover:bg-white/15 rounded-full py-1 px-6 transition-all duration-300 ease-in-out'>Admin</NavLink> : ''}
      </div>
      {/* <div className=' rounded-full px-4 py-2 backdrop-blur-md border border-white'> */}
      {/* </div> */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className=" rounded-3xl max-md:rounded-full px-4 py-0.5 max-md:p-0 backdrop-blur-sm hover:bg-white/15 hover:rounded-md transition-all duration-300 ease-in-out border border-white flex items-center justify-center">
          <div className="rounded-full flex items-center justify-center gap-2 ">
            <h1 className=' max-md:hidden'>{authUser?.name}</h1>
            <img src="./avatar.png" alt="Avatar" width={40} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content backdrop-blur-md rounded-box z-[1] mt-3 w-52 p-3 shadow border border-white ">
          <li>
            <Link to='/likes' className=' max-md:text-xl'>
              Wishlist
            </Link>
          </li>
          <li><Link className=' max-md:text-xl' to='/bookings'>My Bookings</Link></li>
          <li><a className=' max-md:text-xl' onClick={() => logout()}>{isPending ? <div className=' loading loading-spinner'></div> : 'Log Out'}</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar