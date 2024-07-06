import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import DiscoverAll from "./pages/DiscoverAll";

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<DiscoverAll/>} />
        <Route path="/likes" element={<DiscoverAll/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App
