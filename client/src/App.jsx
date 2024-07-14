import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar"
import UserNavbar from "./components/UserNavbar"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DiscoverAll from "./pages/DiscoverAll";
import TableViewer from "./pages/TableViewer";
import BookingTableViewer from "./pages/BookingTableViewer";
import AdminNavbar from "./components/AdminNavbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { useQuery } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []);

  const { data: authUser } = useQuery({
    queryKey: ['authUser'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/auth/me');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Something Went Wrong');
        }
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
    retry: false
  })

  const { data: places, isLoading } = useQuery({
    queryKey: ['places'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/places');
        const data = await response.json();

        if (!response.ok) throw new Error(data.error || 'Something Went Wrong');

        // console.log(data);
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
    retry: false
  })

  return (
    <main>
      <Routes>
        <Route path="/" element={authUser ? <><Navbar /><Home /></> : <Navigate to='/login' />} />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to='/' />} />
        <Route path="/signup" element={!authUser ? <Signup /> : <Navigate to='/' />} />
        <Route path="/discover" element={<><Navbar /><DiscoverAll /></>} />
        <Route path="/likes" element={<><UserNavbar /><TableViewer /></>} />
        <Route path="/bookings" element={<><UserNavbar /><TableViewer /></>} />
        <Route path="/admin/places" element={<><AdminNavbar /><TableViewer /></>} />
        <Route path="/admin/bookings" element={<><AdminNavbar /><BookingTableViewer /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
      </Routes>
      <Toaster />
    </main>
  )
}

export default App
