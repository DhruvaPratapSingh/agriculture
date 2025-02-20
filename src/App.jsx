import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <div>
      <Navbar/>
      <Home/>
      <Features/>
    </div>
  )
}

export default App
