import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div  className="w-full md:max-w-[1320px] md:p-6 mx-auto">
        <footer className="w-full bg-gradient-to-r from-[#1e3c72] via-[#2a5298] to-[#1e3c72] text-white py-8 px-6 md:px-16">
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
            BrandName 🚀
          </h1>
          <p className="mt-2 text-sm opacity-80">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Middle Section - Navigation */}
        <div>
          <ul className="flex gap-6 text-lg font-semibold">
            <li className="hover:text-yellow-300 transition-colors duration-300">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-yellow-300 transition-colors duration-300">
              <a href="/services">Services</a>
            </li>
            <li className="hover:text-yellow-300 transition-colors duration-300">
              <a href="/contact">Contact</a>
            </li>
            <li className="hover:text-yellow-300 transition-colors duration-300">
              <a href="/about">About</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex gap-4 text-2xl">
          <a href="#" className="hover:text-blue-500 transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-700 transition-colors duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
