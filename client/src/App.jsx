import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import { useEffect } from "react";

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
      </Routes>
    </main>
  )
}

export default App
