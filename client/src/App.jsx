import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar"
import UserNavbar from "./components/UserNavbar"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import DiscoverAll from "./pages/DiscoverAll";
import TableViewer from "./pages/TableViewer";
import BookingTableViewer from "./pages/BookingTableViewer";
import AdminNavbar from "./components/AdminNavbar";

function App() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<><Navbar/><Home /></>} />
        <Route path="/discover" element={<><Navbar/><DiscoverAll /></>} />
        <Route path="/likes" element={<><UserNavbar/><TableViewer/></>} />
        <Route path="/bookings" element={<><UserNavbar/><TableViewer/></>} />
        <Route path="/admin/places" element={<><AdminNavbar/><TableViewer/></>} />
        <Route path="/admin/bookings" element={<><AdminNavbar/><BookingTableViewer/></>} />
        <Route path="/contact" element={<><Navbar/><Contact /></>} />
      </Routes>
    </main>
  )
}

export default App
