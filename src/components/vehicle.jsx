import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Vehicle = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="w-full md:max-w-[1320px] md:p-6 mx-auto">
      <div className="flex flex-col gap-8 md:flex-row w-full items-center justify-around p-6 backdrop-blur-lg rounded-lg shadow-lg">
        <div
          className="w-[90%] md:w-[45%] p-6 bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] rounded-2xl shadow-2xl backdrop-blur-md "
          data-aos="fade-right"
        >
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">Modern Vehicles</h1>
          <p className="text-lg text-gray-200">
            Discover cutting-edge vehicles equipped with the latest technology for safety and efficiency.
          </p>
          <ul className="mt-4 text-lg text-white">
            <li className="flex items-center gap-2">✅ High Safety Standards</li>
            <li className="flex items-center gap-2">✅ Fuel Efficient & Eco-Friendly</li>
            <li className="flex items-center gap-2">✅ Advanced Technology Integration</li>
          </ul>
        </div>
        <div
          className="w-[90%] md:w-[45%] relative overflow-hidden rounded-lg shadow-lg"
          data-aos="zoom-in"
        >
          <img
            src="/vehicle.webp"
            alt="Vehicle"
            className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
