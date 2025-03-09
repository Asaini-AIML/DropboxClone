import React from "react";
import logo from "../assets/images/Logo.png";
import globe from "../assets/images/image.png";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="bg-black shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="flex items-center space-x-8 font-sans">
          <a href="https://dropbox.com" className="flex items-center text-white">
            <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
            <span className="text-xl font-bold">Dropbox</span>
          </a>
          <nav className="flex space-x-6 font-medium">
            <a href="#" className="hover:text-blue-400 flex items-center gap-1">Products<FaAngleDown /></a>
            <a href="#" className="hover:text-blue-400 flex items-center gap-1">Solutions<FaAngleDown /></a>
            <a href="#" className="hover:text-blue-400">Enterprise</a>
            <a href="#" className="hover:text-blue-400">Pricing</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4 text-white font-sans font-normal">
          <img src={globe} alt="Globe icon" className="w-7 h-7" />
          <a href="#" className="hover:text-blue-400">Contact Sales</a>
          <a href="#" className="hover:text-blue-400 flex items-center gap-1 py-1">Get App<FaAngleDown /></a>
          <a href="#" className="hover:text-blue-400">Sign Up</a>
          <a href="#" className="hover:text-blue-400">Log In</a>
          <button className="bg-white px-4 py-2 rounded-md text-black font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
