import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              className="text-gray-800 text-lg font-bold hover:text-gray-700"
              href="#"
            >
              <img
                className="h-8 w-auto mx-4"
                src="./social_me_icon_lg.png"
                alt="Logo"
              />
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="#hero"
              className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer"
            >
              What We Do
            </a>
            <a
              href="#features"
              className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer"
            >
              How We Help
            </a>
            <a
              href="#poop"
              className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer"
            >
              Who We Are
            </a>
            <a
              href="#contact"
              className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
