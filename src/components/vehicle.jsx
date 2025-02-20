import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Vehicle = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: false });
  }, []);

  return (
    <div className="w-full md:max-w-[1320px] p-6 mx-auto flex flex-col md:flex-row items-center gap-8">
      <div data-aos="zoom-in" className="w-full md:w-1/2">
        <img
          src="/vehicle.webp"
          alt="Vehicle"
          className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div data-aos="fade-left" className="w-full md:w-1/2 p-6 bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] rounded-2xl text-white shadow-xl glassy">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text"
        data-aos="fade-up-right">
          Modern Vehicles for Every Need
        </h1>
        <p className="text-lg mt-4" data-aos="fade-down-left">
          Experience the best-in-class vehicles with top-notch safety, luxury, and performance.
          Whether it's for personal or commercial use, we've got you covered.
        </p>
        <ul className="mt-4 space-y-2" data-aos="fade-right">
          <li>✅ High Safety Standards</li>
          <li>✅ Advanced Technology Integration</li>
          <li>✅ Fuel Efficient & Eco-Friendly</li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-white text-blue-800 font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300" data-aos="fade-up">
          Explore More 🚗
        </button>
      </div>
    </div>
  );
};

export default Vehicle;

